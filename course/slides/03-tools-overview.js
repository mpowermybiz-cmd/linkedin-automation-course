export default {
  id: '03-tools-overview',
  title: "Tools You'll Need",
  type: 'checklist',
  content: {
    heading: 'Your Stack',
    items: [
      { label: 'Claude Code', description: 'The AI that writes and runs the automation code', free: true },
      { label: 'Python 3.x', description: 'Runs the graphic generation script locally', free: true },
      { label: 'Pillow (Python library)', description: 'Draws the LinkedIn graphic image', free: true },
      { label: 'Google Account', description: 'Hosts your content calendar spreadsheet', free: true },
      { label: 'Google Apps Script', description: 'The webhook that receives data and writes rows', free: true },
      { label: 'Zapier', description: 'Watches the sheet and triggers Buffer', note: 'Free tier works' },
      { label: 'Buffer', description: 'Schedules and posts to LinkedIn', note: 'Free tier works' },
    ],
  },
};
