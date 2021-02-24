import styled from "styled-components"
import RawButton, { RawButtonProps } from "./RawButton"

export const Button = styled(RawButton)`
  --radius: 3px;
  transform: skewX(-10deg);
  background-image: linear-gradient(225deg, #ea1d22, #b31317);
  position: relative;
  margin: 10px 6px;
  transition: all 300ms ease;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 3px;
    width: 20%;
    height: 70%;
  }

  &:hover {
    transform: skewX(-10deg) scale(1.05);

    &::before {
      top: -2px;
      left: -2px;
      border-top: 3px solid #fff;
      border-left: 3px solid #fff;
    }
    &::after {
      border-right: 3px solid #fff;
      border-bottom: 3px solid #fff;
      bottom: -2px;
      right: -2px;
    }
  }
`

const ButtonWrapper: React.FC<RawButtonProps> = ({ innerRef, ...props }) => {
  return <Button {...props} ref={innerRef} />
}

export default ButtonWrapper
