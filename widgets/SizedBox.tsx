import { BaseHTMLAttributes } from "react"
import styled, { CSSProperties } from "styled-components"

type SizedBoxDecoration = {
  readonly "--height"?: CSSProperties["height"]
  readonly "--width"?: CSSProperties["width"]
}

export const SizedBox = styled.div`
  --height: 10px;
  --width: 10px;

  height: var(--height);
  width: var(--width);
`

export type SizedBoxProps = BaseHTMLAttributes<HTMLDivElement> & {
  readonly style?: SizedBoxDecoration
}

const SizedBoxWrapper: React.FC<SizedBoxProps> = ({ ...props }) => (
  <SizedBox {...props} />
)

export default SizedBoxWrapper
