export default {
  id: "mpowermybiz-linkedin-automation",
  title: "LinkedIn Graphics Automation with Claude Code",
  description: "Build a fully automated LinkedIn content pipeline using Claude Code, Python, Google Sheets, and Zapier — the exact system used at MPowerMyBiz.",
  author: "MPowerMyBiz",
  version: "1.0.0",
  format: "scorm2004",

  objectives: [
    "Build a Python script that generates branded LinkedIn graphics automatically",
    "Connect Claude Code to a Google Sheet using a webhook",
    "Schedule and auto-post LinkedIn graphics using Zapier and Buffer",
    "Understand dynamic layout rules so graphics never overlap or break",
  ],

  modules: [
    {
      id: "module-1",
      title: "The Big Picture: Your Automated LinkedIn Pipeline",
      slides: [
        "01-welcome",
        "02-what-we-are-building",
        "03-tools-overview",
        "04-pipeline-diagram",
      ],
    },
    {
      id: "module-2",
      title: "Building the LinkedIn Graphic with Python",
      slides: [
        "05-graphic-anatomy",
        "06-avatar-and-layout-rules",
        "07-pill-badge-and-spacing",
        "08-generating-your-first-graphic",
      ],
    },
    {
      id: "module-3",
      title: "Connecting Claude Code to Google Sheets",
      slides: [
        "09-google-apps-script-setup",
        "10-webhook-explained",
        "11-posting-data-from-claude",
        "12-verify-the-row-writes",
      ],
    },
    {
      id: "module-4",
      title: "Scheduling with Zapier and Buffer",
      slides: [
        "13-zapier-trigger-setup",
        "14-buffer-connection",
        "15-end-to-end-test",
        "16-troubleshooting",
      ],
    },
    {
      id: "module-5",
      title: "Running It All with Claude Code",
      slides: [
        "17-giving-claude-the-idea",
        "18-full-automation-demo",
        "19-customizing-for-your-brand",
        "20-next-steps",
      ],
    },
  ],

  navigation: {
    allowBack: true,
    requireCompletion: false,
  },

  lms: {
    completionThreshold: 0.8,
    scorePassingGrade: 70,
  },
};
