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

## GitHub Pages

In the repository, open **Settings → Pages** and choose **Deploy from a branch**, then select `main` and `/ (root)`. The root `index.html` redirects visitors to the course app.