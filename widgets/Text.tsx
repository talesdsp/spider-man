import { BaseHTMLAttributes } from "react"
import styled, { css, CSSProperties } from "styled-components"

export type TextDecoration = {
  readonly "--color"?: CSSProperties["color"]
  readonly "--font-size"?: CSSProperties["fontSize"]
  readonly "--font-weight"?: CSSProperties["fontWeight"]
  readonly "--font-family"?: CSSProperties["fontFamily"]
  readonly "--font-style"?: CSSProperties["fontStyle"]
  readonly "--text-align"?: CSSProperties["textAlign"]
  readonly "--width"?: CSSProperties["width"]
}

type TextModification = {
  ellipsis?: boolean
}

export const Text = styled.p<TextModification>`
  --color: inherit;
  --font-size: 17px;
  --font-weight: 400;
  --font-family: inherit;
  --font-style: normal;
  --text-align: left;
  --width: initial;

  color: var(--color);
  font-size: var(--font-size);
  font-weight: var(--font-size);
  font-family: var(--font-family);
  font-style: var(--font-style);
  text-align: var(--text-align);
  width: var(--width);
  z-index: 1;

  ${(props) =>
    props.ellipsis &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
`

export type TextProps = BaseHTMLAttributes<HTMLParagraphElement> & {
  readonly style?: TextDecoration
} & TextModification

const TextWrapper: React.FC<TextProps> = ({ ...props }) => <Text {...props} />

export default TextWrapper
