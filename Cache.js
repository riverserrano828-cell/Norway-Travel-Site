/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */

const cacheName = 'site-static';

const assets = [
    'ContactInfo.html',
    'DateCountdown.js',
    'ExploreTours.html',
    'FoodLocation.html',
    'MyTemplatePage.html',
    'Overnight.html',
    'Reviews.html',
    'SiteSeeing.html',
    'index.html',
    'manifest.json',
    'stylesheet.css',
    'stlyesheet2.css',
    'OIP(1).jpg',
    'OIP(2).jpg',
    'OIP.jpg',
    'download.jpg',
    'download(1).jpg',
    'download(2).jpg',
    'download(3).jpg',
    'download(4).jpg',
    'download(5).jpg',
    'download(6).jpg',
    'download(7).jpg',
    'favicon-16x16.png',
    'favicon.ico',
    'favicon_io.zip'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('Service Worker: Caching shell assets');
            // This attempts to fetch and cache all listed assets
            return cache.addAll(assets); 
        })
    );
});


self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            console.log('Service Worker: Cleaning old caches');
            return Promise.all(keys
                // Filter out the current cache name
                .filter(key => key !== cacheName)
                // Delete the remaining old caches
                .map(key => caches.delete(key))
            );
        })
    );
});


self.addEventListener('fetch', event => {
    // We only want to handle GET requests
    if (event.request.method === 'GET') { 
        event.respondWith(
            caches.match(event.request).then(cacheRes => {
                // Return resource from cache, OR fetch from network
                return cacheRes || fetch(event.request);
            })
        );
    }
});
