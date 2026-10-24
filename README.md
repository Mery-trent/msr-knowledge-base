# MSR Knowledge Base

![CI](https://github.com/Mery-trent/msr-knowledge-base/actions/workflows/ci.yml/badge.svg)

A single-page reference guide for Mining Software Repositories (MSR) researchers. It helps new PhD students find data sources, collection methods, analysis methods, and publication venues in one place.

**Live site:** https://mery-trent.github.io/msr-knowledge-base/

Built for COIS 3060H (Software Processes), Assignment 1.

## Features implemented (Milestone 1)

- Page structure and tab navigation: Data Sources, Collection Methods, Analysis Methods, Publication Venues
- Data Sources table with all 7 sources provided by the customer
- Basic CSS styling
- Automated tests and a CI/CD pipeline that deploys to GitHub Pages

## Project structure

### docs/requirements.md User stories
### src/ index.html, script.js, styles/main.css
### tests/test.js Automated tests
### tests/test_checklist.md Manual test cases
### .github/workflows/ci.yml CI/CD pipeline


## Requirements

User stories are in [docs/requirements.md](docs/requirements.md).

## Running the tests

Requires [Node.js](https://nodejs.org). From the repository root:

```bash
node tests/test.js
```

## Development workflow

- Milestones and issues planned on GitHub
- Work done on `feature/page-structure-navigation`, tests on `test/page-structure-navigation`
- Changes merged into `main` through pull requests that close their issues
- GitHub Actions runs the tests on every push and pull request, and deploys `src/` to GitHub Pages when `main` is updated

## Future work (remaining milestones)

| Milestone | Scope | Issue |
|-----------|-------|-------|
| Collection Methods Content | Add 6 methods (REST APIs, GraphQL, Selenium, BeautifulSoup, Database Dumps, Manual Download) with use and pros/cons | #<n> |
| Analysis Methods Content | Add 8 methods with type of analysis and common use cases | #<n> |
| Publication Venues Content | Add 6 conferences and 3 journals, separated, with type, focus, and MSR relevance | #<n> |
| Styling & Polish | Responsive layout and professional touches | #<n> |

## AI use declaration

I used Claude (an AI assistant by Anthropic) for guidance on the project workflow and for help debugging the test script.