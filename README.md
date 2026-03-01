# bluesky-skeet

Post links to Bluesky from your browser. Supports Safari, Chrome and Firefox.

This extension will not track you: No analytics, no data collection. It just opens the current page URL into Bluesky's compose window.

The icon will appear greyed out until permissions are granted.

![Post to Bluesky icon](bsky.png)

A `Share to Bluesky` menu item is also available from the right-click menu.

## Chrome / Firefox

Load the `extension/` directory directly:

- **Chrome:** Go to `chrome://extensions`, enable Developer mode, click "Load unpacked", select the `extension/` folder
- **Firefox:** Go to `about:debugging#/runtime/this-firefox`, click "Load Temporary Add-on", select `extension/manifest.json`

## Safari

The Safari extension requires an Xcode project wrapper. To generate it from the web extension source:

```bash
xcrun safari-web-extension-converter extension/ \
  --bundle-identifier page.harrison.bluesky-skeet \
  --project-location safari \
  --app-name "Post to Bluesky" \
  --swift --macos-only --copy-resources
```

To enable in Safari: Open the generated Xcode project, build and run. In Safari, go to Settings > Developer > "Allow unsigned extensions", then enable the extension in Settings > Extensions.

Consider the `safari` folder to be read-only and make changes in the `extensions` folder.

## Assets

* [Butterfly](https://www.svgrepo.com/svg/404908/butterfly) from the [Twemoji Emojis](https://www.svgrepo.com/collection/twemoji-emojis/) Collection

## About

* Author: [Harrison Page](https://harrison.page)
* Created: February 2026
* [MIT License](LICENSE)
