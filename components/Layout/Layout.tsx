import SpiderIcon from "@/public/svgs/spider-icon.svg"
import { BurgerMenu, Row } from "@/widgets"
import styled from "styled-components"
import SEO from "../SEO"
import { Window } from "./layout.styled"

interface ILayout {
  description?: string
  siteTitle?: string
  robots?: string
}

const Layout: React.FC<ILayout> = ({
  children,
  description,
  siteTitle,
  robots,
}) => {
  return (
    <Row style={{ "--cross-axis": "start" }}>
      <SEO description={description} siteTitle={siteTitle} robots={robots} />
      <Window>
        <Nav>
          <Row
            style={{
              width: "100%",
              maxWidth: "600px",
            }}
          >
            <SpiderIcon
              className="spider-logo fade-down"
              style={{
                fill: "#edf1f7",
                width: "59px",
                height: "75px",
                marginLeft: "20px",
              }}
            />

            <Row
              className="nav-list hide fade-down"
              style={{
                width: "100%",
                "--main-axis": "space-evenly",
              }}
            >
              <a href="">HOME</a>
              <a href="">STORY</a>
              <a href="">WALLPAPERS</a>
              <a href="">#BEYOURSELF</a>
            </Row>
          </Row>

          <BurgerMenu />

          <Row
            className="nav-social hide fade-down"
            style={{
              maxWidth: "250px",
              "--main-axis": "space-evenly",
              width: "100%",
            }}
          >
            <img
              src="/svgs/facebook-icon.svg"
              style={{
                color: "#959698",
                width: "24px",
                height: "24px",
              }}
            />
            <img
              src="/svgs/insta-icon.svg"
              style={{
                color: "#959698",
                width: "24px",
                height: "24px",
              }}
            />
            <img
              src="/svgs/youtube-icon.svg"
              style={{
                color: "#959698",
                width: "24px",
                height: "24px",
              }}
            />
            <img
              src="/svgs/twitter-icon.svg"
              style={{
                color: "#959698",
                width: "24px",
                height: "24px",
              }}
            />
          </Row>
        </Nav>

        <main>{children}</main>
      </Window>
    </Row>
  )
}

export default Layout

const Nav = styled.nav`
  position: absolute;
  height: 90px;
  width: 100%;
  color: #fff;
  z-index: 300;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
