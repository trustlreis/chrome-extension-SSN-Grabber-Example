# Chrome Extension SSN Grabber Example

## What is this
This is an example Chrome extension designed to demonstrate how a Chrome extension can potentially grab sensitive information, such as Social Security Numbers (SSNs), from any open tab. This extension is intended for educational purposes only, to highlight the security risks associated with browser extensions.

## Why we did it
The purpose of this project is to educate users and developers about the potential security vulnerabilities in browser extensions. By showcasing how an extension can access and log sensitive data, we aim to raise awareness about the importance of reviewing extension permissions and using trusted extensions only.

## Project Files
- **manifest.json**: Defines the extension's permissions and scripts.
- **background.js**: Handles background tasks and listens for messages from the content script.
- **content.js**: Scans web pages for input fields that may contain SSNs and sends the data to the background script.
- **popup.html** (optional): Provides a user interface for displaying SSN fields.
- **popup.js** (optional): Handles the logic for updating the popup interface.

## How to Install

### Clone the Repository
1. Clone this repository to your local machine using:
   ```sh
   git clone https://github.com/trustlreis/chrome-extension-SSN-Grabber-Example.git
   cd chrome-extension-SSN-Grabber-Example
   ```

### Load the Extension in Chrome
1. Open Chrome and go to `chrome://extensions/`.
2. Enable `Developer mode` by toggling the switch in the top right corner.
3. Click on the `Load unpacked` button.
4. Select the directory where you cloned the repository.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
