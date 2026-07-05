# NO ANTIDOTE — website

A single-page parallax site for the band **NO ANTIDOTE**.

## Structure

1. **Hero** — logo + live countdown to the release. Once the countdown hits zero,
   the counter is automatically replaced by an embedded YouTube video.
2. **Listen** — icon links to streaming services (Spotify, Apple Music, YouTube Music, TIDAL, Deezer, YouTube).
3. **Follow** — social icon links (Instagram, Facebook, TikTok).
4. **Booking** — phone number and email.

## Files

- `index.html` — markup
- `styles.css` — styling + parallax layers
- `script.js` — countdown, video swap, streaming links, phone, parallax
- `assets/` — `background.jpg` (optimized), `background.png` (original), `logo-white.svg`, `logo.svg`

## ⚙️ What you need to fill in

Everything editable lives in the `CONFIG` object at the top of **`script.js`**:

| Setting | What to put |
| --- | --- |
| `releaseISO` | Release moment. Currently `2026-07-09T00:00:00+03:00` (midnight, Bucharest time). The `+03:00` offset is Bucharest's summer time (EEST) — the countdown is correct for visitors in any timezone. Change the time-of-day if the drop isn't at midnight. |
| `youtubeId` | The 11-char YouTube video ID (from `youtu.be/VIDEO_ID`) shown after the countdown ends. |
| `phoneDisplay` / `phoneDial` | Booking number — displayed text and the `tel:` dial string. |
| `email` | Booking email — used for the displayed text and the `mailto:` link. |
| `links.*` | Streaming URLs (Spotify / Apple Music / YouTube Music / TIDAL / Deezer / YouTube). Set any to `""` to hide that icon. |
| `social.*` | Social URLs (Instagram / Facebook / TikTok). Set any to `""` to hide that icon. |

## Run locally

Any static server works, e.g.:

```bash
python3 -m http.server 4173
# then open http://localhost:4173
```

## Deploy

It's fully static — drop the folder on any static host (GitHub Pages, Netlify, Vercel, S3, etc.).
