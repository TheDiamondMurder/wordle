const board = document.querySelector("#board");
const keyboard = document.querySelector("#keyboard");
const puzzleDate = document.querySelector("#puzzle-date");
const statusLabel = document.querySelector("#status-label");
const toast = document.querySelector("#toast");
const resultModal = document.querySelector("#result-modal");
const modalTitle = document.querySelector("#modal-title");
const modalDetail = document.querySelector("#modal-detail");
const resultGrid = document.querySelector("#result-grid");
const closeModal = document.querySelector("#close-modal");

const keyboardRows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
const maxGuesses = 6;
const fallbackValidWords = [
  "ABOUT",
  "ABOVE",
  "ABUSE",
  "ACTOR",
  "ACUTE",
  "ADMIT",
  "ADOPT",
  "ADULT",
  "AFTER",
  "AGAIN",
  "AGENT",
  "AGREE",
  "AHEAD",
  "ALARM",
  "ALBUM",
  "ALIEN",
  "ALIGN",
  "ALIKE",
  "ALIVE",
  "ALLOW",
  "ALONE",
  "ALONG",
  "ALTER",
  "AMONG",
  "ANGER",
  "ANGLE",
  "ANGRY",
  "APART",
  "APPLE",
  "APPLY",
  "ARENA",
  "ARGUE",
  "ARISE",
  "ARRAY",
  "ASIDE",
  "ASSET",
  "AUDIO",
  "AVOID",
  "AWARD",
  "AWARE",
  "BADLY",
  "BASIC",
  "BEACH",
  "BEGIN",
  "BEING",
  "BELOW",
  "BENCH",
  "BIRTH",
  "BLACK",
  "BLAME",
  "BLANK",
  "BLAST",
  "BLEND",
  "BLOCK",
  "BLOOD",
  "BOARD",
  "BOOST",
  "BOUND",
  "BRAIN",
  "BRAND",
  "BRAVE",
  "BREAD",
  "BREAK",
  "BRIEF",
  "BRING",
  "BROAD",
  "BROKE",
  "BROWN",
  "BUILD",
  "BUILT",
  "BUYER",
  "CABLE",
  "CARRY",
  "CATCH",
  "CAUSE",
  "CHAIN",
  "CHAIR",
  "CHAOS",
  "CHARM",
  "CHART",
  "CHASE",
  "CHEAP",
  "CHECK",
  "CHEST",
  "CHIEF",
  "CHILD",
  "CHOIR",
  "CIVIL",
  "CLAIM",
  "CLASS",
  "CLEAN",
  "CLEAR",
  "CLICK",
  "CLOCK",
  "CLOSE",
  "COACH",
  "COAST",
  "COUNT",
  "COURT",
  "COVER",
  "CRACK",
  "CRAFT",
  "CRASH",
  "CRAZY",
  "CREAM",
  "CRIME",
  "CROSS",
  "CROWD",
  "CROWN",
  "CURVE",
  "DAILY",
  "DANCE",
  "DEALT",
  "DEATH",
  "DEBUG",
  "DELAY",
  "DEPTH",
  "DIRTY",
  "DOING",
  "DOUBT",
  "DRAFT",
  "DRAMA",
  "DREAM",
  "DRIVE",
  "EARLY",
  "EARTH",
  "EMPTY",
  "ENEMY",
  "ENJOY",
  "ENTER",
  "ENTRY",
  "ERROR",
  "EVENT",
  "EVERY",
  "EXACT",
  "EXIST",
  "EXTRA",
  "FAITH",
  "FALSE",
  "FAULT",
  "FIELD",
  "FIGHT",
  "FINAL",
  "FIRST",
  "FIXED",
  "FLAME",
  "FLASH",
  "FLOOR",
  "FOCUS",
  "FORCE",
  "FOUND",
  "FRAME",
  "FRESH",
  "FRONT",
  "FUNNY",
  "GHOST",
  "GIANT",
  "GIVEN",
  "GLASS",
  "GRADE",
  "GRAND",
  "GRANT",
  "GRAPH",
  "GREAT",
  "GREEN",
  "GROUP",
  "GUARD",
  "GUESS",
  "GUEST",
  "GUIDE",
  "HAPPY",
  "HEART",
  "HEAVY",
  "HELLO",
  "HONEY",
  "HORSE",
  "HOTEL",
  "HOUSE",
  "HUMAN",
  "IDEAL",
  "IMAGE",
  "INDEX",
  "INPUT",
  "ISSUE",
  "JOINT",
  "JUDGE",
  "KNOWN",
  "LABEL",
  "LARGE",
  "LATER",
  "LAUGH",
  "LAYER",
  "LEARN",
  "LEGAL",
  "LEVEL",
  "LIGHT",
  "LIMIT",
  "LOCAL",
  "LOGIC",
  "LOOSE",
  "LUCKY",
  "MAGIC",
  "MAJOR",
  "MARCH",
  "MATCH",
  "MAYBE",
  "MEDIA",
  "METAL",
  "MIGHT",
  "MINOR",
  "MODEL",
  "MONEY",
  "MONTH",
  "MOTOR",
  "MOUNT",
  "MOUSE",
  "MOUTH",
  "MUSIC",
  "NEVER",
  "NIGHT",
  "NOISE",
  "NORTH",
  "NOVEL",
  "NURSE",
  "OCEAN",
  "OFFER",
  "ORDER",
  "OTHER",
  "OWNER",
  "PANEL",
  "PAPER",
  "PARTY",
  "PEACE",
  "PHONE",
  "PHOTO",
  "PIECE",
  "PILOT",
  "PITCH",
  "PLACE",
  "PLAIN",
  "PLANE",
  "PLANT",
  "PLATE",
  "POINT",
  "POUND",
  "POWER",
  "PRESS",
  "PRICE",
  "PRIDE",
  "PRIME",
  "PRINT",
  "PRIOR",
  "PROOF",
  "PROUD",
  "QUEEN",
  "QUICK",
  "QUIET",
  "QUITE",
  "RADIO",
  "RAISE",
  "RANGE",
  "RAPID",
  "RATIO",
  "REACH",
  "READY",
  "REFER",
  "RIGHT",
  "RIVAL",
  "RIVER",
  "ROAST",
  "ROUND",
  "ROUTE",
  "ROYAL",
  "RURAL",
  "SCALE",
  "SCENE",
  "SCOPE",
  "SCORE",
  "SENSE",
  "SERVE",
  "SEVEN",
  "SHADE",
  "SHAPE",
  "SHARE",
  "SHARP",
  "SHEET",
  "SHIFT",
  "SHIRT",
  "SHOCK",
  "SHORT",
  "SHOWN",
  "SIGHT",
  "SILLY",
  "SINCE",
  "SKILL",
  "SLEEP",
  "SLIDE",
  "SMALL",
  "SMART",
  "SMILE",
  "SMOKE",
  "SOLID",
  "SOLVE",
  "SORRY",
  "SOUND",
  "SOUTH",
  "SPACE",
  "SPARE",
  "SPEAK",
  "SPEED",
  "SPEND",
  "SPENT",
  "SPORT",
  "STAFF",
  "STAGE",
  "STAKE",
  "STAND",
  "START",
  "STATE",
  "STEAM",
  "STICK",
  "STILL",
  "STOCK",
  "STONE",
  "STORE",
  "STORM",
  "STORY",
  "STRIP",
  "STUCK",
  "STUDY",
  "STYLE",
  "SUGAR",
  "SUPER",
  "TABLE",
  "TAKEN",
  "TASTE",
  "TEACH",
  "THANK",
  "THEIR",
  "THEME",
  "THERE",
  "THING",
  "THINK",
  "THIRD",
  "THOSE",
  "THREE",
  "THROW",
  "TIMER",
  "TITLE",
  "TODAY",
  "TOOLS",
  "TOPIC",
  "TOTAL",
  "TOUCH",
  "TOWER",
  "TRACK",
  "TRADE",
  "TRAIN",
  "TREAT",
  "TREND",
  "TRIAL",
  "TRICK",
  "TRIED",
  "TRUST",
  "TRUTH",
  "TWICE",
  "UNDER",
  "UNION",
  "UNITY",
  "UNTIL",
  "UPPER",
  "UPSET",
  "URBAN",
  "USAGE",
  "USUAL",
  "VALID",
  "VALUE",
  "VIDEO",
  "VISIT",
  "VOICE",
  "WASTE",
  "WATCH",
  "WATER",
  "WHEEL",
  "WHERE",
  "WHICH",
  "WHILE",
  "WHITE",
  "WHOLE",
  "WORLD",
  "WORRY",
  "WORTH",
  "WOULD",
  "WRITE",
  "WRONG",
  "YOUNG"
];

let puzzle = null;
let answer = "";
let wordLength = 5;
let guesses = [];
let currentGuess = "";
let gameOver = false;
let isAnimating = false;
let storageKey = "";
let toastTimer = null;
let animatingRow = -1;
let visibleStates = new Map();
let countdownTimer = null;
let reloadedForNextPuzzle = false;

function todayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function compactHash(text) {
  let hash = 0;
  for (let index = 0; index < text.length; index += 1) {
    hash = (hash * 31 + text.charCodeAt(index)) >>> 0;
  }
  return hash.toString(36);
}

function normalizeWord(word) {
  return String(word || "").trim().toUpperCase().replace(/[^A-Z]/g, "");
}

async function loadValidWords() {
  try {
    const response = await fetch("data/valid-words.json?v=1");
    if (!response.ok) throw new Error("No word list");
    const data = await response.json();
    const words = Array.isArray(data) ? data : data.words;

    if (Array.isArray(words)) {
      words
        .map(normalizeWord)
        .filter(Boolean)
        .forEach((word) => fallbackValidWords.push(word));
    }
  } catch {
    // Custom words are optional.
  }
}

function looksLikePossibleWord(word) {
  if (word === answer || fallbackValidWords.includes(word)) return true;
  if (!/^[A-Z]+$/.test(word)) return false;
  if (/^(.)\1+$/.test(word)) return false;

  const vowels = word.match(/[AEIOUY]/g)?.length || 0;
  if (vowels === 0 || vowels === word.length) return false;
  if (/[AEIOUY]{4,}/.test(word)) return false;
  if (/[^AEIOUY]{4,}/.test(word)) return false;

  const rareJunk = /(Q[^U])|([BCDFGHJKLMNPQRSTVWXZ]{3,}$)|(^[HXZ]{2,})|([JQXZ]{3,})/;
  return !rareJunk.test(word);
}

function selectPuzzle(data) {
  const today = todayKey();
  const scheduled = [...(data.wordles || [])]
    .map((entry) => ({
      date: entry.date,
      word: normalizeWord(entry.word),
    }))
    .filter((entry) => entry.date && entry.word)
    .sort((a, b) => a.date.localeCompare(b.date));

  const active = scheduled.filter((entry) => entry.date <= today).at(-1);
  const fallbackWord = normalizeWord(data.fallbackWord) || "CHAOS";
  const chosen = active || { date: today, word: fallbackWord };

  const next = scheduled.find((entry) => entry.date > today);

  return {
    date: chosen.date,
    word: chosen.word,
    wordHash: compactHash(chosen.word),
    id: `${chosen.date}-${compactHash(chosen.word)}`,
    nextDate: next?.date || getTomorrowKey(),
  };
}

function getTomorrowKey() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
  const day = String(tomorrow.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDateTime(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function nextAvailableDate() {
  const [year, month, day] = puzzle.nextDate.split("-").map(Number);
  return new Date(year, month - 1, day, 0, 0, 0, 0);
}

function formatCountdown() {
  const ms = Math.max(0, nextAvailableDate() - new Date());
  if (ms <= 0) return "available now";

  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (days > 0) return `${days}d ${hours}h ${minutes}m`;
  if (hours > 0) return `${hours}h ${minutes}m ${seconds}s`;
  return `${minutes}m ${seconds}s`;
}

function startCountdown() {
  clearInterval(countdownTimer);
  updateCountdownLabel();
  countdownTimer = setInterval(updateCountdownLabel, 1000);
}

function updateCountdownLabel() {
  if (!puzzle) return;
  const countdown = formatCountdown();
  puzzleDate.textContent = `next in ${countdown}`;

  const nextStat = resultGrid.querySelector("[data-stat='next'] strong");
  if (nextStat) nextStat.textContent = countdown;

  if (countdown === "available now" && !reloadedForNextPuzzle) {
    reloadedForNextPuzzle = true;
    setTimeout(() => window.location.reload(), 900);
  }
}

async function loadPuzzle() {
  try {
    const response = await fetch("data/wordles.json?v=1");
    puzzle = selectPuzzle(await response.json());
  } catch {
    puzzle = {
      date: todayKey(),
      word: "CHAOS",
      wordHash: compactHash("CHAOS"),
      id: `${todayKey()}-${compactHash("CHAOS")}`,
      nextDate: getTomorrowKey(),
    };
  }

  answer = puzzle.word;
  wordLength = answer.length;
  await loadValidWords();
  // The word hash is part of the key, so changing today's word gives everyone a fresh board.
  storageKey = `jakublabs-wordle:${puzzle.date}:${puzzle.wordHash || compactHash(answer)}`;
  loadState();
  render();
  startCountdown();
  if (gameOver) setTimeout(showResultModal, 350);
}

function defaultState() {
  return {
    guesses: [],
    currentGuess: "",
    gameOver: false,
  };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "null") || defaultState();
    guesses = Array.isArray(saved.guesses) ? saved.guesses.slice(0, maxGuesses) : [];
    currentGuess = saved.gameOver ? "" : normalizeWord(saved.currentGuess || "").slice(0, wordLength);
    gameOver = Boolean(saved.gameOver);
  } catch {
    guesses = [];
    currentGuess = "";
    gameOver = false;
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify({
    guesses,
    currentGuess,
    gameOver,
    completedAt: gameOver ? new Date().toISOString() : null,
  }));
}

function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.hidden = true;
  }, 1700);
}

function scoreGuess(guess) {
  const result = Array(wordLength).fill("absent");
  const remaining = answer.split("");

  for (let index = 0; index < wordLength; index += 1) {
    if (guess[index] === answer[index]) {
      result[index] = "correct";
      remaining[index] = null;
    }
  }

  for (let index = 0; index < wordLength; index += 1) {
    if (result[index] === "correct") continue;
    const foundIndex = remaining.indexOf(guess[index]);
    if (foundIndex !== -1) {
      result[index] = "present";
      remaining[foundIndex] = null;
    }
  }

  return result;
}

function keyboardScore() {
  const rank = { absent: 1, present: 2, correct: 3 };
  const scores = new Map();

  guesses.forEach((guess) => {
    scoreGuess(guess).forEach((state, index) => {
      const letter = guess[index];
      const previous = scores.get(letter);
      if (!previous || rank[state] > rank[previous]) scores.set(letter, state);
    });
  });

  return scores;
}

function createTile(rowIndex, colIndex) {
  const tile = document.createElement("div");
  tile.className = "tile";
  const guess = guesses[rowIndex];
  const active = rowIndex === guesses.length && !gameOver;
  const letter = guess?.[colIndex] || (active ? currentGuess[colIndex] : "") || "";

  tile.textContent = letter;
  if (letter) tile.classList.add("filled");

  if (guess && rowIndex !== animatingRow) {
    tile.classList.add(scoreGuess(guess)[colIndex]);
  }

  if (rowIndex === animatingRow && visibleStates.has(colIndex)) {
    tile.classList.add(visibleStates.get(colIndex));
  }

  return tile;
}

function renderBoard() {
  board.style.setProperty("--word-length", wordLength);
  const rows = [];

  for (let rowIndex = 0; rowIndex < maxGuesses; rowIndex += 1) {
    const row = document.createElement("div");
    row.className = "row";
    for (let colIndex = 0; colIndex < wordLength; colIndex += 1) {
      row.appendChild(createTile(rowIndex, colIndex));
    }
    rows.push(row);
  }

  board.replaceChildren(...rows);
}

function renderKeyboard() {
  const scores = keyboardScore();
  const rows = keyboardRows.map((letters, rowIndex) => {
    const row = document.createElement("div");
    row.className = "key-row";

    if (rowIndex === 2) row.appendChild(makeKey("Enter", "enter", true));

    [...letters].forEach((letter) => {
      const key = makeKey(letter, letter);
      const state = scores.get(letter);
      if (state) key.classList.add(state);
      row.appendChild(key);
    });

    if (rowIndex === 2) row.appendChild(makeKey("Delete", "backspace", true));
    return row;
  });

  keyboard.replaceChildren(...rows);
}

function makeKey(label, key, wide = false) {
  const button = document.createElement("button");
  button.className = `key${wide ? " wide" : ""}`;
  button.type = "button";
  button.textContent = label;
  button.addEventListener("click", () => handleKey(key));
  return button;
}

function render() {
  updateCountdownLabel();
  statusLabel.textContent = gameOver ? "completed" : `${guesses.length + 1} / ${maxGuesses}`;
  renderBoard();
  renderKeyboard();
}

function shakeActiveRow() {
  const row = board.children[guesses.length];
  if (!row) return;
  row.classList.remove("shake");
  void row.offsetWidth;
  row.classList.add("shake");
}

async function revealRow(rowIndex, guess) {
  isAnimating = true;
  animatingRow = rowIndex;
  visibleStates = new Map();
  renderBoard();
  const row = board.children[rowIndex];
  const states = scoreGuess(guess);

  await Promise.all([...row.children].map((tile, index) => new Promise((resolve) => {
    setTimeout(() => {
      tile.classList.add("flip");
      setTimeout(() => {
        visibleStates.set(index, states[index]);
        tile.classList.add(states[index]);
        resolve();
      }, 320);
    }, index * 170);
  })));

  animatingRow = -1;
  visibleStates = new Map();
  isAnimating = false;
}

function handleLetter(letter) {
  if (currentGuess.length >= wordLength) return;
  currentGuess += letter;
  saveState();
  render();
}

function handleBackspace() {
  currentGuess = currentGuess.slice(0, -1);
  saveState();
  render();
}

async function submitGuess() {
  if (currentGuess.length !== wordLength) {
    showToast(`Need ${wordLength} letters`);
    shakeActiveRow();
    return;
  }

  const guess = currentGuess;
  if (!looksLikePossibleWord(guess)) {
    showToast("Looks like gibberish");
    shakeActiveRow();
    return;
  }

  currentGuess = "";
  guesses.push(guess);
  saveState();
  await revealRow(guesses.length - 1, guess);

  const won = guess === answer;
  const lost = guesses.length >= maxGuesses;
  if (won || lost) {
    gameOver = true;
    saveState();
    render();
    setTimeout(showResultModal, 520);
    return;
  }

  render();
}

function handleKey(key) {
  if (isAnimating) return;
  if (gameOver) {
    showResultModal();
    return;
  }
  if (key === "enter") {
    submitGuess();
    return;
  }
  if (key === "backspace") {
    handleBackspace();
    return;
  }
  if (/^[A-Z]$/i.test(key)) handleLetter(key.toUpperCase());
}

function getResultEmoji() {
  return guesses.map((guess) => scoreGuess(guess).map((state) => {
    if (state === "correct") return "🟩";
    if (state === "present") return "🟨";
    return "⬛";
  }).join("")).join("\n");
}

function showResultModal() {
  const won = guesses.includes(answer);
  const scoreText = won ? `${guesses.indexOf(answer) + 1}/${maxGuesses}` : `X/${maxGuesses}`;
  modalTitle.textContent = won ? "you got it" : "daily cooked";
  modalDetail.textContent = won
    ? `Solved today's wordle in ${guesses.indexOf(answer) + 1} ${guesses.indexOf(answer) === 0 ? "guess" : "guesses"}.`
    : `The word was ${answer}. Come back after midnight for the next one.`;

  const stats = [
    ["score", scoreText],
    ["word", answer],
    ["next", formatCountdown()],
  ];

  resultGrid.replaceChildren(...stats.map(([label, value]) => {
    const card = document.createElement("div");
    card.className = "result-card";
    card.dataset.stat = label;
    card.innerHTML = `<strong>${value}</strong><span>${label}</span>`;
    return card;
  }));

  const share = document.createElement("pre");
  share.className = "result-card";
  share.style.gridColumn = "1 / -1";
  share.textContent = `jakublabs wordle ${puzzle.date} ${scoreText}\n${getResultEmoji()}`;
  resultGrid.appendChild(share);

  resultModal.hidden = false;
}

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey || event.metaKey || event.altKey) return;
  if (event.key === "Enter") handleKey("enter");
  else if (event.key === "Backspace") handleKey("backspace");
  else if (/^[a-z]$/i.test(event.key)) handleKey(event.key.toUpperCase());
});

closeModal.addEventListener("click", () => {
  resultModal.hidden = true;
});

resultModal.addEventListener("click", (event) => {
  if (event.target === resultModal) resultModal.hidden = true;
});

loadPuzzle();
