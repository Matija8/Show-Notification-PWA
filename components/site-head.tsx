import Head from 'next/head';

export function SiteHead({ title }: { title: string }) {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />

      <link rel="manifest" href={`${process.env.basePath}/manifest.json`} />
      <link rel="icon" href={`${process.env.basePath}/icons/favicon.png`} />
      <link
        rel="apple-touch-icon"
        href={`${process.env.basePath}/icons/favicon.png`}
      ></link>

      <meta
        name="description"
        content={'Show notifications programmaticly'}
      ></meta>
      <meta name="theme-color" content="#317EFB" />
    </Head>
  );
}
