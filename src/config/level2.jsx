const wallMapPosition = [
  { x: 1, y: 1 },
  { x: 1, y: 2 },
  { x: 1, y: 3 },
  { x: 1, y: 4 },
  { x: 1, y: 5 },
  { x: 1, y: 7 },
  { x: 1, y: 8 },
  { x: 2, y: 8 },
  { x: 3, y: 8 },
  { x: 4, y: 8 },
  { x: 5, y: 8 },
  { x: 5, y: 9 },
  { x: 2, y: 1 },
  { x: 3, y: 1 },
  { x: 4, y: 1 },
  { x: 5, y: 1 },
  { x: 6, y: 1 },
  { x: 7, y: 1 },
  { x: 7, y: 2 },
  { x: 7, y: 3 },
  { x: 8, y: 3 },
  { x: 9, y: 3 },
  { x: 9, y: 2 },
  { x: 9, y: 1 },
  { x: 3, y: 2 },
  { x: 3, y: 3 },
  { x: 3, y: 4 },
  { x: 3, y: 5 },
  { x: 3, y: 6 },
  { x: 5, y: 3 },
  { x: 5, y: 4 },
  { x: 5, y: 5 },
  { x: 5, y: 6 },

  { x: 7, y: 7 },
  { x: 7, y: 8 },
  { x: 8, y: 8 },
  { x: 9, y: 8 },
  { x: 10, y: 8 },
  { x: 12, y: 8 },
  { x: 13, y: 8 },
  { x: 7, y: 6 },
  { x: 7, y: 5 },

  { x: 13, y: 1 },
  { x: 13, y: 2 },
  { x: 13, y: 3 },
  { x: 13, y: 4 },
  { x: 13, y: 5 },
  { x: 13, y: 6 },
  { x: 13, y: 7 },
  { x: 13, y: 8 },

  { x: 12, y: 1 },
  { x: 10, y: 1 },

  { x: 12, y: 6 },
  { x: 11, y: 6 },
  { x: 10, y: 6 },
  { x: 9, y: 6 },
  { x: 9, y: 5 },
];

const threatMapPosition = [
  { x: 7, y: 0 },
  { x: 4, y: 5 },
  { x: 11, y: 1 },
];

const treasureMapPosition = [{ x: 4, y: 9 }];
const stairsDownPosition = [{ x: 8, y: 2 }];

export default wallMapPosition;
export { threatMapPosition };
export { treasureMapPosition };
export { stairsDownPosition };
export const mapHeight = 10; //should remain 10
export const mapWidth = 15;
export const cellSize = 40;
