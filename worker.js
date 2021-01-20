/* global caches clients location fetch globalThis */
var liveDomains = ['live-element.net']
var pathsToCache = ['/index.html', '/script.js', '/style.css']

globalThis.addEventListener('install', function (installEvent) {
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
globalThis.addEventListener('activate', function (activateEvent) {
    activateEvent.waitUntil(clients.claim())
    activateEvent.waitUntil(clients.matchAll({type: 'all', includeUncontrolled: true}).then(function (windowClients) {
        //console.log('worker.js: line 23', 'Service Worker Active')
    }))
})
globalThis.addEventListener('message', event => {
    //console.log('worker.js: line 27', 'Service Worker message')
})
globalThis.addEventListener('push', event => {
    var title = event.data.title
    delete event.data.title
    event.waitUntil(globalThis.registration.showNotification(title, event.data))
})
globalThis.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request)
        })
    )
})


