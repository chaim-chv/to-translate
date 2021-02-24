browser.contextMenus.create({
  id: "selection-menu",
  title: "send to google translate",
  contexts: ["selection"],
  icons: {
    16: "icon16.png",
    32: "icon32.png",
  },
  onclick: function (info, tab) {
    chrome.tabs.create({ url: `https://translate.google.com/?hl=iw&sl=en&tl=iw&text=${encodeURIComponent(info.selectionText)}&op=translate` });
  },
});