const musicPlaylist = [
  {
    title: "A música que me lembra dos nossos olhares sinceros",
    artist: "Guilherme Santos + Sophia Helenuhyth",
    cover: "./assets/img/foto-01.jpg",
    src: "./assets/media/musica-01.mp3",
    spotifyUrl: "https://open.spotify.com/intl-pt/track/7D0RhFcb3CrfPuTJ0obrod?si=b56887963c454c5d"
  },
  {
    title: "A nossa praia, onde tudo começou a ficar mais sério.",
    artist: "G + S",
    cover: "./assets/img/foto-02.jpg",
    src: "./assets/media/musica-02.mp3",
    spotifyUrl: "https://open.spotify.com/intl-pt/track/7F0JCdobSgSgMLnEKAeBMa?si=95d990475f904412"
  },
  {
    title: "Essa a nossa filha vai ouvir um dia.",
    artist: "G + S",
    cover: "./assets/img/foto-03.jpg",
    src: "./assets/media/musica-03.mp3",
    spotifyUrl: "https://open.spotify.com/intl-pt/track/2YgAAAq8h7nPIMVLVVSHtK?si=c9d0f49abe6646e0"
  },
  {
    title: "Voce é minha sorte.",
    artist: "G + S",
    cover: "./assets/img/foto-04.jpg",
    src: "./assets/media/musica-04.mp3",
    spotifyUrl: "https://open.spotify.com/intl-pt/track/5CbDKqtF6F6m1KUvsAf2Kf?si=9135902a039547d4"
  },
  {
    title: "Essa eu te apresentei e você nunca mais esqueceu.",
    artist: "G + S",
    cover: "./assets/img/foto-05.jpg",
    src: "./assets/media/musica-05.mp3",
    spotifyUrl: "https://open.spotify.com/intl-pt/track/56sxN1yKg1dgOZXBcAHkJG?si=3dcda58fc98a4b09"
  },
  {
    title: "Essa foi você que me apresentou e sempre gostamos.",
    artist: "G + S",
    cover: "./assets/img/foto-06.jpg",
    src: "./assets/media/musica-06.mp3",
    spotifyUrl: "https://open.spotify.com/intl-pt/track/1bQhZOoXYqjXs7u7rFXo0h?si=7954706933c94549"
  },
  {
    title: "Essa é o significado da resistencia do nosso relacionamento por ter a base firmada em Deus.",
    artist: "G + S",
    cover: "./assets/img/foto-07.jpg",
    src: "./assets/media/musica-07.mp3",
    spotifyUrl: "https://open.spotify.com/intl-pt/track/04kKWsLZ0y7O9byzBBOXEW?si=e1980067d3484b47"
  },
  {
    title: "Em qualquer hora eu quero você.",
    artist: "G + S",
    cover: "./assets/img/foto-08.jpg",
    src: "./assets/media/musica-08.mp3",
    spotifyUrl: "https://open.spotify.com/intl-pt/track/1MnUXXQEuzlJFNF5xMH1XQ?si=88a0fc57c8bd4c0c"
  },
  {
    title: "Essa tem um significado muito profundo, mas nos ensina que Cristo é a luz do mundo.",
    artist: "G + S",
    cover: "./assets/img/foto-09.jpg",
    src: "./assets/media/musica-09.mp3",
    spotifyUrl: "https://open.spotify.com/intl-pt/track/6JhK1r09ZViJy723xux4Ty?si=7b779394eaad4bde"
  },
  {
    title: "E essa eu gosto bastante, VOCÊ É MINHA CERTEZA!",
    artist: "G + S",
    cover: "./assets/img/foto-10.jpg",
    src: "./assets/media/musica-10.mp3",
    spotifyUrl: "https://open.spotify.com/intl-pt/track/3MZasYL4eB4Tm2U2LZ58tj?si=721af6eadb164ef6"
  }
];

const audio = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const trackTitle = document.getElementById("trackTitle");
const trackArtist = document.getElementById("trackArtist");
const coverArt = document.getElementById("coverArt");
const spotifyCard = document.querySelector(".spotify-card");
const prevTrackBtn = document.getElementById("prevTrackBtn");
const nextTrackBtn = document.getElementById("nextTrackBtn");
const spotifyEmbedWrap = document.getElementById("spotifyEmbedWrap");
const spotifyEmbedFrame = document.getElementById("spotifyEmbedFrame");
const surpriseLayer = document.getElementById("surpriseLayer");
const surpriseBtn = document.getElementById("surpriseBtn");
const finalSurpriseBtn = document.getElementById("finalSurpriseBtn");
const finalSurpriseOverlay = document.getElementById("finalSurpriseOverlay");
const closeFinalSurpriseBtn = document.getElementById("closeFinalSurpriseBtn");
const futureMessageOverlay = document.getElementById("futureMessageOverlay");
const openFutureMessageBtn = document.getElementById("openFutureMessageBtn");
const closeFutureMessageBtn = document.getElementById("closeFutureMessageBtn");
const photoLightbox = document.getElementById("photoLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const closePhotoLightboxBtn = document.getElementById("closePhotoLightboxBtn");
const showtimeBtn = document.getElementById("showtimeBtn");
const printMemoryBtn = document.getElementById("printMemoryBtn");
const qrCodeImage = document.getElementById("qrCodeImage");
const qrCodeHint = document.getElementById("qrCodeHint");
const ambientYoutubePlayer = document.getElementById("ambientYoutubePlayer");
const ambientToggleBtn = document.getElementById("ambientToggleBtn");
const themeToggleBtn = document.getElementById("themeToggleBtn");
const backToTopBtn = document.getElementById("backToTopBtn");
const favoritePhotoMain = document.getElementById("favoritePhotoMain");
const heartBtn = document.getElementById("heartBtn");
const secretMsg = document.getElementById("secretMsg");
const loveLetter = document.getElementById("loveLetter");
const openLetterBtn = document.getElementById("openLetterBtn");
const togetherClock = document.getElementById("togetherClock");
const datingClock = document.getElementById("datingClock");
const togetherSummary = document.getElementById("togetherSummary");
const datingSummary = document.getElementById("datingSummary");
const princessName = "Sophia";
const themeStorageKey = "surpresa-theme";

let currentTrackIndex = 0;
let isTrackTransitioning = false;

function applyTheme(theme) {
  const isLight = theme === "light";
  document.body.classList.toggle("light-mode", isLight);

  if (themeToggleBtn) {
    themeToggleBtn.textContent = isLight ? "Modo escuro" : "Modo claro";
  }
}

function detectInitialTheme() {
  try {
    const savedTheme = localStorage.getItem(themeStorageKey);
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }
  } catch {
    // no-op
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

applyTheme(detectInitialTheme());

function getCurrentTrack() {
  return musicPlaylist[currentTrackIndex] || null;
}

function extractSpotifyTrackId(url) {
  if (!url) {
    return null;
  }

  const trackMatch = url.match(/open\.spotify\.com\/(?:intl-[a-z]{2}\/)?track\/([a-zA-Z0-9]+)/i);
  if (trackMatch?.[1]) {
    return trackMatch[1];
  }

  const uriMatch = url.match(/spotify:track:([a-zA-Z0-9]+)/);
  if (uriMatch?.[1]) {
    return uriMatch[1];
  }

  return null;
}

function hideSpotifyEmbed() {
  if (!spotifyEmbedWrap || !spotifyEmbedFrame) {
    return;
  }

  spotifyEmbedWrap.hidden = true;
  spotifyEmbedFrame.src = "";
  spotifyCard?.classList.remove("has-embed");
}

function showSpotifyEmbed(spotifyUrl) {
  const trackId = extractSpotifyTrackId(spotifyUrl);
  if (!trackId || !spotifyEmbedWrap || !spotifyEmbedFrame) {
    return;
  }

  spotifyEmbedFrame.src = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&autoplay=1`;
  spotifyEmbedWrap.hidden = false;
  spotifyCard?.classList.add("has-embed");
}

function clearTrackSwitchClasses() {
  spotifyCard.classList.remove(
    "track-switch-out",
    "track-switch-in",
    "track-switch-out-reverse",
    "track-switch-in-reverse"
  );
}

function setTrack(index, options = {}) {
  const { keepPlaying = false } = options;
  const track = musicPlaylist[index];
  if (!track) {
    return;
  }

  trackTitle.textContent = track.title;
  trackArtist.textContent = track.artist;
  if (coverArt) {
    coverArt.src = track.cover;
    coverArt.alt = `Capa da música ${track.title}`;
  }
  hideSpotifyEmbed();

  if (track.spotifyUrl) {
    audio.pause();
    audio.removeAttribute("src");
    audio.load();
  } else {
    audio.src = track.src;
  }

  progress.value = 0;
  progress.max = 0;
  progress.disabled = Boolean(track.spotifyUrl);
  currentTimeEl.textContent = "0:00";
  durationEl.textContent = "0:00";
  playBtn.textContent = "▶";

  if (keepPlaying && !track.spotifyUrl) {
    audio.play()
      .then(() => {
        playBtn.textContent = "❚❚";
      })
      .catch(() => {
        playBtn.textContent = "▶";
      });
  }
}

function switchTrack(direction, forceAutoplay = false) {
  if (!spotifyCard || isTrackTransitioning) {
    return;
  }

  const shouldKeepPlaying = forceAutoplay || !audio.paused;
  const isNext = direction === "next";
  isTrackTransitioning = true;

  const onOutEnd = (event) => {
    if (event.target !== spotifyCard) {
      return;
    }

    spotifyCard.removeEventListener("animationend", onOutEnd);
    if (isNext) {
      currentTrackIndex = (currentTrackIndex + 1) % musicPlaylist.length;
    } else {
      currentTrackIndex = (currentTrackIndex - 1 + musicPlaylist.length) % musicPlaylist.length;
    }
    setTrack(currentTrackIndex, { keepPlaying: shouldKeepPlaying });
    clearTrackSwitchClasses();
    spotifyCard.classList.add(isNext ? "track-switch-in" : "track-switch-in-reverse");

    const onInEnd = (inEvent) => {
      if (inEvent.target !== spotifyCard) {
        return;
      }

      spotifyCard.removeEventListener("animationend", onInEnd);
      clearTrackSwitchClasses();
      isTrackTransitioning = false;
    };

    spotifyCard.addEventListener("animationend", onInEnd);
  };

  clearTrackSwitchClasses();
  spotifyCard.classList.add(isNext ? "track-switch-out" : "track-switch-out-reverse");
  spotifyCard.addEventListener("animationend", onOutEnd);
}

setTrack(currentTrackIndex);

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60) || 0;
  const secs = Math.floor(seconds % 60) || 0;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

const timeUnits = [
  { key: "days", label: "DIAS", pad: 0 },
  { key: "hours", label: "HORAS", pad: 2 },
  { key: "minutes", label: "MIN", pad: 2 },
  { key: "seconds", label: "SEG", pad: 2 }
];

function toElapsedParts(ms) {
  if (ms <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const totalSeconds = Math.floor(ms / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60
  };
}

function formatUnitValue(value, pad) {
  return pad > 0 ? String(value).padStart(pad, "0") : String(value);
}

function addMonths(baseDate, monthsToAdd) {
  const year = baseDate.getFullYear();
  const month = baseDate.getMonth();
  const day = baseDate.getDate();
  const hours = baseDate.getHours();
  const minutes = baseDate.getMinutes();
  const seconds = baseDate.getSeconds();

  const targetMonth = month + monthsToAdd;
  const targetYear = year + Math.floor(targetMonth / 12);
  const normalizedMonth = ((targetMonth % 12) + 12) % 12;
  const lastDay = new Date(targetYear, normalizedMonth + 1, 0).getDate();
  const normalizedDay = Math.min(day, lastDay);

  return new Date(targetYear, normalizedMonth, normalizedDay, hours, minutes, seconds);
}

function fullCalendarDiff(startDate, endDate) {
  if (endDate <= startDate) {
    return { years: 0, months: 0, weeks: 0, days: 0 };
  }

  let months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
  months += endDate.getMonth() - startDate.getMonth();

  let cursor = addMonths(startDate, months);
  if (cursor > endDate) {
    months -= 1;
    cursor = addMonths(startDate, months);
  }

  let years = Math.floor(months / 12);
  months %= 12;

  const msPerDay = 24 * 60 * 60 * 1000;
  const remainingDays = Math.floor((endDate.getTime() - cursor.getTime()) / msPerDay);
  const weeks = Math.floor(remainingDays / 7);
  const days = remainingDays % 7;

  return { years, months, weeks, days };
}

function plural(value, singular, pluralForm) {
  return `${value} ${value === 1 ? singular : pluralForm}`;
}

function metric(value, singular, pluralForm) {
  const label = value === 1 ? singular : pluralForm;
  return `<span class="time-metric"><strong>${toEmojiNumber(value)}</strong> ${label}</span>`;
}

function toEmojiNumber(value) {
  const keycaps = {
    "0": "0️⃣",
    "1": "1️⃣",
    "2": "2️⃣",
    "3": "3️⃣",
    "4": "4️⃣",
    "5": "5️⃣",
    "6": "6️⃣",
    "7": "7️⃣",
    "8": "8️⃣",
    "9": "9️⃣"
  };

  return String(value)
    .split("")
    .map((char) => keycaps[char] || char)
    .join("");
}

function buildSummary(startMs, messageTail) {
  const now = new Date();
  const start = new Date(startMs);
  const diff = fullCalendarDiff(start, now);

  return `${metric(diff.years, "ano", "anos")}, ${metric(diff.months, "mes", "meses")}, ${metric(
    diff.weeks,
    "semana",
    "semanas"
  )} e ${metric(diff.days, "dia", "dias")} ${messageTail}`;
}

function createFlipUnit(label) {
  const unit = document.createElement("div");
  unit.className = "flip-unit";

  const unitLabel = document.createElement("div");
  unitLabel.className = "flip-unit-label";
  unitLabel.textContent = label;

  const card = document.createElement("div");
  card.className = "flip-card";

  const staticTop = document.createElement("div");
  staticTop.className = "flip-static-top";
  const staticBottom = document.createElement("div");
  staticBottom.className = "flip-static-bottom";
  const flipTop = document.createElement("div");
  flipTop.className = "flip-top";
  const flipBottom = document.createElement("div");
  flipBottom.className = "flip-bottom";
  const seam = document.createElement("div");
  seam.className = "flip-seam";

  card.append(staticTop, staticBottom, flipTop, flipBottom, seam);
  unit.append(unitLabel, card);

  return { unit, card, staticTop, staticBottom, flipTop, flipBottom, value: null };
}

function setHalfText(target, value) {
  let valueEl = target.querySelector(".flip-half-value");
  if (!valueEl) {
    valueEl = document.createElement("span");
    valueEl.className = "flip-half-value";
    target.appendChild(valueEl);
  }
  valueEl.textContent = value;
}

function setupFlipClock(container) {
  if (!container) {
    return null;
  }

  container.innerHTML = "";
  const map = {};

  timeUnits.forEach((item) => {
    const part = createFlipUnit(item.label);
    container.appendChild(part.unit);
    map[item.key] = part;
  });

  return map;
}

function animateFlip(part, fromValue, toValue) {
  setHalfText(part.flipTop, fromValue);
  setHalfText(part.flipBottom, toValue);
  setHalfText(part.staticTop, fromValue);
  setHalfText(part.staticBottom, fromValue);

  part.card.classList.remove("flipping");
  // Force reflow to restart animation when value changes quickly.
  void part.card.offsetWidth;
  part.card.classList.add("flipping");

  setTimeout(() => {
    setHalfText(part.staticTop, toValue);
    setHalfText(part.staticBottom, toValue);
    part.card.classList.remove("flipping");
  }, 700);
}

function animateTick(part, toValue) {
  setHalfText(part.staticTop, toValue);
  setHalfText(part.staticBottom, toValue);
  setHalfText(part.flipTop, toValue);
  setHalfText(part.flipBottom, toValue);

  part.card.classList.remove("seconds-tick");
  // Force reflow to restart animation on every second.
  void part.card.offsetWidth;
  part.card.classList.add("seconds-tick");
}

function updateFlipClock(map, elapsedParts) {
  if (!map) {
    return;
  }

  timeUnits.forEach((item) => {
    const part = map[item.key];
    const nextValue = formatUnitValue(elapsedParts[item.key], item.pad);

    if (part.value === null) {
      part.value = nextValue;
      setHalfText(part.staticTop, nextValue);
      setHalfText(part.staticBottom, nextValue);
      setHalfText(part.flipTop, nextValue);
      setHalfText(part.flipBottom, nextValue);
      return;
    }

    if (part.value !== nextValue) {
      animateTick(part, nextValue);
      part.value = nextValue;
    }
  });
}

const togetherStart = new Date(2025, 10, 7, 22, 30, 0).getTime();
const datingStart = new Date(2026, 0, 17, 15, 40, 0).getTime();
const togetherFlipMap = setupFlipClock(togetherClock);
const datingFlipMap = setupFlipClock(datingClock);

function updateRelationshipClocks() {
  const now = Date.now();
  const togetherParts = toElapsedParts(now - togetherStart);
  const datingParts = toElapsedParts(now - datingStart);

  updateFlipClock(togetherFlipMap, togetherParts);
  updateFlipClock(datingFlipMap, datingParts);

  if (togetherSummary) {
    togetherSummary.innerHTML = buildSummary(
      togetherStart,
      "que estou junto da mulher da minha vida."
    );
  }

  if (datingSummary) {
    datingSummary.innerHTML = buildSummary(
      datingStart,
      "que estou namorando a melhor pessoa que Deus poderia me dar para cuidar."
    );
  }
}

playBtn.addEventListener("click", async () => {
  const track = getCurrentTrack();
  if (track?.spotifyUrl) {
    showSpotifyEmbed(track.spotifyUrl);
    return;
  }

  if (audio.paused) {
    try {
      await audio.play();
      playBtn.textContent = "❚❚";
    } catch {
      playBtn.textContent = "▶";
    }
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
});

audio.addEventListener("loadedmetadata", () => {
  progress.max = Math.floor(audio.duration);
  durationEl.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  progress.value = Math.floor(audio.currentTime);
  currentTimeEl.textContent = formatTime(audio.currentTime);
});

progress.addEventListener("input", () => {
  audio.currentTime = progress.value;
});

audio.addEventListener("ended", () => {
  switchTrack("next", true);
});

if (prevTrackBtn) {
  prevTrackBtn.addEventListener("click", () => {
    switchTrack("prev", false);
  });
}

if (nextTrackBtn) {
  nextTrackBtn.addEventListener("click", () => {
    switchTrack("next", false);
  });
}

let surpriseRunning = false;
let romanticBurstRunning = false;
const MAX_ACTIVE_SURPRISE_PIECES = 64;
let activeSurprisePieces = 0;

function spawnSurprisePiece() {
  if (!surpriseLayer || activeSurprisePieces >= MAX_ACTIVE_SURPRISE_PIECES) {
    return;
  }

  const symbols = ["❤️", "💖", "💗", "✨", "🎉", "🎊"];
  const piece = document.createElement("span");
  piece.className = "surprise-piece";
  piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];

  const left = Math.random() * 100;
  const drift = (Math.random() * 120 - 60).toFixed(0);
  const duration = (Math.random() * 1.4 + 2.4).toFixed(2);
  const delay = (Math.random() * 0.12).toFixed(2);

  piece.style.left = `${left}vw`;
  piece.style.setProperty("--drift", `${drift}px`);
  piece.style.animationDuration = `${duration}s`;
  piece.style.animationDelay = `${delay}s`;

  activeSurprisePieces += 1;
  surpriseLayer.appendChild(piece);
  piece.addEventListener(
    "animationend",
    () => {
      piece.remove();
      activeSurprisePieces = Math.max(0, activeSurprisePieces - 1);
    },
    { once: true }
  );
}

function runRomanticBurst(durationMs = 1800, amountPerTick = 3) {
  if (romanticBurstRunning) {
    return;
  }

  romanticBurstRunning = true;
  const burstInterval = setInterval(() => {
    for (let i = 0; i < amountPerTick; i += 1) {
      spawnSurprisePiece();
    }
  }, 120);

  setTimeout(() => {
    clearInterval(burstInterval);
    romanticBurstRunning = false;
  }, durationMs);
}

if (openLetterBtn && loveLetter) {
  openLetterBtn.addEventListener("click", () => {
    const willOpen = !loveLetter.classList.contains("open");
    loveLetter.classList.toggle("open");
    if (willOpen) {
      runRomanticBurst(2000, 3);
    }
  });
}

if (surpriseBtn) {
  surpriseBtn.addEventListener("click", () => {
    if (surpriseRunning) {
      return;
    }

    surpriseRunning = true;
    surpriseBtn.classList.add("surprise-active");

    const intervalId = setInterval(() => {
      for (let i = 0; i < 2; i += 1) {
        spawnSurprisePiece();
      }
    }, 150);

    setTimeout(() => {
      clearInterval(intervalId);
      surpriseRunning = false;
      surpriseBtn.classList.remove("surprise-active");
    }, 4200);
  });
}

function setFinalSurpriseVisibility(isVisible) {
  if (!finalSurpriseOverlay) {
    return;
  }

  finalSurpriseOverlay.hidden = !isVisible;
  if (isVisible) {
    runRomanticBurst(2600, 4);
  }
}

function setFutureMessageVisibility(isVisible) {
  if (!futureMessageOverlay) {
    return;
  }

  if (isVisible) {
    futureMessageOverlay.hidden = false;
    requestAnimationFrame(() => {
      futureMessageOverlay.classList.add("is-open");
    });
    return;
  }

  futureMessageOverlay.classList.remove("is-open");
  setTimeout(() => {
    futureMessageOverlay.hidden = true;
  }, 620);
}

function setPhotoLightboxVisibility(isVisible, imageSrc = "", caption = "") {
  if (!photoLightbox || !lightboxImage || !lightboxCaption) {
    return;
  }

  photoLightbox.hidden = !isVisible;
  if (isVisible) {
    lightboxImage.src = imageSrc;
    lightboxCaption.textContent = caption;
  } else {
    lightboxImage.src = "";
    lightboxCaption.textContent = "";
  }
}

if (finalSurpriseBtn) {
  finalSurpriseBtn.addEventListener("click", () => {
    setFinalSurpriseVisibility(true);
  });
}

if (closeFinalSurpriseBtn) {
  closeFinalSurpriseBtn.addEventListener("click", () => {
    setFinalSurpriseVisibility(false);
  });
}

if (openFutureMessageBtn) {
  openFutureMessageBtn.addEventListener("click", () => {
    setFutureMessageVisibility(true);
  });
}

if (closeFutureMessageBtn) {
  closeFutureMessageBtn.addEventListener("click", () => {
    setFutureMessageVisibility(false);
  });
}

if (finalSurpriseOverlay) {
  finalSurpriseOverlay.addEventListener("click", (event) => {
    if (event.target === finalSurpriseOverlay) {
      setFinalSurpriseVisibility(false);
    }
  });
}

if (futureMessageOverlay) {
  futureMessageOverlay.addEventListener("click", (event) => {
    if (event.target === futureMessageOverlay) {
      setFutureMessageVisibility(false);
    }
  });
}

if (photoLightbox) {
  photoLightbox.addEventListener("click", (event) => {
    if (event.target === photoLightbox) {
      setPhotoLightboxVisibility(false);
    }
  });
}

if (closePhotoLightboxBtn) {
  closePhotoLightboxBtn.addEventListener("click", () => {
    setPhotoLightboxVisibility(false);
  });
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setFinalSurpriseVisibility(false);
    setFutureMessageVisibility(false);
    setPhotoLightboxVisibility(false);
  }
});

if (printMemoryBtn) {
  printMemoryBtn.addEventListener("click", () => {
    window.print();
  });
}

if (showtimeBtn) {
  showtimeBtn.addEventListener("click", () => {
    document.body.classList.toggle("showtime");
    showtimeBtn.textContent = document.body.classList.contains("showtime")
      ? "Sair do showtime"
      : "Modo showtime";
  });
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("light-mode") ? "dark" : "light";
    applyTheme(nextTheme);
    try {
      localStorage.setItem(themeStorageKey, nextTheme);
    } catch {
      // no-op
    }
  });
}

const ambientYouTubeVideoId = "o7aSK49_lxM";
const ambientYouTubeFallbackUrl = `https://www.youtube.com/watch?v=${ambientYouTubeVideoId}`;
let ambientYTPlayer = null;
let isAmbientPlaying = false;
let ambientApiPromise = null;
let ambientPlayerReadyPromise = null;

function loadYouTubeIframeApi() {
  if (window.YT?.Player) {
    return Promise.resolve();
  }

  if (ambientApiPromise) {
    return ambientApiPromise;
  }

  ambientApiPromise = new Promise((resolve, reject) => {
    const previousReady = window.onYouTubeIframeAPIReady;
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    script.onerror = () => reject(new Error("youtube-api-load-failed"));

    window.onYouTubeIframeAPIReady = () => {
      if (typeof previousReady === "function") {
        previousReady();
      }
      resolve();
    };

    document.head.appendChild(script);
  });

  return ambientApiPromise;
}

async function ensureAmbientPlayer() {
  if (ambientYTPlayer || !ambientYoutubePlayer) {
    if (ambientPlayerReadyPromise) {
      await ambientPlayerReadyPromise;
    }
    return ambientYTPlayer;
  }

  await loadYouTubeIframeApi();

  ambientPlayerReadyPromise = new Promise((resolve, reject) => {
    const readyTimeoutId = setTimeout(() => {
      reject(new Error("youtube-player-ready-timeout"));
    }, 7000);

    ambientYTPlayer = new window.YT.Player("ambientYoutubePlayer", {
      height: "0",
      width: "0",
      videoId: ambientYouTubeVideoId,
      playerVars: {
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        fs: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        playsinline: 1,
        rel: 0,
        loop: 1,
        playlist: ambientYouTubeVideoId
      },
      events: {
        onReady: () => {
          clearTimeout(readyTimeoutId);
          ambientYTPlayer?.setVolume(18);
          resolve();
        },
        onError: () => {
          clearTimeout(readyTimeoutId);
          reject(new Error("youtube-player-error"));
        }
      }
    });
  });

  await ambientPlayerReadyPromise;
  return ambientYTPlayer;
}

if (ambientToggleBtn && ambientYoutubePlayer) {
  ambientToggleBtn.addEventListener("click", async () => {
    try {
      const player = await ensureAmbientPlayer();
      if (!player) {
        ambientToggleBtn.textContent = "Não foi possível tocar";
        return;
      }

      if (!isAmbientPlaying) {
        player.setVolume(18);
        player.playVideo();
        isAmbientPlaying = true;
        ambientToggleBtn.textContent = "Desativar trilha sonora";
        return;
      }

      player.pauseVideo();
      isAmbientPlaying = false;
      ambientToggleBtn.textContent = "Ativar trilha sonora";
    } catch {
      ambientToggleBtn.textContent = "Abrindo no YouTube...";
      window.open(ambientYouTubeFallbackUrl, "_blank", "noopener,noreferrer");
      setTimeout(() => {
        ambientToggleBtn.textContent = "Ativar trilha sonora";
      }, 1400);
    }
  });
}

if (qrCodeImage) {
  const currentUrl = window.location.href;
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${encodeURIComponent(currentUrl)}`;
  qrCodeImage.src = qrApiUrl;

  if (qrCodeHint) {
    qrCodeHint.textContent = "Escaneie para abrir esta surpresa no celular.";
  }
}

if (backToTopBtn) {
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 420) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    },
    { passive: true }
  );

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

if (favoritePhotoMain) {
  favoritePhotoMain.addEventListener("click", async () => {
    if (!document.fullscreenElement) {
      try {
        await favoritePhotoMain.requestFullscreen();
      } catch {
        // no-op
      }
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  });
}

document.querySelectorAll(".photo-card").forEach((photo) => {
  photo.addEventListener("click", () => {
    const imageSrc = photo.getAttribute("src") || "";
    const caption = photo.getAttribute("alt") || "Nossa foto";
    setPhotoLightboxVisibility(true, imageSrc, caption);
  });
});

heartBtn.addEventListener("click", () => {
  secretMsg.classList.toggle("show");
});

updateRelationshipClocks();
setInterval(updateRelationshipClocks, 1000);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const hiddenLoveNodes = Array.from(document.querySelectorAll(".hidden-love"));
const heroTitle = document.getElementById("heroTitle");
const pageLoader = document.getElementById("pageLoader");
const introOverlay = document.getElementById("introOverlay");
const introStepOne = document.getElementById("introStepOne");
const introStepTwo = document.getElementById("introStepTwo");
const introNextBtn = document.getElementById("introNextBtn");
const introRevealBtn = document.getElementById("introRevealBtn");
const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const quizProgress = document.getElementById("quizProgress");
const quizNextBtn = document.getElementById("quizNextBtn");
const quizRestartBtn = document.getElementById("quizRestartBtn");
const quizResult = document.getElementById("quizResult");
const assembleTargets = [
  document.querySelector(".hero"),
  document.querySelector(".music-section"),
  document.querySelector(".gallery"),
  document.querySelector(".time-section"),
  document.querySelector(".quiz-section"),
  document.querySelector(".extras-section"),
  document.querySelector(".site-footer")
].filter(Boolean);

assembleTargets.forEach((target) => {
  target.classList.add("assemble-item");
});

const orderedAssembleTargets = [...assembleTargets];

function openIntroOverlay() {
  if (!introOverlay || !introStepOne || !introStepTwo) {
    document.body.classList.remove("intro-locked");
    return;
  }

  introStepOne.hidden = false;
  introStepTwo.hidden = true;
  introOverlay.hidden = false;

  requestAnimationFrame(() => {
    introOverlay.classList.add("is-open");
  });
}

function closeIntroOverlay() {
  if (!introOverlay) {
    return;
  }

  introOverlay.classList.remove("is-open");
  setTimeout(() => {
    introOverlay.hidden = true;
  }, 340);
}

function playComponentAssemble() {
  if (orderedAssembleTargets.length === 0) {
    document.body.classList.remove("intro-locked");
    return;
  }

  orderedAssembleTargets.forEach((target, index) => {
    const side = index % 2 === 0 ? -1 : 1;
    const distance = 52;
    const fromY = 0;
    const fromRot = side * 1.2;

    target.style.setProperty("--assemble-delay", `${index * 48}ms`);
    target.style.setProperty("--from-x", `${side * distance}vw`);
    target.style.setProperty("--from-y", `${fromY}vh`);
    target.style.setProperty("--from-rot", `${fromRot}deg`);
  });

  document.body.classList.remove("intro-locked");
  document.body.classList.add("assembling-components");

  setTimeout(() => {
    document.body.classList.remove("assembling-components");
    orderedAssembleTargets.forEach((target) => {
      target.style.removeProperty("--assemble-delay");
      target.style.removeProperty("--from-x");
      target.style.removeProperty("--from-y");
      target.style.removeProperty("--from-rot");
    });
  }, orderedAssembleTargets.length * 48 + 760);
}

if (introNextBtn && introStepOne && introStepTwo) {
  introNextBtn.addEventListener("click", () => {
    introStepOne.hidden = true;
    introStepTwo.hidden = false;
  });
}

if (introRevealBtn) {
  introRevealBtn.addEventListener("click", () => {
    closeIntroOverlay();
    playComponentAssemble();
  });
}

if (canHover && hiddenLoveNodes.length > 0) {
  const revealRadius = 170;
  const fadeRadius = 280;
  let pointerX = window.innerWidth / 2;
  let pointerY = window.innerHeight / 2;
  let rafId = null;

  function renderHiddenLove() {
    hiddenLoveNodes.forEach((node) => {
      const rect = node.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      const dx = pointerX - x;
      const dy = pointerY - y;
      const distance = Math.hypot(dx, dy);

      let intensity = 0;
      if (distance <= revealRadius) {
        intensity = 1 - distance / revealRadius;
      } else if (distance <= fadeRadius) {
        intensity = 0.2 * (1 - (distance - revealRadius) / (fadeRadius - revealRadius));
      }

      node.style.opacity = intensity > 0 ? `${Math.min(0.95, intensity)}` : "0";
      node.style.transform = `translate(-50%, -50%) scale(${0.94 + intensity * 0.06})`;
      node.classList.toggle("is-near", intensity > 0.55);
    });

    rafId = null;
  }

  function scheduleRender() {
    if (rafId !== null) {
      return;
    }
    rafId = requestAnimationFrame(renderHiddenLove);
  }

  window.addEventListener(
    "pointermove",
    (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      scheduleRender();
    },
    { passive: true }
  );

  window.addEventListener("resize", scheduleRender);

  window.addEventListener("pointerleave", () => {
    hiddenLoveNodes.forEach((node) => {
      node.style.opacity = "0";
      node.style.transform = "translate(-50%, -50%) scale(0.94)";
      node.classList.remove("is-near");
    });
  });

  scheduleRender();
}

if (heroTitle) {
  const fullText = heroTitle.dataset.fulltext || heroTitle.textContent || "";
  const typingSpeedMs = 55;
  let index = 0;

  heroTitle.textContent = "";
  heroTitle.classList.add("typing");

  const typingInterval = setInterval(() => {
    index += 1;
    heroTitle.textContent = fullText.slice(0, index);

    if (index >= fullText.length) {
      clearInterval(typingInterval);
      heroTitle.classList.remove("typing");
    }
  }, typingSpeedMs);
}

const quizData = [
  {
    question: "Quem normalmente fala “te amo” primeiro no dia?",
    options: [
      { text: "Ela 💕", points: 2 },
      { text: "Ele 💘", points: 1 },
      { text: "Os dois juntos 😍", points: 3 }
    ]
  },
  {
    question: "Qual rolê mais combina com vocês?",
    options: [
      { text: "Praia e conversa tranquila", points: 3 },
      { text: "Filme e lanche em casa", points: 2 },
      { text: "Passeio aleatório e risadas", points: 2 }
    ]
  },
  {
    question: "Como você resume o relacionamento de vocês?",
    options: [
      { text: "Companheirismo + fé + amor", points: 3 },
      { text: "Parceria divertida", points: 2 },
      { text: "Minha melhor decisão", points: 3 }
    ]
  },
  {
    question: "Qual momento de vocês mais dá vontade de repetir sempre?",
    options: [
      { text: "Passeio tranquilo e conversa", points: 3 },
      { text: "Dias simples em casa", points: 2 },
      { text: "Qualquer momento juntos", points: 3 }
    ]
  },
  {
    question: "Quem normalmente escolhe a música do momento?",
    options: [
      { text: "Ela", points: 2 },
      { text: "Ele", points: 1 },
      { text: "Os dois escolhem juntos", points: 3 }
    ]
  },
  {
    question: "Quando vocês estão juntos, o clima fica como?",
    options: [
      { text: "Leve, engraçado e cheio de carinho", points: 3 },
      { text: "Calmo e acolhedor", points: 2 },
      { text: "Uma mistura perfeita dos dois", points: 3 }
    ]
  },
  {
    question: "Qual palavra define melhor vocês?",
    options: [
      { text: "Propósito", points: 3 },
      { text: "Parceiros", points: 2 },
      { text: "Amor de verdade", points: 3 }
    ]
  },
  {
    question: "Quando vocês enfrentam um dia difícil, o que prevalece?",
    options: [
      { text: "Diálogo e apoio", points: 3 },
      { text: "Silêncio e abraço", points: 2 },
      { text: "Fé e união", points: 3 }
    ]
  },
  {
    question: "Qual seria o date perfeito de vocês hoje?",
    options: [
      { text: "Jantar + caminhada", points: 2 },
      { text: "Filme + coberta + carinho", points: 3 },
      { text: "Qualquer plano, juntos", points: 3 }
    ]
  },
  {
    question: "O que mais faz vocês darem certo?",
    options: [
      { text: "Respeito", points: 3 },
      { text: "Carinho diário", points: 2 },
      { text: "Escolher um ao outro todos os dias", points: 3 }
    ]
  }
];

let quizIndex = 0;
let quizScore = 0;
let selectedOptionIndex = null;
let quizAnswers = [];

function renderQuizQuestion() {
  if (!quizQuestion || !quizOptions || !quizProgress || !quizNextBtn) {
    return;
  }

  const current = quizData[quizIndex];
  quizQuestion.textContent = current.question;
  quizProgress.textContent = `Pergunta ${quizIndex + 1} de ${quizData.length}`;
  quizNextBtn.disabled = true;
  selectedOptionIndex = null;

  quizOptions.innerHTML = "";
  current.options.forEach((option, optionIndex) => {
    const optionBtn = document.createElement("button");
    optionBtn.type = "button";
    optionBtn.className = "quiz-option";
    optionBtn.textContent = option.text;

    optionBtn.addEventListener("click", () => {
      selectedOptionIndex = optionIndex;
      quizOptions.querySelectorAll(".quiz-option").forEach((btn) => btn.classList.remove("active"));
      optionBtn.classList.add("active");
      quizNextBtn.disabled = false;
    });

    quizOptions.appendChild(optionBtn);
  });
}

function getQuizMessage(score, answers) {
  const maxScore = quizData.length * 3;
  const excellentCut = Math.ceil(maxScore * 0.82);
  const goodCut = Math.ceil(maxScore * 0.62);
  const optionCounts = [0, 0, 0];
  answers.forEach((answerIndex) => {
    if (answerIndex >= 0 && answerIndex <= 2) {
      optionCounts[answerIndex] += 1;
    }
  });

  const pickedTogetherOften = optionCounts[2] >= 5;
  const pickedCalmLove = optionCounts[0] >= 5;
  const pickedCozyLove = optionCounts[1] >= 5;
  const hasFaithBase = answers[2] === 0 || answers[7] === 2;
  const hasStrongPartnership = answers[4] === 2 && answers[9] === 2;
  const hasDailyAffection = answers[0] === 0 || answers[8] === 1;

  let tierPrefix = "Resultado: ";
  if (score >= excellentCut) {
    tierPrefix += "Casal nível lendário. ";
  } else if (score >= goodCut) {
    tierPrefix += "Conexão linda e muito verdadeira. ";
  } else {
    tierPrefix += "Amor real que cresce todo dia. ";
  }

  if (hasFaithBase && hasStrongPartnership) {
    return `${tierPrefix}A base de vocês é propósito, fé e escolha diária. ${princessName} e você formam um time raro. 💍✨`;
  }
  if (pickedTogetherOften) {
    return `${tierPrefix}Vocês funcionam no modo “nós dois contra o mundo”, com muita sintonia e cumplicidade. 💞`;
  }
  if (pickedCalmLove) {
    return `${tierPrefix}O relacionamento de vocês tem paz, diálogo e maturidade emocional. É bonito de ver. 🌿`;
  }
  if (pickedCozyLove || hasDailyAffection) {
    return `${tierPrefix}O amor de vocês é cheio de cuidado nos detalhes e carinho no cotidiano. 🫶`;
  }

  return `${tierPrefix}${princessName} e você têm uma história especial, com espaço para rir, crescer e amar cada vez mais. ❤️`;
}

function showQuizResult() {
  if (!quizResult || !quizQuestion || !quizOptions || !quizProgress || !quizNextBtn || !quizRestartBtn) {
    return;
  }

  quizQuestion.textContent = "Fim do mini quiz!";
  quizOptions.innerHTML = "";
  quizProgress.textContent = "Resultado final";
  quizResult.textContent = getQuizMessage(quizScore, quizAnswers);
  quizResult.hidden = false;
  quizNextBtn.hidden = true;
  quizRestartBtn.hidden = false;
  runRomanticBurst(2200, 4);
}

function resetQuiz() {
  quizIndex = 0;
  quizScore = 0;
  selectedOptionIndex = null;
  quizAnswers = [];

  if (quizResult && quizNextBtn && quizRestartBtn) {
    quizResult.hidden = true;
    quizNextBtn.hidden = false;
    quizRestartBtn.hidden = true;
  }

  renderQuizQuestion();
}

if (quizNextBtn && quizRestartBtn) {
  quizNextBtn.addEventListener("click", () => {
    if (selectedOptionIndex === null) {
      return;
    }

    quizScore += quizData[quizIndex].options[selectedOptionIndex].points;
    quizAnswers.push(selectedOptionIndex);
    quizIndex += 1;

    if (quizIndex >= quizData.length) {
      showQuizResult();
      return;
    }

    renderQuizQuestion();
  });

  quizRestartBtn.addEventListener("click", () => {
    resetQuiz();
  });

  resetQuiz();
}

window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.classList.add("loaded");
    document.body.classList.remove("loading");
    if (pageLoader) {
      pageLoader.setAttribute("aria-hidden", "true");
    }
    openIntroOverlay();
  }, 700);
});
