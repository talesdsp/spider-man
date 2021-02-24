import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import styled, { CSSProperties } from "styled-components"
import { Row, SizedBox } from "./"

declare global {
  interface ITile {
    icon: IconDefinition
    label: string
    href?: string
    badge?: number
  }
}

type TileProps = BaseHTML & {
  innerRef?: React.MutableRefObject<HTMLDivElement>
  item: {
    child?: ITile[]
  } & ITile

  active?: boolean
}

const Tile: React.FC<TileProps> = ({ item, innerRef, active, onClick }) => {
  const isActive = active
    ? ({ "--color": "#ccc", "--background-color": "#333" } as CSSProperties)
    : {}

  return (
    <Container onClick={onClick} style={isActive} ref={innerRef}>
      <Row>
        <FontAwesomeIcon icon={item.icon} size="1x" />
        <SizedBox />

        <Row style={{ "--main-axis": "space-between" }}>
          {item.label}

          {item.badge ? <span>{item.badge}</span> : null}
        </Row>
      </Row>
    </Container>
  )
}

const Container = styled.div`
  --color: #737373;
  --background-color: #000;

  width: 100%;
  padding: 6px 8px 6px 16px;
  font-size: 14px;
  background-color: var(--background-color);
  color: var(--color);
  cursor: pointer;

  :hover {
    background-color: #333;
  }

  span {
    font-size: 12px;
    font-weight: 400;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 16px;
    background-color: #00a3f4;
    color: #000;
  }
`

export default Tile
