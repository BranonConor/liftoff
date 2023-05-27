import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import styled, { ServerStyleSheet } from "styled-components";

export async function getInitialProps(ctx: DocumentContext) {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props: React.ComponentProps<any>) =>
          sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [initialProps.styles, sheet.getStyleElement()],
    };
  } finally {
    sheet.seal();
  }
}

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lalezar&family=Poppins:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>{" "}
      <StyledBody>
        <Main />
        <NextScript />
      </StyledBody>
    </Html>
  );
}

const StyledBody = styled.body`
  background: black;
`;
