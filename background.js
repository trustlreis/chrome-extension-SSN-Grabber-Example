chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.ssnFields) {
        console.log('SSN Fields:', message.ssnFields);
        // Here the fields could be sent to a remote server, stored, or misused
    }
});
