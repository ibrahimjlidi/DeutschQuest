# DeutschQuest

An interactive German-learning app with vocabulary, grammar, exercises, and pronunciation practice for levels A1.1 through B2.2.

## Run locally

Serve this folder with any static web server, then open `learn-german-course.html`. For example:

```powershell
python -m http.server 8000
```

The app uses the browser's speech and microphone APIs. Microphone access requires permission and a secure context such as `localhost` or HTTPS.

## Install on a phone

Deploy the app to an HTTPS host first. On Android, open the site in Chrome and choose **Install app** or **Add to Home screen** from the browser menu. On iPhone, open it in Safari, tap **Share**, then choose **Add to Home Screen**.

The app shell and mascot are cached after the first visit for offline opening. Speech recognition may still require an internet connection and a supported browser.

## Native Android and iOS builds

The Capacitor wrapper packages the same course UI as a native app and uses the device speech-recognition service for pronunciation practice.

```powershell
npm install
npm run build
npx cap add android
npx cap add ios --packagemanager CocoaPods
npx cap sync
```

Open `android/` in Android Studio to run or create a Play Store release. Open `ios/` in Xcode on a Mac to run or archive an App Store release. iOS builds cannot be compiled on Windows. The iOS scaffold includes microphone and speech-recognition usage explanations in its `Info.plist`.

The provisional native app ID is `com.deutschquest.app`. Before store submission, replace the sample Spider-Man artwork with art you own or have permission to distribute, and prepare store listings, privacy disclosures, signing, and developer accounts.

## GitHub Pages

In the repository, open **Settings → Pages** and choose **Deploy from a branch**, then select `main` and `/ (root)`. The root `index.html` redirects visitors to the course app.