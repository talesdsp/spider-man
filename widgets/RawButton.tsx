import styled, { CSSProperties } from "styled-components"
import { SizedBox } from "."

export type RawButtonDecoration = {
  readonly "--width"?: CSSProperties["width"]
  readonly "--border"?: CSSProperties["border"]
  readonly "--radius"?: CSSProperties["borderRadius"]
  readonly "--margin"?: CSSProperties["margin"]
  readonly "--padding"?: CSSProperties["padding"]
  readonly "--background"?: CSSProperties["background"]
  readonly "--color"?: CSSProperties["color"]
}

type RawButtonStyleProps = { leading?: boolean }

export const RawButtonStyle = styled.button<RawButtonStyleProps>`
  --border: none;
  --width: initial;
  --radius: 0;
  --margin: auto;
  --padding: 12px 32px;
  --background: transparent;
  --color: #fff;

  z-index: 5;
  border: var(--border);
  width: var(--width);
  border-radius: var(--radius);
  margin: var(--auto);
  padding: var(--padding);
  background: var(--transparent);
  color: var(--color);
  display: flex;
  font-weight: normal;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => (props.leading ? "flex-start" : "center")};

  cursor: pointer;
  font-size: 20px;
  img {
    width: 31px;
  }
`

export type RawButtonProps = BaseHTML<
  RawButtonDecoration,
  HTMLButtonElement
> & {
  readonly leading?: JSX.Element
  readonly action?: JSX.Element
}

const RawButton: React.FC<RawButtonProps> = ({
  leading,
  action,
  children,
  innerRef,
  ...props
}) => {
  const lead = (
    <>
      {leading}
      <SizedBox />
    </>
  )

  return (
    <RawButtonStyle {...props} leading={leading ? true : false} ref={innerRef}>
      {leading ? lead : null}

      {children}

      {action || null}
    </RawButtonStyle>
  )
}

export default RawButton
