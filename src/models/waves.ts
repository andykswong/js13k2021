export type WaveRow = [number?, number?, number?, number?, number?, number?, number?, number?, number?, number?, number?];

export type Wave = readonly WaveRow[][];

export const BeginnerWaves: Wave[] = [
  // Wave 1
  [
    [
      [ , , , , ,4, , , , , ],
      [ , , , ,4,4, , , , , ],
      [ , , , , ,4, , , , , ],
      [ , , , , ,4, , , , , ],
      [ , , , ,4,4,4, , , , ],
    ],
  ],

  // Wave 2
  [
    [
      [4,4,4, , , , , ,4,3,4],
      [ ,3, , , , , , ,4, ,4],
      [ ,3, , , , , , ,4,3,4],
    ],
    [
      [ , , ,3, , , ,3, , , ],
      [ , , ,4, ,4, ,4, , , ],
      [ , , , ,3, ,3, , , , ],
    ],
  ],

  // Wave 3
  [
    [
      [ , , , ,2,2,2, , , , ],
    ],
    [
      [4,4,4, ,4,4,3, , ,3, ],
      [ ,4, , ,3, , , , ,4, ],
      [ ,3, ,2,4, , ,2, ,4, ],
    ],
    [
      [3,3,3, ,4,3,4, , ,4, ],
      [ ,4, , ,4, , , , ,3, ],
      [ ,4,2,1,4,2, ,1,2,4, ],
    ],
    [
      [4,4,4, ,3,4,3, , ,4, ],
      [ ,3, , ,4, , , , ,4, ],
      [1,4, , ,4, , , , ,4,1],
    ],
    [
      [2,2, ,2, ,1, ,2, ,2,2],
    ],
  ],

  // Wave 4
  [
    [
      [ , ,1,5,5, ,5,5,1, , ],
    ],
    [
      [ , , , ,4, ,4, , , , ],
      [ , , , ,3, ,3, , , , ],
      [ , , , ,4,3,4,3, , , ],
      [5,5,2, , , ,3, ,2,5,5],
    ],
    [
      [ , , , ,3, ,3, , , , ],
      [ , , , ,4, ,4, , , , ],
      [ , , , ,3,4,3,4, , , ],
      [5,5,1, , , ,4, ,1,5,5],
    ],
  ],
];

export const BossWaves: Wave[] = [
  // Boss 1
  [
    [
      [ , , ,3, , , ,3, , , ],
      [ , , , ,4,4,4, , , , ],
      [ , , ,4,3,4,3,4, , , ],
      [ , ,3,4,4,4,4,4,3, , ],
      [ , ,3, , , , , ,3, , ],
      [2, , ,3,3, ,3,3, , ,2],
    ],
    [
      [ , , , ,3, ,3, , , , ],
      [ , , , ,4,4,4, , , , ],
      [ , , ,4,4,4,4,4, , , ],
      [ ,3,4,4,4,3,4,4,4,3, ],
      [5,3, ,4, , , ,4, ,3,5],
      [2,2, ,3, , , ,3, ,2,2],
    ],
    [
      [                     ],
      [ , , , ,4,4,4, , , , ],
      [ , , ,4,4,4,4,4, , , ],
      [ , , , ,4,4,4, , , , ],
      [                     ],
      [ ,5,2,5, , , ,5,2,5, ],
    ],
  ],

  // Boss 2
  [
    [
      [2,1, , , , , , , ,1,2],
    ],
    [
      [1,2, , , , , , , ,2,1],
    ],
    [
      [ , , ,4,4,4,4,4, , , ],
      [ , ,4, , ,4, , ,4, , ],
      [ , ,4, , ,4, , ,4, , ],
      [ , ,4,4,4,4,4,4,4, , ],
      [ , , ,4, , , ,4, , , ],
      [5,5, , ,4,4,4, , ,5,5],
    ],
    [
      [ , , , ,4,4,4, , , , ],
      [ , , ,3,3,4,3,3, , , ],
      [ , , ,3,3,4,3,3, , , ],
      [ , , ,3,4,4,4,3, , , ],
      [ , , , ,3,3,3, , , , ],
      [5,5, , ,4, ,4, , ,5,5],
    ],
    [
      [                     ],
      [ , , , ,3,4,3, , , , ],
      [ , , , ,3,4,3, , , , ],
      [ , , , ,4,4,4, , , , ],
      [ , , , ,4,3,4, , , , ],
      [ , ,5,5, , , ,5,5, , ],
    ],
  ],

  // Boss 3
  [
    [
      [                     ],
      [                     ],
      [                     ],
      [ ,3, , , , , , , ,3, ],
      [3, ,3, , , , , ,3, ,3],
      [ ,3, , , , , , , ,3, ],
      [5, ,5, ,5, ,5, ,5, ,5],
    ],
    [
      [                     ],
      [                     ],
      [                     ],
      [3,4,3, , , , , ,3,4,3],
      [4,3,4, , , , , ,4,3,4],
      [3,4,3, , , , , ,3,4,3],
      [ ,5, ,5, , , ,5, ,5, ],
    ],
    [
      [                     ],
      [ , , , , ,4, , , , , ],
      [ , , , ,3,4,3, , , , ],
      [ ,3,3, ,4,4,4, ,3,3, ],
      [3,4,3, , , , , ,3,4,3],
      [ ,3,3, , , , , ,3,3, ],
      [5, ,5, ,5, ,5, ,5, ,5],
    ],
    [
      [ , ,3,4, , , ,4,3, , ],
      [ , ,3, ,3,4,3, ,3, , ],
      [ , , , ,3,4,3, , , , ],
      [ , , , ,4,3,4, , , , ],
      [                     ],
      [                     ],
      [ ,5, ,5, , , ,5, ,5, ],
    ],
    [
      [ , , , , , , , , , , ],
      [ , , ,4,3,4,3,4, , , ],
      [ , , , ,4,3,4, , , , ],
      [ , , , , ,4, , , , , ],
      [                     ],
      [                     ],
      [5, ,5, ,5, ,5, ,5, ,5],
    ],
  ],

  // Boss 4
  [
    [],
    [
      [2,1, , , , , , , ,2,1],
    ],
    [
      [ , , , ,4,4,4, , , , ],
      [ ,4, ,4,4,3,4,4, ,4, ],
      [ , ,4,4,3,3,3,4,4, , ],
      [ , , ,4,4,3,4,4, , , ],
      [1,2, , ,4,4,4, , ,1,2],
    ],
    [
      [4, , , ,3,4,3, , , ,4],
      [4,4, ,3,4,4,4,3, ,4,4],
      [4, , ,4,4,4,4,4, , ,4],
      [ , , ,3,4,4,4,3, , , ],
      [2,1, , ,3,4,3, , ,2,1],
    ],
    [
      [ , , , ,4,4,4, , , , ],
      [ , , ,4,3,4,3,4, , , ],
      [ , , ,4,4,3,4,4, , , ],
      [ , , ,4,3,4,3,4, , , ],
      [ ,5, , ,4,4,4, , ,5, ],
    ],
    [
      [ , , , ,4,3,4, , , , ],
      [ , , ,4,4,4,4,4, , , ],
      [ , , ,3,4,4,4,3, , , ],
      [ , , ,4,4,4,4,4, , , ],
      [5,5,5, ,4,3,4, ,5,5,5],
    ],
  ],
];
