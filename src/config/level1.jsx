const wallMapPosition = [
  { x: 1, y: 1 },
  { x: 2, y: 1 },
  { x: 3, y: 1 },
  { x: 4, y: 1 },
  { x: 5, y: 1 },
  { x: 6, y: 1 },
  { x: 7, y: 1 },
  { x: 8, y: 1 },
  { x: 8, y: 2 },
  { x: 8, y: 3 },
  { x: 8, y: 4 },
  { x: 8, y: 5 },
  { x: 8, y: 6 },
  { x: 7, y: 6 },
  { x: 6, y: 6 },
  { x: 6, y: 5 },
  { x: 6, y: 4 },
  { x: 6, y: 3 },
  { x: 4, y: 3 },
  { x: 4, y: 4 },
  { x: 4, y: 5 },
  { x: 4, y: 6 },
  { x: 4, y: 7 },
  { x: 4, y: 8 },
  { x: 2, y: 3 },
  { x: 2, y: 4 },
  { x: 2, y: 5 },
  { x: 2, y: 6 },
  { x: 2, y: 7 },
  { x: 2, y: 8 },
  { x: 3, y: 6 },
  { x: 0, y: 3 },
  { x: 0, y: 4 },
  { x: 0, y: 5 },
  { x: 0, y: 6 },
  { x: 0, y: 7 },
  { x: 0, y: 8 },
  { x: 0, y: 9 },
  { x: 5, y: 8 },
  { x: 6, y: 8 },
  { x: 7, y: 8 },
  { x: 8, y: 8 },
  { x: 8, y: 9 },
];

const threatMapPosition = [
  { x: 7, y: 5 },
  { x: 3, y: 7 },
  { x: 8, y: 0 },
  { x: 7, y: 9 },
];

const treasureMapPosition = [
  { x: 7, y: 0 },
  { x: 9, y: 0 },
  { x: 7, y: 2 },
  { x: 3, y: 5 },
  { x: 6, y: 9 },
];
const stairsDownPosition = [{ x: 9, y: 9 }];

export default wallMapPosition;
export { threatMapPosition };
export { treasureMapPosition };
export { stairsDownPosition };
export const mapHeight = 10;
export const mapWidth = 10; //should remain 10
export const cellSize = 50;
