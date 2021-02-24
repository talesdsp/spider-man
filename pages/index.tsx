import SpiderIcon from "@/public/svgs/spider-icon.svg"
import {
  Button,
  Column,
  Expanded,
  Flex,
  OutlineButton,
  Padding,
  Positioned,
  Row,
  SizedBox,
  Spacer,
  Stack,
  Text,
} from "@/widgets"
import gsap, { Expo } from "gsap"
import { useEffect, useRef, useState } from "react"
import Tilt from "react-tilt"
import styled, { keyframes } from "styled-components"

const start = 50
const end = 70

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)

  const [tl] = useState(gsap.timeline())

  useEffect(() => {
    if (videoRef.current && window.innerWidth > 768) {
      videoRef.current.volume = 0
      videoRef.current.currentTime = start
      videoRef.current.play()
      setInterval(() => {
        if (videoRef.current.currentTime >= end) {
          videoRef.current.currentTime = start
        }
      }, 5000)
    }

    tl.to(".bg-loader", {
      xPercent: -100,
      duration: 1,
      ease: Expo.easeInOut,
      delay: 3,
    })
      .from(
        "video",
        {
          opacity: 0,
          width: 0,
          duration: 2,
          ease: Expo.easeInOut,
        },
        "-=1",
      )
      .from(".fade-down", {
        y: -50,
        opacity: 0,
        duration: 0.7,
        ease: Expo.easeInOut,
        // stagger: 0.2,
      })
  }, [videoRef])

  return (
    <Responsive>
      <video
        ref={videoRef}
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <source src="/videos/spiderman-trailer.mp4"></source>
      </video>

      <DarkLayer />

      <Flex
        style={{
          marginTop: "90px",
          height: "calc(100vh - 90px)",
          maxWidth: "1400px",
          width: "100%",
          "--overflow": "visible",
          "--axis": "var(--spider-direction)",
          "--cross-axis": "center",
        }}
      >
        <Column style={{ "--overflow": "visible", zIndex: 10 }}>
          <Spacer style={{ "--flex": "var(--spacer-top)" }} />

          <Expanded>
            <Tilt
              options={{ max: 15 }}
              style={{ width: "100%", height: "100%" }}
            >
              <Stack className="spider-man-hero fade-down">
                <Positioned
                  style={{
                    "--top": 0,
                    "--bottom": 0,
                    "--right": "var(--spiderman-margin-r)",
                  }}
                >
                  <img
                    src="/images/spider-man-hero.png"
                    alt="spider man miles morales"
                    style={{
                      width: "var(--spiderman-size)",
                      height: "auto",
                      zIndex: 1,
                      backgroundImage: 'url("/svgs/tiny-smoke.svg")',
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </Positioned>
              </Stack>
            </Tilt>
          </Expanded>
        </Column>

        <Padding style={{ "--padding": "var(--text-padding)" }}>
          <Column style={{ "--cross-axis": "start", "--main-axis": "center" }}>
            <div className="hero-text-images fade-down">
              <img
                src="/images/spider-man-text.png"
                alt="spider man"
                style={{
                  width: "569px",
                  height: "auto",
                  maxWidth: "80vw",
                  zIndex: 0,
                }}
              />
              <img
                src="/images/miles-morales-text.png"
                alt="miles morales"
                style={{
                  width: "451px",
                  height: "auto",
                  marginTop: "calc(-30px - 2%)",
                  maxWidth: "60vw",
                }}
              />
            </div>

            <Text
              className="main-paragraph fade-down"
              style={{ "--color": "#959698", lineHeight: 1.5 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis
              velit magna vitae mauris orci fames posuere nibh. Sit tellus amet
              facilisi sit odio pulvinar scelerisque quam et. Ultrices facilisis
              nunc massa diam, quis mi imperdiet.
            </Text>

            <SizedBox style={{ "--height": "10px" }} />

            <Row
              className="ctas fade-down"
              style={{ width: "100%", maxWidth: "100vw" }}
            >
              <Button>
                <Text>PRE-ORDER</Text>
              </Button>

              <OutlineButton>
                <Text>WATCH TEASER</Text>
              </OutlineButton>
            </Row>

            <SizedBox style={{ "--height": "20px" }} />

            <Row
              className="company-logos fade-down"
              style={{ width: "569px", zIndex: 10 }}
            >
              <img
                className="hide"
                src="/svgs/playstation-icon.svg"
                style={{ width: "31px", height: "24px" }}
              />
              <SizedBox className="hide" style={{ "--width": "20px" }} />
              <img
                className="hide"
                src="/svgs/marvel-icon.svg"
                style={{ width: "58px", height: "24px" }}
              />
            </Row>
          </Column>
        </Padding>
      </Flex>

      <BgLoader className="bg-loader">
        <SpiderIcon />
      </BgLoader>
    </Responsive>
  )
}

const flash = keyframes`
    0% {
      stroke-width: 0;
      stroke-dasharray: 1 100;
      fill: transparent,
    }
    25% {
      stroke-width: 1;
      stroke-dasharray: 100 0;
      fill: transparent,
    }
    60%,
    100% {
      stroke-width: 30;
      fill: #edf1f7;
    }
`

const BgLoader = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(225deg, #ea1d22, #b31317);

  svg {
    width: 59px;
    height: 75px;
    fill: transparent;
    animation: ${flash} 12s ease infinite alternate;
  }
`

const DarkLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-image: linear-gradient(
    -225deg,
    rgba(0, 0, 0, 1) 25%,
    rgba(0, 0, 0, 0.8) 50%,
    rgba(0, 0, 0, 1) 75%
  );
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

const Responsive = styled.div`
  --spider-direction: column;
  --text-padding: 20px 20px 0;
  --spiderman-size: 100vw;
  --spiderman-margin-r: unset;
  --spacer-top: 0;

  overflow: visible;

  @media (min-width: 500px) {
    --text-padding: 20px;
    --spacer-top: 0.1;
    --spiderman-size: 60vh;
  }

  @media (min-width: 768px) {
    --text-padding: 40px;
  }

  @media (orientation: landscape) {
    @media (min-width: 768px) {
      --spider-direction: row-reverse;
      --spiderman-size: 500px;
      --spiderman-margin-r: 0;
      --spacer-top: 0.5;
    }

    @media (min-width: 900px) {
      --spiderman-size: 600px;
    }

    @media (min-width: 1100px) {
      --spacer-top: 0.1;
      --spiderman-size: 750px;
    }

    @media (min-width: 1200px) {
      --spacer-top: 0;
      --spiderman-size: 800px;
    }

    @media (min-width: 1366px) {
      --spiderman-size: 850px;
    }

    @media (min-width: 1440px) {
      --spiderman-size: 900px;
      --spiderman-margin-r: 5%;
    }
  }

  @media (min-width: 1920px) {
    --spacer-top: 0.2;
  }
`
