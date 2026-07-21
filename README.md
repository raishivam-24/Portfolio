# SYNAPSE.CORE Portfolio (React + Vite + Tailwind)

Your HTML portfolio, converted to a React single-page app.

## Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx          # React entry point
    ├── App.jsx           # Composes the page from sections below
    ├── index.css         # Tailwind + custom effects (glass, glow, scanlines)
    ├── siteData.js        ← EDIT THIS FILE to change your content
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Projects.jsx
        ├── Skills.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Editing your content

Everything text/data-related (headings, bio, project cards, skills, tech
stack, timeline, contact info) lives in **`src/siteData.js`**. Open that
file and edit the values — the components read from it automatically, so
you never need to touch component code just to change copy.

If you want to swap in your own resume / project data, just paste your
document's content into the matching fields of `siteData.js` (e.g.
`about.timeline.items` for work history, `projects.items` for your
project list, `skills.stack` / `skills.proficiency` for your tech stack).

## Running locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Building for production

```bash
npm run build
```

Output goes to `dist/`, ready to deploy to Vercel, Netlify, GitHub Pages,
or any static host.

## Notes on the conversion

- Google's "Material Symbols" icon font was replaced with **lucide-react**
  components (tree-shakeable SVG icons), since that's the standard
  icon library for React projects.
- All inline `<script>` DOM logic (typing animation, fade-ins, scroll
  reveal for skill bars) was rewritten as React state/effects
  (see `Skills.jsx`'s `IntersectionObserver` hook, and the CSS
  animation delays in `Hero.jsx`).
- The contact form is a fully controlled React form (`Contact.jsx`).
  It currently just logs the payload to the console — wire the
  `handleSubmit` function up to your email service / backend of choice
  (e.g. Formspree, a serverless function, EmailJS, etc.).
- All Tailwind design tokens (custom colors, spacing, type scale) from
  your original `tailwind.config` were preserved in `tailwind.config.js`.
