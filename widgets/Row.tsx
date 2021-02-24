import React from "react"
import styled from "styled-components"
import { Flex, FlexDecoration } from "./Flex"

const Row = styled(Flex)`
  --main-axis: flex-start;
  --cross-axis: center;

  flex-direction: row;
  width: 100%;
`
export type RowProps = BaseHTML<Omit<FlexDecoration, "--axis">>

const RowWrapper: React.FC<RowProps> = ({ innerRef, ...props }) => (
  <Row {...props} ref={innerRef} />
)

export default RowWrapper
