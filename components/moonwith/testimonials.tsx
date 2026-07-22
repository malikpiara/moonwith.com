type Testimonial = {
  name: string;
  role: string;
  href: string;
  paragraphs: string[];
};

// Ported from old.moonwith.com/about. Quotes are verbatim; only the
// typography was normalised (curly apostrophes, no wrapping quote marks —
// the layout and attribution already signal quotation).
const testimonials: Testimonial[] = [
  {
    name: 'Manuel',
    role: 'Product Designer, YLD',
    href: 'https://nucabe.com/',
    paragraphs: [
      'I can’t think of another word to describe Malik better than ‘leader’. He knows how to manage, motivate and encourage a team to an extreme extent. he really cares for what he does which is to change the world for the better. I know you’ll achieve great things. Keep pushing forward!',
    ],
  },
  {
    name: 'Pedro',
    role: 'CEO at Hunter. Forbes 30 Under 30',
    href: 'https://www.linkedin.com/in/pedrohunter/',
    paragraphs: [
      'Malik’s irreverence and continuous search for disrupting the old and creating new value for the world on the way has made him one of the most inspiring persons I’ve ever worked with.',
    ],
  },
  {
    name: 'Henrique',
    role: 'Software Engineer, Protocol Labs',
    href: 'https://hacdias.com/',
    paragraphs: [
      'Malik is a very passionate person about what he does and he always tries to find the best solution for the problems he faces. Also, he’s always looking for new knowledge which helps him improve himself and his work. Curious, hard worker and unstoppable are three characteristics that make Malik one of the best people I’ve worked with.',
    ],
  },
  {
    name: 'Ulisses',
    role: 'Software Engineer, Consensys',
    href: 'https://www.linkedin.com/in/ulisses-miguel-ferreira/',
    paragraphs: [
      'I was impressed by the focus and dedication that he had for all things related to what he was doing. He would read all the books, talk to the best professionals and surround himself with knowledge that allowed him to grow and learn. I am not exaggerating, he will improve exponentially using all the information he can find.',
    ],
  },
  {
    name: 'Tobias Freudenreich',
    role: 'Director of Product Management, XING',
    href: 'https://www.linkedin.com/in/freudenreich/',
    paragraphs: [
      'Malik is reliable, dedicated and always upbeat. His ability to attack complex problem spaces and to dive deep without losing sight of goal makes him a great contributor in product discovery phases. Based on his strong inner drive, Malik is able to handle a high-volume workload. He consistently met or surpassed all weekly milestones while working on his Summer School project.',
      'A key factor of Malik’s success is his ability to connect to co-workers and stakeholders easily. He quickly builds up reliable relationships and is able to use these to drive his topics forward.',
      'Curious and open-minded, Malik quickly learns to navigate in complex environments and challenging topics which allows him to provide valuable contributions for the company early on. He is always eager to learn, embraces change and is able to grow fast.',
    ],
  },
  {
    name: 'Jo Vieira',
    role: 'Co-founder, Linehealth',
    href: 'https://www.linkedin.com/in/joanavieirajoana/',
    paragraphs: [
      'There is not a day I’m not impressed by how far Malik has come and everything he has accomplished in his yet short life. His drive and passion are not something you see everyday. He takes every advice in consideration, thinks about it, works on it, does his research, and comes back with his own approach on the subject. If you ask me, that’s the best kind of learning. It’s truly an honour to be a part of his journey, and I can’t wait to see where it leads him. Somewhere amazing, I’m sure.',
    ],
  },
];

/**
 * Full-bleed testimonials, close to the old moonwith design: plain
 * typographic quotes in columns — no cards, no quote marks. The section
 * deliberately escapes the site's reading column (w-screen breakout);
 * `overflow-x: clip` on <html> guards against scrollbar-width overflow.
 */
export function Testimonials() {
  return (
    <section className='not-prose relative left-1/2 w-screen -translate-x-1/2 my-16 md:my-24 px-6 md:px-12 py-14 md:py-20 bg-eggshell text-primary'>
      <div className='mx-auto max-w-6xl'>
        <h2 className='font-instrument-serif text-4xl md:text-6xl leading-tight max-w-3xl mb-12 md:mb-20'>
          Here’s what some people say about me
        </h2>
        <div className='columns-1 md:columns-2 gap-12 xl:gap-20'>
          {testimonials.map((t) => (
            <figure key={t.name} className='break-inside-avoid mb-12 md:mb-14'>
              <blockquote className='text-lg md:text-[1.2rem] leading-relaxed space-y-4'>
                {t.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </blockquote>
              <figcaption className='mt-5 text-xs uppercase tracking-wider text-iris'>
                <a
                  href={t.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='transition-opacity hover:opacity-70'
                >
                  — {t.name} ({t.role})
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
