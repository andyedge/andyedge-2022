import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html>
      <Head>
      </Head>
      <body>        
        <Main />
        <NextScript />
        <noscript dangerouslySetInnerHTML={{__html: 
        `<iframe src=“https://www.googletagmanager.com/ns.html?id=GTM-T3QG72X”
          height=“0" width=“0” style=“display:none;visibility:hidden”></iframe>`
          }}>            
        </noscript>
      </body>
    </Html >
  )
}

export default Document;