//to block the requests
chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    if (
      details.url.includes("youtube.com/api/stats/ads") ||
      details.url.includes("googleads.g.doubleclick.net")
    ) {
      return { cancel: true };
    }
  },
  { urls: ["*://*.youtube.com/*", "*://*.googleadservices.com/*"] },
  ["blocking"]
);
