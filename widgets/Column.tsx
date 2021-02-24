import styled from "styled-components"
import { Flex, FlexDecoration } from "./Flex"

const Column = styled(Flex)`
  --main-axis: flex-start;
  --cross-axis: center;

  flex-direction: column;
  height: 100%;
`
export type ColumnProps = BaseHTML<Omit<FlexDecoration, "--axis">>

const ColumnWrapper: React.FC<ColumnProps> = ({ innerRef, ...props }) => (
  <Column {...props} ref={innerRef} />
)

export default ColumnWrapper
