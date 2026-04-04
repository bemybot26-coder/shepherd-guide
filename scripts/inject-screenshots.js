#!/usr/bin/env node
/**
 * inject-screenshots.js
 * Replaces [Screenshot: ...] placeholders in guide docs with real images.
 * Run after dropping images into static/img/screenshots/
 *
 * Usage: node scripts/inject-screenshots.js
 */

const fs = require("fs");
const path = require("path");

// Map: placeholder text → image filename
const SCREENSHOT_MAP = {
  "Shepherd dashboard overview showing all widgets": "dashboard-overview.png",
  "Onboarding wizard Step 1 — Church details form": "onboarding-wizard.png",
  "Members list page with search bar and filter options visible": "members-list.png",
  "Add Member form showing all fields": "add-member-form.png",
  "Families page showing household cards with member count and family name": "families-list.png",
  "Create Family dialog with name, address, and notes fields": "create-family.png",
  "Attendance screen showing live check-in list and service selector": "attendance-main.png",
  "Manual check-in search showing name results and the check-in button": "attendance-search.png",
  "Groups list page showing group cards with member count and leader": "groups-list.png",
  "Create Group form with all fields": "create-group.png",
  "Pastoral Care main page showing all 8 tabs": "pastoral-main.png",
  "Prayer tab showing request cards with status badges and assign button": "prayer-requests.png",
  "Visits tab showing requested visits with amber badges and assigned visits": "pastoral-visits.png",
  "Care Cases tab showing active cases with day counter and milestone progress": "care-cases.png",
  "Youth Ministry dashboard showing total youth, at-risk count, and stage breakdown tiles": "youth-dashboard.png",
  "Visits page showing requested visits with amber badges and a list of completed visits": "visits-main.png",
  "Log a Visit form showing all fields including the Create Follow-Up Task option": "log-visit-form.png",
  "Messages hub showing Compose, Broadcasts, Templates, and Sent Messages tabs": "messages-hub.png",
  "WhatsApp compose screen showing Title + Para 1 + Para 2 fields with live preview panel on the right": "whatsapp-compose.png",
  "Sent Messages page showing the full table with type icons and coloured delivery status badges": "sent-messages.png",
  "Reply Inbox showing member replies with read/unread indicators": "reply-inbox.png",
  "Example WhatsApp conversation showing HELP menu response with available commands": "whatsapp-help-menu.png",
  "Giving dashboard showing weekly/monthly/yearly stats and recent offerings list": "giving-dashboard.png",
  "Record Offering form with all fields filled in": "record-offering-form.png",
  "Pledges page showing summary stats cards and pledge cards with progress bars": "pledges-main.png",
  "New Pledge form with member search, amount, frequency, and start date fields": "new-pledge-form.png",
  "Reports overview page showing giving summary, attendance trend chart, and top givers": "reports-overview.png",
  "Custom Report Builder showing column selector and filter panel": "report-builder.png",
  "Events page showing upcoming event cards with dates, locations, and registration counts": "events-list.png",
  "Event detail page showing registrations list with status badges": "event-registrations.png",
  "Tasks page showing stat cards (Pending, Overdue, Due Today, Completed) and task list with filters": "tasks-main.png",
  "Task list with filter bar open showing status, team, and priority filters": "tasks-filters.png",
  "Settings page showing all tab navigation across the top": "settings-main.png",
  "Roles page showing role cards with permission matrix visible in create dialog": "roles-permissions.png",
  "Elections list page showing active election card with status badge and phase indicator": "elections-list.png",
  "Results tab showing vote counts with winner highlighted and Download Certificate button": "election-results.png",
};

const SCREENSHOTS_DIR = path.join(__dirname, "../static/img/screenshots");
const DOCS_DIR = path.join(__dirname, "../docs");

let replaced = 0;
let skipped = 0;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let changed = false;

  for (const [placeholder, filename] of Object.entries(SCREENSHOT_MAP)) {
    const imgPath = path.join(SCREENSHOTS_DIR, filename);
    if (!fs.existsSync(imgPath)) {
      // Image not available yet — skip
      continue;
    }

    // Calculate relative path from doc to static/img/screenshots
    const docDir = path.dirname(filePath);
    const relativeToStatic = path.relative(
      docDir,
      path.join(__dirname, "../static/img/screenshots", filename)
    );

    const admonitionPattern = new RegExp(
      `:::info Screenshot\\n📸 \\*\\*\\[Screenshot: ${escapeRegex(placeholder)}\\]\\*\\*\\n:::`,
      "g"
    );

    const newContent = content.replace(
      admonitionPattern,
      `![${placeholder}](${relativeToStatic})`
    );

    if (newContent !== content) {
      content = newContent;
      changed = true;
      replaced++;
      console.log(`✅ Replaced: "${placeholder}" in ${path.basename(filePath)}`);
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content);
  }
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function walkDocs(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDocs(fullPath);
    } else if (entry.name.endsWith(".md")) {
      processFile(fullPath);
    }
  }
}

console.log("🖼️  Injecting screenshots into guide docs...\n");
walkDocs(DOCS_DIR);
console.log(`\nDone. ${replaced} placeholder(s) replaced.`);
console.log(`(Placeholders with no matching image in static/img/screenshots/ were left as-is)`);
