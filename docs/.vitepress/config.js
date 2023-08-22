module.exports = {
  base: "/me/",
  title: "黄兆虎: hi here",
  description: "Just playing around.",
  themeConfig: {
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "前端",
        items: [
          { text: "js", link: "/frontend/js/" },
          { text: "css", link: "/frontend/css/" },
          { text: "css示例", link: "/frontend/css示例/" },
          { text: "svg", link: "/frontend/svg/" },
        ],
      },
      {
        text: "AI & 人工智能",
        items: [{ text: "AI", link: "/ai/" }],
      },
      {
        text: "linux",
        items: [{ text: "shell", link: "/linux/shell/" }],
      },
    ],
  },
};
