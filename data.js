// ============================================
// data.js｜「今日热搜」唯一数据源头
// 站长每日手动更新本文件即可，页面自动读取渲染
// 数据来源：微博实时热搜榜（人工整理，2026-09-22 快照）
// ============================================

const HOT_DATA = {
  date: "2026-09-22", // 本份榜单的日期（PRD F4：页面显示日期与此一致）
  items: [
    { rank: 1,  title: "如果你出生于1992年至2003年之间", heat: 1190221, source: "微博", url: "https://s.weibo.com/weibo?q=%E5%A6%82%E6%9E%9C%E4%BD%A0%E5%87%BA%E7%94%9F%E4%BA%8E1992%E5%B9%B4%E8%87%B32003%E5%B9%B4%E4%B9%8B%E9%97%B4" },
    { rank: 2,  title: "拒绝了十五年前拒绝过我的学校",   heat: 966378,  source: "微博", url: "https://s.weibo.com/weibo?q=%E6%8B%92%E7%BB%9D%E4%BA%86%E5%8D%81%E4%BA%94%E5%B9%B4%E5%89%8D%E6%8B%92%E7%BB%9D%E8%BF%87%E6%88%91%E7%9A%84%E5%AD%A6%E6%A0%A1" },
    { rank: 3,  title: "第23届东博会峰会",               heat: 787326,  source: "微博", url: "https://s.weibo.com/weibo?q=%E7%AC%AC23%E5%B1%8A%E4%B8%9C%E5%8D%9A%E4%BC%9A%E5%B3%B0%E4%BC%9A" },
    { rank: 4,  title: "偶像来了 国际大花",              heat: 768324,  source: "微博", url: "https://s.weibo.com/weibo?q=%E5%81%B6%E5%83%8F%E6%9D%A5%E4%BA%86%20%E5%9B%BD%E9%99%85%E5%A4%A7%E8%8A%B1" },
    { rank: 5,  title: "我们来了阵容配置",               heat: 581512,  source: "微博", url: "https://s.weibo.com/weibo?q=%E6%88%91%E4%BB%AC%E6%9D%A5%E4%BA%86%E9%98%B5%E5%AE%B9%E9%85%8D%E7%BD%AE" },
    { rank: 6,  title: "iOS27电池图标 丑",               heat: 573586,  source: "微博", url: "https://s.weibo.com/weibo?q=iOS27%E7%94%B5%E6%B1%A0%E5%9B%BE%E6%A0%87%20%E4%B8%91" },
    { rank: 7,  title: "HYROX失禁女选手致歉",            heat: 570549,  source: "微博", url: "https://s.weibo.com/weibo?q=HYROX%E5%A4%B1%E7%A6%81%E5%A5%B3%E9%80%89%E6%89%8B%E8%87%B4%E6%AD%89" },
    { rank: 8,  title: "小鹏G9L价格炸裂",                heat: 523695,  source: "微博", url: "https://s.weibo.com/weibo?q=%E5%B0%8F%E9%B9%8FG9L%E4%BB%B7%E6%A0%BC%E7%82%B8%E8%A3%82" },
    { rank: 9,  title: "30岁后找对象比赚钱还难",         heat: 492428,  source: "微博", url: "https://s.weibo.com/weibo?q=30%E5%B2%81%E5%90%8E%E6%89%BE%E5%AF%B9%E8%B1%A1%E6%AF%94%E8%B5%9A%E9%92%B1%E8%BF%98%E9%9A%BE" },
    { rank: 10, title: "TES晋级S16",                     heat: 461185,  source: "微博", url: "https://s.weibo.com/weibo?q=TES%E6%99%8B%E7%BA%A7S16" }
  ]
};
