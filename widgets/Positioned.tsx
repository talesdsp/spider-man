import React from "react"
import styled, { CSSProperties } from "styled-components"

export type PositionedDecoration = {
  readonly "--position"?: CSSProperties["position"]
  readonly "--top"?: CSSProperties["top"]
  readonly "--left"?: CSSProperties["left"]
  readonly "--right"?: CSSProperties["right"]
  readonly "--bottom"?: CSSProperties["bottom"]
}

export const Positioned = styled.div`
  --position: absolute;
  --top: initial;
  --left: initial;
  --right: initial;
  --bottom: initial;

  /* width: inherit; */
  margin: auto;
  position: var(--position);
  top: var(--top);
  left: var(--left);
  right: var(--right);
  bottom: var(--bottom);
`

export type PositionedProps = BaseHTML<PositionedDecoration>

const PositionedWrapper: React.FC<PositionedProps> = ({
  innerRef,
  ...props
}) => <Positioned {...props} ref={innerRef} />

export default PositionedWrapper
