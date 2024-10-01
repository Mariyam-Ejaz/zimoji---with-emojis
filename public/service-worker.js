// const CACHE_NAME = 'emoji-cache-v1';
// const BASE_URL = 'http://zimoji.vercel.app';

// const EMOJI_URLS = [
//   '/emojis/512 (1).webp',
//   '/emojis/512 (2).webp',
//   '/emojis/512 (3).webp',
//   '/emojis/512 (4).webp',
//   '/emojis/512 (5).webp',
//   '/emojis/512 (6).webp',
//   '/emojis/512 (7).webp',
//   '/emojis/512 (8).webp',
//   '/emojis/512 (9).webp',
//   '/emojis/512 (10).webp',
//   '/emojis/512 (11).webp',
//   '/emojis/512 (12).webp',
//   '/emojis/512 (13).webp',
//   '/emojis/512 (14).webp',
//   '/emojis/512 (15).webp',
//   '/emojis/512 (16).webp',
//   '/emojis/512 (17).webp',
//   '/emojis/512 (18).webp',
//   '/emojis/512 (19).webp',
//   '/emojis/512 (20).webp',
//   '/emojis/512 (21).webp',
//   '/emojis/512 (22).webp',
//   '/emojis/512 (23).webp',
//   '/emojis/512 (24).webp',
//   '/emojis/512 (25).webp',
//   '/emojis/512 (26).webp',
//   '/emojis/512 (27).webp',
//   '/emojis/512 (28).webp',
//   '/emojis/512 (29).webp',
//   '/emojis/512 (30).webp',
//   '/emojis/512 (31).webp',
//   '/emojis/512 (32).webp',
//   '/emojis/512 (33).webp',
//   '/emojis/512 (34).webp',
//   '/emojis/512 (35).webp',
//   '/emojis/512 (36).webp',
//   '/emojis/512 (37).webp',
//   '/emojis/512 (38).webp',
//   '/emojis/512 (39).webp',
//   '/emojis/512 (40).webp',
//   '/emojis/512 (41).webp',
//   '/emojis/512 (42).webp',
//   '/emojis/512 (43).webp',
//   '/emojis/512 (44).webp',
//   '/emojis/512 (45).webp',
//   '/emojis/512 (46).webp',
//   '/emojis/512 (47).webp',
//   '/emojis/512 (48).webp',
//   '/emojis/512 (49).webp',
//   '/emojis/512 (50).webp',
//   '/emojis/512 (51).webp',
//   '/emojis/512 (52).webp',
//   '/emojis/512 (53).webp',
//   '/emojis/512 (54).webp',
//   '/emojis/512 (55).webp',
//   '/emojis/512 (56).webp',
//   '/emojis/512 (57).webp',
//   '/emojis/512 (58).webp',
//   '/emojis/512 (59).webp',
//   '/emojis/512 (60).webp',
//   '/emojis/512 (61).webp',
//   '/emojis/512 (62).webp',
//   '/emojis/512 (63).webp',
//   '/emojis/512 (64).webp',
//   '/emojis/512 (65).webp',
//   '/emojis/512 (66).webp',
//   '/emojis/512 (67).webp',
//   '/emojis/512 (68).webp',
//   '/emojis/512 (69).webp',
//   '/emojis/512 (70).webp',
//   '/emojis/512 (71).webp',
//   '/emojis/512 (72).webp',
//   '/emojis/512 (73).webp',
//   '/emojis/512 (74).webp',
//   '/emojis/512 (75).webp',
//   '/emojis/512 (76).webp',
//   '/emojis/512 (77).webp',
//   '/emojis/512 (78).webp',
//   '/emojis/512 (79).webp',
//   '/emojis/512 (80).webp',
//   '/emojis/512 (81).webp',
//   '/emojis/512 (82).webp',
//   '/emojis/512 (83).webp',
//   '/emojis/512 (84).webp',
//   '/emojis/512 (87).webp',
//   '/emojis/512 (88).webp',
// ].map(url => `${BASE_URL}${url}`);

// // Cache emojis during the service worker installation
// self.addEventListener('install', event => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then(cache => {
//       return cache.addAll(EMOJI_URLS).catch(err => {
//         console.error('Failed to cache some emojis:', err);
//       });
//     })
//   );
// });

// // Handle fetch events
// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.match(event.request).then(response => {
//       if (response) {
//         console.log(`Serving from cache: ${event.request.url}`);
//         return response; // Return cached response
//       }
//       console.log(`Fetching from network: ${event.request.url}`);
//       return fetch(event.request).then(networkResponse => {
//         if (networkResponse && networkResponse.status === 200) {
//           return caches.open(CACHE_NAME).then(cache => {
//             cache.put(event.request, networkResponse.clone());
//             return networkResponse; // Return the fetched response
//           });
//         }
//         return networkResponse; // Return if response is not cacheable
//       });
//     })
//   );
// });

// // Handle messages from the client
// self.addEventListener('message', event => {
//   if (event.data.type === 'FETCH_EMOJI_URLS') {
//     event.ports[0].postMessage(EMOJI_URLS);
//   }
// });



const BASE_URL = 'http://zimoji.vercel.app';

const EMOJI_URLS = [
  '/emojis/512 (1).webp',
  '/emojis/512 (2).webp',
  '/emojis/512 (3).webp',
  '/emojis/512 (4).webp',
  '/emojis/512 (5).webp',
  '/emojis/512 (6).webp',
  '/emojis/512 (7).webp',
  '/emojis/512 (8).webp',
  '/emojis/512 (9).webp',
  '/emojis/512 (10).webp',
  '/emojis/512 (11).webp',
  '/emojis/512 (12).webp',
  '/emojis/512 (13).webp',
  '/emojis/512 (14).webp',
  '/emojis/512 (15).webp',
  '/emojis/512 (16).webp',
  '/emojis/512 (17).webp',
  '/emojis/512 (18).webp',
  '/emojis/512 (19).webp',
  '/emojis/512 (20).webp',
  '/emojis/512 (21).webp',
  '/emojis/512 (22).webp',
  '/emojis/512 (23).webp',
  '/emojis/512 (24).webp',
  '/emojis/512 (25).webp',
  '/emojis/512 (26).webp',
  '/emojis/512 (27).webp',
  '/emojis/512 (28).webp',
  '/emojis/512 (29).webp',
  '/emojis/512 (30).webp',
  '/emojis/512 (31).webp',
  '/emojis/512 (32).webp',
  '/emojis/512 (33).webp',
  '/emojis/512 (34).webp',
  '/emojis/512 (35).webp',
  '/emojis/512 (36).webp',
  '/emojis/512 (37).webp',
  '/emojis/512 (38).webp',
  '/emojis/512 (39).webp',
  '/emojis/512 (40).webp',
  '/emojis/512 (41).webp',
  '/emojis/512 (42).webp',
  '/emojis/512 (43).webp',
  '/emojis/512 (44).webp',
  '/emojis/512 (45).webp',
  '/emojis/512 (46).webp',
  '/emojis/512 (47).webp',
  '/emojis/512 (48).webp',
  '/emojis/512 (49).webp',
  '/emojis/512 (50).webp',
  '/emojis/512 (51).webp',
  '/emojis/512 (52).webp',
  '/emojis/512 (53).webp',
  '/emojis/512 (54).webp',
  '/emojis/512 (55).webp',
  '/emojis/512 (56).webp',
  '/emojis/512 (57).webp',
  '/emojis/512 (58).webp',
  '/emojis/512 (59).webp',
  '/emojis/512 (60).webp',
  '/emojis/512 (61).webp',
  '/emojis/512 (62).webp',
  '/emojis/512 (63).webp',
  '/emojis/512 (64).webp',
  '/emojis/512 (65).webp',
  '/emojis/512 (66).webp',
  '/emojis/512 (67).webp',
  '/emojis/512 (68).webp',
  '/emojis/512 (69).webp',
  '/emojis/512 (70).webp',
  '/emojis/512 (71).webp',
  '/emojis/512 (72).webp',
  '/emojis/512 (73).webp',
  '/emojis/512 (74).webp',
  '/emojis/512 (75).webp',
  '/emojis/512 (76).webp',
  '/emojis/512 (77).webp',
  '/emojis/512 (78).webp',
  '/emojis/512 (79).webp',
  '/emojis/512 (80).webp',
  '/emojis/512 (81).webp',
  '/emojis/512 (82).webp',
  '/emojis/512 (83).webp',
  '/emojis/512 (84).webp',
  '/emojis/512 (87).webp',
  '/emojis/512 (88).webp',
].map(url => `${BASE_URL}${url}`);

// Handle fetch events
self.addEventListener('fetch', event => {
  console.log(`Fetching from network: ${event.request.url}`);
  event.respondWith(
    fetch(event.request).then(networkResponse => {
      return networkResponse; // Always return the fetched response
    })
  );
});

// Handle messages from the client
self.addEventListener('message', event => {
  if (event.data.type === 'FETCH_EMOJI_URLS') {
    event.ports[0].postMessage(EMOJI_URLS);
  }
});
