/* global caches clients location fetch */
var liveDomains = ['live-element.net']
var pathsToCache = ['/index.html', '/script.js', '/style.css']

addEventListener('install', function (installEvent) {
    installEvent.waitUntil(clients.matchAll({type: 'all', includeUncontrolled: true}).then(function (windowClients) {
        var setupCaching = function() {
            caches.open('LiveElement').then(function(cache) {
                return cache.addAll(pathsToCache)
            })
        }
        if (liveDomains.includes(location.hostname)) {
            //console.log('worker.js: line 13: ', 'Service Worker installed: live mode: set up caching')
            setupCaching()
        } else {
            //console.log('worker.js: line 16: ', 'Service Worker installed: development mode: no caching')
        }
    }))
})
addEventListener('activate', function (activateEvent) {
    activateEvent.waitUntil(clients.claim())
    activateEvent.waitUntil(clients.matchAll({type: 'all', includeUncontrolled: true}).then(function (windowClients) {
        //console.log('worker.js: line 23', 'Service Worker Active')
    }))
})
addEventListener('message', event => {
    //console.log('worker.js: line 27', 'Service Worker message')
})
addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request)
        })
    )
})
