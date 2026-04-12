---
title: Messages & Broadcasts
sidebar_position: 1
---

## Overview

The **Messages** module is how you communicate with your congregation. Shepherd supports three channels: **WhatsApp**, **SMS**, and **Email**. You can send a quick message to a group of members, run a scheduled broadcast, or save reusable message templates.

If you need to share a curated member or family page instead of sending a plain broadcast, see **[Profile Sharing](./profile-sharing)**.

Go to **Messages** in the sidebar.

:::info Screenshot
📸 **[Screenshot: Messages hub showing Compose, Broadcasts, Templates, and Sent Messages tabs]**
:::

---

## The Messages Hub

| Section | What It Does |
|---|---|
| **Compose** | Send an immediate message to a group of recipients |
| **Broadcasts** | View and manage past and scheduled broadcast campaigns |
| **Templates** | Manage reusable message templates |
| **Sent Messages** | Full history of all WhatsApp messages sent from your church |
| **Replies** | Inbox for member replies to your broadcasts |

---

## Sending a Message (Compose)

### Step 1: Choose Your Channel

| Channel | Requirements | Cost |
|---|---|---|
| **WhatsApp** | Member must have a phone number | Free (uses Twilio) |
| **SMS** | Member must have a phone number | Uses SMS credits |
| **Both** | Sends via WhatsApp first, SMS as fallback | Uses SMS credits for SMS portion |

### Step 2: Choose Your Recipients

| Filter | Who It Includes |
|---|---|
| **All Members** | Everyone with a phone number (excluding Inactive) |
| **Active Members** | Members with status Active |
| **Full Member** | Members with Full Member status |
| **New Converts** | Members with status New Convert |
| **Visitors** | Members with status Visitor |
| **Inactive** | Members marked as Inactive |
| **Youth** | Members with a youth profile |
| **Custom** | Hand-pick specific members |
| **By Group** | All members of a specific group |

> 💡 Shepherd shows you a **recipient count preview** before you send.

**Branch filter:** Available for all recipient types except By Group — limits recipients to a specific branch in multi-branch churches.

### Step 3: Write Your Message

#### WhatsApp Structured Compose

When WhatsApp is selected as your channel, the compose area changes to a **3-field structured format**:

- **Message Title** — appears in bold at the top of the WhatsApp message (e.g. "Sunday Service Reminder")
- **Paragraph 1** — the main body of your message
- **Paragraph 2** — optional follow-up paragraph

A **live preview panel** shows exactly how your message will appear in WhatsApp — including the church broadcast formatting.

:::info Screenshot
📸 **[Screenshot: WhatsApp compose screen showing Title + Para 1 + Para 2 fields with live preview panel on the right]**
:::

> ℹ️ SMS compose is unchanged — it remains a single text box.

You can use variables in your message:
- `{{firstName}}` — replaced with the recipient's first name
- `{{churchName}}` — replaced with your church name

#### SMS Compose

Standard single text box. Variables work the same way.

### Step 4: Send or Schedule

- **Send Now** — delivers immediately
- **Schedule** — pick a date and time for future delivery

---

## WhatsApp Delivery Status

Every WhatsApp message shows a real-time delivery status that updates automatically via Twilio webhooks:

| Badge | Meaning |
|---|---|
| ⬜ **Sent** | Message dispatched to Twilio |
| 🟢 **Delivered** | Confirmed delivered to the member's phone |
| 🔵 **Read** | Member opened the message |
| 🔴 **Failed** | Delivery failed (see error details) |

No manual refresh needed — statuses update automatically.

---

## Broadcasts

Broadcasts are saved message campaigns. Every message sent through Compose is logged here.

### Viewing Broadcasts

Go to **Messages → Broadcasts** to see all campaigns. Each broadcast card shows:
- Campaign name and channel
- Status (Draft / Sent / Scheduled / Failed)
- Total recipients, sent count, failed count
- Date created

### Delivery Log

Every completed broadcast includes a **Delivery Log** showing exactly who received your message.

1. Find a completed broadcast
2. Click the **"N recipients"** button
3. A slide-in panel shows every recipient with name, phone, status badge, and time sent

Filter tabs: All / Sent / Failed

> ℹ️ Broadcasts sent before 28 Mar 2026 don't have delivery logs.

---

## Sent Messages

Go to **Messages → Sent Messages** to see every WhatsApp message sent from your church — not just broadcasts, but also:

| Type | Icon | Description |
|---|---|---|
| Broadcast | 📢 | Manual broadcast campaigns |
| Birthday | 🎂 | Automatic birthday greetings |
| Anniversary | 💍 | Membership anniversary messages |
| Pastoral | 🙏 | Messages sent from Pastoral Care |
| Giving confirmation | 💰 | Post-giving thank-you messages |
| Service reminder | 📅 | Automated service reminders |
| Care journey | 🛤️ | Bereavement & crisis care notifications |
| Pledge reminder | 💳 | Pledge payment reminders |

The table shows: Date | Recipient | Type | Message preview | Delivery status badge

:::info Screenshot
📸 **[Screenshot: Sent Messages page showing the full table with type icons and coloured delivery status badges]**
:::

---

## Reply Inbox

When members reply to your broadcast messages via WhatsApp, their replies are collected in **Messages → Replies**.

From here your team can:
- See all incoming replies with member name, message preview, and timestamp
- Mark replies as read
- Identify members who need follow-up

:::info Screenshot
📸 **[Screenshot: Reply Inbox showing member replies with read/unread indicators]**
:::

---

## Message Templates

Save commonly used messages as templates.

### Creating a Template

1. Go to **Messages → Templates** → click **+ New Template**
2. Fill in: Name, Category, Channel, Content (use `{{variables}}`)
3. Save

### Using a Template

When composing a broadcast, click **Use Template** → select → message body is pre-filled.

---

## SMS Credits

| Package | Credits | Price |
|---|---|---|
| Starter | 100 SMS | GHS 10 |
| Standard | 500 SMS | GHS 45 |
| Value | 1,000 SMS | GHS 80 |
| Bulk | 5,000 SMS | GHS 350 |

Top up at **Messages → SMS Credits** via Paystack. Credits are added instantly.

---

## Scheduled Messages

When composing, select **Schedule** → pick date and time → click **Schedule**. Scheduled messages appear in the Broadcasts list with a **Scheduled** badge.

---

## Permissions

| Action | Required Role |
|---|---|
| View messages & broadcasts | Staff, Pastor, Admin, Super Admin |
| Send messages | Admin, Super Admin |
| Manage templates | Admin, Super Admin |
| Top up SMS credits | Admin, Super Admin |

---

## Tips

- ✅ **Personalise every broadcast** with `{{firstName}}` — dramatically improves engagement
- ✅ **Build a template library** for common messages (Sunday reminders, event announcements, etc.)
- ✅ **Check the Delivery Log after every broadcast** — if members report not receiving messages, look for 🔴 Failed entries
- ✅ **Use WhatsApp for most messages** — it's free and has better open rates than SMS
- ✅ **Check the Replies inbox** regularly — members who reply deserve a response
