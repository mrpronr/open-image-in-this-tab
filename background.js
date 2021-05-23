browser.contextMenus.create({
  id: "open-image-in-this-tab",
  title: "画像をこのタブで開く",
  contexts: ["image"],
});

browser.contextMenus.onClicked.addListener(info => {
  if (info.menuItemId == "open-image-in-this-tab") {
    browser.tabs.update({ url: info.srcUrl });
  }
});
