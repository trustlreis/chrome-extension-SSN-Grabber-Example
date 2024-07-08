// background.js
chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
});

let ssnFields = [];

// Store SSN fields from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.ssnFields) {
        ssnFields = message.ssnFields;
        console.log('SSN Fields:', ssnFields);
    } else if (message.action === 'getSSNFields') {
        sendResponse({ ssnFields });
    }
});