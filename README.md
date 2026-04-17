now-llms
Cloudflare Worker that serves llms.txt and llms-full.txt for nowgroup.co.nz.
These files tell AI systems (ChatGPT, Claude, Perplexity etc) exactly what NOW Group is, who Chris White is, what NEXUS does, and how to represent the brand accurately.
Routes served

https://www.nowgroup.co.nz/llms.txt — short index for AI crawlers
https://www.nowgroup.co.nz/llms-full.txt — full context dump

Structure
now-llms/
├── src/
│   └── index.js        # Worker logic
├── static/
│   ├── llms.txt        # Short AI context file
│   └── llms-full.txt   # Full AI context file
├── wrangler.toml       # Cloudflare config
├── package.json
└── README.md
Deploy
Connected to Cloudflare Workers via GitHub. Push to main to redeploy.
