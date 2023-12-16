const questions = [
  {
    id: '6.1a.1',
    prompt: 'Not both A and B',
    options: [
      { id: 0, label: '~(A V B)' },
      { id: 1, label: '~(A · B)' },
      { id: 2, label: '(~A · ~B)' },
      { id: 3, label: '(~A V ~B)' },
    ],
    correctId: 1,
  },
  {
    id: '6.1a.2',
    prompt: 'Both A and either B or C',
    options: [
      { id: 0, label: '(A · (B V C))' },
      { id: 1, label: '(A V (B · C))' },
      { id: 2, label: '~(A · (B V C))' },
      { id: 3, label: '(A · B) V (A · C)' },
    ],
    correctId: 0,
  },
  {
    id: '6.1a.3',
    prompt: 'Either both A and B or C',
    options: [
      { id: 0, label: '(A · (B V C))' },
      { id: 1, label: '~((A · B) V C)' },
      { id: 2, label: '((A · B) V C)' },
      { id: 3, label: '(A V B) · C' },
    ],
    correctId: 2,
  },
  {
    id: '6.1a.4',
    prompt: 'If A, then B or C',
    options: [
      { id: 0, label: '(A · (B V C))' },
      { id: 1, label: '(A → (B V C))' },
      { id: 2, label: '~(A → (B V C))' },
      { id: 3, label: '(A V B) → C' },
    ],
    correctId: 1,
  },
  {
    id: '6.1a.5',
    prompt: 'If A then B, or C',
    options: [
      { id: 0, label: '(A → (B V C))' },
      { id: 1, label: '~((A → B) V C)' },
      { id: 2, label: '(A V B) → C' },
      { id: 3, label: '(A → B) V C' },
    ],
    correctId: 3,
  },
  {
    id: '6.1a.6',
    prompt: 'If not A, then either not B or C',
    options: [
      { id: 0, label: '~A → (~B V C)' },
      { id: 1, label: '(A → (B V C))' },
      { id: 2, label: '~(~A → (~B V C))' },
      { id: 3, label: '~A → (B V ~C)' },
    ],
    correctId: 0,
  },
  {
    id: '6.1a.7',
    prompt: 'If not A, then either not B or C',
    options: [
      { id: 0, label: '~A → (~B V C)' },
      { id: 1, label: '(A → (B V C))' },
      { id: 2, label: '~(~A → (~B V C))' },
      { id: 3, label: '~A → (B V ~C)' },
    ],
    correctId: 0,
  },
  {
    id: '6.1a.8',
    prompt: 'Either A or B, and C',
    options: [
      { id: 0, label: '(A · (B V C))' },
      { id: 1, label: '((A V B) · C)' },
      { id: 2, label: '~((A V B) · C)' },
      { id: 3, label: '(A V B) → C' },
    ],
    correctId: 1,
  },
  {
    id: '6.1a.9',
    prompt: 'Either A, or B and C',
    options: [
      { id: 0, label: '(A · (B V C))' },
      { id: 1, label: '~(A V (B · C))' },
      { id: 2, label: '(A V B) · C' },
      { id: 3, label: '(A V (B · C))' },
    ],
    correctId: 3,
  },
  {
    id: '6.1a.10',
    prompt: 'If A then not both not B and not C',
    options: [
      { id: 0, label: '(A → ~(~B · ~C))' },
      { id: 1, label: '(A · (B V C))' },
      { id: 2, label: '~(A → ~(~B · ~C))' },
      { id: 3, label: '(A → (B · C))' },
    ],
    correctId: 0,
  },
  {
    id: '6.1a.11',
    prompt:
      'If you get an error message, then the disk is bad or it is a Macintosh disk.',
    options: [
      { id: 0, label: '(Error · (Bad V Macintosh))' },
      { id: 1, label: '~(Error → (Bad V Macintosh))' },
      { id: 2, label: 'Error → (Bad V Macintosh)' },
      { id: 3, label: 'Error → (Bad · Macintosh)' },
    ],
    correctId: 2,
  },
  {
    id: '6.1a.12',
    prompt:
      'If I bring my digital camera, then if my batteries don’t die then I’ll take pictures of my backpack trip and put the pictures on my Web site',
    options: [
      { id: 0, label: '(Camera → (Batteries → (Pictures · Website)))' },
      { id: 1, label: '(Camera · (Batteries → (Pictures V Website)))' },
      { id: 2, label: '(Camera → ((~Batteries) V (Pictures · Website)))' },
      { id: 3, label: '((Camera · Batteries) → (Pictures · Website))' },
    ],
    correctId: 0,
  },
  {
    id: '6.1a.13',
    prompt:
      'If you both don’t exercise and eat too much then you’ll gain weight',
    options: [
      { id: 0, label: '(((~Exercise) · Eat) → Weight)' },
      { id: 1, label: '((Exercise V Eat) → Weight)' },
      { id: 2, label: '((~Exercise V Eat) → Weight)' },
      { id: 3, label: '(((~Exercise) · (~Eat)) → Weight)' },
    ],
    correctId: 0,
  },
  {
    id: '6.1a.14',
    prompt: 'The statue isn’t by either Cellini or Michelangelo',
    options: [
      { id: 0, label: '~(Cellini V Michelangelo)' },
      { id: 1, label: '(~Cellini · ~Michelangelo)' },
      { id: 2, label: '(Cellini → ~Michelangelo)' },
      { id: 3, label: '(~Cellini → Michelangelo)' },
    ],
    correctId: 1,
  },
  {
    id: '6.1a.15',
    prompt:
      'If I don’t have either $2 in exact change or a bus pass I won’t ride the bus',
    options: [
      { id: 0, label: '~(($2 V BusPass) → Ride)' },
      { id: 1, label: '((~$2 · ~BusPass) → ~Ride)' },
      { id: 2, label: '(~($2 · BusPass) → ~Ride)' },
      { id: 3, label: '(($2 V BusPass) → ~Ride)' },
    ],
    correctId: 1,
  },
  {
    id: '6.1a.16',
    prompt: 'If Michigan and Ohio State play each other then Michigan will win',
    options: [
      { id: 0, label: '((Michigan · Ohio) → Win)' },
      { id: 1, label: '(Michigan → (Ohio V Win))' },
      { id: 2, label: '(Michigan V (Ohio → Win))' },
      { id: 3, label: '((Michigan V Ohio) → Win)' },
    ],
    correctId: 0,
  },
  {
    id: '6.1a.17',
    prompt:
      'Either you went through both Dayton and Cinci, or you went through Louisville',
    options: [
      { id: 0, label: '((Dayton · Cinci) V Louisville)' },
      { id: 1, label: '(Dayton → (Cinci V Louisville))' },
      { id: 2, label: '((Dayton V Cinci) · Louisville)' },
      { id: 3, label: '(Dayton · (Cinci V Louisville))' },
    ],
    correctId: 0,
  },
  {
    id: '6.1a.18',
    prompt:
      'If she had hamburgers then she ate junk food and she ate French fries',
    options: [
      { id: 0, label: '(Hamburgers → (JunkFood · Fries))' },
      { id: 1, label: '((Hamburgers · JunkFood) → Fries)' },
      { id: 2, label: '(Hamburgers → (JunkFood V Fries))' },
      { id: 3, label: '((Hamburgers V JunkFood) → Fries)' },
    ],
    correctId: 0,
  },
  {
    id: '6.1a.19',
    prompt: 'I’m going to Rome or Florence and you’re going to London',
    options: [
      { id: 0, label: '((Rome V Florence) · London)' },
      { id: 1, label: '((Rome · Florence) V London)' },
      { id: 2, label: '(Rome → (Florence · London))' },
      { id: 3, label: '(Rome V (Florence · London))' },
    ],
    correctId: 0,
  },
  {
    id: '6.1a.20',
    prompt: 'Everyone is male or female',
    options: [
      { id: 0, label: '(Male V Female)' },
      { id: 1, label: '(Male → Female)' },
      { id: 2, label: '(Male · Female)' },
      { id: 3, label: '~(Male V Female)' },
    ],
    correctId: 0,
  },
];

export { questions };
