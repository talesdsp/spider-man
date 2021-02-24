import React from "react"
import styled, { CSSProperties } from "styled-components"

type PaddingDecoration = {
  readonly "--padding"?: CSSProperties["padding"]
}

const Padding = styled.div`
  --padding: 20px;

  padding: var(--padding);
  width: 100%;
`
export type PaddingProps = BaseHTML<PaddingDecoration>

const PaddingWrapper: React.FC<PaddingProps> = ({ innerRef, ...props }) => (
  <Padding {...props} ref={innerRef} />
)

export default PaddingWrapper
