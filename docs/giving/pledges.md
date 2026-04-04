---
title: Pledges
sidebar_position: 4
---

## Overview

The **Pledges** module lets you track member giving commitments — capital campaigns, ministry support, personal tithe pledges, and more. A pledge is a promise to give a specific amount over a period of time. Shepherd tracks how much has been paid against each pledge and sends automated WhatsApp reminders when payments are due.

Go to **Pledges** in the sidebar.

:::info Screenshot
📸 **[Screenshot: Pledges page showing summary stats cards and pledge cards with progress bars]**
:::

---

## What Is a Pledge?

A pledge is a giving commitment with:
- A **title** — e.g. "Building Fund Pledge", "Monthly Tithe Commitment"
- A **total amount** — the full amount committed (e.g. GHS 2,400)
- A **frequency** — how often payments are made (Daily / Weekly / Monthly / Quarterly / Yearly)
- A **start date**
- A **status** — Active, Paused, Completed, or Cancelled

Shepherd automatically calculates how much has been paid vs. the total commitment and shows a progress bar.

---

## Creating a Pledge

1. Go to **Pledges** → click **+ New Pledge**
2. Fill in:
   - **Member** — search for the member making the pledge
   - **Title** — e.g. "Building Fund Pledge 2026"
   - **Total Amount** — the full amount committed
   - **Currency** — defaults to your church currency
   - **Frequency** — Daily / Weekly / Monthly / Quarterly / Yearly
   - **Start Date** — when the pledge begins
   - **Notes** — optional context (e.g. "Committed during the Building Fund launch service")
3. Click **Save**

The pledge is created with 0% progress. Payments are recorded as the member gives.

:::info Screenshot
📸 **[Screenshot: New Pledge form with member search, amount, frequency, and start date fields]**
:::

---

## Pledge Statuses

| Status | Meaning |
|---|---|
| 🟢 **Active** | Pledge is ongoing — payments are expected |
| 🟡 **Paused** | Temporarily paused — no reminders sent |
| 🔵 **Completed** | Full amount has been paid |
| ⬜ **Cancelled** | Pledge was cancelled before completion |

---

## Recording a Payment

When a member makes a payment towards their pledge:

1. Find the pledge in the Pledges list
2. Click **Record Payment**
3. Enter: Amount, Payment Method, Date
4. Click **Save**

The pledge progress bar updates immediately. If the total amount reaches 100%, the pledge is automatically marked **Completed**.

---

## Tracking Pledge Progress

Each pledge card shows:
- Member name
- Pledge title and total amount
- **Progress bar** — GHS paid / GHS total (e.g. GHS 800 / GHS 2,400)
- **Percentage complete** — e.g. 33%
- **Frequency and next due date**
- Status badge

---

## Pledge Summary Stats

At the top of the Pledges page:
- **Total Active Pledges** — number of ongoing pledges
- **Total Pledged** — combined value of all active pledges
- **Total Collected** — total paid against pledges so far
- **Completion Rate** — percentage of pledged amount collected

---

## WhatsApp Pledge Commands (Members)

Members can create and track their own pledges via WhatsApp:

```
PLEDGE 200 MONTHLY Building Fund  — Create a monthly pledge of GHS 200
PLEDGE STATUS                     — View active pledges and progress
PLEDGE HISTORY                    — View past/completed pledges
```

**Example pledge status reply:**
```
🤝 Your Pledges

Building Fund
Monthly • GHS 200
Progress: GHS 800 / GHS 2,400 (33%)
Next: 1 Apr 2026

[████░░░░░░] 33%
```

---

## Automated Pledge Reminders

Shepherd automatically sends WhatsApp reminders to members when their next pledge payment is due. These reminders:
- Are sent the day before the due date
- Include the pledge title, amount due, and a giving link
- Appear in **Messages → Sent Messages** under the 💳 Pledge Reminder type

---

## Editing a Pledge

1. Find the pledge → click **Edit** (pencil icon)
2. Update title, total amount, or notes
3. Click **Save**

> Frequency and start date cannot be changed after creation. Cancel and recreate the pledge if needed.

---

## Cancelling a Pledge

1. Find the pledge → click **Cancel**
2. Confirm

Cancelled pledges are kept in your records with all payment history intact.

---

## Permissions

| Action | Required Role |
|---|---|
| View pledges | Staff, Pastor, Admin, Super Admin |
| Create & edit pledges | Admin, Super Admin |
| Record pledge payments | Admin, Super Admin |
| Cancel pledges | Admin, Super Admin |

---

## Tips

- ✅ **Create pledges during campaigns** — when a member commits at a service, log it immediately
- ✅ **Use the Notes field** — record which service or event prompted the pledge
- ✅ **Review the Completion Rate regularly** — it tells you how realistic your campaign target is
- ✅ **Automated reminders reduce staff workload** — members are nudged automatically so your team doesn't have to follow up manually
