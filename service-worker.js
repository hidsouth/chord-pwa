const CACHE_NAME = "chord-pwa-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./service-worker.js",
  "./icon.png",
  "https://d3js.org/d3.v7.min.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});