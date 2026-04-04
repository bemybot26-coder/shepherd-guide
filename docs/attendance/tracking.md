---
title: Attendance Tracking
sidebar_position: 1
---

## Overview

The **Attendance** module lets you track who shows up to every service — Sunday mornings, midweek Bible study, prayer meetings, or any other gathering. Shepherd supports multiple check-in methods so your team can use whatever works best for your church.

:::info Screenshot
📸 **[Screenshot: Attendance screen showing live check-in list and service selector]**
:::

---

## Setting Up Services

Before you can record attendance, you need to create your **Services** (the recurring gatherings you want to track).

1. Go to **Settings → Attendance**
2. Under **Services**, click **+ Add Service**
3. Fill in:
   - **Service Name** — e.g. "Sunday Morning Service", "Wednesday Bible Study"
   - **Service Type** — Sunday Service, Midweek, Prayer Meeting, etc.
   - **Day of Week** — which day it occurs
   - **Start Time** — e.g. 09:00
   - **Branch** *(optional)* — for multi-branch churches
4. Click **Save**

---

## Recording Attendance

Go to **Attendance** in the sidebar. You'll see:
- A **service selector** at the top — pick the service you're recording
- A **date picker** — defaults to today
- A **live check-in list** — everyone checked in so far

### Method 1: Manual Search & Check-In

The most common method for front-desk staff:

1. Go to **Attendance**
2. Select the service from the dropdown
3. In the search box, type a member's name, phone, or Member ID
4. Click their name in the results
5. They're instantly checked in ✅

> Shepherd prevents double check-ins — if someone is already checked in, they'll be marked with a ✅ in the search results.

:::info Screenshot
📸 **[Screenshot: Manual check-in search showing name results and the check-in button]**
:::

---

### Method 2: QR Code / WhatsApp Self Check-In *(Growing plan and above)*

Shepherd generates a **4-digit rotating code** for each service. Members check themselves in via WhatsApp.

**For the church admin:**
1. Go to **Attendance** → select the service
2. Click **Show Check-In Code** — a 4-digit code appears (e.g. `4829`)
3. Display this code on a screen at the entrance
4. The code rotates automatically every few minutes

**For the member:**
1. On service day, send the 4-digit code to your church's WhatsApp number
2. Shepherd replies: *"✅ Checked in to Sunday Morning Service! You're #47 today. God bless!"*

> 💡 Code rotation period is configurable in **Settings → Attendance**.

---

### Method 3: Quick Add (Bulk Check-In)

For when you have a paper register and want to check in multiple people at once:

1. Go to **Attendance** → click **Quick Add**
2. Search and select multiple members
3. Click **Check In All**

---

### Method 4: Walk-In / First-Timer

If someone is attending for the first time:

1. Click **+ Add New Member** from the attendance screen
2. Fill in their basic details (name + phone minimum)
3. They're added to the database with **Visitor** status and checked in immediately

---

## Viewing Today's Attendance

| Info | Description |
|---|---|
| **Total checked in** | Live count of people at today's service |
| **First-timers** | Count of members with Visitor status |
| **Check-in list** | Names, check-in time, and method |
| **Remove button** | Undo a check-in if it was a mistake |

---

## Past Attendance

1. Go to **Attendance**
2. Use the **date picker** to select any past date
3. Select a service — records for that date load automatically

---

## Member Attendance History

1. Go to **Members** → open a member's profile
2. Click the **Attendance** tab
3. See every service they've attended with dates and check-in method

---

## Plan Requirements

| Feature | Minimum Plan |
|---|---|
| Manual check-in | All plans (including Free) |
| QR code / WhatsApp self check-in | Growing plan and above |
| Attendance export | All plans |
| Past attendance view | All plans |

---

## Tips

- ✅ **Train your front-desk team** on manual search — it's the fastest method for most churches
- ✅ **Display the check-in code prominently** at the entrance for self check-in
- ✅ **Check in first-timers immediately** — their visitor status triggers Journey notifications automatically
