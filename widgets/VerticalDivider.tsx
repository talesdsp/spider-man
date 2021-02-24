import React from "react"
import styled from "styled-components"
import { Divider, DividerProps } from "./Divider"

export const VerticalDivider = styled(Divider)`
  border-bottom: none;
  border-width: var(--width);
  border-left: var(--height);
`

const VerticalDividerWrapper: React.FC<DividerProps> = ({
  innerRef,
  ...props
}) => <VerticalDivider {...props} ref={innerRef} />

export default VerticalDividerWrapper
