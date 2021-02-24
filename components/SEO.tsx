import Head from "next/head"

interface ISEO {
  siteTitle?: string
  description?: string
  robots?: string
}

export default function SEO({
  siteTitle = "Marvel Spider Man - Miles Morales",
  description = "#BeYourself",
  robots,
}: ISEO) {
  const robot = robots && <meta name="robots" content={robots} />

  return (
    <Head>
      <meta name="description" content={description} />

      <title>{siteTitle}</title>

      <meta name="og:title" content={siteTitle} />
      {/* <meta
        property="og:image"
        content={`https://og-image.now.sh/${encodeURI(
          `NASA - ${siteTitle}`,
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      /> */}
      <meta name="twitter:card" content="summary_large_image" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Mukta&display=swap"
        rel="stylesheet"
      />

      {robot}
    </Head>
  )
}
