const questions = [
  {
    id: '6.1a.1',
    prompt: 'Noth both A and B',
    options: [
      { id: 0, label: '~(A Ʌ B)' },
      { id: 1, label: '~(A · B)' },
      { id: 2, label: '(~A · ~B)' },
      { id: 3, label: '(~A Ʌ ~B)' },
    ],
    correctId: 1,
  },
  {
    id: '6.1a.2',
    prompt: 'Both A and either B or C',
    options: [
      { id: 0, label: '(A · (B V C))' },
      { id: 1, label: '(A · (B V C))' },
      { id: 2, label: '(A · (B V C))' },
      { id: 3, label: '(A · (B V C))' },
    ],
    correctId: 2,
  },
];

export { questions };
