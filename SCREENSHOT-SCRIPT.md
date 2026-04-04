# 📸 Shepherd Guide — Screenshot Recording Script
**Tool:** Scribe (getscribe.com Chrome extension)
**Total:** 36 screenshots across 11 recording sessions

For each session:
1. Open Scribe → click **Capture** (record button)
2. Navigate and interact as described
3. Stop recording → click **Export Images** → save to a folder named after the section
4. Rename each image to the filename shown (e.g. `members-list.png`)

Then send the folder to Bemy — I'll drop them all into the guide automatically.

---

## Session 1: Getting Started & Dashboard (~5 min)
**Start at:** https://get-shepherd.net → sign in → land on dashboard

| # | What to show | Filename |
|---|---|---|
| 35 | The full dashboard with all widgets visible | `dashboard-overview.png` |
| 36 | Settings → Church Profile — the onboarding/setup form | `onboarding-wizard.png` |

---

## Session 2: Members (~8 min)
**Start at:** Dashboard → Members

| # | What to show | Filename |
|---|---|---|
| 28 | Members list page — filter bar open, showing filter options | `members-list.png` |
| 29 | Click "+ Add Member" — the full add member form | `add-member-form.png` |

---

## Session 3: Families (~5 min)
**Start at:** Dashboard → Families

| # | What to show | Filename |
|---|---|---|
| 26 | Families page showing household cards | `families-list.png` |
| 27 | Click "+ Create Family" — the create family dialog open | `create-family.png` |

---

## Session 4: Attendance (~5 min)
**Start at:** Dashboard → Attendance

| # | What to show | Filename |
|---|---|---|
| 10 | Attendance screen with service selector and live check-in list | `attendance-main.png` |
| 11 | Type a name in search — results appearing, check-in button visible | `attendance-search.png` |

---

## Session 5: Groups (~5 min)
**Start at:** Dashboard → Groups

| # | What to show | Filename |
|---|---|---|
| 8 | Groups list page — group cards showing member count and leader | `groups-list.png` |
| 9 | Click "+ Create Group" — the form with all fields | `create-group.png` |

---

## Session 6: Pastoral Care (~15 min)
**Start at:** Dashboard → Pastoral Care

| # | What to show | Filename |
|---|---|---|
| 1 | Pastoral Care main page showing all 8 tabs | `pastoral-main.png` |
| 2 | Prayer tab — prayer request cards with status badges and assign button | `prayer-requests.png` |
| 3 | Visits tab — requested visits with amber badges | `pastoral-visits.png` |
| 4 | Care Cases tab — active case card with day counter and milestone progress | `care-cases.png` |
| 5 | Youth Ministry dashboard — total, at-risk count, stage breakdown tiles | `youth-dashboard.png` |

---

## Session 7: Visits (~5 min)
**Start at:** Dashboard → Visits

| # | What to show | Filename |
|---|---|---|
| 6 | Visits page — requested visits with amber badges + completed visits list | `visits-main.png` |
| 7 | Click "+ Log a Visit" — form open with all fields + "Create follow-up task" checkbox | `log-visit-form.png` |

---

## Session 8: Messages (~10 min)
**Start at:** Dashboard → Messages

| # | What to show | Filename |
|---|---|---|
| 30 | Messages hub — all tabs visible (Compose, Broadcasts, Templates, Sent Messages) | `messages-hub.png` |
| 31 | Compose tab → select WhatsApp channel → 3-field form + live preview panel | `whatsapp-compose.png` |
| 32 | Sent Messages tab — table with type icons and delivery status badges | `sent-messages.png` |
| 33 | Replies tab — member replies with read/unread indicators | `reply-inbox.png` |
| 34 | Open WhatsApp on your phone → send HELP to the church number → show bot reply | `whatsapp-help-menu.png` |

---

## Session 9: Giving & Finance (~10 min)
**Start at:** Dashboard → Giving

| # | What to show | Filename |
|---|---|---|
| 18 | Giving dashboard — stats cards + recent offerings list | `giving-dashboard.png` |
| 19 | Click "+ Record Offering" — form with all fields filled in | `record-offering-form.png` |
| 12 | Dashboard → Pledges — stats cards + pledge progress bars | `pledges-main.png` |
| 13 | Click "+ New Pledge" — form with member, amount, frequency, start date | `new-pledge-form.png` |

---

## Session 10: Reports, Events & Tasks (~10 min)
**Start at:** Dashboard → Reports

| # | What to show | Filename |
|---|---|---|
| 14 | Reports overview — giving summary, attendance trend chart, top givers | `reports-overview.png` |
| 15 | Reports → Custom Report Builder — column selector + filter panel | `report-builder.png` |
| 16 | Dashboard → Events — upcoming event cards | `events-list.png` |
| 17 | Click an event → Registrations section visible | `event-registrations.png` |
| 24 | Dashboard → Tasks — 4 stat cards + task list | `tasks-main.png` |
| 25 | Tasks — click Filters — filter bar open showing all options | `tasks-filters.png` |

---

## Session 11: Settings & Elections (~10 min)
**Start at:** Dashboard → Settings

| # | What to show | Filename |
|---|---|---|
| 20 | Settings page — all tab navigation across the top visible | `settings-main.png` |
| 21 | Settings → Team & Roles → click "+ Create Role" — permission matrix dialog open | `roles-permissions.png` |
| 22 | Dashboard → Elections — election card with status badge and phase indicator | `elections-list.png` |
| 23 | Open an election → Results tab — vote counts, winner highlighted, Download Certificate button | `election-results.png` |

---

## After Recording

Send the image folder to Bemy via Telegram (or drop them in `/root/clawd/projects/shepherd-guide/static/img/screenshots/`).

Bemy will:
1. Place all images in the `static/img/screenshots/` folder
2. Replace every `[Screenshot: ...]` placeholder in the guide with the real image
3. Commit and deploy — images go live at guide.get-shepherd.net automatically

**Total recording time:** ~1.5 hours (can split across multiple sittings)
**Priority order if short on time:** Sessions 1, 2, 6, 8, 9 cover the most-used features.
