import { useState } from "react"
import styled, { css } from "styled-components"

export default function HamburguerMenu() {
  const [isOpen, triggerMenu] = useState(false)

  const handleClick = () => triggerMenu((p) => !p)

  return (
    <>
      <ClickableArea
        className="burger-menu fade-down"
        onClick={handleClick}
        open={isOpen}
      >
        <MENU_BTN__BURGER open={isOpen}></MENU_BTN__BURGER>
      </ClickableArea>
    </>
  )
}
interface IOpen {
  open?: boolean
}

export const ClickableArea = styled.div<IOpen>`
  height: 45px;
  padding: 2px 10px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: absolute; */
  /* left: 0; */
  /* transform: translateX(5vw); */
  cursor: pointer;
  margin-right: 20px;
  z-index: 2;
  /* transition: all 600ms ease-in-out; */
  border-radius: 50%;

  &:active,
  &:focus {
    background-color: #337;
  }
  ${(props) =>
    props.open &&
    css`
      transform: translateX(190px);
    `}

  @media (min-width: 768px) {
    display: none;
  }
`

export const MENU_BTN__BURGER = styled.div<IOpen>`
  display: block;
  background: #fff;
  position: relative;
  width: 1.6rem;
  height: 0.2rem;
  border-radius: 0.5em;
  transition: all 420ms ease-in-out;

  ${ClickableArea}:hover & {
    ${(props) =>
      props.open === false &&
      css`
        background-color: #ea1d22;
      `}
  }

  ${(props) =>
    props.open &&
    css`
      transform: translateX(60px);
      background: transparent;
    `}

  &::before, &::after {
    content: " ";
    position: absolute;
    width: 1.6rem;
    background-color: #fff;
    height: 0.2rem;
    border-radius: 0.5em;
    transition: all 420ms ease-in-out;
  }
  &::before {
    transform: translateY(-0.5rem);

    ${(props) =>
      props.open &&
      css`
        transform: translateX(-60px) rotate(-45deg);
      `}
  }
  &::after {
    transform: translateY(0.5rem);

    ${(props) =>
      props.open &&
      css`
        transform: translateX(-60px) rotate(45deg);
      `}
  }
`
