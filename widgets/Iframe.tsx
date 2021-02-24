import React from "react"

const Iframe: React.FC<{ url?: string }> = ({
  url = "https://www.youtube.com/embed/gHzuHo80U2M?autoplay=1&start=19&end=30&audio=0&controls=0&disablekb=1&enablejsapi=1&fs=0&loop=1&modestbranding=1&iv_load_policy=3",
}) => {
  return (
    <iframe
      id="ytplayer"
      width="540"
      height="315"
      src={url}
      style={{
        border: "none",
        margin: "auto",
        display: "block",
        width: "100vw",
        minHeight: "100vh",
      }}
    />
  )
}

export default Iframe
