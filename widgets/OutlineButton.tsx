import styled from "styled-components"
import RawButton, { RawButtonProps } from "./RawButton"

export const OutlineButton = styled(RawButton)`
  --radius: 3px;
  transform: skewX(-10deg);
  border: 2px solid #ea1d22;
  background-color: transparent;
  position: relative;
  margin: 10px 10px;
  transition: all 300ms ease;
  overflow: hidden;

  &::after {
    transition: all 300ms ease;
    content: "";
    position: absolute;
    border-radius: 3px;
    width: 100%;
    height: 100%;
    left: -100%;
    background-image: linear-gradient(225deg, #ea1d22, #b31317);
  }

  &:hover {
    transform: skewX(-10deg) scale(1.05);

    &::after {
      transform: translateX(100%);
    }
  }
`

const ButtonWrapper: React.FC<RawButtonProps> = ({ innerRef, ...props }) => {
  return <OutlineButton {...props} ref={innerRef} />
}

export default ButtonWrapper
