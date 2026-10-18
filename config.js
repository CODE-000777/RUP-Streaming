// ============================================================================
// RUP STREAMING PLATFORM - CONFIGURATION & API KEYS (config.js)
// ============================================================================

const RUP_CONFIG = {
  // 1. TMDB API Key (Free at: https://www.themoviedb.org/settings/api)
  // Fetches global Movies & Web-Series (Netflix, Prime, Disney+, Apple TV+)
  TMDB_API_KEY: "be85789a6d13ba63515a3eef194c24b7", 

  // 2. OMDb API Key (Free at: https://www.omdbapi.com/apikey.aspx)
  // Fetches IMDb ratings & global metadata
  OMDB_API_KEY: "84e9ea8a",

  // 3. Watchmode API Key (Optional - Free at: https://api.watchmode.com/)
  WATCHMODE_API_KEY: "DfhPz7m8B2uRYg6WxAIpjxJ8UTi3EGoPbXmZKDoT",

  // 4. Jikan v4 MyAnimeList API (100% FREE - NO KEY REQUIRED, ACTIVE BY DEFAULT!)
  JIKAN_ANIME_API: "https://api.jikan.moe/v4",

  // Default Theme ID on first load ("obsidian-bw" or "daylight-wb" or any below)
  DEFAULT_THEME: "obsidian-bw"
};

// ============================================================================
// APPLE MUSIC STYLE MOVING GRADIENT THEMES
// ============================================================================
const RUP_THEMES = [
  {
    id: "obsidian-bw",
    name: "Obsidian Black & White",
    badge: "Default Apple Dark",
    mode: "dark",
    bg: "#050507",
    text: "#ffffff",
    accent: "#ffffff",
    accentText: "#000000",
    orb1: "rgba(255, 255, 255, 0.16)",
    orb2: "rgba(160, 165, 180, 0.12)",
    orb3: "rgba(90, 95, 110, 0.14)"
  },
  {
    id: "daylight-wb",
    name: "Pure White & Black",
    badge: "Apple Daylight",
    mode: "light",
    bg: "#f4f5f8",
    text: "#0a0a0e",
    accent: "#0a0a0e",
    accentText: "#ffffff",
    orb1: "rgba(0, 0, 0, 0.09)",
    orb2: "rgba(80, 90, 110, 0.08)",
    orb3: "rgba(140, 150, 175, 0.12)"
  },
  {
    id: "apple-music-crimson",
    name: "Apple Music Velvet",
    badge: "Dynamic Motion",
    mode: "dark",
    bg: "#090408",
    text: "#ffffff",
    accent: "#ff2d55",
    accentText: "#ffffff",
    orb1: "rgba(255, 45, 85, 0.35)",
    orb2: "rgba(175, 82, 222, 0.25)",
    orb3: "rgba(255, 149, 0, 0.18)"
  },
  {
    id: "cosmic-nebula",
    name: "Cosmic Indigo Glass",
    badge: "Spatial UI",
    mode: "dark",
    bg: "#050510",
    text: "#ffffff",
    accent: "#7c5cff",
    accentText: "#ffffff",
    orb1: "rgba(124, 92, 255, 0.35)",
    orb2: "rgba(0, 212, 255, 0.24)",
    orb3: "rgba(190, 60, 255, 0.2)"
  },
  {
    id: "oceanic-aurora",
    name: "Deep Ocean Cyan",
    badge: "Liquid Aqua",
    mode: "dark",
    bg: "#03090e",
    text: "#ffffff",
    accent: "#00e5ff",
    accentText: "#001018",
    orb1: "rgba(0, 229, 255, 0.3)",
    orb2: "rgba(0, 119, 255, 0.28)",
    orb3: "rgba(16, 185, 129, 0.2)"
  },
  {
    id: "emerald-matrix",
    name: "Emerald HyperGlass",
    badge: "Neon Mint",
    mode: "dark",
    bg: "#030a07",
    text: "#ffffff",
    accent: "#10b981",
    accentText: "#02150e",
    orb1: "rgba(16, 185, 129, 0.32)",
    orb2: "rgba(6, 182, 212, 0.22)",
    orb3: "rgba(132, 204, 22, 0.18)"
  },
  {
    id: "imperial-gold",
    name: "Cinema Gold Luxe",
    badge: "IMAX Edition",
    mode: "dark",
    bg: "#0a0804",
    text: "#ffffff",
    accent: "#f59e0b",
    accentText: "#140b00",
    orb1: "rgba(245, 158, 11, 0.32)",
    orb2: "rgba(239, 68, 68, 0.2)",
    orb3: "rgba(217, 119, 6, 0.22)"
  }
];

// ============================================================================
// GLOBAL DUBBING & SUBTITLE LANGUAGES (Live Player Support)
// ============================================================================
const RUP_LANGUAGES = [
  { code: "en", name: "English (Original Atmos)", sampleSub: "Every universe has a beginning, waiting to be discovered." },
  { code: "hi", name: "Hindi (हिन्दी Dub / Sub)", sampleSub: "हर ब्रह्मांड की एक शुरुआत होती है, जिसे खोजा जाना बाकी है।" },
  { code: "ja", name: "Japanese (日本語 Original)", sampleSub: "すべての宇宙には始まりがあり、発見されるのを待っている。" },
  { code: "es", name: "Spanish (Español Latino)", sampleSub: "Cada universo tiene un comienzo, esperando ser descubierto." },
  { code: "ko", name: "Korean (한국어)", sampleSub: "모든 우주에는 발견되기를 기다리는 시작이 있습니다." },
  { code: "fr", name: "French (Français)", sampleSub: "Chaque univers a un commencement, qui attend d'être découvert." },
  { code: "de", name: "German (Deutsch)", sampleSub: "Jedes Universum hat einen Anfang, der darauf wartet, entdeckt zu werden." },
  { code: "ar", name: "Arabic (العربية)", sampleSub: "لكل كون بداية تنتظر من يكتشفها." },
  { code: "pt", name: "Portuguese (Português)", sampleSub: "Todo universo tem um começo esperando para ser descoberto." },
  { code: "ru", name: "Russian (Русский)", sampleSub: "У каждой вселенной есть начало, которое ждет своего открытия." },
  { code: "zh", name: "Chinese (中文)", sampleSub: "每个宇宙都有一个开端，等待着被发现。" },
  { code: "ta", name: "Tamil (தமிழ்)", sampleSub: "ஒவ்வொரு பிரபஞ்சத்திற்கும் ஒரு தொடக்கம் உண்டு." }
];

// ============================================================================
// BUILT-IN STARTER CATALOG (Edit or Add Your Own Movies/Series/Anime Here!)
// ============================================================================
const DEFAULT_CATALOG = [
  {
    id: "rup-1",
    title: "CHRONOS: BEYOND HORIZON",
    category: "Movie",
    genres: ["Sci-Fi", "Action", "Thriller"],
    year: 2026,
    rating: "9.4",
    duration: "2h 28m",
    quality: "4K Dolby Vision",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=85",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    description: "When a deep-space quantum relay fractures time across Earth, a lone commander must navigate shifting dimensions to reunite humanity before reality collapses.",
    episodes: [
      { ep: 1, title: "Full Feature Film (Director's Cut)", time: "2h 28m", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
    ]
  },
  {
    id: "rup-2",
    title: "BLADE OF THE ECLIPSE",
    category: "Anime",
    genres: ["Anime", "Action", "Fantasy"],
    year: 2026,
    rating: "9.6",
    duration: "24 Ep • S1",
    quality: "4K 120FPS",
    poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1800&q=85",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    description: "Born under a crimson eclipse, a young ronin wields a sentient spirit blade capable of severing ancient curses across the floating realms of Neo-Kyoto.",
    episodes: [
      { ep: 1, title: "Ep 1: The Crimson Oath", time: "24m", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" },
      { ep: 2, title: "Ep 2: Shadows of Shinjuku", time: "24m", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" },
      { ep: 3, title: "Ep 3: Awakening the Astral Seal", time: "25m", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" }
    ]
  },
  {
    id: "rup-3",
    title: "SILENT SYNDICATE",
    category: "Series",
    genres: ["Crime", "Drama", "Thriller"],
    year: 2025,
    rating: "9.1",
    duration: "10 Ep • S2",
    quality: "4K HDR10+",
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1800&q=85",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    description: "Inside Zurich's most secretive algorithmic banking cartel, an undercover cryptographer discovers a shadow ledger controlling global elections.",
    episodes: [
      { ep: 1, title: "Ep 1: Zero Knowledge Proof", time: "54m", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
      { ep: 2, title: "Ep 2: The Cold Wallet", time: "51m", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" },
      { ep: 3, title: "Ep 3: Sovereign Protocol", time: "58m", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
    ]
  },
  {
    id: "rup-4",
    title: "AETHERIA: LOST KINGDOM",
    category: "Movie",
    genres: ["Fantasy", "Adventure", "Sci-Fi"],
    year: 2026,
    rating: "8.9",
    duration: "2h 14m",
    quality: "IMAX Enhanced",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=85",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    description: "High above the storm clouds, a sky-cartographer uncovers an ancient civilization powered by harmonic crystal engines.",
    episodes: [
      { ep: 1, title: "Full IMAX Feature", time: "2h 14m", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" }
    ]
  },
  {
    id: "rup-5",
    title: "CYBER VALKYRIE 2099",
    category: "Anime",
    genres: ["Anime", "Sci-Fi", "Action"],
    year: 2026,
    rating: "9.3",
    duration: "12 Ep • S1",
    quality: "4K Dolby Atmos",
    poster: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1800&q=85",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    description: "In a vertical megacity ruled by synthetic consciousness, a rogue android pilot fights to preserve human memory archives.",
    episodes: [
      { ep: 1, title: "Ep 1: Ghost in the Spire", time: "24m", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
      { ep: 2, title: "Ep 2: Chrome Requiem", time: "24m", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" }
    ]
  },
  {
    id: "rup-6",
    title: "VELVET CROWN",
    category: "Series",
    genres: ["Drama", "Mystery", "Romance"],
    year: 2025,
    rating: "8.8",
    duration: "8 Ep • S1",
    quality: "4K HDR",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1800&q=85",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    description: "Behind the gilded doors of Europe's oldest dynasty, secrets surface on the eve of an unprecedented royal succession.",
    episodes: [
      { ep: 1, title: "Ep 1: Heavy Lies the Sovereign", time: "56m", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
      { ep: 2, title: "Ep 2: Glass Palace", time: "52m", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
    ]
  }
];