# DFF Consulting — asset notes

## Drone city concept illustration

`website/assets/digital-city-drones.webp`

AI-edited architectural Digital Twin illustration created with the built-in imagegen tool from the website’s original city concept. Civilian survey drones have been added to connect the Drone For Future identity to aerial capture and connected environments. The site identifies it as a concept visual. The delivery copy is WebP for efficient loading.

## Images reused from the owner's existing website

Retrieved on 7 September 2026. Retained for the owner's DFF Consulting website redesign.

| Delivered filename | Existing source |
| --- | --- |
| `albi-physical.webp` | `https://www.droneforfuture.com/FC/images/project-cathedral_physical.jpg` |
| `imt-physical.webp` | `https://www.droneforfuture.com/FC/images/IMT_real.jpg` |
| `feras-al-chama.webp` | `https://www.droneforfuture.com/FC/images/profile.jpg` |

Source images were converted to WebP for delivery. The campus image is a photograph used as project context.

## Cathedral wireframe / X-ray illustration

`website/assets/albi-wireframe-xray.webp` is an AI edit made with the built-in imagegen tool from the website’s previously aligned cathedral illustration. That earlier illustration was derived from the physical Albi photograph; the original `project-cathedral_virual_extra_small.jpg` portfolio image served as a cyan-wireframe style reference.

The new edit brief preserves the existing exterior camera, composition, silhouette, landmark positions and surrounding scene. Near-transparent navy faces and fine cyan wireframe edges reveal an illustrative interior volume and structural arches. A survey drone adds an aerial-capture cue. Both website layers share the photograph’s 901 × 673 reference plane and one cover-crop calculation at every viewport size, retaining the earlier +8 horizontal and +7 vertical reference-pixel framing correction. Fine architectural details remain stylised.

This image and its interior are labelled as illustrative. It is not an authenticated model export, an interior survey, or a measured registration result. No interior BIM/3D asset was available for this update.

## Typography

Manrope, distributed under the SIL Open Font License, Version 1.1. Three font files are bundled locally for regular, semibold and extra-bold text. The complete licence is included in `website/assets/Manrope-OFL.txt`.

Font sources: Google Fonts / Google Fonts repository.

## Interface graphics

The DFF monogram, favicon, geometric capability icons and process connectors are editable SVG/CSS interface graphics authored for the site. The monogram is a proposed visual identity treatment, not a claim of a registered trademark.

## F.E.R.A.S. framework

The F.E.R.A.S. framework comes from the owner's supplied **Framework for Resilient Systems** reference. It is attributed to Dr. Feras Al-Chama / DFF Consulting and expressed as five accessible, connected capability controls in HTML/CSS. The restrained accents echo the reference's F/E/R/A/S layer colours within the website's dark palette.

With the owner's approval, the general website uses **Frame the challenge** in place of the reference's crisis-specific wording. The other capabilities retain Encode the system, Real-time feedback loops, Adapt with intelligence, and Synchronise physical & digital. The connections and building-fire example explain the framework's application. Synchronisation combines real-time sensor streams with verified changes to physical assets; mobile sensors and thermal drones can supplement fixed coverage where appropriate. All example panels are labelled illustrative.

## Final image edit prompts

Both edits used the built-in imagegen tool, one request per asset.

### City and survey drone

```text
Use case: precise-object-edit
Asset type: DFF Consulting (Drone For Future) website hero, cinematic digital-twin CGI.
Input image: the provided digital-city.webp is the EDIT TARGET. Edit this exact image, preserving its original full 3:2 framing.
Primary request: add one prominent realistic civilian professional survey quadcopter hovering in the open upper-right sky. Unbranded dark graphite body, four physically credible small rotors, clean restrained cyan navigation details, visible camera/LiDAR gimbal. It must read clearly as a drone when displayed in a website crop.
Composition: drone center roughly 77% across and 15% down, spanning about 18% of the image width, correctly foreshortened in perspective. Keep the cyan main tower completely readable; use the nearby open sky and let the drone hover clear of the tower outline. Add one very subtle thin cyan scanning connection from the drone toward the city.
Style: integrate the drone naturally into the existing cinematic CGI marketing art, matching existing deep near-black teal, cyan lighting, highlights, shadow and perspective.
Invariants: preserve the ENTIRE existing city, all buildings and architecture, cyan wireframe main tower, architectural layout, roads, bridges, water, landscape, composition, lighting, dark margins, camera and original framing. Change only by adding the drone and subtle scanning connection. No crop, zoom, rearrangement or new background.
Avoid: text, logos, watermarks, interface, labels, military design, weapons, exaggerated giant rotors, harsh giant beams, obscuring the main tower.
Output: one image only, same 3:2 aspect ratio and full original 1536x1024 composition.
```

### Cathedral wireframe and illustrative interior

```text
Use case: precise-object-edit
Asset type: DFF Consulting (Drone For Future) website digital-twin comparison image, conceptual architectural art.
Input image: the provided albi-digital-aligned.webp is the sole EDIT TARGET. It is already registered to a physical-photo comparison. Edit this exact digital image, not a new reconstruction.
Primary request: change only the cathedral's surface treatment from mostly opaque cyan shaded mesh to a much lighter, fine cyan wireframe X-ray rendering with near-transparent navy faces. We should be able to see subtly through its outer walls and roof into an ILLUSTRATIVE nave volume with ribbed vaults and interior structural arches. This is conceptual interior visualization, not a claimed surveyed interior.
Visual hierarchy: exterior silhouette, mesh edges, buttresses, doorway and roofline stay sharp and recognizable; the interior vault ribs and arches are fainter, visible inside the original exterior volume; surroundings remain visually quiet. Keep enough exterior edges for photo-comparison registration. Preserve the existing exterior mesh geometry exactly. The outcome should feel substantially more transparent and wireframe than the original, with the original bright opaque cyan face-fill removed.
Add one small but clearly recognizable civilian survey quadcopter in the upper-right river/sky area, entirely away from the cathedral outline. Dark graphite drone with four rotors, a camera/LiDAR gimbal, restrained cyan details; one faint cyan scan line points toward the cathedral roof.
Critical invariants: preserve EXACT exterior silhouette and ALL landmark positions, frame, camera, perspective, tower top, tower base, roofline, doorway, buttresses, surrounding buildings, bridge and river. Do not move, crop, rescale, change camera or rearrange any existing feature. Do not reconstruct the cathedral with a different viewpoint. Do not cut away any wall or roof: show translucency through the complete preserved exterior.
Avoid: fantasy industrial machinery, unrelated modern floors, labels, dimensions, text, watermarks, UI, logos, oversized drone, strong beams, invented exterior architecture.
Output: one image only, same full 4:3 composition and original 1448x1086 framing, with no cropping or rearrangement.
```
