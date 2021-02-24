import Layout from "@/components/Layout/Layout"
import { GlobalStyle, theme } from "@/theme"
import { ThemeProvider } from "styled-components"

type AppProps = { Component: React.FC; pageProps: {} }

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
