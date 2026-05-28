export default {
  id: "04-pipeline-diagram",
  title: "Pipeline Diagram",
  type: "diagram",
  content: {
    heading: "How the Pieces Connect",
    steps: [
      { step: 1, label: "You", action: "Give Claude Code a topic idea" },
      { step: 2, label: "Claude Code", action: "Writes + runs the Python graphic script" },
      { step: 3, label: "Python Script", action: "Generates the branded PNG graphic" },
      { step: 4, label: "Webhook POST", action: "Sends metadata to Google Apps Script" },
      { step: 5, label: "Google Sheet", action: "New row added to content calendar" },
      { step: 6, label: "Zapier", action: "Detects new row, triggers Buffer action" },
      { step: 7, label: "Buffer", action: "Schedules LinkedIn post with image" },
      { step: 8, label: "LinkedIn", action: "Post goes live automatically" },
    ],
  },
};
