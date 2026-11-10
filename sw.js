const CACHE = 'izzi-vibes-v7';
const FILES = [
 "./",
 "./index.html",
 "./manifest.webmanifest",
 "./img/capa.jpg",
 "./img/fim.jpg",
 "./img/logo-entrada.png",
 "./img/carta-01.jpg",
 "./img/carta-02.jpg",
 "./img/carta-03.jpg",
 "./img/carta-04.jpg",
 "./img/carta-05.jpg",
 "./img/carta-06.jpg",
 "./img/carta-07.jpg",
 "./img/carta-08.jpg",
 "./img/carta-09.jpg",
 "./img/carta-10.jpg",
 "./img/carta-11.jpg",
 "./img/carta-12.jpg",
 "./img/carta-13.jpg",
 "./img/carta-14.jpg",
 "./img/carta-15.jpg",
 "./img/carta-16.jpg",
 "./img/carta-17.jpg",
 "./img/carta-18.jpg",
 "./img/carta-19.jpg",
 "./img/carta-20.jpg",
 "./img/carta-21.jpg",
 "./img/carta-22.jpg",
 "./img/carta-23.jpg",
 "./img/carta-24.jpg",
 "./img/carta-25.jpg",
 "./img/carta-26.jpg",
 "./img/carta-27.jpg",
 "./img/carta-28.jpg",
 "./img/carta-29.jpg",
 "./img/carta-30.jpg",
 "./img/carta-31.jpg",
 "./img/carta-32.jpg",
 "./img/carta-33.jpg",
 "./img/carta-34.jpg",
 "./img/carta-35.jpg",
 "./img/carta-36.jpg",
 "./img/carta-37.jpg",
 "./img/carta-38.jpg",
 "./img/carta-39.jpg",
 "./img/carta-40.jpg",
 "./img/carta-41.jpg",
 "./img/carta-42.jpg",
 "./img/carta-43.jpg",
 "./img/carta-44.jpg",
 "./img/carta-45.jpg",
 "./img/carta-46.jpg",
 "./img/carta-47.jpg",
 "./img/carta-48.jpg",
 "./img/carta-49.jpg",
 "./img/carta-50.jpg",
 "./img/carta-51.jpg",
 "./img/carta-52.jpg",
 "./icons/icon-192.png",
 "./icons/icon-512.png",
 "./icons/icon-maskable-512.png"
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then((hit) => hit || fetch(e.request).then((res) => {
    caches.open(CACHE).then((c) => c.put(e.request, res.clone()));
    return res;
  })));
});
