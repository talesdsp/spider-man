import styled, { CSSProperties } from "styled-components"

export type DividerDecoration = {
  readonly "--height"?: CSSProperties["height"]
  readonly "--width"?: CSSProperties["width"]
  readonly "--color"?: CSSProperties["color"]
}

export const Divider = styled.hr`
  --height: 1px;
  --width: 100%;
  --color: #ccc;

  margin: 0;
  border-width: var(--height);
  width: var(--width);
  color: var(--color);
`

export type DividerProps = BaseHTML<DividerDecoration, HTMLHRElement>

const DividerWrapper: React.FC<DividerProps> = ({ innerRef, ...props }) => (
  <Divider {...props} ref={innerRef} />
)

export default DividerWrapper
