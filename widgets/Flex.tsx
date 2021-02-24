import styled, { CSSProperties } from "styled-components"

export type FlexDecoration = {
  readonly "--main-axis"?: CSSProperties["justifyContent"]
  readonly "--cross-axis"?: CSSProperties["alignItems"]
  readonly "--axis"?: CSSProperties["flexDirection"] | string
  readonly "--overflow"?: CSSProperties["overflow"]
}

export const Flex = styled.div`
  --axis: column;
  --main-axis: center;
  --cross-axis: center;
  --overflow: hidden;

  position: relative;
  width: 100%;
  display: flex;
  overflow: var(--overflow);
  flex-direction: var(--axis);
  justify-content: var(--main-axis);
  align-items: var(--cross-axis);
`
export type FlexProps = BaseHTML<FlexDecoration>

const FlexWrapper: React.FC<FlexProps> = ({ innerRef, ...props }) => (
  <Flex {...props} ref={innerRef} />
)

export default FlexWrapper
