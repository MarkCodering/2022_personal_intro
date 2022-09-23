// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import { createTheme } from '@nextui-org/react';

function MyApp({ Component, pageProps }) {
  const darkTheme = createTheme({
    type: 'dark',
  });

  return (
    // 2. Use at the root of your app
      <NextUIProvider
        theme={darkTheme}
        >
        <Component {...pageProps} />
      </NextUIProvider>

  );
}

export default MyApp;