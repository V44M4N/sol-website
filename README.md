# Sol The Brew House

Next.js 16, React 19, TypeScript, Tailwind CSS and Framer Motion.

## Local development

Run `npm install`, then `npm run dev -- --port 58994`.
Open http://localhost:58994. Validate with `npx tsc --noEmit` and `npm run build`.
For a production server, run `npm run build` followed by `npm start`.

## Content and assets

- Business details, supplied beer descriptions and gallery references: `src/lib/sol.ts`.
- Homepage sequence: `src/app/page.tsx`.
- Design styles: `src/app/globals.css`.
- Original assets remain in `SOL photos&videos/`.
- Browser-ready assets are in `public/media/`. Public URLs start with `/media/`.
- New PNG beer images are served as high-quality WebP files with a `-v2` suffix. Venue photos retain up to 2000px of source resolution. Day/golden-hour/night backgrounds have lightly sharpened, 2560px upscaled versions.
- Six header clips follow the source filenames: `solthebrewhouse_startingvideo`, `solthebrewhouse_video1` through `video4`, then `solthebrewhouse_addinthelastvideo`. Browser copies preserve those stems and use H.264 MP4, muted playback, fast-start metadata, and a 3 Mbps bitrate cap.
- The venue gallery uses `solthebrewhouse_GalleryBackgroundImage.jpg` and separate Brew House and Cafe Sol collections. Photo dimensions in `src/lib/media-dimensions.json` preserve original proportions without cropping.
- Food and drinks live on `/culinary-collective-gallery`, titled Culinary Collective Gallery. Its five background videos advance on playback completion and repeat the playlist, independent of scrolling. Reduced-motion and data-saving preferences use the static photo; offscreen playback pauses.
- Originals remain in `SOL photos&videos/`; there are no separate top-level Photos/ or Videos/ folders in this checkout. Converted video copies in `public/media/videos/` preserve the source filename stems; original extensions are retained in the source folder. Older derived video files are not referenced by the current playlists.
- Bar menu: `public/media/menus/bar/1.avif` through `9.avif`.
- Food menu: `public/media/menus/food/1.avif` through `13.avif`.
- Menus display the supplied original scans, preserving prices and wording, with an enlarge/zoom viewer. They are not a transcribed or searchable menu database.
- The promotional 1+1 video is intentionally unpublished because its validity dates and terms have not been confirmed.

The homepage prioritizes the Brew House, then the atmosphere, Cafe Sol and the day-to-night experience. Four beer detail routes live under `/brews/[slug]`. Legacy menu routes redirect to `/food`.

## Reservations and contact

Reservations are now handled by reception at +91 80913 96732. All booking calls to action use `tel:+918091396732`. The website does not create or confirm reservations. Contact details were checked against the existing Sol Google Site; the map uses the supplied Cafe Sol location at Hotel Combermere.

## Deployment settings

Set `SITE_URL` to the approved production origin to populate the sitemap. No domain is assumed. Google Maps uses a public embed and needs no API key. Local media requires no external storage credentials.

## Admin status

The inherited admin interfaces remain prototypes using client-side state. Authentication, database persistence and CMS publishing are not implemented. Public content currently comes from `src/lib/sol.ts` and local assets; admin edits do not publish changes. Do not expose these admin interfaces as a production management system. The Prisma schema remains a foundation only.

## Verification

The public pages were checked in Chromium and WebKit, including video playback, mobile navigation, gallery lightbox keyboard controls, menu switching, map loading, and reduced-motion behavior. Layouts were checked at 320, 375, 390, 414, 768, 1024 and 1440 pixels. Real-device Safari testing is still recommended before launch.
