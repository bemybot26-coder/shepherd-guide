---
title: Settings & Configuration
sidebar_position: 1
---

## Overview

The **Settings** section is your church's control panel — from church profile and branding to roles, services, notifications, integrations, and billing.

Go to **Settings** in the sidebar.

:::info Screenshot
📸 **[Screenshot: Settings page showing all tab navigation across the top]**
:::

---

## Settings Tabs

| Tab | What It Configures |
|---|---|
| ⛪ **Church Profile** | Name, contact info, country, address, currency |
| 🕐 **Services** | Recurring services for attendance tracking |
| 🚀 **Journey** | New convert pipeline stages, teams, task templates, notifications |
| 🎨 **Branding** | Church logo, colours |
| 💰 **Offering Categories** | Categories for giving records |
| 🏢 **Branches** | Multi-branch / multi-campus setup |
| ✅ **Attendance** | QR code rotation settings |
| 🔔 **Notifications** | Donation notification recipients |
| 🔌 **Integrations** | WhatsApp / SMS integration status |
| 🏦 **Payouts** | Bank/MoMo account for receiving digital giving |
| 📲 **Connect Members** | QR code for member self-registration |
| 💳 **Billing** | Current plan, upgrade, payment history |
| 👥 **Team & Roles** | Staff accounts, role permissions |
| 💼 **Occupations** | Manage occupation options |
| 📜 **Audit Log** | History of all changes made in the dashboard |

---

## ⛪ Church Profile

The most important settings page. Fill this in completely during setup.

| Field | Description |
|---|---|
| **Church Name** | Full official name of your church |
| **Email** | Church contact email address |
| **Phone** | Church phone number |
| **Country** | Determines currency, region labels, and MoMo networks |
| **Currency** | GHS, NGN, XAF, USD, etc. |
| **Receipt Prefix** | Short code for giving receipts (e.g. "GCI" → receipt GCI-00045) |

### Custom WhatsApp Commands

Add keywords that members can send to your WhatsApp number:

1. Scroll to **Custom Commands** → click **+ Add Command**
2. Set: **Keyword** (e.g. `ADDRESS`), **Response** (e.g. "Our address is 12 Redemption Road"), **Description**
3. Save

Custom commands appear in the `HELP MORE` menu.

---

## 🎨 Branding

Upload your church logo and set your brand colours at **Settings → Branding**. These appear on PDF reports, giving receipts, and email notifications.

---

## 🏢 Branches

For churches with multiple locations:

1. Go to **Settings → Branches** → click **+ Add Branch**
2. Enter branch name, city, and address
3. Assign a **Branch Admin**

Branch admins can only see data for their assigned branch. Super Admins and Admins see everything.

---

## 🔌 Integrations

**Settings → Integrations** shows the status of:

| Integration | What It Does |
|---|---|
| **WhatsApp (Twilio)** | Member messaging, commands, check-in, giving |
| **SMS (Hubtel)** | SMS broadcasts and notifications |
| **Paystack** | Card and MoMo payment collection |

Configuration is done by the Shepherd team — contact support if an integration appears disconnected.

---

## 🏦 Payouts

Required before accepting card or MoMo payments:

1. **Settings → Payouts** → click **Set Up Payouts**
2. Enter your bank account or MoMo details
3. Shepherd registers a Paystack Sub-account — all collections flow directly to your account

---

## 📲 Connect Members

Generates a **QR code** and short URL for member self-registration. Share this in your church bulletin, notice board, or social media. When members scan it, they're guided through WhatsApp self-registration.

---

## 💳 Billing

**Settings → Billing** shows your current plan, member count vs limit, and renewal date.

To upgrade: click **Upgrade Plan** → select plan → pay via Paystack → access upgraded immediately.

---

## 👥 Team & Roles

### Inviting a Staff Member

1. Click **+ Invite User**
2. Enter their email, select their role, optionally assign to a branch
3. Click **Send Invite** — they receive an email invitation

### Built-in Roles

| Role | Key Permissions |
|---|---|
| **Super Admin** | Full access — everything |
| **Admin** | Members, attendance, giving, events, messages, reports |
| **Pastor** | Pastoral care, prayer, appointments, members view |
| **Staff** | View members, record attendance |
| **Branch Admin** | Admin access limited to their branch |

### Custom Roles

1. Go to **Settings → Roles** → click **+ Create Role**
2. Give it a name, colour, description
3. Select permissions from the matrix (organised by category)
4. Save

> 🔒 System roles cannot be deleted, but their permissions can be adjusted.

:::info Screenshot
📸 **[Screenshot: Roles page showing role cards with permission matrix visible in create dialog]**
:::

---

## 📜 Audit Log

**Settings → Audit Log** shows every change made in your dashboard:
- Who made the change
- What was changed (create / edit / delete)
- Before and after values
- Timestamp

Filter by date range, action type, or entity type. Essential for accountability in any church.

---

## Permissions for Settings

| Tab | Who Can Access |
|---|---|
| Church Profile | Admin, Super Admin |
| Branding | Admin, Super Admin |
| Branches | Super Admin |
| Payouts | Super Admin |
| Billing | Super Admin |
| Team & Roles | Super Admin |
| Audit Log | Admin, Super Admin |
