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
];

export { questions };
