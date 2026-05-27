# Tewari Lab — Website

Source for [urology-ai.github.io](https://urology-ai.github.io), the public site for the Tewari Lab at the Icahn School of Medicine at Mount Sinai.

Built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages.

## Structure

```
index.md          # Home page
projects/         # Research projects (Clinical AI + Surgical AI)
people/           # Lab members
publications/     # Papers and preprints
tools/            # Internal tools
_layouts/         # HTML templates
assets/           # CSS and JS
```

## Local development

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

## Deploying

Push to `main` — GitHub Pages builds and deploys automatically.
