import type {SidebarsConfig} from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  shepherdSidebar: [
    "intro",
    {
      type: "category",
      label: "🚀 Getting Started",
      items: ["setup/getting-started", "setup/organization"],
    },
    {
      type: "category",
      label: "👥 Members",
      items: ["members/overview", "members/adding-members", "members/families"],
    },
    {
      type: "category",
      label: "📋 Attendance",
      items: ["attendance/tracking", "attendance/insights"],
    },
    {
      type: "category",
      label: "🤝 Groups & Cells",
      items: ["groups/overview"],
    },
    {
      type: "category",
      label: "🙏 Pastoral Care",
      items: ["pastoral/care", "pastoral/youth", "pastoral/visits"],
    },
    {
      type: "category",
      label: "💬 Communication",
      items: ["communication/messaging", "communication/whatsapp-bot"],
    },
    {
      type: "category",
      label: "💰 Finance",
      items: ["giving/overview", "giving/pledges", "giving/events", "giving/reports"],
    },
    {
      type: "category",
      label: "⚙️ Administration",
      items: ["admin/settings", "admin/elections", "admin/leadership", "admin/live-sessions", "admin/tasks", "admin/roles"],
    },
  ],
};

export default sidebars;
