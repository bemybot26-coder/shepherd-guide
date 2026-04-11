---
title: Live Sessions Monitoring
sidebar_position: 4
---

# Live Sessions Monitoring

## Overview

The **Live Sessions** page gives authorized platform admins a real-time view of active Shepherd sessions across the platform.

It is designed for:
- operational awareness
- session security review
- suspicious session investigation
- controlled session revocation when needed

This feature is **not** for routine staff monitoring or reading sensitive member activity. Shepherd intentionally masks sensitive context by default.

:::info Screenshot
📸 **[Screenshot: Live Sessions page showing summary cards, filters, and active session list]**
:::

---

## Who Can Use This Feature?

This page is part of the **platform admin** area, not the normal church dashboard.

It is only available to authorized platform admin users such as:
- **Super Admin**
- **Support**

In addition, access depends on session-related permissions such as:
- **View Live Sessions (Own Church)**
- **View Live Sessions (All Churches)**
- **View Live Session Security Fields**
- **Revoke Live Sessions**
- **View Live Session Access Audit**

> Normal church users do **not** have access to `/admin/live-sessions`.

---

## Opening Live Sessions

1. Sign in with an authorized platform admin account
2. Open the **Admin** area
3. Click **Live Sessions**

> This page lives in the platform admin area and is separate from the normal church dashboard.

At the top of the page, Shepherd shows summary cards such as:
- **Visible sessions**
- **Active now**
- **High risk**
- **Security fields visibility**

These numbers update as sessions change.

---

## What You Can See

Each live session row may include:
- user name
- user email
- church name
- branch name
- current status
- current module or route label
- last activity time
- device type
- browser and operating system
- approximate location
- security risk level

Some security details are only shown to roles with permission to view sensitive security fields.

If your role does not allow it, Shepherd hides or restricts that information.

---

## Session Statuses

### Active
The user is currently active in the app.

### Idle
The session is still valid, but Shepherd has not seen recent activity.

### Revoked
An authorized admin manually invalidated the session.

### Expired or Logged Out
The session is no longer active because it ended naturally or the user signed out.

These badges help you distinguish between healthy sessions and sessions that may require attention.

---

## Filtering and Searching Sessions

The Live Sessions page includes filters to help you narrow the list.

You can filter by:
- **search** — user, church, or module
- **status**
- **module**
- **device type**
- **risk level**
- **church**

### To filter sessions

1. Open **Live Sessions**
2. Use the search box or dropdown filters
3. Shepherd refreshes the list based on your selection
4. Click **Refresh** if you want to reload the latest state manually

Use **Reset** or clear the filters to return to the full view.

:::info Screenshot
📸 **[Screenshot: Filter row showing search, status, module, device type, risk level, and church filters]**
:::

---

## Viewing Session Details

When a session needs investigation, you can open its detail view.

### To open a session

1. Find the session in the table
2. Click the **view** action
3. Shepherd opens a detail panel with:
   - user and church context
   - device and location details
   - status and timestamps
   - recent session events

Recent events may include:
- sign in
- route change
- heartbeat
- user action
- logout
- revoke

This event list helps you understand how the session has behaved recently without exposing sensitive content.

---

## Security and Privacy Design

Live Sessions is intentionally privacy-preserving.

By default, Shepherd avoids exposing:
- typed content
- raw sensitive routes
- exact record-level activity in sensitive areas
- precise GPS-style location data

The goal is to help admins answer questions like:
- Is this user currently active?
- Which church is affected?
- Does the session look risky?
- Should this session be reviewed or revoked?

The goal is **not** to spy on user activity.

---

## Revoking a Session

If a session appears suspicious, stolen, or unsafe, an authorized admin can revoke it.

### To revoke a session

1. Find the session in the list
2. Click the **revoke** action
3. Confirm the prompt
4. Shepherd marks the session as revoked and records the action in the audit trail

Use revocation for situations like:
- suspicious login activity
- a device that should no longer have access
- a support or security incident
- a user account that must be forced to sign in again

> Only users with the correct permission should perform this action.

:::info Screenshot
📸 **[Screenshot: Session revoke confirmation dialog]**
:::

---

## Using the Audit View

The **Live Sessions Audit** page shows who interacted with session monitoring tools.

This includes actions like:
- viewing live sessions
- opening session details
- revoking sessions

### To open the audit view

1. Go to **Admin → Live Sessions**
2. Click **View audit**

Use the audit page when you need accountability around session visibility and security interventions.

:::info Screenshot
📸 **[Screenshot: Live Sessions Audit page showing audit records for views, detail opens, and revocations]**
:::

---

## Best Practices

- Review **high-risk** sessions first
- Use filters to narrow large session lists quickly
- Revoke only when there is a clear operational or security reason
- Treat live session data as restricted operational information
- Use the audit page to confirm who performed security-sensitive actions

---

## Common Mistakes

### 1. Treating Live Sessions like a productivity tracker
That is not the purpose of this feature. It exists for operational awareness and session security.

### 2. Revoking sessions too quickly
Always confirm that the session is genuinely risky or inappropriate before forcing a logout.

### 3. Assuming hidden fields mean missing data
Sometimes the data exists but is intentionally restricted for your role.

### 4. Ignoring idle or high-risk sessions
Some of the most important cases are not the most visibly active ones.

---

## Frequently Asked Questions

### Can every church admin use Live Sessions?
No. This is a platform admin feature, not a normal church dashboard feature.

### Can I see exactly what a user typed or which sensitive record they opened?
No. Sensitive areas are masked by design.

### What happens after revoking a session?
The session is invalidated, and the action is recorded in the audit log.

### Does the page update automatically?
Yes. Shepherd refreshes the session list periodically, and you can also refresh manually.

---

## Related Guides

- [Roles & Permissions](./roles)
- [Leadership Management](./leadership)
