const CACHE_NAME = 'site-cache-v9';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/signin',
  '/logo.png',
  '/icon-192.png',
  '/icon-512.png',
  '/manifest.json'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch((error) => {
        console.error('Fetch failed:', event.request.url, error);
        throw error;
      });
    })
  );
});

// Activate event (clean up old caches)
self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.map(key => key !== CACHE_NAME && caches.delete(key)))));
});