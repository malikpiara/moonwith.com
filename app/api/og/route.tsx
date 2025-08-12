import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.

async function loadGoogleFont(
  font: string,
  text: string,
  italic = false,
  weight = 400
) {
  const italParam = italic ? '1' : '0';
  const url = `https://fonts.googleapis.com/css2?family=${font}:ital,wght@${italParam},${weight}&text=${encodeURIComponent(
    text
  )}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status == 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error('failed to load font data');
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title');
  const url = 'moonwith.com';

  const baseUrl = new URL(request.url).origin;
  if (!title) {
    return new ImageResponse(<>Visit with &quot;?title=vercel&quot;</>, {
      width: 1200,
      height: 630,
    });
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 120,
          color: '#EAECD7',
          background: '#1F2115',
          width: '100%',
          height: '100%',
          paddingTop: 0,
          flexDirection: 'column',
        }}
      >
        <img
          width='256'
          height='256'
          src={`${baseUrl}/icon3.png`}
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 70,
            height: 70,
            margin: 30,
          }}
        />

        <p
          style={{
            marginLeft: 30,
            lineHeight: 1,
          }}
        >
          {title}
        </p>
        <p
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            margin: 30,
            fontSize: 30,
            fontFamily: 'Source Serif 4',
          }}
        >
          {url}
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Instrument Serif',
          data: await loadGoogleFont('Instrument Serif', title),
          style: 'normal',
        },
        {
          name: 'Source Serif 4',
          data: await loadGoogleFont(
            'Source Serif 4',
            'moonwith.com',
            true,
            800
          ),
          style: 'italic',
          weight: 800,
        },
      ],
    }
  );
}
