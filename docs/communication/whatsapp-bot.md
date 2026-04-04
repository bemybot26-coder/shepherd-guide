---
title: WhatsApp Bot
sidebar_position: 2
---

## Overview

Shepherd has a powerful **WhatsApp Bot** that lets your members interact with your church directly from WhatsApp — no app download, no login, no dashboard needed. Members can check in to services, give, pray, book appointments, rate services, and more — all by sending simple messages.

The bot is powered by your church's Twilio WhatsApp number and runs 24/7 automatically.

:::info Screenshot
📸 **[Screenshot: Example WhatsApp conversation showing HELP menu response with available commands]**
:::

---

## Getting Started (for Members)

Members save your church's WhatsApp number and send any message to start. The bot introduces itself and walks them through registration.

### First-Time Registration

When an unregistered number messages your church:
1. Bot asks for their **preferred language** (English, French, Twi, or Pidgin)
2. Bot asks for their **full name**
3. Member is registered as a Visitor in your database
4. Bot confirms: *"Welcome to [Church Name], [First Name]! 🎉"*

If the member is already in your database (added manually by staff), they're recognised by phone number and greeted by name immediately.

---

## All Available Commands

### 📋 HELP
```
HELP       — Main menu of all available commands
HELP MORE  — Extended/hidden commands
```

---

### ✅ CHECKIN
```
CHECKIN [4-digit code]
```
Check in to a service using the code displayed at church.

**Example:** `CHECKIN 4829`

Bot replies: *"✅ Checked in to Sunday Morning Service! You're #47 today. God bless!"*

> The 4-digit code is shown on a screen at your church entrance and rotates automatically every few minutes.

---

### 🙏 PRAY
```
PRAY [your prayer request]
```
Submit a prayer request to the pastoral team.

The request appears in **Pastoral Care → Prayer** in the dashboard. When staff mark it as "Praying" or "Answered", the member receives a WhatsApp notification.

**Privacy options:** Is this private or shareable? If shared: anonymous or named?

---

### 💰 GIVE / TITHE
```
GIVE [amount]    — Give an offering
TITHE [amount]   — Pre-selects the Tithe category
```

**Flow:**
1. Bot shows giving categories
2. Member selects a category
3. Bot confirms: *"Send GHS 50 to [Church] for [Category]? Reply YES or NO."*
4. Member replies `YES` → MoMo prompt sent → giving recorded automatically

---

### 📊 HISTORY / BALANCE / STATEMENT
```
HISTORY    — View your giving history (last 5 records)
BALANCE    — View your current year giving total
STATEMENT  — Request a full giving statement
```

---

### 📖 BOOK
```
BOOK
```
Book a pastoral appointment. Bot shows available appointment types, then available time slots (from **Pastoral Care → Availability**). When the pastor confirms, member receives a WhatsApp notification.

---

### ⭐ FEEDBACK
```
FEEDBACK
```
Rate today's service (1–5 stars), choose a category (Sermon/Worship/Welcome/General), add an optional comment. Feedback appears in **Pastoral Care → Feedback**.

---

### 👤 PROFILE / UPDATE
```
PROFILE                          — View your current profile
UPDATE name John Doe             — Update your name
UPDATE email john@example.com    — Update your email
UPDATE address 12 Main Street    — Update your address
UPDATE occupation Teacher        — Update your occupation
```

---

### 🏠 VISIT
```
VISIT
```
Request a pastoral visit. Bot asks for visit type (Home / Hospital / Other) and a brief reason. The pastoral team is notified and a visit request appears in the **Pastoral Care → Visits** dashboard.

---

### 🤝 PLEDGE
```
PLEDGE [amount] [frequency] [title]
```
Create a giving pledge. **Example:** `PLEDGE 200 MONTHLY Building Fund`

**Frequencies:** WEEKLY / MONTHLY / QUARTERLY / ANNUALLY

```
PLEDGE STATUS    — View your active pledges and progress
PLEDGE HISTORY   — See your past pledges
```

---

### 💬 Replying to Broadcasts

Members can **reply directly** to any broadcast message in WhatsApp — no special command needed. The reply is captured and appears in the **Messages → Replies** dashboard for your team to review and follow up on.

---

### 🌍 LANG
```
LANG
```
Change your preferred language: English / Français / Twi / Pidgin. All future messages from the bot arrive in your chosen language.

---

### 🔑 MYQR
```
MYQR
```
Get your personal QR code for fast check-in at events or services that use QR scanning.

---

### ⛪ CHURCHES / SWITCH
```
CHURCHES       — List all your registered churches (if member of more than one)
SWITCH [code]  — Switch to a different church
```

---

## Interactive Menus

On supported WhatsApp accounts (Ghana 🇬🇭, Nigeria 🇳🇬, Cameroon 🇨🇲 confirmed), the bot uses **interactive list menus** and **reply buttons** — tappable options instead of typing numbers. Other countries fall back to numbered text menus.

---

## Languages Supported

| Language | Activation |
|---|---|
| 🇬🇧 English | Default |
| 🇫🇷 French | Send `LANG` → select Français |
| 🇬🇭 Twi | Send `LANG` → select Twi |
| 🌍 Pidgin | Send `LANG` → select Pidgin |

---

## Feature Access by Plan

| Command | Minimum Plan |
|---|---|
| CHECKIN (basic) | All plans |
| GIVE / TITHE | Rooted and above |
| HISTORY / BALANCE | Rooted and above |
| BOOK (appointments) | Growing and above |
| FEEDBACK | Growing and above |
| PLEDGE | Flourishing and above |
| STATEMENT | Growing and above |

---

## Custom Commands

Go to **Settings → Church Profile → Custom Commands** to add your own keywords:
- **Keyword:** `ADDRESS`
- **Response:** `Our address is 12 Redemption Road, Bamenda. Sunday service starts at 9:00 AM. 🙏`

Custom commands appear in the `HELP MORE` menu automatically.

---

## Quick Reference Card

| Command | What It Does |
|---|---|
| `HELP` | Main menu |
| `HELP MORE` | Extended commands |
| `CHECKIN 1234` | Check in to service |
| `GIVE 50` | Give GHS 50 |
| `TITHE 200` | Tithe GHS 200 |
| `HISTORY` | Recent giving |
| `BALANCE` | Year-to-date total |
| `STATEMENT` | Full giving statement |
| `PRAY [request]` | Submit prayer request |
| `BOOK` | Book pastoral appointment |
| `FEEDBACK` | Rate today's service |
| `PROFILE` | View your profile |
| `UPDATE name [name]` | Update your name |
| `PLEDGE 100 MONTHLY Tithe` | Create a pledge |
| `PLEDGE STATUS` | View your pledges |
| `LANG` | Change language |
| `MYQR` | Get your QR code |
| `CHURCHES` | List your churches |
| `VOTE` | Cast ballot in active election |
| `VOTE STATUS` | Check if you've voted + ballot token |
| `NOMINATE [Name] for [Post]` | Nominate a member during nominations phase |
| `NOMINEES` | List approved nominees for current election |
| *(reply to broadcast)* | Reply captured in Messages → Replies inbox |
