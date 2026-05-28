

export const courseConfig = {
    id: 'mpowermybiz-linkedin-automation',
    title: 'Graphic Content Automation with Claude Code for Social Media',
    description: 'Build a fully automated social media content pipeline using Claude Code, Python, Google Sheets, and Zapier — the exact system used at MPowerMyBiz.',
    author: 'MPowerMyBiz',
    version: '2.0.0',
    structure: [
        {
            type: 'section',
            id: 'module-1',
            title: 'The Big Picture: Your Automated Content Pipeline',
            children: [
                {
                    id: '01-welcome',
                    component: '@slides/01-welcome.js',
                    title: 'Welcome',
                    engagement: {
                        required: false
                    }
                },
                {
                    id: '02-what-we-are-building',
                    component: '@slides/02-what-we-are-building.js',
                    title: 'What We\'re Building',
                    engagement: {
                        required: false
                    }
                },
                {
                    id: '03-tools-overview',
                    component: '@slides/03-tools-overview.js',
                    title: 'Tools You Need',
                    engagement: {
                        required: false
                    }
                },
                {
                    id: '04-pipeline-diagram',
                    component: '@slides/04-pipeline-diagram.js',
                    title: 'Pipeline Diagram',
                    engagement: {
                        required: false
                    }
                }
            ]
        },
        {
            type: 'section',
            id: 'module-2',
            title: 'Building Your Branded Social Media Graphic',
            children: [
                {
                    id: '05-graphic-anatomy',
                    component: '@slides/05-graphic-anatomy.js',
                    title: 'Anatomy of the Graphic',
                    engagement: {
                        required: false
                    }
                }
            ]
        },
        {
            type: 'section',
            id: 'module-3',
            title: 'Setting Up Your Content Calendar Webhook',
            children: [
                {
                    id: '09-google-apps-script-setup',
                    component: '@slides/09-google-apps-script-setup.js',
                    title: 'Content Calendar & Webhook Setup',
                    engagement: {
                        required: false
                    }
                }
            ]
        },
        {
            type: 'section',
            id: 'module-4',
            title: 'Scheduling with Zapier',
            children: [
                {
                    id: '13-zapier-trigger-setup',
                    component: '@slides/13-zapier-trigger-setup.js',
                    title: 'Zapier Trigger Setup',
                    engagement: {
                        required: false
                    }
                }
            ]
        },
        {
            type: 'section',
            id: 'module-5',
            title: 'The Automation in Action',
            children: [
                {
                    id: '17-giving-claude-the-idea',
                    component: '@slides/17-giving-claude-the-idea.js',
                    title: 'Scheduled Task Automation Workflow',
                    engagement: {
                        required: false
                    }
                },
                {
                    id: '20-next-steps',
                    component: '@slides/20-next-steps.js',
                    title: 'What\'s Next',
                    engagement: {
                        required: false
                    }
                }
            ]
        }
    ],
    metadata: {
        title: 'Content Automation with Claude Code for Social Media',
        author: 'MPowerMyBiz'
    },
    navigation: {
        sidebar: {
            enabled: true
        },
        breadcrumbs: {
            enabled: true
        }
    },
    features: {
        accessibility: {
            darkMode: true,
            fontSize: true,
            highContrast: true,
            reducedMotion: true,
            keyboardShortcuts: true
        }
    },
    completion: {
        promptForComments: true,
        promptForRating: true
    }
};
