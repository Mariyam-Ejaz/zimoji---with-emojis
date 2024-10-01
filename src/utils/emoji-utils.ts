// emoji-utils.ts

export function getSamplingArea(
    width: number,
    height: number,
    edgeMargin: number,
    emojiSize: number
  ): [number, number] {
    // Calculate the dimensions of the sampling area
    const areaWidth = width - 2 * edgeMargin - emojiSize; // Adjust width to fit emojis fully within bounds
    const areaHeight = height - 2 * edgeMargin - emojiSize; // Adjust height similarly
    return [areaWidth, areaHeight];
  }
  