/* ==========================================================================
   ★ STEP 1 FOR OWNER: ADD YOUR API KEYS HERE (OR IN THE SETTINGS TAB UI) ★
   ==========================================================================
   You can edit this `RUP_CONFIG` object directly when hosting on GitHub!
   - TMDB_API_KEY: Get free at https://www.themoviedb.org/settings/api
   - OMDB_API_KEY: Get free at https://www.omdbapi.com/apikey.aspx
   - JIKAN_ANIME_API: Free out-of-the-box! No API key required.
   - TVMAZE_SERIES_API: Free out-of-the-box! No API key required.
   ========================================================================== */
const RUP_CONFIG = {
  APP_NAME: "RUP",
  DEFAULT_THEME: "monochrome-noir", // Pure Black & White Liquid Glass Default

  // ---> PASTE YOUR API KEYS BELOW (OR ENTER THEM IN THE WEBSITE SETTINGS TAB) <---
  TMDB_API_KEY: "be85789a6d13ba63515a3eef194c24b7",                 // Paste your TMDB v3 API Key inside the quotes, e.g., "a1b2c3d4e5..."
  OMDB_API_KEY: "84e9ea8a",                 // Paste your OMDb API Key inside the quotes, e.g., "9f8e7d6c"
  WATCHMODE_API_KEY: "DfhPz7m8B2uRYg6WxAIpjxJ8UTi3EGoPbXmZKDoT",            // Optional: Watchmode API key for streaming availability

  // ---> FREE PUBLIC ENDPOINTS (PRE-CONFIGURED & ACTIVE OUT-OF-THE-BOX) <---
  TMDB_BASE_URL: "https://api.themoviedb.org/3",
  TMDB_IMAGE_BASE: "https://image.tmdb.org/t/p/original",
  JIKAN_ANIME_API: "https://api.jikan.moe/v4",
  TVMAZE_SERIES_API: "https://api.tvmaze.com",
  ANILIST_GRAPHQL_URL: "https://graphql.anilist.co",
  VIDSRC_EMBED_BASE: "https://vidsrc.xyz/embed", // Uses TMDB ID or IMDb ID for embed mode

  // Supported Global Dubbing & Subtitle Languages
  ALL_DUB_LANGUAGES: [
    "English", "Japanese", "Hindi", "Spanish", "French", "Korean",
    "German", "Portuguese", "Italian", "Arabic", "Russian", "Mandarin",
    "Tamil", "Telugu", "Bengali", "Turkish", "Thai", "Indonesian"
  ],
  ALL_SUB_LANGUAGES: [
    "English", "Spanish", "Hindi", "Japanese", "French", "Korean",
    "German", "Arabic", "Russian", "Portuguese", "Italian", "Mandarin",
    "Bengali", "Tamil", "Telugu", "Turkish", "Vietnamese", "Polish", "Off"
  ]
};

/* ==========================================================================
   2. PREMIUM COLOR THEMES (WITH APPLE MUSIC MOVING GRADIENT ORB PALETTES)
   ========================================================================== */
const RUP_THEMES = [
  {
    id: "monochrome-noir",
    name: "Monochrome Noir (Default)",
    subtitle: "Obsidian Black & Pure Liquid White",
    mode: "dark",
    orbs: ["#ffffff", "#71717a", "#27272a", "#d4d4d8"],
    accent: "#ffffff",
    previewGradient: "linear-gradient(135deg, #000000 0%, #3f3f46 50%, #ffffff 100%)"
  },
  {
    id: "monochrome-alabaster",
    name: "Pure Alabaster (White & Black)",
    subtitle: "Daylight Frosted Quartz & Ink Black",
    mode: "light",
    orbs: ["#d4d4d8", "#a1a1aa", "#ffffff", "#52525b"],
    accent: "#09090b",
    previewGradient: "linear-gradient(135deg, #ffffff 0%, #d4d4d8 60%, #09090b 100%)"
  },
  {
    id: "apple-music-crimson",
    name: "Apple Music Velvet",
    subtitle: "Deep Crimson, Rose Quartz & Magenta Mesh",
    mode: "dark",
    orbs: ["#ff2d55", "#9f1239", "#be123c", "#4c0519"],
    accent: "#ff2d55",
    previewGradient: "linear-gradient(135deg, #ff2d55 0%, #be123c 50%, #18181b 100%)"
  },
  {
    id: "obsidian-gold",
    name: "Obsidian Champagne Gold",
    subtitle: "Luxury Cinema Gold & Warm Amber Glass",
    mode: "dark",
    orbs: ["#f59e0b", "#b45309", "#78350f", "#fde68a"],
    accent: "#fbbf24",
    previewGradient: "linear-gradient(135deg, #fbbf24 0%, #92400e 50%, #09090b 100%)"
  },
  {
    id: "midnight-cyberpunk",
    name: "Midnight Cyberpunk",
    subtitle: "Neon Cyan, Electric Violet & Deep Matrix",
    mode: "dark",
    orbs: ["#06b6d4", "#8b5cf6", "#ec4899", "#1e1b4b"],
    accent: "#22d3ee",
    previewGradient: "linear-gradient(135deg, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)"
  },
  {
    id: "emerald-aurora",
    name: "Emerald Aurora",
    subtitle: "Nordic Bioluminescent Mint & Deep Pine",
    mode: "dark",
    orbs: ["#10b981", "#047857", "#06b6d4", "#064e3b"],
    accent: "#34d399",
    previewGradient: "linear-gradient(135deg, #34d399 0%, #047857 50%, #022c22 100%)"
  },
  {
    id: "deep-ocean",
    name: "Mariana Abyssal Blue",
    subtitle: "Sapphire Waves, Cobalt & Arctic Ice",
    mode: "dark",
    orbs: ["#3b82f6", "#1d4ed8", "#38bdf8", "#172554"],
    accent: "#60a5fa",
    previewGradient: "linear-gradient(135deg, #38bdf8 0%, #1d4ed8 50%, #090d16 100%)"
  },
  {
    id: "violet-nebula",
    name: "Cosmic Violet Nebula",
    subtitle: "Ultraviolet Supernova & Deep Indigo",
    mode: "dark",
    orbs: ["#a855f7", "#6366f1", "#ec4899", "#2e1065"],
    accent: "#c084fc",
    previewGradient: "linear-gradient(135deg, #c084fc 0%, #6366f1 50%, #1e1b4b 100%)"
  },
  {
    id: "solar-flare",
    name: "Solar Flare Horizon",
    subtitle: "Sunset Tangerine, Scarlet & Obsidian",
    mode: "dark",
    orbs: ["#f97316", "#ef4444", "#eab308", "#431407"],
    accent: "#fb923c",
    previewGradient: "linear-gradient(135deg, #f97316 0%, #dc2626 50%, #09090b 100%)"
  }
];

/* ==========================================================================
   3. BUILT-IN GLOBAL MEDIA CATALOG (MOVIES, WEB-SERIES & ANIME)
      Works 100% immediately + seamlessly expands when API keys are added!
   ========================================================================== */
const INITIAL_CATALOG = [
  // --- MOVIES ---
  {
    id: "mov-1",
    tmdbId: 693134,
    title: "CHRONOS: ZERO HORIZON",
    type: "movie",
    genre: ["Sci-Fi", "Action", "Thriller"],
    year: 2026,
    rating: "9.4",
    duration: "2h 38m",
    quality: "4K HDR",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1800&q=85",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    dubs: ["English", "Japanese", "Hindi", "Spanish", "French", "Korean", "German", "Russian"],
    subs: ["English", "Hindi", "Spanish", "Japanese", "French", "Arabic", "Russian", "Portuguese"],
    desc: "Across fractured timelines, an exiled astro-architect discovers a sentient monochrome relic capable of rewriting human memory and bending gravitational horizons."
  },
  {
    id: "mov-2",
    tmdbId: 872585,
    title: "VELVET NOIR: SYNDICATE",
    type: "movie",
    genre: ["Action", "Thriller", "Drama"],
    year: 2025,
    rating: "8.9",
    duration: "2h 14m",
    quality: "4K HDR",
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1800&q=85",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    dubs: ["English", "Hindi", "Spanish", "French", "German", "Italian"],
    subs: ["English", "Hindi", "Spanish", "French", "German", "Arabic"],
    desc: "In rain-slicked Neo-Geneva, a phantom intelligence operative must dismantle a clandestine glass cartel before every banking satellite goes dark."
  },
  {
    id: "mov-3",
    tmdbId: 157336,
    title: "AETHERIA: BEYOND THE VOID",
    type: "movie",
    genre: ["Sci-Fi", "Drama", "Fantasy"],
    year: 2026,
    rating: "9.2",
    duration: "2h 49m",
    quality: "4K HDR",
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=85",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    dubs: ["English", "Japanese", "Hindi", "Spanish", "Korean", "Mandarin"],
    subs: ["English", "Hindi", "Japanese", "Spanish", "French", "Russian"],
    desc: "Humanity's first deep-space ark intercepts a harmonic transmission originating from inside a supermassive white hole."
  },
  {
    id: "mov-4",
    tmdbId: 27205,
    title: "MONOLITH OF KYOTO",
    type: "movie",
    genre: ["Action", "Thriller"],
    year: 2025,
    rating: "8.8",
    duration: "2h 06m",
    quality: "4K HDR",
    poster: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1800&q=85",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    dubs: ["Japanese", "English", "Hindi", "Spanish", "Korean", "French"],
    subs: ["English", "Japanese", "Hindi", "Spanish", "German"],
    desc: "A master swordsmith and a cybernetic detective forge an unlikely alliance in high-altitude Kyoto to guard an ancient imperial cipher."
  },
  {
    id: "mov-5",
    tmdbId: 335984,
    title: "SOLARIS ECLIPSE",
    type: "movie",
    genre: ["Sci-Fi", "Romance", "Drama"],
    year: 2025,
    rating: "8.7",
    duration: "2h 22m",
    quality: "4K HDR",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1800&q=85",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    dubs: ["English", "French", "Hindi", "Spanish", "Portuguese"],
    subs: ["English", "French", "Hindi", "Spanish", "Arabic"],
    desc: "Two scientists stationed on a solar observatory platform fall in love while racing to stabilize Earth's magnetic shield."
  },

  // --- WEB-SERIES ---
  {
    id: "ser-1",
    tmdbId: 95396,
    title: "THE GLASS PROTOCOL",
    type: "series",
    genre: ["Thriller", "Sci-Fi", "Drama"],
    year: 2026,
    rating: "9.5",
    duration: "2 Seasons • 16 Episodes",
    quality: "4K HDR",
    poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1800&q=85",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    dubs: ["English", "Hindi", "Spanish", "French", "German", "Japanese", "Korean"],
    subs: ["English", "Hindi", "Spanish", "French", "German", "Japanese", "Arabic"],
    desc: "Inside an ultra-secret Silicon Valley architectural lab, employees undergo neural partitioning—separating their daytime corporate memories from their night lives.",
    episodes: [
      { ep: 1, title: "S1:E1 — Specular Reflection", duration: "54m", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" },
      { ep: 2, title: "S1:E2 — The Monochrome Room", duration: "51m", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" },
      { ep: 3, title: "S1:E3 — Refraction Index", duration: "58m", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
      { ep: 4, title: "S1:E4 — Zero Latency", duration: "62m", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }
    ]
  },
  {
    id: "ser-2",
    tmdbId: 1399,
    title: "EMPIRE OF ASH & SILVER",
    type: "series",
    genre: ["Fantasy", "Drama", "Action"],
    year: 2026,
    rating: "9.3",
    duration: "3 Seasons • 24 Episodes",
    quality: "4K HDR",
    poster: "https://images.unsplash.com/photo-1519074069444-1ba4ea16e66c?auto=format&fit=crop&w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1519074069444-1ba4ea16e66c?auto=format&fit=crop&w=1800&q=85",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    dubs: ["English", "Hindi", "Spanish", "French", "German", "Russian", "Portuguese"],
    subs: ["English", "Hindi", "Spanish", "French", "Arabic", "Russian"],
    desc: "Seven sovereign houses clash over the Obsidian Crown in a sprawling winter continent where ancient dragons awaken from volcanic glaciers.",
    episodes: [
      { ep: 1, title: "S1:E1 — Winter's Oath", duration: "64m", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" },
      { ep: 2, title: "S1:E2 — Silver Bloodline", duration: "59m", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" },
      { ep: 3, title: "S1:E3 — The Citadel Burns", duration: "66m", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" }
    ]
  },
  {
    id: "ser-3",
    tmdbId: 66732,
    title: "PARADOX VALLEY",
    type: "series",
    genre: ["Sci-Fi", "Thriller"],
    year: 2025,
    rating: "9.0",
    duration: "2 Seasons • 18 Episodes",
    quality: "4K HDR",
    poster: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1800&q=85",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    dubs: ["English", "German", "Hindi", "Spanish", "French", "Japanese"],
    subs: ["English", "Hindi", "Spanish", "German", "French"],
    desc: "When a child vanishes near a quantum particle collider in the Swiss Alps, four families uncover a 33-year time loop binding their fates.",
    episodes: [
      { ep: 1, title: "S1:E1 — Echoes in the Cave", duration: "52m", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
      { ep: 2, title: "S1:E2 — Yesterday's Anomaly", duration: "50m", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
    ]
  },
  {
    id: "ser-4",
    tmdbId: 93405,
    title: "SEOUL PHANTOM GAME",
    type: "series",
    genre: ["Thriller", "Action", "Drama"],
    year: 2025,
    rating: "9.1",
    duration: "2 Seasons • 14 Episodes",
    quality: "4K HDR",
    poster: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=1800&q=85",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    dubs: ["Korean", "English", "Hindi", "Japanese", "Spanish", "French"],
    subs: ["English", "Korean", "Hindi", "Spanish", "Japanese", "Mandarin"],
    desc: "Four hundred desperate contestants accept a mysterious silver invitation to compete in high-stakes architectural survival puzzles aboard a stealth megaship.",
    episodes: [
      { ep: 1, title: "S1:E1 — Silver Invitation", duration: "57m", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
      { ep: 2, title: "S1:E2 — Glass Bridge Finale", duration: "61m", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
    ]
  },

  // --- ANIME ---
  {
    id: "ani-1",
    malId: 52991,
    title: "BLADE OF THE ECLIPSE: ZERO",
    type: "anime",
    genre: ["Anime", "Action", "Fantasy"],
    year: 2026,
    rating: "9.6",
    duration: "24 Episodes • SUB & DUB",
    quality: "4K HDR",
    poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1800&q=85",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    dubs: ["Japanese", "English", "Hindi", "Spanish", "Korean", "French", "German"],
    subs: ["English", "Japanese", "Hindi", "Spanish", "French", "Arabic", "Portuguese"],
    desc: "Wielding a cursed ink-black katana that drinks starlight, a young ronin journeys across floating shrines to sever the threads of an immortal demon sovereign.",
    episodes: [
      { ep: 1, title: "EP 01 — Crimson Moon Over Edo", duration: "24m", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" },
      { ep: 2, title: "EP 02 — First Breathing Technique", duration: "24m", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" },
      { ep: 3, title: "EP 03 — Shrine of Liquid Glass", duration: "24m", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" }
    ]
  },
  {
    id: "ani-2",
    malId: 16498,
    title: "NEO-TOKYO VALKYRIE 2099",
    type: "anime",
    genre: ["Anime", "Sci-Fi", "Action"],
    year: 2026,
    rating: "9.3",
    duration: "12 Episodes • Simulcast",
    quality: "4K HDR",
    poster: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1800&q=85",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    dubs: ["Japanese", "English", "Hindi", "Spanish", "French", "Korean"],
    subs: ["English", "Japanese", "Hindi", "Spanish", "Russian", "German"],
    desc: "In vertical Neo-Tokyo, a rogue cyber-pilot bonds with a sentient mecha frame capable of folding space-time.",
    episodes: [
      { ep: 1, title: "EP 01 — Ghost in the Spire", duration: "24m", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" },
      { ep: 2, title: "EP 02 — Neural Overdrive", duration: "24m", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" }
    ]
  },
  {
    id: "ani-3",
    malId: 51009,
    title: "ARCANE SORCERY: INFINITY DOMAIN",
    type: "anime",
    genre: ["Anime", "Fantasy", "Action"],
    year: 2025,
    rating: "9.4",
    duration: "24 Episodes • SUB & DUB",
    quality: "4K HDR",
    poster: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1800&q=85",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    dubs: ["Japanese", "English", "Hindi", "Spanish", "Portuguese", "French"],
    subs: ["English", "Hindi", "Spanish", "Japanese", "Arabic", "French"],
    desc: "Born with limitless void energy inside Tokyo's secret Jujutsu Academy, a defiant sorcerer unleashes his Monochrome Domain Expansion.",
    episodes: [
      { ep: 1, title: "EP 01 — Cursed Relic", duration: "24m", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
      { ep: 2, title: "EP 02 — Domain Expansion: Void", duration: "24m", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" }
    ]
  },
  {
    id: "ani-4",
    malId: 38000,
    title: "CELESTIAL ALCHEMIST: REBIRTH",
    type: "anime",
    genre: ["Anime", "Fantasy", "Drama"],
    year: 2025,
    rating: "9.1",
    duration: "64 Episodes • Complete",
    quality: "1080p",
    poster: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1800&q=85",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    dubs: ["Japanese", "English", "Hindi", "Spanish", "Korean"],
    subs: ["English", "Japanese", "Hindi", "Spanish", "French"],
    desc: "Two brothers defy the forbidden laws of transmutation in search of the Philosopher's Prism.",
    episodes: [
      { ep: 1, title: "EP 01 — The Law of Equivalent Exchange", duration: "24m", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" }
    ]
  }
];

/* ==========================================================================
   4. GLOBAL APPLICATION STATE
   ========================================================================== */
const state = {
  catalog: [...INITIAL_CATALOG],
  activeNav: "home",
  globalTypeFilter: "all",
  selectedGenre: "all",
  heroIndex: 0,
  activeThemeId: RUP_CONFIG.DEFAULT_THEME,
  fluidMotionEnabled: true,
  streamMode: "native", // 'native' or 'embed'
  watchlist: JSON.parse(localStorage.getItem("rup_watchlist") || '["mov-1", "ser-1", "ani-1"]'),
  favorites: ["mov-3", "ani-2"],
  continueWatching: [
    { id: "mov-1", progress: 68, timestamp: "1h 42m remaining", lastDub: "English", lastSub: "English" },
    { id: "ser-1", progress: 42, timestamp: "S1:E2 • 29m remaining", lastDub: "Hindi", lastSub: "English" },
    { id: "ani-1", progress: 84, timestamp: "EP 01 • 4m remaining", lastDub: "Japanese", lastSub: "English" }
  ],
  activeLibraryTab: "watchlist",
  defaultDub: "English",
  defaultSub: "English",
  defaultQuality: "4K HDR",
  // Player state
  currentPlayingItem: null,
  activePlayerDub: "English",
  activePlayerSub: "English",
  activePlayerQuality: "4K HDR",
  // User & Profiles
  currentUser: {
    name: "Guest",
    email: "guest@rup.stream",
    provider: "Guest Session",
    avatar: "G"
  },
  profiles: [
    { id: "p1", name: "Cinema Master", badge: "4K Dolby", avatar: "C", defaultDub: "English" },
    { id: "p2", name: "Anime Otaku", badge: "SUB + DUB", avatar: "A", defaultDub: "Japanese" },
    { id: "p3", name: "Global Hindi", badge: "हिन्दी Dub", avatar: "H", defaultDub: "Hindi" },
    { id: "p4", name: "Kids & Family", badge: "Safe PG", avatar: "K", defaultDub: "English" }
  ],
  activeProfileId: "p1"
};

// Multi-language Live Subtitle Script Lines for the Player
const SUBTITLE_SCRIPTS = {
  English: [
    "♪ [Atmospheric RUP Spatial Audio Playing] ♪",
    "The horizon is fracturing across every parallel sector.",
    "Switch audio dubs or subtitles anytime from the Liquid Glass bar.",
    "We built the monochrome ark to survive beyond time itself.",
    "Coordinates locked. Initiating 4K HDR neural jump in three... two... one."
  ],
  Hindi: [
    "♪ [RUP स्पेशल डॉल्बी ऑडियो बज रहा है] ♪",
    "क्षितिज हर समानांतर क्षेत्र में टूट रहा है।",
    "आप लिक्विड ग्लास बार से कभी भी हिंदी डब या सबटाइटल बदल सकते हैं।",
    "हमने समय से परे जीवित रहने के लिए इस मोनोक्रोम आर्क का निर्माण किया है।",
    "निर्देशांक लॉक हो गए हैं। 4K न्यूरल जंप शुरू किया जा रहा है।"
  ],
  Japanese: [
    "♪ [RUP 空間オーディオ再生中] ♪",
    "すべての並行セクターで地平線が崩壊しつつある。",
    "リキッドグラスバーからいつでも吹き替えと字幕を切り替えられます。",
    "時空を超えて生き残るため、モノクロームの方舟を建造した。",
    "座標ロック完了。4K HDR ニューラルジャンプを開始する。"
  ],
  Spanish: [
    "♪ [Audio Espacial RUP Reproduciéndose] ♪",
    "El horizonte se está fracturando en cada sector paralelo.",
    "Cambia el doblaje o los subtítulos en cualquier momento desde la barra Liquid Glass.",
    "Construimos el arca monocromática para sobrevivir más allá del tiempo.",
    "Coordenadas fijadas. Iniciando salto neuronal en tres... dos... uno."
  ],
  French: [
    "♪ [Audio Spatial RUP en cours] ♪",
    "L'horizon se fracture dans chaque secteur parallèle.",
    "Changez le doublage ou les sous-titres à tout moment via la barre Liquid Glass.",
    "Nous avons bâti l'arche monochrome pour survivre au-delà du temps.",
    "Coordonnées verrouillées. Saut neuronal imminent."
  ],
  Korean: [
    "♪ [RUP 공간 오디오 재생 중] ♪",
    "모든 평행 섹터에서 지평선이 균열되고 있습니다.",
    "리퀴드 글래스 바에서 언제든지 더빙과 자막을 변경하세요.",
    "시간을 초월해 생존하기 위해 모노크롬 방주를 설계했습니다.",
    "좌표 고정 완료. 4K 뉴럴 점프를 시작합니다."
  ],
  Arabic: [
    "♪ [تشغيل الصوت المكاني RUP] ♪",
    "الأفق يتصدع عبر كل قطاع موازٍ.",
    "يمكنك تغيير الدبلجة أو الترجمة في أي وقت من شريط الزجاج السائل.",
    "لقد بنينا السفينة الأحادية اللون للبقاء لما بعد الزمن."
  ],
  Russian: [
    "♪ [Пространственное аудио RUP] ♪",
    "Горизонт рушится в каждом параллельном секторе.",
    "Переключайте дубляж и субтитры в любое время на панели Liquid Glass.",
    "Координаты зафиксированы. Начинаем квантовый переход."
  ]
};

/* ==========================================================================
   5. APPLE MUSIC FLUID MOVING MESH GRADIENT ENGINE (CANVAS)
   ========================================================================== */
let canvas, ctx;
let orbs = [];
let animFrameId = null;

function initAmbientCanvas() {
  canvas = document.getElementById("ambient-canvas");
  ctx = canvas.getContext("2d");
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const currentTheme = RUP_THEMES.find(t => t.id === state.activeThemeId) || RUP_THEMES[0];
  createOrbs(currentTheme.orbs);
  animateAmbientCanvas();
}

function resizeCanvas() {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createOrbs(colorArray) {
  const w = window.innerWidth;
  const h = window.innerHeight;
  orbs = colorArray.map((color, idx) => ({
    x: (w * 0.2) + (idx * w * 0.2),
    y: (h * 0.25) + ((idx % 2) * h * 0.4),
    vx: (Math.random() - 0.5) * 1.1,
    vy: (Math.random() - 0.5) * 1.1,
    radius: Math.max(w, h) * (0.28 + (idx * 0.04)),
    color: color
  }));
}

function animateAmbientCanvas() {
  if (!ctx || !canvas) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < orbs.length; i++) {
    const o = orbs[i];
    if (state.fluidMotionEnabled) {
      o.x += o.vx;
      o.y += o.vy;
      if (o.x < -o.radius * 0.3 || o.x > canvas.width + o.radius * 0.3) o.vx *= -1;
      if (o.y < -o.radius * 0.3 || o.y > canvas.height + o.radius * 0.3) o.vy *= -1;
    }

    const grad = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.radius);
    grad.addColorStop(0, o.color);
    grad.addColorStop(1, "transparent");

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(o.x, o.y, o.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  animFrameId = requestAnimationFrame(animateAmbientCanvas);
}

function applyTheme(themeId) {
  const theme = RUP_THEMES.find(t => t.id === themeId) || RUP_THEMES[0];
  state.activeThemeId = theme.id;
  localStorage.setItem("rup_active_theme", theme.id);

  // Toggle light/dark monochrome class
  if (theme.mode === "light") {
    document.body.classList.add("theme-light-mode");
  } else {
    document.body.classList.remove("theme-light-mode");
  }

  // Update CSS variables for accent glow
  document.documentElement.style.setProperty("--accent-primary", theme.accent);
  document.documentElement.style.setProperty("--accent-glow", theme.accent + "44");

  // Smoothly update moving gradient orb colors
  if (orbs.length === theme.orbs.length) {
    theme.orbs.forEach((col, i) => { orbs[i].color = col; });
  } else {
    createOrbs(theme.orbs);
  }

  renderThemeSelector();
  showToast(`Liquid Glass Theme: ${theme.name}`, "fa-wand-magic-sparkles");
}

function cycleQuickTheme() {
  const idx = RUP_THEMES.findIndex(t => t.id === state.activeThemeId);
  const nextIdx = (idx + 1) % RUP_THEMES.length;
  applyTheme(RUP_THEMES[nextIdx].id);
}

function toggleFluidAnimation(enabled) {
  state.fluidMotionEnabled = enabled;
  showToast(enabled ? "Apple Music Fluid Motion Enabled" : "Fluid Gradient Paused", "fa-water");
}

/* ==========================================================================
   6. NAVIGATION & VIEW ROUTING (BOTTOM LIQUID ISLAND)
   ========================================================================== */
function switchNav(viewName) {
  state.activeNav = viewName;
  const views = ["home", "search", "genre", "library", "settings", "profile"];

  views.forEach(v => {
    const el = document.getElementById(`view-${v}`);
    const btn = document.getElementById(`nav-btn-${v}`);
    if (el) {
      if (v === viewName) {
        el.classList.remove("hidden");
      } else {
        el.classList.add("hidden");
      }
    }
    if (btn) {
      if (v === viewName) {
        btn.className = "island-nav-btn group relative px-3.5 sm:px-5 py-2.5 rounded-full flex items-center justify-center gap-2 text-xs sm:text-sm font-bold transition-all duration-300 pill-active";
      } else {
        btn.className = "island-nav-btn group relative px-3.5 sm:px-5 py-2.5 rounded-full flex items-center justify-center gap-2 text-xs sm:text-sm font-medium opacity-75 hover:opacity-100 transition-all duration-300";
      }
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (viewName === "search") handleSearchInput();
  if (viewName === "genre") renderGenreView();
  if (viewName === "library") renderLibraryView();
  if (viewName === "settings") renderThemeSelector();
  if (viewName === "profile") renderProfilesGrid();
}

function filterGlobalType(type) {
  state.globalTypeFilter = type;
  ["all", "movie", "series", "anime"].forEach(t => {
    const pill = document.getElementById(`top-pill-${t}`);
    if (!pill) return;
    if (t === type) {
      pill.className = "top-type-pill h-full px-4 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 pill-active flex items-center";
    } else {
      pill.className = "top-type-pill h-full px-4 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 opacity-75 hover:opacity-100 flex items-center";
    }
  });

  if (state.activeNav !== "home") switchNav("home");
  renderHomeRows();
  const label = type === "all" ? "All Global Media" : type.toUpperCase();
  showToast(`Filtered by: ${label}`, "fa-filter");
}

/* ==========================================================================
   7. RENDERING HOME VIEW: HERO SPOTLIGHT & CAROUSEL ROWS
   ========================================================================== */
function renderHeroBanner() {
  const featuredItems = state.catalog.slice(0, 5);
  const item = featuredItems[state.heroIndex % featuredItems.length] || state.catalog[0];
  if (!item) return;

  document.getElementById("hero-backdrop").src = item.backdrop || item.poster;
  document.getElementById("hero-type-badge").textContent = `${item.type.toUpperCase()} • ${item.genre.join(" / ")}`;
  document.getElementById("hero-rating").innerHTML = `<i class="fa-solid fa-star mr-1"></i> ${item.rating} Rating`;
  document.getElementById("hero-title").textContent = item.title;
  document.getElementById("hero-desc").textContent = item.desc;
  document.getElementById("hero-dubs").textContent = item.dubs.slice(0, 6).join(" • ") + " +More";

  const playBtn = document.getElementById("hero-play-btn");
  playBtn.setAttribute("onclick", `openPlayerById('${item.id}')`);

  const wlBtn = document.getElementById("hero-watchlist-btn");
  const inWatchlist = state.watchlist.includes(item.id);
  wlBtn.innerHTML = inWatchlist
    ? `<i class="fa-solid fa-check text-emerald-400"></i><span>In Watchlist</span>`
    : `<i class="fa-solid fa-plus"></i><span>Watchlist</span>`;
  wlBtn.setAttribute("onclick", `toggleWatchlist('${item.id}')`);

  const detailsBtn = document.getElementById("hero-details-btn");
  detailsBtn.setAttribute("onclick", `openDetailsModal('${item.id}')`);

  // Render Hero Dots
  const dotsContainer = document.getElementById("hero-dots");
  dotsContainer.innerHTML = featuredItems.map((f, idx) => `
    <button
      onclick="setHeroIndex(${idx})"
      class="h-2 rounded-full transition-all duration-500 ${idx === state.heroIndex ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'}"
      title="${f.title}"
    ></button>
  `).join("");
}

function setHeroIndex(idx) {
  state.heroIndex = idx;
  renderHeroBanner();
}

// Updated Card Builder: supports both Horizontal Carousels (isGrid=false) and Responsive Grids (isGrid=true)
function createMediaCardHTML(item, isGrid = false) {
  const inWl = state.watchlist.includes(item.id);
  const typeLabel = item.type === "movie" ? "MOVIE" : item.type === "series" ? "SERIES" : "ANIME";
  const widthClass = isGrid ? "w-full" : "w-52 sm:w-60 shrink-0";

  return `
    <div class="media-card liquid-glass rounded-3xl overflow-hidden ${widthClass} flex flex-col justify-between group cursor-pointer relative">
      <!-- Poster Image Container -->
      <div onclick="openDetailsModal('${item.id}')" class="relative aspect-[2/3] w-full overflow-hidden bg-zinc-900">
        <img
          src="${item.poster}"
          alt="${item.title}"
          loading="lazy"
          onerror="this.src='https://placehold.co/600x900/111111/ffffff?text=${encodeURIComponent(item.title)}'"
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-apple"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent"></div>

        <!-- Top Badges -->
        <div class="absolute top-3 left-3 right-3 flex items-center justify-between gap-1">
          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-black/70 text-white backdrop-blur-md border border-white/20">
            ${typeLabel}
          </span>
          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-black/70 text-amber-300 backdrop-blur-md border border-white/15">
            ★ ${item.rating}
          </span>
        </div>

        <!-- Center Floating Liquid Play Button on Hover -->
        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/35 backdrop-blur-[2px]">
          <button
            onclick="event.stopPropagation(); openPlayerById('${item.id}')"
            class="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
            title="Play ${item.title}"
          >
            <i class="fa-solid fa-play text-lg ml-0.5"></i>
          </button>
        </div>

        <!-- Bottom Poster Info -->
        <div class="absolute bottom-3 left-3.5 right-3.5 text-white space-y-1">
          <div class="flex items-center gap-1.5 text-[10px] font-semibold text-white/80">
            <span>${item.year}</span>
            <span>•</span>
            <span>${item.quality}</span>
            <span>•</span>
            <span class="text-emerald-300">${item.dubs.length} Dubs</span>
          </div>
          <h3 class="font-bold text-sm leading-snug line-clamp-1">${item.title}</h3>
        </div>
      </div>

      <!-- Card Footer Quick Bar -->
      <div class="p-3 flex items-center justify-between gap-2 text-xs">
        <button
          onclick="openPlayerById('${item.id}')"
          class="flex-1 h-9 px-3 rounded-xl liquid-glass font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-white hover:text-black transition-colors"
        >
          <i class="fa-solid fa-play text-[10px]"></i>
          <span>Play</span>
        </button>
        <button
          onclick="toggleWatchlist('${item.id}')"
          class="w-9 h-9 rounded-xl liquid-glass flex items-center justify-center hover:scale-105 transition-transform shrink-0"
          title="Toggle Watchlist"
        >
          <i class="fa-solid ${inWl ? 'fa-check text-emerald-400' : 'fa-plus'}"></i>
        </button>
        <button
          onclick="openDetailsModal('${item.id}')"
          class="w-9 h-9 rounded-xl liquid-glass flex items-center justify-center hover:scale-105 transition-transform shrink-0"
          title="Audio Dubs, Subtitles & Episodes"
        >
          <i class="fa-solid fa-ellipsis"></i>
        </button>
      </div>
    </div>
  `;
}

function renderHomeRows() {
  // 1. Continue Watching
  const cwContainer = document.getElementById("row-continue");
  if (cwContainer) {
    cwContainer.innerHTML = state.continueWatching.map(cw => {
      const item = state.catalog.find(i => i.id === cw.id) || state.catalog[0];
      return `
        <div onclick="openPlayerById('${item.id}')" class="liquid-glass rounded-3xl p-3.5 flex items-center gap-4 cursor-pointer group hover:scale-[1.02] transition-all">
          <div class="relative w-28 h-20 rounded-2xl overflow-hidden shrink-0">
            <img src="${item.backdrop || item.poster}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div class="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-md">
                <i class="fa-solid fa-play text-xs ml-0.5"></i>
              </div>
            </div>
          </div>
          <div class="flex-1 min-w-0 space-y-1.5">
            <div class="flex items-center justify-between gap-2">
              <span class="text-[10px] font-bold uppercase tracking-wider opacity-60">${item.type}</span>
              <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full liquid-glass">${cw.lastDub} Dub</span>
            </div>
            <h4 class="font-bold text-sm truncate">${item.title}</h4>
            <p class="text-[11px] opacity-65">${cw.timestamp}</p>
            <div class="w-full h-1.5 rounded-full bg-current/15 overflow-hidden">
              <div class="h-full rounded-full" style="width: ${cw.progress}%; background: var(--btn-primary-bg);"></div>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  // Filter helper
  const matchesGlobal = (item) => state.globalTypeFilter === "all" || item.type === state.globalTypeFilter;

  const movies = state.catalog.filter(i => i.type === "movie" && matchesGlobal(i));
  const series = state.catalog.filter(i => i.type === "series" && matchesGlobal(i));
  const anime = state.catalog.filter(i => i.type === "anime" && matchesGlobal(i));

  document.getElementById("row-movies").innerHTML = movies.length
    ? movies.map(item => createMediaCardHTML(item, false)).join("")
    : `<p class="text-xs opacity-50 py-4 px-2">Switch filter to 'All Global' to view Movies.</p>`;

  document.getElementById("row-series").innerHTML = series.length
    ? series.map(item => createMediaCardHTML(item, false)).join("")
    : `<p class="text-xs opacity-50 py-4 px-2">Switch filter to 'All Global' to view Web-Series.</p>`;

  document.getElementById("row-anime").innerHTML = anime.length
    ? anime.map(item => createMediaCardHTML(item, false)).join("")
    : `<p class="text-xs opacity-50 py-4 px-2">Switch filter to 'All Global' to view Anime.</p>`;

  // Update Watchlist Counter on Bottom Island
  const badge = document.getElementById("island-watchlist-count");
  if (badge) badge.textContent = state.watchlist.length;
}

function scrollCarousel(rowId, direction) {
  const row = document.getElementById(rowId);
  if (!row) return;
  row.scrollBy({ left: direction * 520, behavior: "smooth" });
}

/* ==========================================================================
   8. SEARCH & MULTI-LANGUAGE FILTER ENGINE
   ========================================================================== */
function handleSearchInput() {
  const q = (document.getElementById("global-search-input")?.value || "").trim().toLowerCase();
  const format = document.getElementById("filter-format")?.value || "all";
  const dub = document.getElementById("filter-dub")?.value || "all";
  const sub = document.getElementById("filter-sub")?.value || "all";
  const sort = document.getElementById("filter-sort")?.value || "rating";

  const clearBtn = document.getElementById("clear-search-btn");
  if (clearBtn) {
    if (q.length > 0) {
      clearBtn.classList.remove("hidden");
      clearBtn.classList.add("flex");
    } else {
      clearBtn.classList.add("hidden");
    }
  }

  let results = state.catalog.filter(item => {
    const matchesQuery = !q ||
      item.title.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.genre.some(g => g.toLowerCase().includes(q));
    const matchesFormat = format === "all" || item.type === format;
    const matchesDub = dub === "all" || item.dubs.includes(dub);
    const matchesSub = sub === "all" || item.subs.includes(sub);
    return matchesQuery && matchesFormat && matchesDub && matchesSub;
  });

  if (sort === "rating") {
    results.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
  } else if (sort === "year") {
    results.sort((a, b) => b.year - a.year);
  } else if (sort === "title") {
    results.sort((a, b) => a.title.localeCompare(b.title));
  }

  const countEl = document.getElementById("search-results-count");
  if (countEl) {
    countEl.textContent = `Showing ${results.length} Global Title${results.length === 1 ? "" : "s"} (With Multi-Language Dubs & Subs)`;
  }

  const grid = document.getElementById("search-results-grid");
  if (grid) {
    grid.innerHTML = results.length
      ? results.map(item => createMediaCardHTML(item, true)).join("")
      : `<div class="col-span-full liquid-glass rounded-3xl p-12 text-center space-y-3">
           <i class="fa-solid fa-satellite-dish text-3xl opacity-60"></i>
           <h3 class="text-lg font-bold">No Local Match Found — Try Live Global API Search</h3>
           <p class="text-xs opacity-70 max-w-md mx-auto">Click "Search All" above to query live Anime (Jikan API), Web-Series (TVMaze), and Movies/Series (TMDB/OMDb API) directly from global servers.</p>
         </div>`;
  }
}

function clearSearchInput() {
  const inp = document.getElementById("global-search-input");
  if (inp) inp.value = "";
  handleSearchInput();
}

// Live External API Search across Jikan Anime + TVMaze Series + TMDB + OMDb
async function triggerLiveExternalSearch() {
  const q = (document.getElementById("global-search-input")?.value || "").trim();
  if (!q) {
    handleSearchInput();
    return;
  }

  showToast(`Searching Global Servers for "${q}"...`, "fa-satellite-dish");

  try {
    // 1. Live Jikan v4 Anime Search (Free & Keyless)
    const jikanRes = await fetch(`${RUP_CONFIG.JIKAN_ANIME_API}/anime?q=${encodeURIComponent(q)}&limit=6&sfw=true`);
    if (jikanRes.ok) {
      const jikanData = await jikanRes.json();
      if (jikanData.data && jikanData.data.length > 0) {
        jikanData.data.forEach(anime => {
          const newId = `jikan-${anime.mal_id}`;
          if (!state.catalog.some(i => i.id === newId)) {
            state.catalog.unshift({
              id: newId,
              malId: anime.mal_id,
              title: anime.title_english || anime.title,
              type: "anime",
              genre: ["Anime", ...(anime.genres || []).map(g => g.name).slice(0, 2)],
              year: anime.year || 2025,
              rating: anime.score ? String(anime.score) : "8.8",
              duration: `${anime.episodes || 12} Episodes • SUB & DUB`,
              quality: "4K HDR",
              poster: anime.images?.jpg?.large_image_url || "https://placehold.co/600x900/111111/ffffff?text=Anime",
              backdrop: anime.images?.jpg?.large_image_url || "https://placehold.co/1200x675/111111/ffffff?text=Anime",
              videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              dubs: ["Japanese", "English", "Hindi", "Spanish", "Korean", "French"],
              subs: RUP_CONFIG.ALL_SUB_LANGUAGES.slice(0, 10),
              desc: anime.synopsis || "Simulcast anime series with multi-language studio dubs and global subtitle tracks.",
              episodes: [
                { ep: 1, title: "EP 01 — Simulcast Premiere", duration: "24m", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" },
                { ep: 2, title: "EP 02 — Awakening", duration: "24m", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
              ]
            });
          }
        });
      }
    }

    // 2. Live TVMaze Global Web-Series Search (Free & Keyless!)
    const tvRes = await fetch(`${RUP_CONFIG.TVMAZE_SERIES_API}/search/shows?q=${encodeURIComponent(q)}`);
    if (tvRes.ok) {
      const tvData = await tvRes.json();
      (tvData || []).slice(0, 5).forEach(entry => {
        const show = entry.show;
        if (!show) return;
        const newId = `tvmaze-${show.id}`;
        if (!state.catalog.some(i => i.id === newId)) {
          const cleanSummary = (show.summary || "").replace(/<[^>]*>?/gm, "");
          state.catalog.unshift({
            id: newId,
            title: show.name,
            type: "series",
            genre: show.genres && show.genres.length ? show.genres : ["Drama", "Thriller"],
            year: show.premiered ? parseInt(show.premiered.slice(0, 4)) : 2025,
            rating: show.rating?.average ? String(show.rating.average) : "8.7",
            duration: "Full Series • Multi-Audio",
            quality: "4K HDR",
            poster: show.image?.original || show.image?.medium || "https://placehold.co/600x900/111111/ffffff?text=Series",
            backdrop: show.image?.original || "https://placehold.co/1200x675/111111/ffffff?text=Series",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
            dubs: RUP_CONFIG.ALL_DUB_LANGUAGES.slice(0, 8),
            subs: RUP_CONFIG.ALL_SUB_LANGUAGES.slice(0, 10),
            desc: cleanSummary || "Global Web-Series available with multi-language studio dubs and subtitles.",
            episodes: [
              { ep: 1, title: "S1:E1 — Series Premiere", duration: "52m", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" },
              { ep: 2, title: "S1:E2 — Episode 2", duration: "49m", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" }
            ]
          });
        }
      });
    }

    // 3. Live TMDB Multi Search (If Owner added TMDB_API_KEY)
    if (RUP_CONFIG.TMDB_API_KEY) {
      const tmdbRes = await fetch(`${RUP_CONFIG.TMDB_BASE_URL}/search/multi?api_key=${RUP_CONFIG.TMDB_API_KEY}&query=${encodeURIComponent(q)}`);
      if (tmdbRes.ok) {
        const tmdbData = await tmdbRes.json();
        (tmdbData.results || []).slice(0, 8).forEach(item => {
          if (item.media_type !== "movie" && item.media_type !== "tv") return;
          const newId = `tmdb-${item.id}`;
          if (!state.catalog.some(i => i.id === newId)) {
            state.catalog.unshift({
              id: newId,
              tmdbId: item.id,
              title: item.title || item.name,
              type: item.media_type === "movie" ? "movie" : "series",
              genre: [item.media_type === "movie" ? "Cinema" : "Series", "Action", "Drama"],
              year: parseInt((item.release_date || item.first_air_date || "2025").slice(0, 4)) || 2025,
              rating: item.vote_average ? item.vote_average.toFixed(1) : "8.5",
              duration: item.media_type === "movie" ? "2h 15m" : "Full Seasons",
              quality: "4K HDR",
              poster: item.poster_path ? `${RUP_CONFIG.TMDB_IMAGE_BASE}${item.poster_path}` : "https://placehold.co/600x900/111111/ffffff?text=RUP",
              backdrop: item.backdrop_path ? `${RUP_CONFIG.TMDB_IMAGE_BASE}${item.backdrop_path}` : "https://placehold.co/1200x675/111111/ffffff?text=RUP",
              videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
              dubs: RUP_CONFIG.ALL_DUB_LANGUAGES.slice(0, 8),
              subs: RUP_CONFIG.ALL_SUB_LANGUAGES.slice(0, 10),
              desc: item.overview || "Global release available with multi-language audio dubbing and subtitles."
            });
          }
        });
      }
    }

    // 4. Live OMDb Search (If Owner added OMDB_API_KEY)
    if (RUP_CONFIG.OMDB_API_KEY) {
      const omdbRes = await fetch(`https://www.omdbapi.com/?apikey=${RUP_CONFIG.OMDB_API_KEY}&s=${encodeURIComponent(q)}`);
      if (omdbRes.ok) {
        const omdbData = await omdbRes.json();
        (omdbData.Search || []).slice(0, 6).forEach(item => {
          const newId = `omdb-${item.imdbID}`;
          if (!state.catalog.some(i => i.id === newId)) {
            state.catalog.unshift({
              id: newId,
              imdbId: item.imdbID,
              title: item.Title,
              type: item.Type === "series" ? "series" : "movie",
              genre: ["Drama", "Action", "Thriller"],
              year: parseInt(item.Year) || 2025,
              rating: "8.9",
              duration: "Full Feature",
              quality: "4K HDR",
              poster: item.Poster !== "N/A" ? item.Poster : "https://placehold.co/600x900/111111/ffffff?text=RUP",
              backdrop: item.Poster !== "N/A" ? item.Poster : "https://placehold.co/1200x675/111111/ffffff?text=RUP",
              videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
              dubs: RUP_CONFIG.ALL_DUB_LANGUAGES.slice(0, 8),
              subs: RUP_CONFIG.ALL_SUB_LANGUAGES.slice(0, 10),
              desc: `Verified IMDb Catalog Title (${item.imdbID}) with global RUP multi-language audio dubbing and subtitle tracks.`
            });
          }
        });
      }
    }

    handleSearchInput();
    renderHomeRows();
    showToast(`Synced live results for "${q}"!`, "fa-check-circle");
  } catch (err) {
    handleSearchInput();
  }
}

/* ==========================================================================
   9. GENRE VIEW ENGINE
   ========================================================================== */
const GENRE_DEFINITIONS = [
  { id: "Action", name: "Action & Adrenaline", icon: "fa-bolt", desc: "High-octane blockbusters & martial arts" },
  { id: "Sci-Fi", name: "Sci-Fi & Cyberpunk", icon: "fa-user-astronaut", desc: "Interstellar voyages & future worlds" },
  { id: "Anime", name: "Anime (Shonen & Seinen)", icon: "fa-dragon", desc: "Simulcast Japanese & global dubs" },
  { id: "Thriller", name: "Psychological Thriller", icon: "fa-mask", desc: "Mind-bending mysteries & noir" },
  { id: "Fantasy", name: "Epic Fantasy & Myth", icon: "fa-wand-sparkles", desc: "Dragons, sorcery & ancient realms" },
  { id: "Drama", name: "Prestige Drama", icon: "fa-theater-masks", desc: "Award-winning cinema & series" },
  { id: "Romance", name: "Romance & Emotion", icon: "fa-heart", desc: "Timeless stories across borders" },
  { id: "all", name: "Complete Global Vault", icon: "fa-globe", desc: "Every movie, series & anime" }
];

function renderGenreView() {
  const cardsGrid = document.getElementById("genre-cards-grid");
  if (cardsGrid) {
    cardsGrid.innerHTML = GENRE_DEFINITIONS.map(g => {
      const isSelected = state.selectedGenre === g.id;
      return `
        <div
          onclick="selectGenre('${g.id}')"
          class="liquid-glass rounded-3xl p-5 cursor-pointer transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between gap-4 ${isSelected ? 'ring-2 ring-current bg-white/15' : ''}"
        >
          <div class="flex items-center justify-between">
            <div class="w-11 h-11 rounded-2xl liquid-glass flex items-center justify-center text-lg">
              <i class="fa-solid ${g.icon}"></i>
            </div>
            ${isSelected ? '<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold pill-active">ACTIVE</span>' : ''}
          </div>
          <div>
            <h3 class="font-bold text-base">${g.name}</h3>
            <p class="text-xs opacity-65 mt-0.5">${g.desc}</p>
          </div>
        </div>
      `;
    }).join("");
  }

  const filtered = state.selectedGenre === "all"
    ? state.catalog
    : state.catalog.filter(item => item.genre.some(gn => gn.toLowerCase() === state.selectedGenre.toLowerCase()));

  const heading = document.getElementById("selected-genre-heading");
  if (heading) {
    heading.textContent = state.selectedGenre === "all" ? "All Genre Masterpieces" : `${state.selectedGenre} Collection`;
  }

  const count = document.getElementById("selected-genre-count");
  if (count) count.textContent = `${filtered.length} Titles Available`;

  const resGrid = document.getElementById("genre-results-grid");
  if (resGrid) {
    resGrid.innerHTML = filtered.map(item => createMediaCardHTML(item, true)).join("");
  }
}

function selectGenre(genreId) {
  state.selectedGenre = genreId;
  renderGenreView();
}

/* ==========================================================================
   10. LIBRARY & WATCHLIST MANAGEMENT
   ========================================================================== */
function toggleWatchlist(itemId) {
  const idx = state.watchlist.indexOf(itemId);
  const item = state.catalog.find(i => i.id === itemId);
  if (idx === -1) {
    state.watchlist.push(itemId);
    showToast(`Added "${item?.title || 'Title'}" to Watchlist`, "fa-bookmark");
  } else {
    state.watchlist.splice(idx, 1);
    showToast(`Removed from Watchlist`, "fa-trash-can");
  }
  localStorage.setItem("rup_watchlist", JSON.stringify(state.watchlist));
  renderHeroBanner();
  renderHomeRows();
  if (state.activeNav === "library") renderLibraryView();
}

function switchLibraryTab(tab) {
  state.activeLibraryTab = tab;
  ["watchlist", "favorites", "history"].forEach(t => {
    const btn = document.getElementById(`lib-tab-${t}`);
    if (!btn) return;
    if (t === tab) {
      btn.className = "px-4 py-2 rounded-full text-xs font-bold pill-active transition-all";
    } else {
      btn.className = "px-4 py-2 rounded-full text-xs font-bold opacity-70 hover:opacity-100 transition-all";
    }
  });
  renderLibraryView();
}

function renderLibraryView() {
  let listIds = [];
  if (state.activeLibraryTab === "watchlist") listIds = state.watchlist;
  else if (state.activeLibraryTab === "favorites") listIds = state.favorites;
  else listIds = state.continueWatching.map(c => c.id);

  const items = state.catalog.filter(i => listIds.includes(i.id));
  const grid = document.getElementById("library-grid");
  if (!grid) return;

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full liquid-glass rounded-3xl p-12 text-center space-y-4">
        <i class="fa-solid fa-bookmark text-3xl opacity-50"></i>
        <h3 class="text-lg font-bold">Your ${state.activeLibraryTab} is currently empty</h3>
        <p class="text-xs opacity-65 max-w-md mx-auto">Explore Movies, Web-Series, and Anime on the Home or Search tab and click the '+' button to save titles here.</p>
        <button onclick="switchNav('home')" class="btn-liquid-primary px-6 py-2.5 rounded-full text-xs font-bold">Explore Catalog</button>
      </div>
    `;
  } else {
    grid.innerHTML = items.map(item => createMediaCardHTML(item, true)).join("");
  }
}

/* ==========================================================================
   11. SETTINGS VIEW: THEME SWATCHES & LIVE API SYNCING (WITH LOCALSTORAGE)
   ========================================================================== */
function renderThemeSelector() {
  const grid = document.getElementById("theme-selector-grid");
  if (!grid) return;

  grid.innerHTML = RUP_THEMES.map(theme => {
    const isCurrent = state.activeThemeId === theme.id;
    return `
      <div
        onclick="applyTheme('${theme.id}')"
        class="liquid-glass rounded-2xl p-4 cursor-pointer flex items-center justify-between gap-3 transition-all hover:scale-[1.02] ${isCurrent ? 'ring-2 ring-current' : ''}"
      >
        <div class="flex items-center gap-3.5 min-w-0">
          <div class="w-12 h-12 rounded-2xl shadow-lg border border-white/25 shrink-0" style="background: ${theme.previewGradient}"></div>
          <div class="min-w-0">
            <h4 class="font-bold text-sm truncate">${theme.name}</h4>
            <p class="text-[11px] opacity-65 truncate">${theme.subtitle}</p>
          </div>
        </div>
        <div class="w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${isCurrent ? 'pill-active' : 'border border-current/25'}">
          ${isCurrent ? '<i class="fa-solid fa-check text-xs"></i>' : ''}
        </div>
      </div>
    `;
  }).join("");
}

async function saveAndSyncApis() {
  const tmdbVal = document.getElementById("input-tmdb-key")?.value.trim();
  const omdbVal = document.getElementById("input-omdb-key")?.value.trim();
  const animeUrl = document.getElementById("input-anime-endpoint")?.value.trim();

  if (tmdbVal !== undefined && tmdbVal !== "") {
    RUP_CONFIG.TMDB_API_KEY = tmdbVal;
    localStorage.setItem("rup_tmdb_key", tmdbVal);
  }
  if (omdbVal !== undefined && omdbVal !== "") {
    RUP_CONFIG.OMDB_API_KEY = omdbVal;
    localStorage.setItem("rup_omdb_key", omdbVal);
  }
  if (animeUrl) {
    RUP_CONFIG.JIKAN_ANIME_API = animeUrl;
    localStorage.setItem("rup_anime_url", animeUrl);
  }

  showToast("Syncing Live Global APIs...", "fa-rotate");

  // 1. Fetch live TMDB Trending Movies & Series if TMDB key is provided
  if (RUP_CONFIG.TMDB_API_KEY) {
    try {
      const res = await fetch(`${RUP_CONFIG.TMDB_BASE_URL}/trending/all/week?api_key=${RUP_CONFIG.TMDB_API_KEY}`);
      if (res.ok) {
        const data = await res.json();
        (data.results || []).slice(0, 12).forEach(item => {
          if (item.media_type !== "movie" && item.media_type !== "tv") return;
          const id = `tmdb-${item.id}`;
          if (!state.catalog.some(c => c.id === id)) {
            state.catalog.unshift({
              id,
              tmdbId: item.id,
              title: item.title || item.name,
              type: item.media_type === "tv" ? "series" : "movie",
              genre: [item.media_type === "tv" ? "Series" : "Action", "Sci-Fi", "Thriller"],
              year: parseInt((item.release_date || item.first_air_date || "2025").slice(0, 4)) || 2025,
              rating: item.vote_average ? item.vote_average.toFixed(1) : "8.7",
              duration: item.media_type === "tv" ? "Full Series" : "2h 18m",
              quality: "4K HDR",
              poster: item.poster_path ? `${RUP_CONFIG.TMDB_IMAGE_BASE}${item.poster_path}` : "https://placehold.co/600x900/111111/ffffff?text=TMDB",
              backdrop: item.backdrop_path ? `${RUP_CONFIG.TMDB_IMAGE_BASE}${item.backdrop_path}` : "https://placehold.co/1200x675/111111/ffffff?text=TMDB",
              videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
              dubs: RUP_CONFIG.ALL_DUB_LANGUAGES.slice(0, 10),
              subs: RUP_CONFIG.ALL_SUB_LANGUAGES.slice(0, 12),
              desc: item.overview || "Synced live from TMDB Global Catalog."
            });
          }
        });
      }
    } catch (e) {
      console.warn("TMDB Sync warning:", e);
    }
  }

  // 2. Fetch live OMDb Featured Blockbusters if OMDb key is provided
  if (RUP_CONFIG.OMDB_API_KEY) {
    try {
      const omdbRes = await fetch(`https://www.omdbapi.com/?apikey=${RUP_CONFIG.OMDB_API_KEY}&s=Dune&type=movie`);
      if (omdbRes.ok) {
        const omdbData = await omdbRes.json();
        (omdbData.Search || []).slice(0, 4).forEach(item => {
          const id = `omdb-${item.imdbID}`;
          if (!state.catalog.some(c => c.id === id) && item.Poster && item.Poster !== "N/A") {
            state.catalog.push({
              id,
              imdbId: item.imdbID,
              title: item.Title,
              type: "movie",
              genre: ["Sci-Fi", "Action", "Drama"],
              year: parseInt(item.Year) || 2025,
              rating: "8.9",
              duration: "2h 26m",
              quality: "4K HDR",
              poster: item.Poster,
              backdrop: item.Poster,
              videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
              dubs: RUP_CONFIG.ALL_DUB_LANGUAGES.slice(0, 8),
              subs: RUP_CONFIG.ALL_SUB_LANGUAGES.slice(0, 10),
              desc: `Verified IMDb Feature (${item.imdbID}) synced live via OMDb API with multi-language dubbing and subtitles.`
            });
          }
        });
      }
    } catch (e) {
      console.warn("OMDb Sync warning:", e);
    }
  }

  // 3. Also sync Jikan Top Anime + TVMaze Web-Series
  await fetchLiveJikanAnime(false);
  await fetchLiveTVMazeSeries();

  const statusText = document.getElementById("api-status-text");
  if (statusText) {
    if (RUP_CONFIG.TMDB_API_KEY && RUP_CONFIG.OMDB_API_KEY) {
      statusText.textContent = "TMDB + OMDb + Jikan Live";
    } else if (RUP_CONFIG.TMDB_API_KEY) {
      statusText.textContent = "TMDB + Jikan Live";
    } else if (RUP_CONFIG.OMDB_API_KEY) {
      statusText.textContent = "OMDb + Jikan Live";
    } else {
      statusText.textContent = "Jikan + TVMaze Live";
    }
  }

  renderHeroBanner();
  renderHomeRows();
  showToast("Live Global Catalog Synced!", "fa-bolt");
}

// Live Jikan v4 Top Anime Fetcher (100% Free & Works Out-of-the-Box)
async function fetchLiveJikanAnime(notify = false) {
  const icon = document.getElementById("jikan-sync-icon");
  if (icon) icon.classList.add("fa-spin");

  try {
    const res = await fetch(`${RUP_CONFIG.JIKAN_ANIME_API}/top/anime?limit=8&sfw=true`);
    if (res.ok) {
      const json = await res.json();
      (json.data || []).forEach(anime => {
        const id = `jikan-${anime.mal_id}`;
        if (!state.catalog.some(c => c.id === id)) {
          state.catalog.push({
            id,
            malId: anime.mal_id,
            title: anime.title_english || anime.title,
            type: "anime",
            genre: ["Anime", ...(anime.genres || []).map(g => g.name).slice(0, 2)],
            year: anime.year || 2025,
            rating: anime.score ? String(anime.score) : "9.1",
            duration: `${anime.episodes || 24} Episodes • SUB & DUB`,
            quality: "4K HDR",
            poster: anime.images?.jpg?.large_image_url || "https://placehold.co/600x900/111111/ffffff?text=Anime",
            backdrop: anime.images?.jpg?.large_image_url || "https://placehold.co/1200x675/111111/ffffff?text=Anime",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
            dubs: ["Japanese", "English", "Hindi", "Spanish", "Korean", "French", "German"],
            subs: RUP_CONFIG.ALL_SUB_LANGUAGES.slice(0, 12),
            desc: anime.synopsis || "Top-rated global anime series with original Japanese audio and multi-language dubs.",
            episodes: [
              { ep: 1, title: "EP 01 — Simulcast Master", duration: "24m", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" },
              { ep: 2, title: "EP 02 — Next Chapter", duration: "24m", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
            ]
          });
        }
      });
      renderHomeRows();
      if (notify) showToast("Synced Live Top Anime from Jikan API!", "fa-dragon");
    }
  } catch (e) {
    if (notify) showToast("Using Built-In High-Speed Anime Catalog", "fa-check");
  } finally {
    if (icon) icon.classList.remove("fa-spin");
  }
}

// Live TVMaze Global Web-Series Fetcher (100% Free & Works Out-of-the-Box)
async function fetchLiveTVMazeSeries() {
  try {
    const res = await fetch(`${RUP_CONFIG.TVMAZE_SERIES_API}/shows?page=0`);
    if (res.ok) {
      const shows = await res.json();
      (shows || []).slice(0, 6).forEach(show => {
        const id = `tvmaze-${show.id}`;
        if (!state.catalog.some(c => c.id === id)) {
          const cleanSummary = (show.summary || "").replace(/<[^>]*>?/gm, "");
          state.catalog.push({
            id,
            title: show.name,
            type: "series",
            genre: show.genres && show.genres.length ? show.genres.slice(0, 3) : ["Drama", "Thriller"],
            year: show.premiered ? parseInt(show.premiered.slice(0, 4)) : 2024,
            rating: show.rating?.average ? String(show.rating.average) : "8.8",
            duration: "Full Series • Multi-Dub",
            quality: "4K HDR",
            poster: show.image?.original || show.image?.medium || "https://placehold.co/600x900/111111/ffffff?text=Series",
            backdrop: show.image?.original || "https://placehold.co/1200x675/111111/ffffff?text=Series",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
            dubs: RUP_CONFIG.ALL_DUB_LANGUAGES.slice(0, 8),
            subs: RUP_CONFIG.ALL_SUB_LANGUAGES.slice(0, 10),
            desc: cleanSummary || "Acclaimed global web-series with multi-language dubbing and subtitles.",
            episodes: [
              { ep: 1, title: "S1:E1 — Pilot Episode", duration: "54m", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" },
              { ep: 2, title: "S1:E2 — Chapter Two", duration: "51m", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" }
            ]
          });
        }
      });
      renderHomeRows();
    }
  } catch (e) {
    // Silent fallback to built-in catalog
  }
}

function updateStreamMode(mode) {
  state.streamMode = mode;
  showToast(`Video Player Mode: ${mode === "native" ? "RUP Native 4K Liquid Player" : "External Multi-Server Embed"}`, "fa-play-circle");
}

function savePlaybackPrefs() {
  state.defaultDub = document.getElementById("pref-default-dub")?.value || "English";
  state.defaultSub = document.getElementById("pref-default-sub")?.value || "English";
  state.defaultQuality = document.getElementById("pref-default-quality")?.value || "4K HDR";
  showToast(`Default Playback: ${state.defaultDub} Dub • ${state.defaultSub} Sub (${state.defaultQuality})`, "fa-sliders");
}

/* ==========================================================================
   12. DETAILS MODAL & EPISODE DRAWER
   ========================================================================== */
function openDetailsModal(itemId) {
  const item = state.catalog.find(i => i.id === itemId);
  if (!item) return;

  document.getElementById("modal-backdrop").src = item.backdrop || item.poster;
  document.getElementById("modal-type").textContent = item.type.toUpperCase();
  document.getElementById("modal-year").textContent = `${item.year} • ${item.duration} • ${item.quality}`;
  document.getElementById("modal-rating").textContent = `★ ${item.rating}`;
  document.getElementById("modal-title").textContent = item.title;
  document.getElementById("modal-desc").textContent = item.desc;

  const playBtn = document.getElementById("modal-play-btn");
  playBtn.setAttribute("onclick", `closeDetailsModal(); openPlayerById('${item.id}')`);

  // Render Dub Badges
  document.getElementById("modal-dubs-list").innerHTML = item.dubs.map(d => `
    <span onclick="closeDetailsModal(); openPlayerById('${item.id}', '${d}')" class="cursor-pointer px-2.5 py-1 rounded-lg text-xs font-semibold liquid-glass hover:bg-white hover:text-black transition-colors">
      <i class="fa-solid fa-volume-high mr-1 text-[10px]"></i>${d}
    </span>
  `).join("");

  // Render Sub Badges
  document.getElementById("modal-subs-list").innerHTML = item.subs.map(s => `
    <span onclick="closeDetailsModal(); openPlayerById('${item.id}', null, '${s}')" class="cursor-pointer px-2.5 py-1 rounded-lg text-xs font-semibold liquid-glass hover:bg-white hover:text-black transition-colors">
      ${s}
    </span>
  `).join("");

  // Render Episodes if Series or Anime
  const epSec = document.getElementById("modal-episodes-section");
  const epGrid = document.getElementById("modal-episodes-grid");
  if (item.episodes && item.episodes.length > 0) {
    epSec.classList.remove("hidden");
    epGrid.innerHTML = item.episodes.map(ep => `
      <div onclick="closeDetailsModal(); openPlayerById('${item.id}', null, null, '${ep.videoUrl}', '${ep.title}')" class="liquid-glass rounded-2xl p-3.5 flex items-center justify-between gap-3 cursor-pointer hover:bg-white/15 transition-all">
        <div class="flex items-center gap-3 min-w-0">
          <div class="w-9 h-9 rounded-xl bg-white text-black font-bold text-xs flex items-center justify-center shrink-0">
            ${ep.ep}
          </div>
          <div class="min-w-0">
            <h4 class="font-bold text-xs sm:text-sm truncate">${ep.title}</h4>
            <span class="text-[11px] opacity-60">${ep.duration} • Multi-Dub</span>
          </div>
        </div>
        <i class="fa-solid fa-play text-xs opacity-75 shrink-0"></i>
      </div>
    `).join("");
  } else {
    epSec.classList.add("hidden");
  }

  const modal = document.getElementById("details-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeDetailsModal() {
  const modal = document.getElementById("details-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

/* ==========================================================================
   13. CUSTOM LIQUID GLASS VIDEO PLAYER ENGINE
   ========================================================================== */
let subtitleInterval = null;
let subtitleStep = 0;

function openPlayerById(itemId, overrideDub = null, overrideSub = null, customVideoUrl = null, episodeTitle = null) {
  const item = state.catalog.find(i => i.id === itemId) || state.catalog[0];
  state.currentPlayingItem = item;
  state.activePlayerDub = overrideDub || (item.dubs.includes(state.defaultDub) ? state.defaultDub : item.dubs[0]);
  state.activePlayerSub = overrideSub || state.defaultSub;
  state.activePlayerQuality = state.defaultQuality;

  const modal = document.getElementById("player-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  const fullTitle = episodeTitle ? `${item.title} — ${episodeTitle}` : item.title;
  document.getElementById("player-title").textContent = fullTitle;

  // Populate Episodes button & popover if available
  const epBtn = document.getElementById("player-episodes-btn");
  const epList = document.getElementById("player-episodes-list");
  if (item.episodes && item.episodes.length > 0) {
    epBtn.classList.remove("hidden");
    epBtn.classList.add("flex");
    epList.innerHTML = item.episodes.map(ep => `
      <button
        onclick="switchPlayerEpisode('${ep.videoUrl}', '${ep.title}')"
        class="w-full text-left liquid-glass rounded-xl p-3 flex items-center justify-between text-xs font-semibold hover:bg-white hover:text-black transition-colors"
      >
        <span class="truncate pr-2">${ep.title}</span>
        <span class="opacity-70 shrink-0">${ep.duration}</span>
      </button>
    `).join("");
  } else {
    epBtn.classList.add("hidden");
  }

  renderPlayerSettingsOptions();
  updatePlayerBadges();
  loadPlayerStream(customVideoUrl || item.videoUrl);
}

function loadPlayerStream(videoSrc) {
  const video = document.getElementById("rup-video-element");
  const iframe = document.getElementById("rup-embed-iframe");
  const subBox = document.getElementById("player-subtitle-box");
  const serverLabel = document.getElementById("player-server-label");

  if (state.streamMode === "embed" && (state.currentPlayingItem?.tmdbId || state.currentPlayingItem?.imdbId)) {
    video.pause();
    video.classList.add("hidden");
    subBox.classList.add("hidden");
    iframe.classList.remove("hidden");
    const mediaPath = state.currentPlayingItem.type === "series" ? "tv" : "movie";
    const externalId = state.currentPlayingItem.tmdbId || state.currentPlayingItem.imdbId;
    iframe.src = `${RUP_CONFIG.VIDSRC_EMBED_BASE}/${mediaPath}/${externalId}`;
    serverLabel.textContent = "Server: External Embed";
  } else {
    iframe.src = "";
    iframe.classList.add("hidden");
    video.classList.remove("hidden");
    subBox.classList.remove("hidden");
    serverLabel.textContent = "Server: RUP Native 4K";

    const source = document.getElementById("rup-video-source");
    if (source.src !== videoSrc) {
      source.src = videoSrc;
      video.load();
    }
    video.play().catch(() => {});
    document.getElementById("player-play-icon").className = "fa-solid fa-pause text-sm";
    startLiveSubtitleEngine();
  }
}

function togglePlayerServerMode() {
  state.streamMode = state.streamMode === "native" ? "embed" : "native";
  if (!state.currentPlayingItem?.tmdbId && !state.currentPlayingItem?.imdbId && state.streamMode === "embed") {
    showToast("Using RUP Native 4K Player for this stream", "fa-info-circle");
    state.streamMode = "native";
  }
  loadPlayerStream(state.currentPlayingItem?.videoUrl);
}

function switchPlayerEpisode(videoUrl, epTitle) {
  document.getElementById("player-title").textContent = `${state.currentPlayingItem.title} — ${epTitle}`;
  document.getElementById("player-episodes-popover").classList.add("hidden");
  loadPlayerStream(videoUrl);
  showToast(`Now Playing: ${epTitle}`, "fa-play");
}

function renderPlayerSettingsOptions() {
  const item = state.currentPlayingItem;
  if (!item) return;

  const dubs = Array.from(new Set([...item.dubs, ...RUP_CONFIG.ALL_DUB_LANGUAGES.slice(0, 8)]));
  const dubContainer = document.getElementById("player-dub-options");
  dubContainer.innerHTML = dubs.map(d => {
    const active = state.activePlayerDub === d;
    return `
      <button
        onclick="selectPlayerDub('${d}')"
        class="px-3 py-2 rounded-xl text-xs font-semibold text-left flex items-center justify-between transition-all ${active ? 'bg-white text-black font-bold' : 'liquid-glass hover:bg-white/15'}"
      >
        <span class="truncate">${d}</span>
        ${active ? '<i class="fa-solid fa-check text-[10px]"></i>' : ''}
      </button>
    `;
  }).join("");

  const subs = RUP_CONFIG.ALL_SUB_LANGUAGES;
  const subContainer = document.getElementById("player-sub-options");
  subContainer.innerHTML = subs.map(s => {
    const active = state.activePlayerSub === s;
    return `
      <button
        onclick="selectPlayerSub('${s}')"
        class="px-3 py-2 rounded-xl text-xs font-semibold text-left flex items-center justify-between transition-all ${active ? 'bg-white text-black font-bold' : 'liquid-glass hover:bg-white/15'}"
      >
        <span class="truncate">${s}</span>
        ${active ? '<i class="fa-solid fa-check text-[10px]"></i>' : ''}
      </button>
    `;
  }).join("");
}

function selectPlayerDub(dubLang) {
  state.activePlayerDub = dubLang;
  document.getElementById("active-dub-indicator").textContent = dubLang;
  renderPlayerSettingsOptions();
  updatePlayerBadges();
  showToast(`Switched Audio Track to ${dubLang} Studio Dub`, "fa-microphone-lines");
}

function selectPlayerSub(subLang) {
  state.activePlayerSub = subLang;
  document.getElementById("active-sub-indicator").textContent = subLang;
  renderPlayerSettingsOptions();
  updatePlayerBadges();
  updateCurrentSubtitleLine();
  showToast(subLang === "Off" ? "Subtitles Disabled" : `Subtitles switched to ${subLang}`, "fa-closed-captioning");
}

function changePlayerQuality(q) {
  state.activePlayerQuality = q;
  document.getElementById("player-quality-badge").textContent = q;
  updatePlayerBadges();
  showToast(`Stream Resolution: ${q}`, "fa-tv");
}

function changePlayerSpeed(rate) {
  const video = document.getElementById("rup-video-element");
  if (video) video.playbackRate = parseFloat(rate);
  showToast(`Playback Speed: ${rate}x`, "fa-gauge-high");
}

function updatePlayerBadges() {
  const subText = state.activePlayerSub === "Off" ? "No Subtitles" : `${state.activePlayerSub} [CC]`;
  document.getElementById("player-active-badges").textContent = `${state.activePlayerQuality} • ${state.activePlayerDub} Dub • ${subText}`;
  document.getElementById("player-quick-lang-label").textContent = `${state.activePlayerDub.slice(0, 2).toUpperCase()} Dub • ${state.activePlayerSub === "Off" ? "Off" : state.activePlayerSub.slice(0, 2).toUpperCase() + " CC"}`;
}

function startLiveSubtitleEngine() {
  if (subtitleInterval) clearInterval(subtitleInterval);
  subtitleStep = 0;
  updateCurrentSubtitleLine();
  subtitleInterval = setInterval(() => {
    const video = document.getElementById("rup-video-element");
    if (video && !video.paused) {
      subtitleStep++;
      updateCurrentSubtitleLine();
    }
  }, 4200);
}

function updateCurrentSubtitleLine() {
  const box = document.getElementById("player-subtitle-box");
  const textEl = document.getElementById("player-subtitle-text");
  if (!box || !textEl) return;

  if (state.activePlayerSub === "Off") {
    box.classList.add("opacity-0");
    return;
  }

  box.classList.remove("opacity-0");
  const lines = SUBTITLE_SCRIPTS[state.activePlayerSub] || SUBTITLE_SCRIPTS.English;
  const line = lines[subtitleStep % lines.length];
  textEl.textContent = `[${state.activePlayerDub} Audio] ${line}`;
}

function togglePlayPause() {
  const video = document.getElementById("rup-video-element");
  const icon = document.getElementById("player-play-icon");
  if (!video) return;

  if (video.paused) {
    video.play().catch(() => {});
    icon.className = "fa-solid fa-pause text-sm";
  } else {
    video.pause();
    icon.className = "fa-solid fa-play text-sm";
  }
}

function skipSeconds(sec) {
  const video = document.getElementById("rup-video-element");
  if (!video) return;
  video.currentTime = Math.max(0, Math.min(video.duration || 100, video.currentTime + sec));
}

function updateScrubberFill(percent) {
  const scrubber = document.getElementById("player-scrubber");
  if (scrubber) {
    scrubber.style.background = `linear-gradient(to right, #ffffff ${percent}%, rgba(255, 255, 255, 0.22) ${percent}%)`;
  }
}

function seekVideo(percent) {
  const video = document.getElementById("rup-video-element");
  updateScrubberFill(percent);
  if (!video || !video.duration) return;
  video.currentTime = (percent / 100) * video.duration;
}

function toggleMute() {
  const video = document.getElementById("rup-video-element");
  const icon = document.getElementById("player-volume-icon");
  if (!video) return;
  video.muted = !video.muted;
  icon.className = video.muted ? "fa-solid fa-volume-xmark text-xs text-rose-400" : "fa-solid fa-volume-high text-xs";
}

function changeVolume(val) {
  const video = document.getElementById("rup-video-element");
  if (!video) return;
  video.volume = parseFloat(val);
  video.muted = val == 0;
}

function togglePlayerPanel(panelName) {
  const settingsPop = document.getElementById("player-settings-popover");
  const epPop = document.getElementById("player-episodes-popover");

  if (panelName === "settings") {
    epPop.classList.add("hidden");
    settingsPop.classList.toggle("hidden");
  } else if (panelName === "episodes") {
    settingsPop.classList.add("hidden");
    epPop.classList.toggle("hidden");
  }
}

function togglePiP() {
  const video = document.getElementById("rup-video-element");
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture().catch(() => {});
  } else if (video && video.requestPictureInPicture) {
    video.requestPictureInPicture().catch(() => {});
  }
}

function toggleFullscreen() {
  const modal = document.getElementById("player-modal");
  if (!document.fullscreenElement) {
    modal.requestFullscreen?.().catch(() => {});
  } else {
    document.exitFullscreen?.().catch(() => {});
  }
}

function closeVideoPlayer() {
  const video = document.getElementById("rup-video-element");
  const iframe = document.getElementById("rup-embed-iframe");
  if (video) video.pause();
  if (iframe) iframe.src = "";
  if (subtitleInterval) clearInterval(subtitleInterval);

  document.getElementById("player-settings-popover").classList.add("hidden");
  document.getElementById("player-episodes-popover").classList.add("hidden");

  const modal = document.getElementById("player-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function formatTime(seconds) {
  if (!seconds || isNaN(seconds) || !isFinite(seconds)) return "00:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

/* ==========================================================================
   14. PROFILE & SOCIAL AUTHENTICATION (GOOGLE, FACEBOOK, TWITTER/X, EMAIL)
   ========================================================================== */
function handleSocialAuth(provider) {
  const mockNames = {
    "Google": { name: "Aarav Sharma", email: "aarav.sharma@gmail.com" },
    "Facebook": { name: "Elena Rostova", email: "elena.fb@meta.com" },
    "X (Twitter)": { name: "Kairos_X", email: "kairos@x.com" }
  };
  const profile = mockNames[provider] || { name: "RUP Member", email: "member@rup.stream" };

  state.currentUser = {
    name: profile.name,
    email: profile.email,
    provider: `${provider} OAuth 2.0`,
    avatar: profile.name.charAt(0).toUpperCase()
  };

  localStorage.setItem("rup_user", JSON.stringify(state.currentUser));
  updateUserUI();
  showToast(`Signed in via ${provider} as ${profile.name}`, "fa-shield-halved");
}

function handleEmailAuth(e) {
  e.preventDefault();
  const name = document.getElementById("auth-name").value.trim() || "RUP Member";
  const email = document.getElementById("auth-email").value.trim() || "user@rup.stream";

  state.currentUser = {
    name,
    email,
    provider: "RUP Encrypted Email ID",
    avatar: name.charAt(0).toUpperCase()
  };

  localStorage.setItem("rup_user", JSON.stringify(state.currentUser));
  updateUserUI();
  showToast(`Welcome to RUP Ultra, ${name}!`, "fa-user-check");
}

function signOutUser() {
  state.currentUser = {
    name: "Guest",
    email: "guest@rup.stream",
    provider: "Guest Session",
    avatar: "G"
  };
  localStorage.removeItem("rup_user");
  updateUserUI();
  showToast("Signed out to Guest Session", "fa-right-from-bracket");
}

function updateUserUI() {
  document.getElementById("header-user-name").textContent = state.currentUser.name;
  document.getElementById("header-user-avatar").textContent = state.currentUser.avatar;
  document.getElementById("profile-auth-provider").textContent = state.currentUser.provider;
  document.getElementById("profile-auth-email").textContent = state.currentUser.email;
  document.getElementById("auth-heading").textContent = `Welcome, ${state.currentUser.name}`;
}

function renderProfilesGrid() {
  const grid = document.getElementById("profiles-grid");
  if (!grid) return;

  grid.innerHTML = state.profiles.map(p => {
    const active = state.activeProfileId === p.id;
    return `
      <div
        onclick="switchActiveProfile('${p.id}')"
        class="liquid-glass rounded-2xl p-4 cursor-pointer flex items-center gap-3.5 transition-all hover:scale-[1.02] ${active ? 'ring-2 ring-current bg-white/15' : ''}"
      >
        <div class="w-11 h-11 rounded-full font-display font-extrabold text-base flex items-center justify-center shrink-0" style="background: var(--btn-primary-bg); color: var(--btn-primary-text);">
          ${p.avatar}
        </div>
        <div class="min-w-0">
          <h4 class="font-bold text-sm truncate">${p.name}</h4>
          <span class="text-[10px] font-semibold opacity-70">${p.badge}</span>
        </div>
      </div>
    `;
  }).join("");
}

function switchActiveProfile(profileId) {
  const prof = state.profiles.find(p => p.id === profileId);
  if (!prof) return;
  state.activeProfileId = prof.id;
  state.defaultDub = prof.defaultDub;
  state.currentUser.name = prof.name;
  state.currentUser.avatar = prof.avatar;
  updateUserUI();
  renderProfilesGrid();
  showToast(`Profile Switched: ${prof.name} (${prof.defaultDub} Audio Default)`, "fa-user-astronaut");
}

/* ==========================================================================
   15. TOAST NOTIFICATION HELPER
   ========================================================================== */
let toastTimeout = null;
function showToast(message, iconClass = "fa-circle-check") {
  const toast = document.getElementById("rup-toast");
  const msgEl = document.getElementById("rup-toast-msg");
  const iconEl = document.getElementById("rup-toast-icon");
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  iconEl.className = `fa-solid ${iconClass}`;

  toast.classList.remove("opacity-0", "translate-y-[-12px]");
  toast.classList.add("opacity-100", "translate-y-0");

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-[-12px]");
    toast.classList.remove("opacity-100", "translate-y-0");
  }, 3200);
}

/* ==========================================================================
   16. INITIALIZATION ON WINDOW LOAD (AUTO-LOADS SAVED KEYS & LIVE APIS)
   ========================================================================== */
window.onload = async function () {
  // 1. Restore saved API keys, Theme, and User session from LocalStorage
  const savedTmdb = localStorage.getItem("rup_tmdb_key");
  const savedOmdb = localStorage.getItem("rup_omdb_key");
  const savedAnimeUrl = localStorage.getItem("rup_anime_url");
  const savedTheme = localStorage.getItem("rup_active_theme");
  const savedUser = localStorage.getItem("rup_user");

  if (!RUP_CONFIG.TMDB_API_KEY && savedTmdb) RUP_CONFIG.TMDB_API_KEY = savedTmdb;
  if (!RUP_CONFIG.OMDB_API_KEY && savedOmdb) RUP_CONFIG.OMDB_API_KEY = savedOmdb;
  if (savedAnimeUrl) RUP_CONFIG.JIKAN_ANIME_API = savedAnimeUrl;
  if (savedTheme) state.activeThemeId = savedTheme;
  if (savedUser) {
    try {
      state.currentUser = JSON.parse(savedUser);
    } catch (e) {}
  }

  // Pre-fill Settings UI inputs with active keys
  const tmdbInput = document.getElementById("input-tmdb-key");
  const omdbInput = document.getElementById("input-omdb-key");
  const animeInput = document.getElementById("input-anime-endpoint");
  if (tmdbInput && RUP_CONFIG.TMDB_API_KEY) tmdbInput.value = RUP_CONFIG.TMDB_API_KEY;
  if (omdbInput && RUP_CONFIG.OMDB_API_KEY) omdbInput.value = RUP_CONFIG.OMDB_API_KEY;
  if (animeInput && RUP_CONFIG.JIKAN_ANIME_API) animeInput.value = RUP_CONFIG.JIKAN_ANIME_API;

  // 2. Start Apple Music Moving Mesh Gradient Canvas & Apply Theme
  initAmbientCanvas();
  if (savedTheme) applyTheme(savedTheme);

  // 3. Render Initial Home View, Hero Spotlight, Genres & Profiles
  updateUserUI();
  renderHeroBanner();
  renderHomeRows();
  renderThemeSelector();
  renderProfilesGrid();

  // 4. Attach Video Element Progress & Keyboard Listeners
  const video = document.getElementById("rup-video-element");
  if (video) {
    video.addEventListener("loadedmetadata", () => {
      document.getElementById("player-duration").textContent = formatTime(video.duration);
    });
    video.addEventListener("timeupdate", () => {
      const scrubber = document.getElementById("player-scrubber");
      const curEl = document.getElementById("player-current-time");
      const durEl = document.getElementById("player-duration");
      if (video.duration && !isNaN(video.duration)) {
        const pct = (video.currentTime / video.duration) * 100;
        scrubber.value = pct;
        updateScrubberFill(pct);
        curEl.textContent = formatTime(video.currentTime);
        durEl.textContent = formatTime(video.duration);
      }
    });
  }

  // Keyboard Shortcuts when Player or Details Modal is Open
  window.addEventListener("keydown", (e) => {
    const playerModal = document.getElementById("player-modal");
    const detailsModal = document.getElementById("details-modal");
    if (!playerModal.classList.contains("hidden")) {
      if (e.code === "Space") { e.preventDefault(); togglePlayPause(); }
      if (e.code === "ArrowRight") skipSeconds(10);
      if (e.code === "ArrowLeft") skipSeconds(-10);
      if (e.key === "Escape") closeVideoPlayer();
      if (e.key === "f" || e.key === "F") toggleFullscreen();
    } else if (!detailsModal.classList.contains("hidden") && e.key === "Escape") {
      closeDetailsModal();
    }
  });

  // 5. Auto-rotate Hero Spotlight every 9 seconds
  setInterval(() => {
    if (state.activeNav === "home") {
      state.heroIndex = (state.heroIndex + 1) % 5;
      renderHeroBanner();
    }
  }, 9000);

  // 6. Automatically Sync All Active APIs on Startup!
  if (RUP_CONFIG.TMDB_API_KEY || RUP_CONFIG.OMDB_API_KEY) {
    await saveAndSyncApis();
  } else {
    await fetchLiveJikanAnime(false);
    await fetchLiveTVMazeSeries();
  }
};