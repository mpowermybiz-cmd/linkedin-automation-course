export default {
  id: '08-generating-your-first-graphic',
  title: 'Generating Your First Graphic',
  type: 'demo',
  content: {
    heading: 'Demo: Run the Script',
    steps: [
      'Open Claude Code in your terminal',
      "Tell Claude: 'Generate a LinkedIn graphic for the topic: 5 AI Tools That Save You 10 Hours a Week, category: AI Tools'",
      'Claude writes and runs the Python script',
      'A PNG file is saved to your output folder',
      'Open the file — review avatar, pill, headline, sub-headline placement',
    ],
    checkpoint: 'Your graphic should show: avatar top-left, pill below handle, headline below pill with 44px gap, sub-headline below headline with 52px gap.',
    commonErrors: [
      { error: 'Badge overlaps avatar', fix: 'Check that BADGE_Y = AV_BOTTOM + 20, not a hardcoded number' },
      { error: 'Pill is centered', fix: 'Pill x must start at NAME_X, not canvas center' },
      { error: 'Text gets cut off', fix: 'Enable text wrapping with a max-width constraint' },
    ],
  },
};
