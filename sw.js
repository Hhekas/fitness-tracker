const CACHE_NAME = 'fitness-tracker-v1';
const urlsToCache = [
    '/fitness-tracker/',
    '/fitness-tracker/index.html',
    '/fitness-tracker/manifest.json'
  ];

// Install service worker
self.addEventListener('install', event => {
    event.waitUntil(
          caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
        );
});

// Fetch from cache, fallback to network
self.addEventListener('fetch', event => {
    event.respondWith(
          caches.match(event.request)
            .then(response => response || fetch(event.request))
        );
});

// Update service worker
self.addEventListener('activate', event => {
    event.waitUntil(
          caches.keys().then(cacheNames => {
                  return Promise.all(
                            cacheNames.map(cacheName => {
                                        if (cacheName !== CACHE_NAME) {
                                                      return caches.delete(cacheName);
                                        }
                            })
                          );
          })
        );
});
