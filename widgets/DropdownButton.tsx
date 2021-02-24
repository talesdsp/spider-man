import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import { Text } from "."
import RawButton, { RawButtonProps } from "./RawButton"

type DropDownButtonProps = RawButtonProps

const DropDownButtonStyle = styled.div<DropDownButtonProps>`
  --width: 100%;
  --background: var(--green);
  --radius: 50px;

  display: flex;
  flex-direction: row;
  overflow: hidden;
  width: var(--width);
  background: var(--background);
  border-radius: var(--radius);
`

const DropDownButton: React.FC<DropDownButtonProps> = ({ style, leading }) => {
  return (
    <DropDownButtonStyle>
      <RawButton
        style={{ "--color": style?.color || "#000", "--width": "100%" }}
        leading={leading}
      >
        <Text style={{ "--font-size": "14px" }}>label</Text>
      </RawButton>
      <RawButton
        style={{
          "--color": style?.color || "#000",
          "--width": "40px",
          "--background": "rgba(0,0,0,.1)",
        }}
      >
        <FontAwesomeIcon icon={faAngleDown} size="sm" />
      </RawButton>
    </DropDownButtonStyle>
  )
}

export default DropDownButton
