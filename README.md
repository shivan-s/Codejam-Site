<div align="center">
  <h1>
    <p>TimeEnjoyed's CodeJam Website *Work in Progress*</p>
    <!-- make sure to update the links -->
    <a href="https://github.com/shivan-s/Codejam-Site/actions/workflows/deploy.yml">
       <img src="https://github.com/shivan-s/Codejam-Site/actions/workflows/deploy.yml/badge.svg" alt="Github status for App" />
    </a>
  </h1>

</div>

## Requirements

- node
- npm
- Patience & Creativity

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm install
npm run dev -- --open
```

## Deploying

This project usses github actions to deploy onto Cloudflare with every code change.

1. Make sure secrets are set for the following variables:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_AUTHOR_ID`

[Instructions on how to obtain these are here](https://github.com/cloudflare/pages-action).

_WIP_
