/* eslint import/no-extraneous-dependencies:"off" */
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import JssProvider from 'react-jss/lib/JssProvider';
import getContext from '../libs/context';

export default class StyledDocument extends Document {
  static getInitialProps(ctx) {
    // Resolution order
    //
    // On the server:
    // 1. page.getInitialProps
    // 2. document.getInitialProps
    // 3. page.render
    // 4. document.render
    //
    // On the server with error:
    // 2. document.getInitialProps
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. page.getInitialProps
    // 3. page.render

    const sheet = new ServerStyleSheet();

    // Get the context to collected side effects.
    const context = getContext();
    const page = ctx.renderPage(App => props =>
      sheet.collectStyles(
        <JssProvider registry={context.sheetsRegistry} jss={context.jss}>
          <App {...props} />
        </JssProvider>
      )
    );

    return {
      ...page,
      styleTags: sheet.getStyleElement(),
      stylesContext: context,
      styles: (
        <style
          id="jss-server-side"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: context.sheetsRegistry.toString() }}
        />
      ),
    };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {this.props.styleTags}
          <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jdenticon@2.1.1" />
        </Head>
        <body style={{ padding: 0, margin: 0 }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
