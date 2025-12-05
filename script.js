// --------------- Lecture data ---------------
// Use the video ID only (the 11-char id after v=)
const lectures = [
  { num: 1, title: "বাক্য প্রকরণ পর্ব-০১", dur: "01:17", id: "RRlUr2r6Z9s" },
  { num: 2, title: "বাক্য প্রকরণ পর্ব-০২ + রেইনকোট", dur: "01:22", id: "NTz6ALwExpU" },
  { num: 3, title: "বিদ্রোহী", dur: "01:04", id: "jCq1Fhd8Qpg" },
  { num: 4, title: "সন্ধি", dur: "00:58", id: "O0P_q1dq1lI" },
  { num: 5, title: "সন্ধি & তাহারেই পড়ে মনে", dur: "01:08", id: "Aiiqm6hqY_w" },
  { num: 6, title: "অপরিচিতা, বাংলা ব্যাকরণ আলোচ্য বিষয়", dur: "01:10", id: "U5HQsNDEapc" },
  { num: 7, title: "ধ্বনি ও বর্ণ + বাংলা ব্যাকরণের আলোচ্য বিষয়", dur: "00:56", id: "Z4DuGm1yPp0" },
  { num: 8, title: "ধ্বনি ও বর্ণ ২, কারক ১", dur: "01:17", id: "XTJHz9XS1AI" },
  { num: 9, title: "কারক-০২", dur: "00:51", id: "8w9rQkCGSoo" },
  { num: 10, title: "ধ্বনি পরিবর্তন-১ ও সোনার তরী", dur: "01:10", id: "JULk5I6Uiik" },
  { num: 11, title: "ধ্বনি পরিবর্তন-2, আমার পথ এডমিশন", dur: "00:55", id: "ZIIbPSmkx2A" },
  { num: 12, title: "ণত্ব ও ষত্ব বিধান, সুচেতনা, পদ্মা", dur: "01:15", id: "BINlCrMB2z0" },
  { num: 13, title: "সমাস + বিলাসী", dur: "01:02", id: "3hu3crfio6U" },
  { num: 14, title: "সমাস পর্ব-০২", dur: "00:46", id: "5FPjEp_wFjQ" },
  { num: 15, title: "সমাস পর্ব-০৩", dur: "01:03", id: "k4cvd9l4o9A" },
  { num: 16, title: "পদ প্রকরণ–১, ফেব্রুয়ারি ১৯৬৯, আঠারো বছর বয়স", dur: "01:16", id: "j6NFpiyfyL4" },
  { num: 17, title: "সর্বনাম, অব্যয়, মাসিপিসি ও ক্রিয়াকাল", dur: "00:58", id: "PH294O0w4hU" },
  { num: 18, title: "বাংলা বানানের নিয়ম, আমি কিংবদন্তির কথা বলছি", dur: "01:07", id: "4OdUNSCBsvY" },
  { num: 19, title: "বাংলা সাহিত্যের যুগ বিভাজন", dur: "01:04", id: "HcZdO7oesE4" },
  { num: 20, title: "প্রকৃতি ও প্রত্যয় + ধাতু", dur: "01:02", id: "tEZ0m73i8fk" },
  { num: 21, title: "উচ্চারণ, উপসর্গ", dur: "01:10", id: "B12niv61qtM" },
  { num: 22, title: "পরিবর্তন-বাচ্য + নেকলেস + গৃহ", dur: "01:55", id: "-ywDyrjXWCQ" },
  { num: 23, title: "প্রয়োগ–অপপ্রয়োগ", dur: "00:50", id: "QW1ZlmQ4_HA" },
  { num: 24, title: "বিভীষণের প্রতি মেঘনাদ, সুচেতনা, ছবি", dur: "02:20", id: "E5mKNOaaic4" },
  { num: 25, title: "অভিধান বর্ণানুক্রম, লালসালু", dur: "00:41", id: "hTT-QkuFi1Y" },
  { num: 26, title: "শব্দ ভান্ডার ও লালসালু", dur: "01:10", id: "baEw3Y4DrRs" },
  { num: 27, title: "ঐতিহাসিক লিখিত ক্লাস পর্ব ১", dur: "01:13", id: "kgVx1JKdpBs" },
  { num: 28, title: "ঐতিহাসিক লিখিত ক্লাস পর্ব ২", dur: "01:04", id: "KpS2S1pmVQQ" },
  { num: 29, title: "পদাশ্রিত নির্দেশক, বচন, অনুসর্গ, দ্বিরুক্ত শব্দ, পুরুষ ও স্ত্রী বাচক শব্দ", dur: "02:01", id: "GY5KxICbf7Y" },
  { num: 30, title: "বাঙ্গালার নব্য লেখকদিগের প্রতি নিবেদন, আহ্বান", dur: "01:37", id: "cJxo-OCgHNQ" },
  { num: 31, title: "কারক সমাস", dur: "01:10", id: "wTw2xxmMsdQ" }
];

// --------------- DOM refs ---------------
const listEl = document.getElementById("lectureList");
const playerContainer = document.getElementById("player");
const playerWrapper = document.getElementById("playerWrapper");
const videoTitleEl = document.getElementById("videoTitle");
const videoInfoEl = document.getElementById("videoInfo");
const searchInput = document.getElementById("searchInput");
const autoplayToggle = document.getElementById("autoplayToggle");
const themeToggle = document.getElementById("themeToggle");
const netflixToggle = document.getElementById("netflixStyleToggle");

let player = null;
let currentIndex = -1;
let ytApiLoaded = false;

// --------------- Persisted settings ---------------
const STORAGE_KEY = "bangla_classes_settings_v1";
const defaultSettings = { dark: false, netflix: false, autoplayNext: true };
let settings = Object.assign({}, defaultSettings, loadSettings());

// apply persisted settings initially
applyTheme(settings.dark, settings.netflix);
autoplayToggle.checked = settings.autoplayNext;
themeToggle.checked = settings.dark;
netflixToggle.checked = settings.netflix;

// --------------- Helpers ---------------
function loadSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}
function saveSettings() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}
function applyTheme(dark, netflix) {
  document.body.classList.toggle("dark", !!dark);
  document.body.classList.toggle("netflix", !!netflix);
}

// --------------- Render lecture list ---------------
function renderList(filter = "") {
  listEl.innerHTML = "";
  const q = filter.trim().toLowerCase();
  lectures.forEach((lec, idx) => {
    const text = `lecture ${lec.num} ${lec.title}`.toLowerCase();
    if (q && !text.includes(q)) return;

    const item = document.createElement("div");
    item.className = "lecture-item";
    item.dataset.index = idx;

    const left = document.createElement("div");
    left.className = "left";
    left.textContent = lec.num;

    const content = document.createElement("div");
    content.className = "content";
    const title = document.createElement("div");
    title.className = "title";
    title.textContent = lec.title;
    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = lec.dur ? `Duration: ${lec.dur}` : "Duration: —";

    content.appendChild(title);
    content.appendChild(meta);

    item.appendChild(left);
    item.appendChild(content);

    item.addEventListener("click", () => selectLecture(idx));

    listEl.appendChild(item);
  });
}

// --------------- Selection & Player creation/load ---------------
function selectLecture(index) {
  if (index < 0 || index >= lectures.length) return;
  const lec = lectures[index];
  currentIndex = index;

  // highlight active item
  Array.from(listEl.children).forEach((el) => {
    el.classList.toggle("active", Number(el.dataset.index) === index);
  });

  // show meta immediately
  videoTitleEl.textContent = `Lecture ${lec.num}: ${lec.title}`;
  videoInfoEl.textContent = lec.dur ? `Duration: ${lec.dur}` : "Duration: —";

  // create YT API script lazily if not created yet
  if (!ytApiLoaded) {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
    ytApiLoaded = true;

    // The API will call onYouTubeIframeAPIReady global when ready.
    window.onYouTubeIframeAPIReady = () => {
      createPlayer(lec.id);
    };
  } else if (!player) {
    createPlayer(lec.id);
  } else {
    // player exists - load new video
    player.loadVideoById({ videoId: lec.id, startSeconds: 0 });
  }

  // scroll active into view on small screens
  if (window.innerWidth < 900) {
    document.querySelector(".main").scrollIntoView({ behavior: "smooth" });
  }
}

function createPlayer(videoId) {
  // avoid recreating
  if (player) {
    player.loadVideoById({ videoId, startSeconds: 0 });
    return;
  }

  // clear placeholder content
  playerContainer.innerHTML = "";
  player = new YT.Player("player", {
    height: "100%",
    width: "100%",
    videoId: videoId,
    playerVars: {
      controls: 1,
      rel: 0,
      modestbranding: 1,
      playsinline: 1,
      disablekb: 0
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    }
  });
}

function onPlayerReady(event) {
  // do not autoplay unless user triggers or loadVideoById invoked by select
  // we still ensure the UI is consistent.
}

function onPlayerStateChange(e) {
  // YT.PlayerState.ENDED === 0
  if (e.data === 0) {
    // ended
    if (settings.autoplayNext) {
      const next = currentIndex + 1;
      if (next < lectures.length) {
        selectLecture(next);
      }
    }
  }
}

// --------------- Search behavior ---------------
searchInput.addEventListener("input", (ev) => {
  renderList(ev.target.value);
});

// --------------- Controls behavior ---------------
autoplayToggle.addEventListener("change", (ev) => {
  settings.autoplayNext = !!ev.target.checked;
  saveSettings();
});
themeToggle.addEventListener("change", (ev) => {
  settings.dark = !!ev.target.checked;
  applyTheme(settings.dark, settings.netflix);
  saveSettings();
});
netflixToggle.addEventListener("change", (ev) => {
  settings.netflix = !!ev.target.checked;
  applyTheme(settings.dark, settings.netflix);
  saveSettings();
});

// Keyboard: quick search focus with '/'
window.addEventListener("keydown", (e) => {
  if (e.key === "/") {
    const active = document.activeElement;
    if (active !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
  }
});

// expose selectLecture for debugging sometimes useful
window.selectLecture = selectLecture;

// --------------- Initial render ---------------
renderList();

// If you want to auto-load the first lecture on page open (optional), uncomment:
// selectLecture(0);

// --------------- Accessibility tweaks ---------------
// Add aria roles to lecture list items dynamically
function addA11y() {
  Array.from(listEl.children).forEach((el) => {
    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "0");
    el.addEventListener("keypress", (ev) => {
      if (ev.key === "Enter" || ev.key === " ") {
        ev.preventDefault();
        el.click();
      }
    });
  });
}
// call it after renderList
addA11y();

// Re-run a11y when filtering (simple approach)
const observer = new MutationObserver(() => addA11y());
observer.observe(listEl, { childList: true });

