# Copilot Usage Guide for this repo

- Purpose: static digital visiting cards per person; shared presentation layer in [shared/style.css](shared/style.css) and DOM binder in [shared/card.js](shared/card.js).
- Current folders: [arun-pk](arun-pk), [john-nair](john-nair), and [T/tms](T/tms). Each person folder carries `index.html`, `data.js`, `contact.vcf`, and images (expect `profile.jpg`; optional `logo.png`).
- Runtime flow: `index.html` loads person `data.js` which defines a global `profile` object; `card.js` runs on `DOMContentLoaded` to fill text, set `href`s, and hide buttons when data is missing.
- Data contract (see [shared/card.js](shared/card.js)): expects `name`, `title`, `company`, `phone`, `displayPhone`, `whatsapp`, `emailWork`, `emailPersonal`, `address`, `locationText`, `locationUrl`; optional `website: { url, label }`. Optional `workPhone`/`displayWorkPhone` adds a secondary call button and hides if absent. Missing `website` hides the website card.
- WhatsApp caveat: `card.js` builds `https://wa.me/${profile.whatsapp}`; this endpoint rejects `+`. Use digits-only for `whatsapp` even if `phone` starts with `+` (e.g., `917356455578`).
- Website vs location: if `locationUrl` is present, `websiteBtn` points to `locationUrl` and shows `website.label` + `locationText`; only when `locationUrl` is absent does it link to `website.url`. To force the business URL, leave `locationUrl` empty.
- Template: [arun-pk/index.html](arun-pk/index.html) (and [T/tms/index.html](T/tms/index.html)) are the canonical shared-template versions; wire `data.js` first, then `../shared/card.js`. [john-nair/index.html](john-nair/index.html) is legacy standalone with inline styles.
- Styling: reuse button classes `primary`, `whatsapp`, `neutral`, and avatar/website-card styles from [shared/style.css](shared/style.css); avoid inline duplication. Google Font Inter is imported there.
- Assets: `profile.jpg` is referenced directly in the template; ensure it exists per person. `logo.png` is optional for brand/website logo and will hide on load error.
- Contact save: `contact.vcf` is hard-linked in the template; keep the filename stable when adding people.
- Add a person workflow: copy [arun-pk/](arun-pk) (or [T/tms/](T/tms) identical template), rename folder, update `data.js`, replace `profile.jpg` and `contact.vcf`, set `whatsapp` digits-only, drop `locationUrl` if you need the site URL instead, open `index.html` locally to verify buttons.
- Local preview: static only—no build/tests. Open the HTML file directly or serve the repo root with `python3 -m http.server` for mobile testing.
- Content style: prefer ASCII quotes; keep edits concise; preserve existing HTML structure and shared JS wiring.
