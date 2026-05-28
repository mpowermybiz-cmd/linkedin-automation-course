export const courseConfig = {
  id: 'mpowermybiz-linkedin-automation',
  title: 'LinkedIn Graphics Automation with Claude Code',
  description: 'Build a fully automated LinkedIn content pipeline using Claude Code, Python, Google Sheets, and Zapier — the exact system used at MPowerMyBiz.',
  author: 'MPowerMyBiz',
  version: '1.0.0',

  structure: [
    {
      type: 'section',
      id: 'module-1',
      title: 'The Big Picture: Your Automated LinkedIn Pipeline',
      children: [
        { id: '01-welcome', component: '@slides/01-welcome.js', title: 'Welcome' },
        { id: '02-what-we-are-building', component: '@slides/02-what-we-are-building.js', title: "What We're Building" },
        { id: '03-tools-overview', component: '@slides/03-tools-overview.js', title: 'Tools You Need' },
        { id: '04-pipeline-diagram', component: '@slides/04-pipeline-diagram.js', title: 'Pipeline Diagram' },
      ],
    },
    {
      type: 'section',
      id: 'module-2',
      title: 'Building the LinkedIn Graphic with Python',
      children: [
        { id: '05-graphic-anatomy', component: '@slides/05-graphic-anatomy.js', title: 'Anatomy of the Graphic' },
        { id: '06-avatar-and-layout-rules', component: '@slides/06-avatar-and-layout-rules.js', title: 'Layout Rules' },
        { id: '07-pill-badge-and-spacing', component: '@slides/07-pill-badge-and-spacing.js', title: 'The Pill Badge' },
        { id: '08-generating-your-first-graphic', component: '@slides/08-generating-your-first-graphic.js', title: 'Generate Your First Graphic' },
      ],
    },
    {
      type: 'section',
      id: 'module-3',
      title: 'Connecting Claude Code to Google Sheets',
      children: [
        { id: '09-google-apps-script-setup', component: '@slides/09-google-apps-script-setup.js', title: 'Google Apps Script Setup' },
        { id: '10-webhook-explained', component: '@slides/10-webhook-explained.js', title: 'The Webhook Script' },
        { id: '11-posting-data-from-claude', component: '@slides/11-posting-data-from-claude.js', title: 'Posting Data from Claude' },
      ],
    },
    {
      type: 'section',
      id: 'module-4',
      title: 'Scheduling with Zapier and Buffer',
      children: [
        { id: '13-zapier-trigger-setup', component: '@slides/13-zapier-trigger-setup.js', title: 'Zapier Trigger Setup' },
      ],
    },
    {
      type: 'section',
      id: 'module-5',
      title: 'Running It All with Claude Code',
      children: [
        { id: '17-giving-claude-the-idea', component: '@slides/17-giving-claude-the-idea.js', title: 'The One-Prompt Workflow' },
        { id: '20-next-steps', component: '@slides/20-next-steps.js', title: "What's Next" },
      ],
    },
  ],
};
