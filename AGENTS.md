<!-- BEGIN:nextjs-agent-rules -->

# Next.js: ALWAYS read docs before coding

Before any Next.js work, find and read the relevant doc in `node_modules/next/dist/docs/`. Your training data is outdated — the docs are the source of truth.

<!-- END:nextjs-agent-rules -->

# CRITICAL RULES - MUST FOLLOW

## RESPONSES

- Be concise

## PLANNING MODE

- Ask clarifying questions
- Never assume design, tech stack, features
- Use sub-agents for research + plan review

## CHANGE / EDIT MODE

- Use sub-agents for features
- Update/create tests for features
- Implement parallel changes with sub-agents
- Act as coordinator only
- Use best model: premium for complex tasks, mid-tier for simple tasks, docs or lookups
- Never read entire dirs. Use find/grep first
- Tool call cap: stop + explain after 5 tools with no progress
- Run `npm run sanity-checks` after features

## TESTING

- Use available test tools
- Always test, never assume work
- If no test tools, ask user if skip

## UI DESIGN

- Strictly follow UI design system: see DESIGN.md file
