export default {
  id: '17-giving-claude-the-idea',
  title: 'The One-Prompt Workflow',
  type: 'demo',
  content: {
    heading: 'What You Actually Say to Claude Code',
    promptExample: "Generate a LinkedIn graphic for the topic: '3 Ways AI Saves Small Business Owners 10 Hours a Week', category: AI Tools. Post it to the content calendar.",
    whatHappens: [
      'Claude writes the Python graphic script with your layout rules',
      'Script runs — branded PNG is generated and saved',
      'Claude sends the POST to your Google Sheet webhook',
      'Row appears in your content calendar with status: pending',
      'Zapier fires — Buffer queues the post',
      'LinkedIn post goes live at your scheduled time',
    ],
    callout: 'That one sentence triggers the entire 8-step pipeline. This is what automation looks like.',
  },
};
