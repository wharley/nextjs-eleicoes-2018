import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'

injectGlobal`
  @font-face {
    font-family: "Objectivity";
    src: url("/static/fonts/Objectivity-Bold.woff2") format('woff2');
    src: url("/static/fonts/Objectivity-Regular.woff2") format('woff2');
    font-weight: normal;
  }

  html{
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    cursor: default;
    font-size: 1rem;
    font-family: 'Objectivity', Arial, sans-serif;
    font-variant-ligatures: none;
    background: #fff;
  }
`

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App { ...props } />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <link rel='icon' type='image/x-icon' href='static/favicons/favicon.ico' />
          <title>Eleições 2018</title>
          { this.props.styleTags }
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
