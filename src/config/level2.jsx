const wallMapPosition = [
  { x: 1, y: 1 },
  { x: 2, y: 1 },
  { x: 3, y: 1 },
  { x: 4, y: 1 },
];

const threatMapPosition = [{ x: 7, y: 5 }];

const treasureMapPosition = [{ x: 7, y: 0 }];
const stairsDownPosition = [{ x: 9, y: 9 }];

export default wallMapPosition;
export { threatMapPosition };
export { treasureMapPosition };
export { stairsDownPosition };
export const mapHeight = 10; //should remain 10
export const mapWidth = 15;
export const cellSize = 40;
