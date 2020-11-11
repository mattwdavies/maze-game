const mapArray = [
  [
    { x: 0, y: 0, state: 'player' },
    { x: 0, y: 1, state: ' ' },
    { x: 0, y: 2, state: ' ' },
    { x: 0, y: 3, state: ' ' },
    { x: 0, y: 4, state: ' ' },
  ],

  [
    { x: 1, y: 0, state: ' ' },
    { x: 1, y: 1, state: 'wall' },
    { x: 1, y: 2, state: 'wall' },
    { x: 1, y: 3, state: 'wall' },
    { x: 1, y: 4, state: 'wall' },
  ],

  [
    { x: 2, y: 0, state: ' ' },
    { x: 2, y: 1, state: 'treasure' },
    { x: 2, y: 2, state: 'threat' },
    { x: 2, y: 3, state: 'treasure' },
    { x: 2, y: 4, state: 'threat' },
  ],
  [
    { x: 2, y: 0, state: ' ' },
    { x: 2, y: 1, state: 'treasure' },
    { x: 2, y: 2, state: 'threat' },
    { x: 2, y: 3, state: ' ' },
    { x: 2, y: 4, state: 'threat' },
  ],
  [
    { x: 3, y: 0, state: ' ' },
    { x: 3, y: 1, state: ' ' },
    { x: 3, y: 2, state: ' ' },
    { x: 3, y: 3, state: ' ' },
    { x: 3, y: 4, state: ' ' },
  ],
];

export default mapArray;
