import { BaseHTMLAttributes } from "react"
import styled, { CSSProperties } from "styled-components"

export type SpacerDecoration = {
  readonly "--flex"?: CSSProperties["flex"]
}

export const Spacer = styled.span`
  --flex: 1;

  flex: var(--flex);
  display: block;
  height: 100%;
  width: 100%;
`

export type SpaceProps = BaseHTMLAttributes<HTMLSpanElement> & {
  readonly style?: SpacerDecoration
}

const SpacerWrapper: React.FC<SpaceProps> = ({ ...props }) => (
  <Spacer {...props} />
)

export default SpacerWrapper
