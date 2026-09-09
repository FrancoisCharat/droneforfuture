# DFF Consulting website

A complete, editable English-language website for Drone For Future / DFF Consulting.

## Upload to your hosting

1. Back up your current homepage and any existing `assets` folder.
2. Open your hosting file manager or connect using your usual FTP/SFTP application.
3. Open the document root for `www.droneforfuture.com` (often `public_html`, `www` or `htdocs`).
4. Upload the **contents of the `website` folder**: `index.html` and the entire `assets` folder. The finished path should be `public_html/index.html`, not `public_html/website/index.html`.
5. Open `https://www.droneforfuture.com` and refresh the page. If your host caches files, clear its website cache.

The website needs no Node.js, database, build command, paid plugin or email server. It uses ordinary HTML, CSS and JavaScript, with relative asset paths. It also works in a subdirectory, such as `/new-site/`, if you want to review it on your own hosting first.

Your existing `/FC/` and `/DT1/` directories can stay in place. The new website does not depend on them at runtime.

## Preview on your computer

Extract the ZIP and open `website/index.html` in a current browser. A local server is not required. An internet connection is not required for the page, fonts, pictures or controls. Email links need an email application or a configured webmail handler.

## What is included

- Responsive homepage with DFF branding and a digital-city concept visual featuring survey drones.
- Four areas of expertise: reality capture and model optimisation; connected twins; systems engineering; simulation and training.
- Albi photo / X-ray wireframe comparison, with matched framing and mouse, touch and keyboard control. The transparent digital illustration reveals a suggested interior volume and structural arches.
- Project detail dialogs covering Albi / EGCERSIS, the EcoDomus building pilot and learning simulations.
- F.E.R.A.S. (Framework for Resilient Systems), developed by Dr. Feras Al-Chama: five interactive capabilities with practical outputs, an illustrative building-fire example and explicit feedback relationships. Synchronisation combines real-time sensor streaming with verified asset updates, including mobile sensors and thermal drones where appropriate during a crisis.
- Expandable technical delivery workflow: Capture → Optimise → Connect → Activate.
- Founder profile, emerging Albi research direction, and contact section.
- Mobile navigation, keyboard support, native dialog focus management and reduced-motion styling.
- Local fonts, font licence, images, favicon and readable, editable source.

## Edit the website

`website/index.html` — all text, navigation, project descriptions, email addresses and images.

`website/assets/styles.css` — colours, layout, spacing, typography and responsive styles. The main colours are defined in the `:root` block near the top.

`website/assets/site.js` — mobile navigation, image comparison, independently controlled framework/process tabs and project dialogs.

`website/assets/` — all fonts and images. Replace an image using the same filename, or update its path in `index.html`.

The contact address is **contact@droneforfuture.com**. To change it, replace every occurrence in `index.html`, including the `mailto:` links. There is no form database or sending service: clicking a contact button opens the visitor’s email app with a draft.

## Image and content context

- `digital-city-drones.webp` is an AI-edited concept illustration featuring civilian surveying drones above a connected city. It is labelled as a concept visual; it does not represent an installed city platform or live data.
- The Albi photograph, campus photograph and founder portrait were taken from the owner’s existing `droneforfuture.com/FC/` portfolio. The comparison’s `albi-wireframe-xray.webp` is an edit of the previously aligned digital illustration. It adds transparent wireframe surfaces, suggested internal arches and a survey drone while retaining the exterior viewpoint and framing. Both comparison layers use a single responsive image plane, recalculated when the frame changes size. A small landmark framing offset is defined on the comparison element as `data-digital-offset-x` and `data-digital-offset-y`, in pixels of the 901 × 673 reference photograph. The interior is conceptual, and the image is not a surveyed interior model, a survey-accuracy comparison or a high-poly/low-poly performance comparison.
- Albi / EGCERSIS is presented as 3D modelling for an IMT Mines Albi VR crisis-training programme.
- The EcoDomus / Schneider Electric reference identifies a modelling contribution to a wider pilot, without implying endorsement.
- The Albi / IMT Mines Albi / Georgia Tech direction is marked **in development**. Update this wording when the collaboration’s scope is formalised.
- There are no invented impact statistics, client testimonials or live sensor readings.
- F.E.R.A.S. uses **Frame the challenge** for the general business context, alongside Encode the system, Real-time feedback loops, Adapt with intelligence, and Synchronise physical & digital. Its capabilities inform one another through feedback. The shared building-fire example illustrates how DFF could combine fixed sensor streams, mobile observations and verified physical-asset changes to keep the twin aligned during a crisis. Thermal drones are a possible mobile sensing source where appropriate. Timestamps, data gaps and the last known state remain visible; this describes an illustrative application, not a deployed emergency-response service.
- See `ASSET-NOTES.md` for exact image source paths and the bundled font licence.

## Explore and edit F.E.R.A.S.

Open **Our approach** and select F, E, R, A or S. Each capability explains its purpose, a practical output and its part in the same building example. The related-capability button follows one connection through the framework. The diagram's relationship summary shows how feedback informs responses, lessons refine objectives and models, and synchronisation keeps assets and observations aligned.

Select **S — Synchronise physical & digital** for the live-streaming use case: sensor readings and imagery are located and timestamped in the twin, while confirmed asset damage, equipment locations and geometry changes update its physical representation. Mobile sensors, including thermal drones where appropriate, can supplement fixed coverage during a fire. The website itself does not connect to live sensors.

Open **How we implement it** to explore the existing technical workflow. The two tab groups keep their selections independently. Both support keyboard arrows, Home and End, as well as mouse and touch selection.

All five capability texts are in `website/index.html` under `id="approach"`. Each `feras-tab-*` control maps to a `feras-panel-*` panel; keep these identifiers paired when editing. Layout and layer accents are in the F.E.R.A.S. section of `website/assets/styles.css`. The diagram uses local HTML and CSS and needs no image, external library or server.

## Technical notes

All runtime resources are local. There are no external scripts, analytics, cookies or browser-storage dependencies in the website code. Your hosting provider may still keep ordinary server logs.

This is a corporate website describing DFF’s capabilities. The illustrative comparison and process controls are interactive; they do not provide an operational Digital Twin platform or an IoT backend. The cathedral comparison uses two images; it is not a navigable 3D model. A verified 3D interior viewer would require the corresponding model and interior survey assets.

If this source is opened in its original Sites checkout, the uploadable `website` folder is named `dist`. Both contain the same public website files. Hosting metadata is deliberately excluded from the customer upload ZIP.
