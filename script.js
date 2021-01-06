/* global */
window.LiveElement.Element.load().then(() => {
    console.log('script.js: line 3: ', 'window.LiveElement.Element is loaded!')
    // do stuff...
})


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