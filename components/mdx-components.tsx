import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Sidenote } from './moonwith/sidenote';

const components = {
  Image,
  Sidenote,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
