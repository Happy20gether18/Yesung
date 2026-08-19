// 唯一题库来源：答题页与核对页都只读取这里，禁止在页面中另写选项或答案。
window.QUIZ_DATA = Object.freeze({
  title: "看图猜歌名",
  secondsPerQuestion: 5,
  questions: [
    {
      image: "images/01.png",
      answer: "Together",
      options: ["Floral Sense", "Together", "Beautiful Night", "Small Things"]
    },
    {
      image: "images/02.png",
      answer: "春天的阵雨",
      options: ["春天的阵雨", "Unfading Sense", "Curtain", "Easy"]
    },
    {
      image: "images/03.png",
      answer: "Scented Things",
      options: ["Whatcha Doin", "Phantom Pain", "Scented Things", "Floral Sense"]
    },
    {
      image: "images/04.png",
      answer: "Pink Magic",
      options: ["Beautiful Paradox", "There She Goes Again", "Easy", "Pink Magic"]
    },
    {
      image: "images/05.png",
      answer: "Because I Love You ～大切な绊～",
      options: ["束の间の恋", "Because I Love You ～大切な绊～", "写しかがみ～憎しみの矛先～", "咲き夸る时を待つのは"]
    },
    {
      image: "images/06.png",
      answer: "Here I am",
      options: ["Corazón Perdido (Lost Heart)", "It's Complicated", "Here I am", "Beautiful Night"]
    },
    {
      image: "images/07.png",
      answer: "It's Complicated",
      options: ["It's Complicated", "Beautiful Paradox", "Phantom Pain", "Easy"]
    },
    {
      image: "images/08.png",
      answer: "There She Goes Again",
      options: ["Whatcha Doin", "There She Goes Again", "Curtain", "Beautiful Night"]
    },
    {
      image: "images/09.png",
      answer: "束の间の恋",
      options: ["写しかがみ～憎しみの矛先～", "咲き夸る时を待つのは", "束の间の恋", "Because I Love You ～大切な绊～"]
    },
    {
      image: "images/10.png",
      answer: "写しかがみ～憎しみの矛先～",
      options: ["春天的阵雨", "束の间の恋", "咲き夸る时を待つのは", "写しかがみ～憎しみの矛先～"]
    },
    {
      image: "images/11.png",
      answer: "咲き夸る时を待つのは",
      options: ["咲き夸る时を待つのは", "写しかがみ～憎しみの矛先～", "Because I Love You ～大切な绊～", "束の间の恋"]
    },
    {
      image: "images/12.png",
      answer: "Small Things",
      options: ["Floral Sense", "Small Things", "Scented Things", "Unfading Sense"]
    },
    {
      image: "images/13.png",
      answer: "Phantom Pain",
      options: ["Beautiful Paradox", "Corazón Perdido (Lost Heart)", "Phantom Pain", "It's Complicated"]
    },
    {
      image: "images/14.png",
      answer: "Floral Sense",
      options: ["Scented Things", "Unfading Sense", "Small Things", "Floral Sense"]
    },
    {
      image: "images/15.png",
      answer: "Corazón Perdido (Lost Heart)",
      options: ["Corazón Perdido (Lost Heart)", "There She Goes Again", "Phantom Pain", "Beautiful Paradox"]
    },
    {
      image: "images/16.png",
      answer: "No More Love",
      options: ["No More Love", "It's Complicated", "There She Goes Again", "Easy"]
    },
    {
      image: "images/17.png",
      answer: "雨のち晴れの空の色",
      options: ["束の间の恋", "雨のち晴れの空の色", "咲き夸る时を待つのは", "写しかがみ～憎しみの矛先～"]
    },
    {
      image: "images/18.png",
      answer: "Splash",
      options: ["Floral Sense", "Small Things", "Splash", "Scented Things"]
    },
    {
      image: "images/19.png",
      answer: "Whatcha Doin",
      options: ["Beautiful Night", "There She Goes Again", "No More Love", "Whatcha Doin"]
    },
    {
      image: "images/20.png",
      answer: "いま会いにゆきます 〜IF you〜",
      options: ["いま会いにゆきます 〜IF you〜", "雨のち晴れの空の色", "束の间の恋", "咲き夸る时を待つのは"]
    }
  ]
});

// 每次点击“开始答题 / 再玩一次”时，随机题目顺序及 A–D 位置。
// 只移动完整题目对象和现有四个选项；answer 字符串不变，因此正确答案始终存在。
(() => {
  const shuffleInPlace = list => {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
  };
  const bgm = new Audio("audio/Easy.mp3");
  bgm.loop = true;
  bgm.volume = 0.06;

  // 页面打开时先尝试播放；若浏览器拦截自动播放，点击“开始答题”时会再次播放。
  window.addEventListener("DOMContentLoaded", () => {
    bgm.play().catch(() => {});
  });

  document.addEventListener("click", event => {
    const button = event.target.closest?.(".primary");
    if (!button) return;
    shuffleInPlace(window.QUIZ_DATA.questions);
    window.QUIZ_DATA.questions.forEach(question => shuffleInPlace(question.options));
    bgm.currentTime = 0;
    bgm.play().catch(() => {});
  }, true);

})();
