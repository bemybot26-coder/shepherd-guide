---
title: Church Elections
sidebar_position: 2
---

## Overview

Shepherd's Elections module lets you run a complete, transparent election — from nominations to results — directly inside the platform, with WhatsApp as the primary voting channel.

Elections follow a fixed, audited lifecycle:

```
Draft → Nominations Open → Review → Voting Open → Closed → Published
```

Every action (approval, vote, status change) is written to an immutable audit log.

:::info Screenshot
📸 **[Screenshot: Elections list page showing active election card with status badge and phase indicator]**
:::

---

## Secret Ballot Design

Shepherd uses a **ballot token system** to honour both voter privacy and post-election auditability:
- A unique ballot token (UUID) is generated when a member votes and sent to them as a receipt
- The token proves they voted — but cannot reveal who they voted for
- Admin can verify participation ("Did this member vote?") but never see their choices

---

## Creating an Election

1. Go to **Elections** (sidebar) → click **New Election**
2. Fill in:
   - **Title** — e.g. "Elder Board Election 2026"
   - **Description** — optional context for staff
   - **Nomination dates** — when members can submit nominations
   - **Voting dates** — when ballots open and close
   - **Quorum %** — optional minimum turnout required (e.g. 51%)
3. Click **Create Election** — election is created in **Draft** status

---

## Adding Positions

1. On the election Overview tab, click **Add Position**
2. Fill in: Title (e.g. "Elder"), Seats (how many people will be elected), Description (optional)
3. Repeat for each position

> Positions can only be added while the election is in **Draft** status.

---

## Election Lifecycle

### Phase 1 — Draft
Invisible to members. Add positions and configure the election.

### Phase 2 — Nominations Open
Click **Open Nominations**. Members submit nominations via WhatsApp:
```
NOMINATE [Name] for [Position]
```
or self-nominate. Each nominee receives a WhatsApp consent request.

### Phase 3 — Review Nominations
Click **Close Nominations**. On the Nominations tab:
- ✓ **Approve** — nominee appears on the ballot
- ✗ **Reject** — enter an optional reason (nominee notified via WhatsApp)

> Only **approved** nominees appear on ballots.

### Phase 4 — Voting Open
Click **Open Voting**. Shepherd snapshots the eligible voter list from all active members with phone numbers — this list is locked. All eligible members receive a WhatsApp voting invitation.

### Phase 5 — Voting Closed
Click **Close Voting**. The Results tab shows vote counts per candidate, winners highlighted, tie warnings, and quorum status.

### Phase 6 — Publish Results
Click **Publish Results**. All eligible members receive a WhatsApp announcement with the winners. The election is locked — no further changes.

:::info Screenshot
📸 **[Screenshot: Results tab showing vote counts with winner highlighted and Download Certificate button]**
:::

---

## WhatsApp Voting (Members)

### Cast a Vote
Members send `VOTE` to the church WhatsApp number. The bot:
1. Finds the active election and checks the member is on the eligible voter list
2. Presents each position one by one as an interactive list
3. After all positions: sends a **ballot token receipt** (proof of participation)

### Check Voting Status
```
VOTE STATUS
→ ✅ You voted in Elder Board Election 2026 on 28 Mar 2026.
   Your ballot token: 550e8400-...
```

---

## Downloading Election Certificates

After an election's results are published, you can download an official **PDF Certificate of Election** for each winning candidate:

1. Go to **Elections** → select the completed election
2. Click the **Results** tab
3. Find the winning candidate for a position
4. Click the **Download Certificate** (📄) button next to their name
5. A professionally formatted PDF certificate is generated with: candidate name, position, election title, date, and your church name

Certificates are useful for formal announcements, installation services, and permanent church records.

---

## Audit Log

Every action in the election lifecycle is recorded on the **Audit** tab and is append-only — no entry can be modified or deleted:

| Action | What's Recorded |
|---|---|
| Election created | ✅ |
| Status changed | ✅ with from/to |
| Position added | ✅ |
| Nomination submitted | ✅ |
| Nomination approved/rejected | ✅ with reason |
| Eligible voters snapshot | ✅ with count |
| Ballot cast | ✅ member ID + timestamp (NOT choices) |
| Results published | ✅ |

---

## Permissions

| Permission | Who Gets It |
|---|---|
| View elections | Super Admin, Pastor, Branch Admin, Admin |
| Manage elections | Super Admin, Pastor, Admin |
| Vote | All members (via WhatsApp) |

---

## Tips

- **Set quorum carefully** — if quorum isn't met, you'll see a warning before publishing. You can still publish, but it's recorded.
- **Approve all nominations before opening voting** — new approvals after voting opens don't update ballots already sent.
- **Tie-breaking** — if two candidates tie for the last seat, you'll see a ⚠️ Tie warning on the Results tab. The system flags it but leaves the decision to the pastor/committee.
