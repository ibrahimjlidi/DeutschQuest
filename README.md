# DeutschQuest

An interactive German-learning app with vocabulary, grammar, exercises, and pronunciation practice for levels A1.1 through B2.2.

## Run locally

Serve this folder with any static web server, then open `learn-german-course.html`. For example:

```powershell
python -m http.server 8000
```

The app uses the browser's speech and microphone APIs. Microphone access requires permission and a secure context such as `localhost` or HTTPS.

## GitHub Pages

In the repository, open **Settings → Pages** and choose **Deploy from a branch**, then select `main` and `/ (root)`. The root `index.html` redirects visitors to the course app.