// // self.addEventListener('install', function(e) {
// //   return e;
// // });

// // self.addEventListener('activate', event => {
// //   return event;
// // });

// // self.addEventListener('fetch', function(event) {
// //   return event;
// // });

// const clearOldCaches = () => caches.keys().then(keys => {
//   return Promise.all(keys.filter(key => key !== CACHE_NAME).map(key =>{
//     console.log('[sw] remove cache', key)
//     caches.delete(key)
//   }))
// })

// // Delete outdated caches
// self.addEventListener('activate', event => {
//   event.waitUntil(clearOldCaches().then(() => self.cleints.claim()))
// })

// // Cache resources
// self.addEventListener('install', event => {
//   event.waitUntil(
//     caches
//       .open(CACHE_NAME)
//       .then((cache) => {
//         // add the non-important resources
//         cache.addAll(NON_CRITICAL)

//         // add the critical ones
//         return cache.addAll(CRITICAL)
//       })
//       .then(() => self.skipWaiting())
//   );
// });


// // Respond with cached resources
// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches
//       .match(event.request)
//       .then(response => {
//         // something should be here
//         if (response){

//           // resolve the response
//           Promise.resolve(response);

//           // fetch the request
//           fetch(event.request)
//             .then(res => {
//               // and cache it
//               addToCache(event.request, res)
//             })

//         }else{

//          fetch(event.request)
//           .then(res => {
//             const clone = res.clone()
//             addToCache(event.request, clone)
//             return Promise.resolve(res)
//           })

//         }
//       })
//   )
// })

// const addToCache = (request, response) =>
//     caches.open(CACHE_NAME).then(cache => cache.put(request, response))

// const _import = async view => {
//   const template = await fetch(`/${view}`)
//   return template.text()
// }

// // const routes = {
// //   '/': () => _import('dashboard/'),
// //   '/': () => _import('dashboard/')
// // }

// const handleNavigation = async (state) => {
//   const {pathname: route} = state ? state : window.location
//   containerElement.innerHTML = await (_import(route))()
// }

// self.addEventListener('load', handleNavigation);
// self.addEventListener('popstate', event => handleNavigation(event.state));

var staticCacheName = 'obrazul';

self.addEventListener('install', function(event) {
  // event.waitUntil(
  //   caches.open(staticCacheName).then(function(cache) {
  //     return cache.addAll([
  //       '/base_layout'
  //     ]);
  //   })
  // );
  return
});

self.addEventListener('fetch', function(event) {
  // var requestUrl = new URL(event.request.url);
  //   if (requestUrl.origin === location.origin) {
  //     // if ((requestUrl.pathname === '/')) {
  //     //   event.respondWith(caches.match('/base_layout'));
  //     //   return;
  //     // }
  //   }
  //   event.respondWith(
  //     // caches.match(event.request).then(function(response) {
  //     //   return response || fetch(event.request);
  //     // })
  //   );
  return
});