/* global caches clients location fetch */

addEventListener('install', function (installEvent) {
    installEvent.waitUntil(clients.matchAll({type: 'all', includeUncontrolled: true}).then(function (windowClients) {
        //set up caching here only for production domain
        var setupCaching = function() {
            caches.open('ParkOne').then(function(cache) {
                return cache.addAll([
                    '/index.html',
                    '/script.js',
                    '/style.css'
                ])
            })
        }
        if (location.hostname === 'parkone.cloud') {
            //console.log('parkone.cloud/worker.js: line 16: ', 'Service Worker installed: live mode: set up caching')
            setupCaching()
        } else {
            //console.log('parkone.cloud/worker.js: ', 'Service Worker installed: development mode: no caching')
        }
    }))
})
addEventListener('activate', function (activateEvent) {
    activateEvent.waitUntil(clients.claim())
    activateEvent.waitUntil(clients.matchAll({type: 'all', includeUncontrolled: true}).then(function (windowClients) {
        //console.log('parkone.cloud/worker.js: line 26', 'Service Worker Active')
    }))
})
addEventListener('message', event => {
    //console.log('parkone.cloud/worker.js: line 30', 'Service Worker message')
})
addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request)
        })
    )
})
