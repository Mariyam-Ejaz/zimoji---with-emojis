// // mywebworker.ts
// import { expose } from 'comlink';

// // Define the methods your worker will expose
// export class EmojiWorker {
//     async getEmojiUrls(): Promise<string[]> {
//         // Your logic to fetch emoji URLs
//         return [
//           '/emojis/512 (1).gif',
//   '/emojis/512 (2).gif',
//   '/emojis/512 (3).gif',
//   '/emojis/512 (4).gif',
//   '/emojis/512 (5).gif',
//   '/emojis/512 (6).gif',
//   '/emojis/512 (7).gif',
//   '/emojis/512 (8).gif',
//   '/emojis/512 (9).gif',
//   '/emojis/512 (10).gif',
//   '/emojis/512 (11).gif',
//   '/emojis/512 (12).gif',
//   '/emojis/512 (13).gif',
//   '/emojis/512 (14).gif',
//   '/emojis/512 (15).gif',
//   '/emojis/512 (16).gif',
//   '/emojis/512 (17).gif',
//   '/emojis/512 (18).gif',
//   '/emojis/512 (19).gif',
//   '/emojis/512 (20).gif',
//   '/emojis/512 (21).gif',
//   '/emojis/512 (22).gif',
//   '/emojis/512 (23).gif',
//   '/emojis/512 (24).gif',
//   '/emojis/512 (25).gif',
//   '/emojis/512 (26).gif',
//   '/emojis/512 (27).gif',
//   '/emojis/512 (28).gif',
//   '/emojis/512 (29).gif',
//   '/emojis/512 (30).gif',
//   '/emojis/512 (31).gif',
//   '/emojis/512 (32).gif',
//   '/emojis/512 (33).gif',
//   '/emojis/512 (34).gif',
//   '/emojis/512 (35).gif',
//   '/emojis/512 (36).gif',
//   '/emojis/512 (37).gif',
//   '/emojis/512 (38).gif',
//   '/emojis/512 (39).gif',
//   '/emojis/512 (40).gif',
//   '/emojis/512 (41).gif',
//   '/emojis/512 (42).gif',
//   '/emojis/512 (43).gif',
//   '/emojis/512 (44).gif',
//   '/emojis/512 (45).gif',
//   '/emojis/512 (46).gif',
//   '/emojis/512 (47).gif',
//   '/emojis/512 (48).gif',
//   '/emojis/512 (49).gif',
//   '/emojis/512 (50).gif',
//   '/emojis/512 (51).gif',
//   '/emojis/512 (52).gif',
//   '/emojis/512 (53).gif',
//   '/emojis/512 (54).gif',
//   '/emojis/512 (55).gif',
//   '/emojis/512 (56).gif',
//   '/emojis/512 (57).gif',
//   '/emojis/512 (58).gif',
//   '/emojis/512 (59).gif',
//   '/emojis/512 (60).gif',
//   '/emojis/512 (61).gif',
//   '/emojis/512 (62).gif',
//   '/emojis/512 (63).gif',
//   '/emojis/512 (64).gif',
//   '/emojis/512 (65).gif',
//   '/emojis/512 (66).gif',
//   '/emojis/512 (67).gif',
//   '/emojis/512 (68).gif',
//   '/emojis/512 (69).gif',
//   '/emojis/512 (70).gif',
//   '/emojis/512 (71).gif',
//   '/emojis/512 (72).gif',
//   '/emojis/512 (73).gif',
//   '/emojis/512 (74).gif',
//   '/emojis/512 (75).gif',
//   '/emojis/512 (76).gif',
//   '/emojis/512 (77).gif',
//   '/emojis/512 (78).gif',
//   '/emojis/512 (79).gif',
//   '/emojis/512 (80).gif',
//   '/emojis/512 (81).gif',
//   '/emojis/512 (82).gif',
//   '/emojis/512 (83).gif',
//   '/emojis/512 (84).gif',


//   '/emojis/512 (87).gif',
//   '/emojis/512 (88).gif',
//         ]; // Example URLs
//     }
// }

// expose(EmojiWorker);

const availableEmojis = [
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
];

export const extractEmojiUrls = () => {
  return availableEmojis;
};

// // Function to get a random emoji
// export const getRandomEmojiUrl = () => {
//   const randomIndex = Math.floor(Math.random() * availableEmojis.length);
//   return availableEmojis[randomIndex];
// };


// // // utils/emoji-extractor.ts

// // const availableEmojis = [
// //   '/emojis/512 (1).webp',
// //   '/emojis/512 (2).webp',
// //   '/emojis/512 (3).webp',
// //   '/emojis/512 (4).webp',
// //   '/emojis/512 (5).webp',
// //   '/emojis/512 (6).webp',
// //   '/emojis/512 (7).webp',
// //   '/emojis/512 (8).webp',
// //   '/emojis/512 (9).webp',
// //   '/emojis/512 (10).webp',
// //   '/emojis/512 (11).webp',
// //   '/emojis/512 (12).webp',
// //   '/emojis/512 (13).webp',
// //   '/emojis/512 (14).webp',
// //   '/emojis/512 (15).webp',
// //   '/emojis/512 (16).webp',
// //   '/emojis/512 (17).webp',
// //   '/emojis/512 (18).webp',
// //   '/emojis/512 (19).webp',
// //   '/emojis/512 (20).webp',
// //   '/emojis/512 (21).webp',
// //   '/emojis/512 (22).webp',
// //   '/emojis/512 (23).webp',
// //   '/emojis/512 (24).webp',
// //   '/emojis/512 (25).webp',
// //   '/emojis/512 (26).webp',
// //   '/emojis/512 (27).webp',
// //   '/emojis/512 (28).webp',
// //   '/emojis/512 (29).webp',
// //   '/emojis/512 (30).webp',
// //   '/emojis/512 (31).webp',
// //   '/emojis/512 (32).webp',
// //   '/emojis/512 (33).webp',
// //   '/emojis/512 (34).webp',
// //   '/emojis/512 (35).webp',
// //   '/emojis/512 (36).webp',
// //   '/emojis/512 (37).webp',
// //   '/emojis/512 (38).webp',
// //   '/emojis/512 (39).webp',
// //   '/emojis/512 (40).webp',
// //   '/emojis/512 (41).webp',
// //   '/emojis/512 (42).webp',
// //   '/emojis/512 (43).webp',
// //   '/emojis/512 (44).webp',
// //   '/emojis/512 (45).webp',
// //   '/emojis/512 (46).webp',
// //   '/emojis/512 (47).webp',
// //   '/emojis/512 (48).webp',
// //   '/emojis/512 (49).webp',
// //   '/emojis/512 (50).webp',
// //   '/emojis/512 (51).webp',
// //   '/emojis/512 (52).webp',
// //   '/emojis/512 (53).webp',
// //   '/emojis/512 (54).webp',
// //   '/emojis/512 (55).webp',
// //   '/emojis/512 (56).webp',
// //   '/emojis/512 (57).webp',
// //   '/emojis/512 (58).webp',
// //   '/emojis/512 (59).webp',
// //   '/emojis/512 (60).webp',
// //   '/emojis/512 (61).webp',
// //   '/emojis/512 (62).webp',
// //   '/emojis/512 (63).webp',
// //   '/emojis/512 (64).webp',
// //   '/emojis/512 (65).webp',
// //   '/emojis/512 (66).webp',
// //   '/emojis/512 (67).webp',
// //   '/emojis/512 (68).webp',
// //   '/emojis/512 (69).webp',
// //   '/emojis/512 (70).webp',
// //   '/emojis/512 (71).webp',
// //   '/emojis/512 (72).webp',
// //   '/emojis/512 (73).webp',
// //   '/emojis/512 (74).webp',
// //   '/emojis/512 (75).webp',
// //   '/emojis/512 (76).webp',
// //   '/emojis/512 (77).webp',
// //   '/emojis/512 (78).webp',
// //   '/emojis/512 (79).webp',
// //   '/emojis/512 (80).webp',
// //   '/emojis/512 (81).webp',
// //   '/emojis/512 (82).webp',
// //   '/emojis/512 (83).webp',
// //   '/emojis/512 (84).webp',
// //   '/emojis/512 (87).webp',
// //   '/emojis/512 (88).webp',
// // ];

// // export const extractEmojiUrls = () => {
// //   return availableEmojis;
// // };
// utils/emoji-extractor.js

// const BASE_URL = 'http://zimoji.vercel.app/emojis/'; 


// export const extractEmojiUrls = async () => {
//   if (!navigator.serviceWorker || !navigator.serviceWorker.controller) {
//     console.error('Service Worker not registered or no active controller found.');
//     return [];
//   }

//   return new Promise((resolve, reject) => {
//     const messageChannel = new MessageChannel();

//     messageChannel.port1.onmessage = (event) => {
//       if (event.data && Array.isArray(event.data)) {
//         resolve(event.data.map(url => `${BASE_URL}${url}`));
//       } else {
//         reject('Failed to receive emoji URLs from service worker.');
//       }
//     };

//     navigator.serviceWorker.controller.postMessage(
//       { type: 'FETCH_EMOJI_URLS' },
//       [messageChannel.port2]
//     );
//   });
// };


// const BASE_URL = 'http://zimoji.vercel.app/emojis/';

// export const extractEmojiUrls = async () => {
//   // Check if Service Workers are supported and if the page is in a secure context
//   if (!('serviceWorker' in navigator)) {
//     console.error('Service Workers are not supported in this browser.');
//     return [];
//   }

//   if (!window.isSecureContext) {
//     console.error('Service Workers are available only in secure contexts (HTTPS).');
//     return [];
//   }

//   // Wait for the service worker to be ready before accessing the controller
//   const registration = await navigator.serviceWorker.ready.catch(() => null);

//   // Check if the service worker is controlling the page
//   const controller = navigator.serviceWorker.controller;
//   if (!registration || !controller) {
//     console.error('Service Worker not registered or no active controller found.');
//     return [];
//   }

//   // Create a promise to handle message communication with the service worker
//   return new Promise((resolve, reject) => {
//     const messageChannel = new MessageChannel();

//     // Listen for messages from the service worker
//     messageChannel.port1.onmessage = (event) => {
//       if (event.data && Array.isArray(event.data)) {
//         resolve(event.data.map((url) => `${BASE_URL}${url}`));
//       } else {
//         reject('Failed to receive emoji URLs from the service worker.');
//       }
//     };

//     // Send the message to the service worker
//     controller.postMessage({ type: 'FETCH_EMOJI_URLS' }, [messageChannel.port2]);
//   }).catch((err) => {
//     console.error('Error extracting emoji URLs:', err);
//     return [];
//   });
// };
