type TypographyH1Props = {
  text: string;
};

export function TypographyH1({ text }: { text: string }) {
  return (
    <h1 className='scroll-m-20 text-7xl font-extrabold mb-2 text-primary dark:text-secondary font-instrumentSerif'>
      {text}
    </h1>
  );
}
