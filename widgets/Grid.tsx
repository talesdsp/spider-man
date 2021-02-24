import styled from "styled-components"
import { FlexDecoration } from "./Flex"

export const Grid = styled.div`
  display: grid;
`

export type GridProps = BaseHTML<Omit<FlexDecoration, "--axis">>

const GridWrapper: React.FC<GridProps> = ({ innerRef, ...props }) => (
  <Grid {...props} ref={innerRef} />
)

export default GridWrapper
