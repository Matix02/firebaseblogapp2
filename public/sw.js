const cacheName = 'site-static-v2';
const staticAssets = [
    'index.html',
    // Dodać reszte plik, jak zacznie dzialac
];

self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('caching shell assets');
            cache.addAll(staticAssets);
        })
    );
});

self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== cacheName)
                .map(key => caches.delete(key))
            );
        })
    );
});

self.addEventListener('fetch', evt => {
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);
        })
    );
});

