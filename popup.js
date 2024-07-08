document.addEventListener('DOMContentLoaded', () => {
    // Function to update the popup with SSN fields
    function updatePopup(ssnFields) {
        const ssnList = document.getElementById('ssn-list');
        ssnList.innerHTML = '';
        ssnFields.forEach(field => {
            const li = document.createElement('li');
            li.textContent = `ID: ${field.id}, Name: ${field.name}, Value: ${field.value}`;
            ssnList.appendChild(li);
        });
    }

    // Get SSN fields from the background script
    chrome.runtime.getBackgroundPage((backgroundPage) => {
        const ssnFields = backgroundPage.getSsnFields();
        updatePopup(ssnFields);
    });
});
