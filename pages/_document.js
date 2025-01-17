import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Complimentorrrr" key="title"/>
        <meta property="og:description" content="Use The Complimentorrrr" key="description"/>
        <meta
          property="og:image"
          content="https://i.imgur.com/4Z5YQ9r.png"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
