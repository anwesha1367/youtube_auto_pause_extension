chrome.tabs.onActivated.addListener(async (activeInfo) => {

    const tab = await chrome.tabs.get(activeInfo.tabId);

    if (tab.url.includes("youtube.com")) {

        chrome.tabs.sendMessage(activeInfo.tabId, {
            action: "play"
        });

    }
});