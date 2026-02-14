const INTENT_URL = "https://bsky.app/intent/compose";

function shareToBluesky(url) {
  const intentUrl = `${INTENT_URL}?text=${encodeURIComponent(url)}`;
  chrome.tabs.create({ url: intentUrl });
}

chrome.action.onClicked.addListener((tab) => {
  if (tab.url) {
    shareToBluesky(tab.url);
  }
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "share-to-bluesky" && tab.url) {
    shareToBluesky(tab.url);
  }
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "share-to-bluesky",
    title: "Share to Bluesky",
    contexts: ["page"],
  });
});
