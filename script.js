const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const stories = [
  ["story_00.webp", "TITLE PAGE", "扉ページ", "故事入口：翻开这一页，就进入六月的樱花档案。", "daily"],
  ["story_01.webp", "XMAS LOVE SONG", "クリスマス恋歌", "兔子小姐给狐狸先生系上绳结，吵闹的决子被提前绑到天花板上。", "love"],
  ["story_02.webp", "OREO TAILING", "オレオ追跡中", "六月和蜜璃逛街时，两位男朋友在背后酸溜溜地跟踪。", "daily"],
  ["story_03.webp", "DOUBLE TAILING", "こっそり尾行", "假期被女朋友的朋友抢走了，只好悄悄跟在后面看情况。", "daily"],
  ["story_04.webp", "FIRST HELLO", "はじめまして", "六月为实弥伤害祢豆子的事向炭治郎他们道歉。", "daily"],
  ["story_05.webp", "SAKURA BLOOM", "花柄", "樱花之中盛开的生命，柔软却有不会折断的力量。", "daily"],
  ["story_06.webp", "FIRST SNOW", "初雪", "和实弥一起打雪仗，还有两只小猫在雪里凑热闹。", "love"],
  ["story_07.webp", "SPECIAL BONUS", "特典", "像漫画特典一样收藏起来的六月小册页。", "daily"],
  ["story_08.webp", "NEW YEAR GAME", "年越しゲーム", "打游戏打不过实弥，六月破防开始抢手柄。", "love"],
  ["story_09.webp", "BAR KISS PANIC", "酒保じゃない！", "喝醉的六月把酒保实弥当成男公关，最后还是被送回家。", "love"],
  ["story_10.webp", "OFFICE ROMANCE", "職員室の恋", "两个竞争关系的数学老师，私底下居然偷偷在一起。", "love"],
  ["story_11.webp", "SECRET OFFICE", "秘密の職員室", "办公室恋情续篇：越是装作普通，越藏不住心动。", "love"],
  ["story_12.webp", "LITTLE SWORD GIRL", "最強剣士の子供時代", "小时候的六月用扫把当剑，在神社里认真练习。", "daily"],
  ["story_13.webp", "BRAIDING FAIL", "三つ編みできない！", "实弥努力练习扎辫子，结果把六月的头发搅成一团。", "love"],
  ["story_14.webp", "HAIR CHAOS", "髪がたいへん！", "炸毛练习一周后的成果：可爱，但完全失败。", "love"],
  ["story_15.webp", "KETSUKO DEBUT", "決子、初登場", "决子总说六月太莽撞，却每次都第一时间跟上她。", "daily"],
  ["story_16.webp", "MORNING AFTER", "決戦後の朝", "决战后的清晨，两人一起摸茶茶丸，世界终于安静了一点。", "battle"],
  ["story_17.webp", "CANDY APPLE LOVE", "りんご飴の恋", "苹果糖、夏夜与心跳声，恋爱像糖衣一样亮晶晶。", "love"],
  ["story_18.webp", "FIREWORK NIGHT", "花火大会", "花火亮起时，六月的侧脸比夜空更像一封情书。", "love"],
  ["story_19.webp", "POLAROID LOVE", "恋愛ポラロイド", "拍立得里的两个人，比任何台词都更像恋爱证明。", "love"],
  ["story_20.webp", "HIS BIRTHDAY", "彼の誕生日", "为他的生日准备一整天，连空气都是甜的。", "love"],
  ["story_21.webp", "DRESS-UP DOLL", "着せ替え人形", "换装日的小小事故：可爱是第一生产力。", "daily"],
  ["story_22.webp", "DON'T THROW IT", "捨てないで！", "别扔啊喂！看似胡闹的一格，其实是六月式撒娇。", "daily"],
  ["story_23.webp", "WAITING FOR PAYBACK", "顔が見たい", "坐等打脸现场：嘴硬的人，迟早会露出真心。", "daily"],
  ["story_24.webp", "WAITING AGAIN", "もう一回", "同一个故事的另一个镜头，空气里都是憋笑。", "daily"],
  ["story_25.webp", "CROW COMPLAINS", "烏の本音", "鸦心里苦但不说，毕竟这份差事真的不容易。", "daily"],
  ["story_26.webp", "BATTLE INTERLUDE", "幕間", "战斗后的幕间，风与樱花在画面里交错。", "battle"],
  ["story_27.webp", "STREET SNAP", "幕間二", "像活动横幅一样明快的瞬间，适合大声邀请大家点赞。", "battle"],
  ["story_28.webp", "RESTART JUNE", "再起動", "重启 OC 后的第一张稿件，六月重新站到画面中央。", "battle"],
  ["story_29.webp", "RESTART JUNE II", "再起動・二", "同一份初心的另一个版本，像给故事按下新的开始。", "battle"],
  ["story_30.webp", "LILY COURT", "百合御苑", "橘六月潜入皇城，故事从一朵黄百合开始。", "lily"],
  ["story_31.webp", "LILY MYSTERY", "百合の謎", "黄百合与黑百合，身份与名字都藏在礼服之后。", "lily"],
  ["story_32.webp", "TACHIBANA JUNE", "橘六月", "被塞进橘家的小姐，慢慢拥有属于自己的徽章。", "lily"],
  ["story_33.webp", "BLACK LILY", "黒百合", "孤傲、真实、自由，黑百合代表另一种重生。", "lily"]
].map((item, index) => ({
  id: index,
  src: `./assets/story/${item[0]}`,
  en: item[1],
  jp: item[2],
  cn: item[3],
  tag: item[4],
  likes: 0
}));

const galleryStories = stories.filter(story => story.tag !== "lily");

const lilyPanels = {
  prologue: {
    eyebrow: "LILY PALACE / PROLOGUE",
    title: "身份、谎言与名字",
    image: "./assets/story/story_30.webp",
    body: [
      "成为柱后的樱咲六月，接下皇室秘密委托，以橘氏小姐「橘六月」的身份进入皇城。",
      "接连发生的大名之女遇害案、赏着仪前不断蔓延的恐惧、身份成谜的黄百合公主，以及一朵朵遗留在命案现场的黄百合。",
      "当所有证据都指向同一个人时，真正的恶鬼，却始终隐藏在人群之中。"
    ]
  },
  world: {
    eyebrow: "SECRET WORLD / 大正架空",
    title: "皇室秘闻与鬼杀队委托",
    image: "./assets/palace.webp",
    body: [
      "大正时期架空世界中，鬼杀队与皇室长期保持着互不公开的合作关系。",
      "当事件涉及皇室颜面、贵族秘闻以及无法公开的恶鬼时，鬼杀队会以秘密身份介入调查。",
      "六月借橘氏养女的身份进入皇城，既是调查者，也是整场事件的见证者。"
    ]
  },
  case: {
    eyebrow: "MURDER CASE / 黄百合之谜",
    title: "五位大名之女与命案现场的花",
    image: "./assets/story/story_31.webp",
    body: [
      "短短数月内，五位准备参加赏着仪的大名之女相继离奇死亡。",
      "每一具尸体旁，都留下了一朵黄百合。",
      "为了避免皇室丑闻外泄，鬼杀队派遣风柱樱咲六月潜入皇城，调查隐藏在礼制与流言之下的恶鬼。"
    ]
  },
  characters: {
    eyebrow: "CHARACTER FILE / 人物证词",
    title: "黄百合、黑百合与橘六月",
    image: "./assets/story/story_32.webp",
    body: [
      "樱咲六月：风柱，潜伏身份为橘家小姐「橘六月」。她负责调查恶鬼，也是整个事件的见证者。",
      "橘朔哉：橘氏长子，温润、理智、擅长布局，拥有极强观察力。他陪同六月调查，也是唯一知道她真实身份的人。",
      "晴宫雅子：真正的黄百合。她因拒绝政治婚姻逃离皇城，途中遭遇无惨化作恶鬼，为夺回身份开始猎杀大名之女。",
      "久宫聪子：黑百合公主。姐姐失踪后，她被命令成为黄百合公主，失去了自己的名字，也承受了所有误解。"
    ]
  },
  timeline: {
    eyebrow: "STORY TIMELINE / 剧情时间线",
    title: "从秘密委托到迟来的赏着仪",
    image: "./assets/story/story_30.webp",
    body: [
      "第一章「秘密委托」：六月进入皇城，化名橘六月。",
      "第二章「黄百合之谜」：第五位大名之女死亡，命案现场再次出现黄百合。",
      "第三章「真假公主」：黄百合公主性情大变，宫内开始出现各种流言。",
      "第四章「名字」：六月逐渐揭开双生姐妹的秘密，真正的身份浮出水面。",
      "最终章「赏着仪」：六月亲手为聪子完成迟来了数年的赏着仪，聪子重新说出自己的名字，并离开皇城成为普通女学生。"
    ]
  },
  symbols: {
    eyebrow: "SYMBOL FILE / 设定档案",
    title: "黄百合与黑百合",
    image: "./assets/lily.webp",
    body: [
      "黄百合象征身份、宠爱、执念与死亡。",
      "黑百合象征真实、自由、孤独与重生。",
      "赏着仪是皇室少女成年前的重要仪式，也是贵族身份被正式认可的一天。本篇所有案件，都围绕赏着仪展开。",
      "橘氏曾是四大贵族之一，因政治原因失势，多年后重新返回皇城。六月正是借此身份潜入调查。"
    ]
  },
  ending: {
    eyebrow: "EPILOGUE / 后日谈",
    title: "她终于剪掉了想剪的刘海",
    image: "./assets/story/story_33.webp",
    body: [
      "事件结束后，久宫聪子放弃皇族身份，重新拥有属于自己的名字。",
      "六月亲自为她完成赏着仪。橘朔哉则将象征橘氏的家徽亲手制作成新的徽章，赠予六月。",
      "因为六月最初只是「被塞进橘家的小姐」，没有属于自己的家徽。而这枚家徽，代表着她真正成为橘家承认的家人。"
    ]
  },
  notes: {
    eyebrow: "BEHIND THE STORY / 创作笔记",
    title: "写给名字、身份与自由的情书",
    image: "./assets/palace2.webp",
    body: [
      "这个篇章最初来自一个很单纯的灵感：想看六月穿和服。",
      "它逐渐发展成了一个围绕身份、名字与自由展开的故事。虽然参考了大正时期皇室、公家礼制以及部分历史文化元素，但整体仍是完全架空世界。",
      "比起严格历史还原，这里更重视理想中的美学与情感。它更像一封写给「名字、身份与自由」的情书。"
    ]
  }
};

let currentStory = 0;
let mood = 0;
let activeSnack = null;
let snackOrigin = null;
let dragStart = null;
let dragMoved = false;
let toastTimer;

function showToast(text) {
  const toast = $("#toast");
  toast.textContent = text;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function renderChapters() {
  const chapters = [
    ["LOVE ROUTE", "恋爱日常", "love"],
    ["DAILY SNAP", "可爱小事", "daily"],
    ["BATTLE CUT", "战斗幕间", "battle"],
    ["LILY PALACE", "主线篇章", "lily-main"]
  ];
  $("#chapterRow").innerHTML = chapters.map(([en, cn, tag]) => `
    <button class="chapter-card" data-filter-jump="${tag}">
      <strong>${en}</strong>
      <span>${cn}</span>
    </button>
  `).join("");
  $$("[data-filter-jump]").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.dataset.filterJump === "lily-main") {
        $("#lily-main").scrollIntoView({ behavior: "smooth" });
        showToast("百合御苑篇已作为主线档案展开。");
        return;
      }
      setFilter(btn.dataset.filterJump);
      $("#gallery").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function bannerClass(story, index) {
  const palette = ["pink", "blue", "yellow", "dark"];
  const wide = index % 5 === 0 || story.tag === "battle" ? "wide" : "";
  return `${wide} ${palette[index % palette.length]}`.trim();
}

function renderGallery(filter = "all") {
  const filtered = galleryStories.filter(s => filter === "all" || s.tag === filter);
  $("#galleryWall").innerHTML = filtered.map((s, i) => `
    <button class="story-banner ${bannerClass(s, i)}" data-id="${s.id}">
      <span class="tag-ribbon">${s.tag.toUpperCase()} / ${String(s.id + 1).padStart(2, "0")}</span>
      <span class="story-media"><img src="${s.src}" alt="${s.en} ${s.jp}" loading="lazy" decoding="async"></span>
      <span class="story-copy">
        <span class="en">${s.en}</span>
        <span class="jp">${s.jp}</span>
        <span class="cn">${s.cn}</span>
        <span class="like-row"><span class="like-heart">♡</span><span>${s.likes} likes · 点击看完整故事</span></span>
      </span>
    </button>
  `).join("");
  $$(".story-banner").forEach(card => {
    card.addEventListener("click", () => openStory(Number(card.dataset.id)));
  });
}

function setFilter(filter) {
  $$(".gallery-controls button").forEach(btn => btn.classList.toggle("active", btn.dataset.filter === filter));
  renderGallery(filter);
}

function renderLilyPanel(key = "prologue") {
  const panel = lilyPanels[key] || lilyPanels.prologue;
  $("#lilyEyebrow").textContent = panel.eyebrow;
  $("#lilyTitle").textContent = panel.title;
  $("#lilyBody").innerHTML = panel.body.map((line, index) => `
    <p class="${index === 0 ? "lead" : ""}">${line}</p>
  `).join("");
  $("#lilyImage").src = panel.image;
  $("#lilyImage").alt = panel.title;
  $$(".lily-menu button").forEach(btn => btn.classList.toggle("active", btn.dataset.lilyPanel === key));
}

function openStory(id) {
  currentStory = id;
  const s = stories[id];
  $("#modalImage").src = s.src;
  $("#modalImage").alt = `${s.en} ${s.jp}`;
  $("#modalLabel").textContent = `${s.tag.toUpperCase()} STORY / ${String(id + 1).padStart(2, "0")}`;
  $("#modalTitle").textContent = `${s.en} · ${s.jp}`;
  $("#modalDesc").textContent = s.cn;
  $("#storyDialog").showModal();
}

function likeCurrent() {
  stories[currentStory].likes += 1;
  $("#modalLike").textContent = `♥ LIKE ${stories[currentStory].likes}`;
  renderGallery($(".gallery-controls button.active")?.dataset.filter || "all");
  showToast("点赞成功，六月收到你的爱心了！");
}

function nextStory() {
  openStory((currentStory + 1) % stories.length);
}

function sendDanmaku(text) {
  const clean = text.trim();
  if (!clean) return;
  const el = document.createElement("span");
  el.className = "danmaku";
  el.textContent = clean;
  el.style.top = `${8 + Math.random() * 72}%`;
  $("#galleryWall").append(el);
  el.addEventListener("animationend", () => el.remove());
}

function pointInside(rect, x, y) {
  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
}

function updateMood(score) {
  mood = Math.min(100, mood + Number(score || 30));
  $("#moodFill").style.width = `${mood}%`;
  $("#moodText").textContent = `MOOD ${String(mood).padStart(2, "0")}%`;
}

function hearts() {
  const layer = $("#heartLayer");
  layer.innerHTML = "";
  [[-70,-90,"-12deg"],[-20,-130,"8deg"],[38,-108,"14deg"],[86,-82,"-10deg"]].forEach(([x,y,r], i) => {
    const h = document.createElement("span");
    h.textContent = i % 2 ? "♡" : "♥";
    h.style.setProperty("--x", `${x}px`);
    h.style.setProperty("--y", `${y}px`);
    h.style.setProperty("--r", r);
    layer.append(h);
  });
}

function feed(snack) {
  $("#feedFace").src = `./assets/feed_state_${snack.dataset.state || "0"}.png`;
  updateMood(snack.dataset.score);
  hearts();
  showToast(`${snack.getAttribute("aria-label")} for June!`);
}

function resetSnack(snack) {
  snack.classList.remove("dragging");
  snack.style.left = "";
  snack.style.top = "";
  snack.style.width = "";
  if (snackOrigin?.parent) snackOrigin.parent.insertBefore(snack, snackOrigin.next);
  activeSnack = null;
  snackOrigin = null;
}

document.addEventListener("DOMContentLoaded", () => {
  renderChapters();
  renderGallery();
  renderLilyPanel();

  $$(".gallery-controls button").forEach(btn => btn.addEventListener("click", () => setFilter(btn.dataset.filter)));
  $$(".lily-menu button").forEach(btn => btn.addEventListener("click", () => renderLilyPanel(btn.dataset.lilyPanel)));
  $("#lilySecret").addEventListener("click", () => {
    renderLilyPanel("ending");
    showToast("SECRET FILE OPENED: 尾声档案");
  });
  $$(".sticker[data-toast]").forEach(btn => btn.addEventListener("click", () => showToast(btn.dataset.toast)));
  $(".close-dialog").addEventListener("click", () => $("#storyDialog").close());
  $("#modalLike").addEventListener("click", likeCurrent);
  $("#modalNext").addEventListener("click", nextStory);

  $("#sendDanmaku").addEventListener("click", () => {
    sendDanmaku($("#danmakuInput").value);
    $("#danmakuInput").value = "";
  });
  $("#danmakuInput").addEventListener("keydown", e => {
    if (e.key === "Enter") {
      sendDanmaku(e.currentTarget.value);
      e.currentTarget.value = "";
    }
  });
  ["READ JUNE!", "かわいい♡", "请给六月点赞"].forEach((t, i) => setTimeout(() => sendDanmaku(t), 900 + i * 900));

  $$(".snack").forEach(snack => {
    snack.addEventListener("click", e => e.preventDefault());
    snack.addEventListener("pointerdown", e => {
      e.preventDefault();
      activeSnack = snack;
      dragMoved = false;
      dragStart = { x: e.clientX, y: e.clientY };
      const rect = snack.getBoundingClientRect();
      snackOrigin = { parent: snack.parentNode, next: snack.nextSibling };
      snack.classList.add("dragging");
      snack.style.width = `${rect.width}px`;
      document.body.append(snack);
      snack.style.left = `${e.clientX}px`;
      snack.style.top = `${e.clientY}px`;
    });
  });

  window.addEventListener("pointermove", e => {
    if (!activeSnack) return;
    if (dragStart && Math.hypot(e.clientX - dragStart.x, e.clientY - dragStart.y) > 8) dragMoved = true;
    activeSnack.style.left = `${e.clientX}px`;
    activeSnack.style.top = `${e.clientY}px`;
  });

  window.addEventListener("pointerup", e => {
    if (!activeSnack) return;
    const snack = activeSnack;
    const wasDrag = dragMoved;
    const over = pointInside($("#feedFrame").getBoundingClientRect(), e.clientX, e.clientY);
    resetSnack(snack);
    dragStart = null;
    if (!wasDrag || over) feed(snack);
  });
});
