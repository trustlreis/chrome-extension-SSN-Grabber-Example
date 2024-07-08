// background.js
chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
});

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.ssnFields) {
        console.log('SSN Fields:', message.ssnFields);
        // Process or store the SSN fields as needed
    }
});
