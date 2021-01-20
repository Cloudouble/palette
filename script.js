/* global */
window.LiveElement.Element.load().then(() => {
    console.log('script.js: line 3: ', 'window.LiveElement.Element is loaded!')
    // do stuff...
})

/*
window.navigator.serviceWorker.ready.then(function(registration) {
  return registration.pushManager.getSubscription().then(subscription => {
    if (subscription) { 
      return subscription
    } else {
      return registration.pushManager.subscribe()
    }
  })
}).then(function(subscription) {
  fetch('./register', {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      subscription: subscription
    }),
  });

  document.getElementById('doIt').onclick = function() {
    const delay = document.getElementById('notification-delay').value;
    const ttl = document.getElementById('notification-ttl').value;
    fetch('./sendNotification', {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        subscription: subscription,
        delay: delay,
        ttl: ttl,
      }),
    });
  };

});"
*/
/*

// define processors for window.LiveElement.Live
window.LiveElement.Live.processors.example = function(input) {
  switch(window.LiveElement.Live.getHandlerType(input)) {
      case 'subscription': 
          return {placeholder: input.payload._timestamp}
      case 'trigger':
          console.log(`You changed the value of ${input.attributes.name} to "${input.map['#value']}"`)
  }
}

// define listeners for window.LiveElement.Live
window.LiveElement.Live.listeners.testlistener = {processor: 'default', delay: 1000, max: 10}

*/