// // src/workers/emojiWorker.js
// import { extractEmojiUrls } from '@/utils/emoji-extractor';
// import PoissonDiskSampling from 'poisson-disk-sampling';

// const EDGE_MARGIN = 6;
// const MAX_EMOJIS = 500;

// onmessage = (event) => {
//   const { width, height, minDistance, emojiSize } = event.data;

//   const emojiUrls = extractEmojiUrls();
//   const p = new PoissonDiskSampling({
//     shape: [width, height],
//     minDistance,
//     maxDistance: minDistance + (width < 1000 ? 10 : 20),
//     tries: 18,
//   });

//   const points = p.fill().slice(0, MAX_EMOJIS);
//   const emojis = points.map((point, index) => ({
//     src: emojiUrls[index % emojiUrls.length],
//     left: point[0],
//     top: point[1],
//   }));

//   postMessage(emojis);
// };
