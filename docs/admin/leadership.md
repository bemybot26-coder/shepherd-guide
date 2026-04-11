---
title: Leadership Management
sidebar_position: 3
---

# Leadership Management

## Overview

The **Leadership** module helps your church keep a clean, searchable record of who holds each leadership role, which body they serve in, when a term starts and ends, and what needs attention before a handover or election.

Instead of tracking offices and appointments in spreadsheets, Shepherd keeps leadership structure, term history, and role assignments in one place.

:::info Screenshot
📸 **[Screenshot: Leadership page showing summary cards for Bodies, Offices, Terms, and Assignments]**
:::

---

## Who Can Use This Feature?

Access depends on the role and permissions assigned in your church.

Typical permissions used by this module are:
- **Leadership View** — to see leadership records
- **Leadership Manage** — to create and update offices, bodies, terms, and assignments
- **Settings View / Manage** — used in some churches where leadership setup is handled by administrative users

In many churches, this feature is used by people such as:
- Super Admin
- Pastor
- Branch Admin
- Secretary or administrative staff with leadership permissions

> If you can open the Leadership page but cannot edit anything, your account likely has **view** access without **manage** access.

---

## What You Can Manage in Leadership

The Leadership module is built around four main pieces:

1. **Offices** — the roles people can hold, such as Elder, Deacon, Choir Leader, or YPG President
2. **Bodies** — the leadership groups those offices belong to, such as Elders Board, Branch Council, or Choir Leadership
3. **Terms** — the time period for a leadership cycle, such as 2026–2028 Executive Term
4. **Assignments** — the actual people serving in those offices during a term

A simple way to think about it is:

```text
Office → Body → Term → Assignment
```

Example:
- **Office:** Elder
- **Body:** Elders Board
- **Term:** Elders Board Term 2026–2028
- **Assignment:** Rev. Kwame Mensah serving as Elder from Jan 2026

---

## Opening the Leadership Module

1. Sign in to Shepherd
2. Open the main dashboard
3. Click **Leadership** in the sidebar

At the top of the page, you will see summary cards for:
- **Bodies**
- **Offices**
- **Terms**
- **Assignments**

If your church has not configured leadership yet, Shepherd shows a guided empty state to help you start in the right order.

---

## Step 1: Create Leadership Offices

Offices define the roles your church recognises.

Examples:
- Senior Pastor
- Elder
- Deacon
- Treasurer
- Choir Leader
- Youth President

### To create an office

1. Go to **Leadership**
2. In the setup section, open the **Offices** area
3. Click **Add Office**
4. Fill in the details:
   - **Name** — the role name
   - **Category** — e.g. governance, pastoral, ministry, departmental
   - **Default appointment method** — elected, appointed, acting, interim, or mixed
   - **Default term length** *(optional)*
   - **Requires election** — turn this on for elected offices
   - **Default seats** *(optional)* — useful where more than one person can hold the same office
   - **Description** *(optional)*
5. Click **Save**

:::info Screenshot
📸 **[Screenshot: Office creation form with category, appointment method, and requires election fields]**
:::

### Tips for offices

- Keep office names simple and consistent
- Use **Requires election** only for roles that truly need an election process
- If an office is no longer used, mark it inactive instead of deleting history

---

## Step 2: Create Leadership Bodies

Bodies are the leadership groups or structures where offices operate.

Examples:
- Church Executive Council
- Elders Board
- Branch Leadership Team
- Men’s Fellowship Committee
- Choir Department Leadership

### To create a body

1. Go to **Leadership**
2. Open the **Bodies** area
3. Click **Add Body**
4. Fill in:
   - **Name**
   - **Body type** — church-wide, branch, ministry team, organization, group, or committee
   - **Branch** *(optional)* — for branch-level bodies
   - **Linked group** *(optional)* — if the body is tied to an existing group or organisation
   - **Description** *(optional)*
5. Click **Save**

### Church-wide vs branch bodies

- **Church-wide** bodies apply across the church
- **Branch-linked** bodies are limited to one branch

If you are a **branch-scoped** user, Shepherd may only allow you to create and manage bodies inside your branch.

---

## Step 3: Create Leadership Terms

Terms define the period during which a body and its offices are active.

Examples:
- Elders Board 2026–2028
- Choir Leadership 2026
- Youth Executive Term 2026–2027

### To create a term

1. Go to **Leadership**
2. Open the **Terms** area
3. Click **Add Term**
4. Fill in:
   - **Term name**
   - **Term label** *(optional)*
   - **Leadership body**
   - **Start date**
   - **End date**
   - **Appointment method**
   - **Description** *(optional)*
5. Add the office slots that belong to the term
6. Click **Save**

### Adding office slots

Each term can contain one or more office slots.

For each office slot, you can set:
- **Office**
- **Title override** *(optional)*
- **Seats**
- **Sort order**
- **Requires election**
- **Minimum age or membership requirements** *(if used by your church)*

This is useful when one term includes several different roles, or when one office has multiple seats.

:::info Screenshot
📸 **[Screenshot: Term form showing body selection, date range, appointment method, and office slots list]**
:::

### How Shepherd treats term status

Shepherd automatically resolves term status based on the dates and setup:
- **Draft** — term has not started yet
- **Active** — term is running normally
- **Ending soon** — term is close to its end date
- **Expired** — term has passed its end date
- **Expired pending election** — elected term ended without a linked election

---

## Step 4: Assign Members to Offices

Assignments connect real people to offices inside a term.

### To create an assignment

1. Go to **Leadership**
2. Open the **Assignments** area
3. Click **Add Assignment**
4. Select:
   - **Member**
   - **Term**
   - **Office**
5. Fill in optional details:
   - **Custom title**
   - **Rank order**
   - **Seat number**
   - **End date**
   - **Notes**
   - **Primary assignment**
6. Click **Save**

### What “Primary” means

Use **Primary** when one assignment should be treated as the member’s main leadership role for that term.

This is helpful when someone serves in more than one role but you want one to stand out in reports or history.

---

## Expiring Terms and Election Handoff

If a term uses the **elected** appointment method and no election has been linked yet, Shepherd shows an alert when the term is nearing its end.

You will see:
- the term name
- how many days remain, or how long ago it expired
- the body or branch involved
- a recommendation to prepare an election

### To prepare an election from a term

1. Open the expiring term alert or the term details
2. Click **Prepare election**
3. Shepherd creates an election draft using the offices already attached to that term
4. Review the election settings and dates before opening nominations or voting

This saves time because you do not need to rebuild the positions manually.

:::info Screenshot
📸 **[Screenshot: Expiring elected terms card with warning badge and Prepare election button]**
:::

---

## Leadership Reports

Shepherd includes a report view for both current and historical leadership records.

### Current leadership reports

Use this to answer questions like:
- Who currently serves as Elder?
- Which bodies have active leaders?
- Who holds leadership roles in this branch right now?

### Historical leadership reports

Use this to answer questions like:
- Who served in this office before?
- Which term was someone part of?
- When did a leader start or finish serving?

### Available filters

Reports can be filtered by:
- **Office**
- **Body**
- **Term**
- **Current or historical view**

This makes it easier to prepare installation services, annual reports, handover reviews, and governance records.

:::info Screenshot
📸 **[Screenshot: Leadership reports page with filters for office, body, term, and current/history view]**
:::

---

## Best Practices

- **Create offices first** before creating terms
- **Use clear naming** so reports stay readable later
- **Avoid duplicate offices** like “Elder” and “Church Elder” unless they truly mean different things
- **End old assignments properly** so current reports stay accurate
- **Review expiring elected terms early** so election planning does not become rushed
- **Use branch-linked bodies carefully** in multi-branch churches so records stay clean

---

## Common Mistakes

### 1. Creating terms before offices or bodies exist
That makes setup harder. Always define the structure first.

### 2. Assigning the wrong office to a term
Make sure the office slot list reflects the real offices intended for that term.

### 3. Forgetting end dates
If an assignment should end, record it. Otherwise, reports may still treat the role as current.

### 4. Leaving expiring elected terms unattended
An expired term without a linked election can create confusion during handover.

### 5. Mixing church-wide and branch-level structures
If a body belongs to one branch, keep its terms and assignments inside that branch structure.

---

## Frequently Asked Questions

### Can I use Leadership even if my church does not run formal elections?
Yes. You can use appointed or mixed terms and still keep a clear leadership history.

### Can one office have more than one person?
Yes. Use **seats** on the office slot to allow multiple assignments in the same term.

### Can someone hold more than one leadership role?
Yes. A member can have multiple assignments, and one can be marked as **Primary**.

### What happens when a term ends?
The term moves out of the active window, and Shepherd keeps it in history for reporting.

### Can branch admins see every branch?
Not usually. Branch-scoped users typically only manage leadership records inside their assigned branch.

---

## Related Guides

- [Church Elections](./elections)
- [Roles & Permissions](./roles)
- [Organisation Setup](../setup/organization)
