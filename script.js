/* ============================================================
   NO ANTIDOTE — site config
   Edit the values below. Everything you need to change is here.
   ============================================================ */
const CONFIG = {
  // Release moment. Defined in Bucharest time (EEST, UTC+3 in July).
  // The countdown targets this exact instant, so a visitor in the UK
  // (or anywhere) sees the correct remaining time to Bucharest's clock.
  releaseISO: "2026-07-09T18:00:00+03:00",

  // YouTube video shown once the countdown reaches zero.
  // Use the 11-character video ID (from https://youtu.be/VIDEO_ID).
  youtubeId: "4hIQT6OTzWY",

  // Booking contact.
  phoneDisplay: "+40 770 319 277",
  phoneDial: "+40770319277", // digits only, used for the tel: link
  email: "noantidoteofficial@gmail.com",

  // Streaming links (Listen section). Leave a value empty ("") to hide that icon.
  links: {
    spotify:    "https://open.spotify.com/artist/6SVBYtAtx5Vbnvcjf0PuCt",
    appleMusic: "https://music.apple.com/us/artist/no-antidote/1246919769",
    ytMusic:    "https://music.youtube.com/channel/UC0rUVMYEONrqq9lCu0lV-Fg",
    youtube:    "https://www.youtube.com/@NoAntidoteOfficial",
    tidal:      "https://tidal.com/artist/7490857",
    deezer:     "https://www.deezer.com/us/artist/9595022",
  },

  // Social links (Follow section). Leave a value empty ("") to hide that icon.
  social: {
    instagram:  "https://www.instagram.com/noantidoteofficial/",
    facebook:   "https://www.facebook.com/noantidoteband/",
    tiktok:     "https://www.tiktok.com/@no.antidote_tikto",
  },
};

/* ============================================================
   Brand icons (inline SVG)
   ============================================================ */
const ICONS = {
  spotify: `<svg viewBox="0 0 24 24" fill="#1DB954" aria-hidden="true"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.5 17.32a.75.75 0 0 1-1.03.25c-2.82-1.72-6.37-2.11-10.55-1.16a.75.75 0 1 1-.33-1.46c4.57-1.04 8.5-.59 11.66 1.34.35.22.46.68.25 1.03zm1.47-3.27a.94.94 0 0 1-1.29.31c-3.23-1.98-8.15-2.56-11.97-1.4a.94.94 0 1 1-.55-1.8c4.37-1.33 9.79-.68 13.5 1.6.44.27.58.85.31 1.29zm.13-3.4C15.73 8.28 8.6 8.05 4.86 9.19a1.12 1.12 0 1 1-.65-2.15c4.29-1.3 12.17-1.05 16.42 1.47a1.12 1.12 0 1 1-1.15 1.93z"/></svg>`,

  appleMusic: `<svg viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="am" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FB5C74"/><stop offset="1" stop-color="#FA2C57"/></linearGradient></defs><rect width="24" height="24" rx="6" fill="url(#am)"/><path fill="#fff" d="M16 6.5v6.8c0 1-.85 1.8-1.9 1.8s-1.9-.8-1.9-1.8.85-1.8 1.9-1.8c.28 0 .55.05.8.14V8.45l-4.6 1v6.05c0 1-.85 1.8-1.9 1.8s-1.9-.8-1.9-1.8.85-1.8 1.9-1.8c.28 0 .55.05.8.14V7.6c0-.4.28-.62.62-.7l5.4-1.2c.4-.09.68.13.68.55z"/></svg>`,

  ytMusic: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12" fill="#FF0000"/><path fill="#fff" d="M12 5.6a6.4 6.4 0 1 0 0 12.8 6.4 6.4 0 0 0 0-12.8zm0 11.5a5.1 5.1 0 1 1 0-10.2 5.1 5.1 0 0 1 0 10.2zM9.9 9.1v5.8L15 12l-5.1-2.9z"/></svg>`,

  youtube: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#FF0000" d="M23.5 6.2a3 3 0 0 0-2.11-2.13C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.39.52A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.11 2.13c1.89.52 9.39.52 9.39.52s7.5 0 9.39-.52a3 3 0 0 0 2.11-2.13A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8z"/><path fill="#fff" d="M9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/></svg>`,

  tidal: `<svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M12.012 3.992L8.008 7.996 4.004 3.992 0 7.996 4.004 12l4.004-4.004L12.012 12l-4.004 4.004 4.004 4.004 4.004-4.004L12.012 12l4.004-4.004-4.004-4.004zM16.042 7.996l3.979-3.979L24 7.996l-3.979 3.979z"/></svg>`,

  deezer: `<svg viewBox="0 0 24 24" fill="#A238FF" aria-hidden="true"><path d="M.693 10.024c.381 0 .693-1.256.693-2.807 0-1.55-.312-2.807-.693-2.807C.312 4.41 0 5.666 0 7.217s.312 2.808.693 2.808ZM21.038 1.56c-.364 0-.684.805-.91 2.096C19.765 1.446 19.184 0 18.526 0c-.78 0-1.464 2.036-1.784 5-.312-2.158-.788-3.536-1.325-3.536-.745 0-1.386 2.704-1.62 6.472-.442-1.932-1.083-3.145-1.793-3.145s-1.35 1.213-1.793 3.145c-.242-3.76-.874-6.463-1.628-6.463-.537 0-1.013 1.378-1.325 3.535C6.938 2.036 6.262 0 5.474 0c-.658 0-1.247 1.447-1.602 3.665-.217-1.291-.546-2.105-.91-2.105-.675 0-1.221 2.807-1.221 6.272 0 3.466.546 6.273 1.221 6.273.277 0 .537-.476.736-1.273.32 2.928.996 4.938 1.776 4.938.606 0 1.143-1.204 1.507-3.11.251 3.622.875 6.195 1.602 6.195.46 0 .875-1.023 1.187-2.677C10.142 21.6 11 24 12.004 24c1.005 0 1.863-2.4 2.235-5.822.312 1.654.727 2.677 1.186 2.677.728 0 1.352-2.573 1.603-6.195.364 1.906.9 3.11 1.507 3.11.78 0 1.455-2.01 1.775-4.938.208.797.46 1.273.737 1.273.675 0 1.22-2.807 1.22-6.273-.008-3.457-.553-6.272-1.23-6.272ZM23.307 10.024c.381 0 .693-1.256.693-2.807 0-1.55-.312-2.807-.693-2.807-.381 0-.693 1.256-.693 2.807s.312 2.808.693 2.808Z"/></svg>`,

  instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><defs><radialGradient id="ig" cx="30%" cy="107%" r="150%"><stop offset="0" stop-color="#fdf497"/><stop offset="0.05" stop-color="#fdf497"/><stop offset="0.45" stop-color="#fd5949"/><stop offset="0.6" stop-color="#d6249f"/><stop offset="0.9" stop-color="#285AEB"/></radialGradient></defs><path fill="url(#ig)" d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>`,

  facebook: `<svg viewBox="0 0 24 24" fill="#1877F2" aria-hidden="true"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>`,

  tiktok: `<svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`,
};

const LABELS = {
  spotify: "Spotify",
  appleMusic: "Apple Music",
  ytMusic: "YouTube Music",
  tidal: "TIDAL",
  deezer: "Deezer",
  youtube: "YouTube",
  instagram: "Instagram",
  facebook: "Facebook",
  tiktok: "TikTok",
};

/* ============================================================
   Countdown  →  swaps to YouTube video when it hits zero
   ============================================================ */
(function initCountdown() {
  const target = new Date(CONFIG.releaseISO).getTime();
  const els = {
    days: document.getElementById("cd-days"),
    hours: document.getElementById("cd-hours"),
    mins: document.getElementById("cd-mins"),
    secs: document.getElementById("cd-secs"),
  };
  const countdown = document.getElementById("countdown");
  const videoWrap = document.getElementById("video-wrap");
  const pad = (n) => String(n).padStart(2, "0");

  function showVideo() {
    // Once the release lands, leave just the logo with the video below it.
    countdown.hidden = true;
    const tagline = document.querySelector(".tagline");
    if (tagline) tagline.hidden = true;
    const frame = document.getElementById("video-frame");
    frame.innerHTML =
      `<iframe src="https://www.youtube-nocookie.com/embed/${CONFIG.youtubeId}?rel=0" ` +
      `title="NO ANTIDOTE" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ` +
      `allowfullscreen loading="lazy"></iframe>`;
    videoWrap.hidden = false;
  }

  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) {
      showVideo();
      clearInterval(timer);
      return;
    }
    const s = Math.floor(diff / 1000);
    els.days.textContent = pad(Math.floor(s / 86400));
    els.hours.textContent = pad(Math.floor((s % 86400) / 3600));
    els.mins.textContent = pad(Math.floor((s % 3600) / 60));
    els.secs.textContent = pad(s % 60);
  }

  tick();
  const timer = setInterval(tick, 1000);
})();

/* ============================================================
   Streaming links (with labels) + social links (icon only)
   ============================================================ */
(function initStreaming() {
  const list = document.getElementById("streaming");
  Object.keys(CONFIG.links).forEach((key) => {
    const url = CONFIG.links[key];
    if (!url) return;
    const li = document.createElement("li");
    li.innerHTML =
      `<a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${LABELS[key]}">` +
      `${ICONS[key]}<span class="label">${LABELS[key]}</span></a>`;
    list.appendChild(li);
  });
})();

(function initSocial() {
  const list = document.getElementById("social");
  Object.keys(CONFIG.social).forEach((key) => {
    const url = CONFIG.social[key];
    if (!url) return;
    const li = document.createElement("li");
    li.innerHTML =
      `<a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${LABELS[key]}" title="${LABELS[key]}">` +
      `${ICONS[key]}</a>`;
    list.appendChild(li);
  });
})();

/* ============================================================
   Booking phone
   ============================================================ */
(function initContact() {
  const phone = document.getElementById("phone-link");
  phone.href = `tel:${CONFIG.phoneDial}`;
  document.getElementById("phone-text").textContent = CONFIG.phoneDisplay;

  const email = document.getElementById("email-link");
  email.href = `mailto:${CONFIG.email}`;
  document.getElementById("email-text").textContent = CONFIG.email;
})();

/* ============================================================
   Parallax (translate layers on scroll) + footer year
   ============================================================ */
(function initParallax() {
  const layers = [...document.querySelectorAll(".parallax")];
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // The background stays fixed (never drifts) so scrolling never reveals
  // black edges. Depth comes from the content drifting gently over it.
  if (reduce) return;

  let ticking = false;
  function update() {
    layers.forEach((el) => {
      const speed = parseFloat(el.dataset.speed) || 0;
      const rect = el.parentElement.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * -speed;
      el.style.transform = `translateY(${offset}px)`;
    });
    ticking = false;
  }
  window.addEventListener("scroll", () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  window.addEventListener("resize", update);
  update();
})();

/* Reveal-on-scroll for the lower sections */
(function initReveal() {
  const targets = document.querySelectorAll(".listen .content, .social .content, .booking .content");
  targets.forEach((t) => t.classList.add("reveal"));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); });
  }, { threshold: 0.2 });
  targets.forEach((t) => io.observe(t));
})();

document.getElementById("year").textContent = new Date().getFullYear();
