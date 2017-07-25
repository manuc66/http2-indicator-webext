'use strict';

/*global chrome:false */

chrome.browserAction.setBadgeText({ text: '?' });
chrome.browserAction.setBadgeBackgroundColor({ color: 'orange' });

chrome.browserAction.onClicked.addListener(function (aTab) {
  chrome.tabs.create({ 'url': 'http://chilloutandwatchsomecatgifs.com/', 'active': true });
});

function isHttp2(e) {
  if (e.statusLine.startsWith('HTTP/2')) {
    chrome.browserAction.setBadgeText({ text: '✓' });
    chrome.browserAction.setBadgeBackgroundColor({ color: 'green' });
  }
  else {
    chrome.browserAction.setBadgeText({ text: 'X' });
    chrome.browserAction.setBadgeBackgroundColor({ color: 'red' });
  }
  return { responseHeaders: e.responseHeaders };
}

// Listen for onHeaderReceived for the target page.
// Set "blocking" and "responseHeaders".
browser.webRequest.onHeadersReceived.addListener(
  isHttp2,
  { urls: ["<all_urls>"] },
  ["responseHeaders"]
);