# Copilot Usage Guide for this repo

- Repo purpose: simple static digital visiting cards for individuals; each person has their own folder with HTML plus assets, sharing a common JS/CSS layer in `shared/`.
- Person folders: see [arun-pk/](arun-pk) and [john-nair/](john-nair). Each contains `index.html`, `contact.vcf`, and person-specific assets (e.g., `profile.jpg`).
- Data source: person details live in a `profile` object in that folder’s `data.js` (e.g., [arun-pk/data.js](arun-pk/data.js)). This feeds the shared DOM builder.
- Rendering logic: [shared/card.js](shared/card.js) reads the global `profile` and fills the template (name, title, company, phone/WhatsApp/mail/location, optional website) once `DOMContentLoaded` fires. Website button auto-hides if `profile.website` is missing.
- Template structure: [arun-pk/index.html](arun-pk/index.html) is the up-to-date template that wires in `data.js` then `../shared/card.js`, plus the shared styles. It also includes buttons for call/WhatsApp/work email/personal email/save contact/website/location and notes for Android contact saving.
- Legacy/minimal example: [john-nair/index.html](john-nair/index.html) is a standalone inline-styled card; it does not use `shared/` resources.
- Styling: global look-and-feel defined in [shared/style.css](shared/style.css) (Inter font from Google Fonts, gradients, card layout, button classes `primary`, `whatsapp`, `neutral`, avatar sizing, website card tweaks). Reuse these classes instead of duplicating inline styles.
- Profile schema expectations (from `shared/card.js`):
  - `name`, `title`, `company`, `phone`, `displayPhone`, `whatsapp`, `emailWork`, `emailPersonal`, `locationText`, `locationUrl` are assumed present.
  - Optional `website: { url, label }`; label falls back to the hostname-ish text; if absent, the website button is hidden.
  - `profile.jpg` is referenced directly in the template; ensure the file exists per person.
- Phone formats: `phone` should be tel-compatible (with `+`), `displayPhone` is the human-friendly version shown in the UI, and `whatsapp` should be digits-only (no `+`).
- Contact save: `contact.vcf` is linked directly; keep file names consistent with the anchor in the HTML.
- Brand/logo: optional website logo image in `websiteBtn`; uses an `onerror` handler to hide if missing. There is also a commented brand bar in the template for future use.
- Adding a new person (recommended workflow):
  1) Copy `arun-pk/` to a new folder named for the person.
  2) Update `data.js` with their details (respect the schema above).
  3) Replace `profile.jpg` and `contact.vcf` with the new assets.
  4) If a custom business URL exists, set `profile.website.url` and an optional `label`; else omit to hide the button.
  5) Open `index.html` in a browser to verify links and layout.
- No build/tests: purely static; open the HTML file locally or serve via a simple static server (e.g., `python3 -m http.server`) for mobile testing.
- Keep new content ASCII when possible; existing content has occasional smart quotes—prefer plain quotes in new edits.
