import styled, { CSSProperties } from "styled-components"

export type ScrollViewDecoration = {
  readonly "--main-axis"?: CSSProperties["justifyContent"]
  readonly "--cross-axis"?: CSSProperties["alignItems"]
  readonly "--axis"?: CSSProperties["flexDirection"]
  readonly "--padding"?: CSSProperties["padding"]
  readonly "--margin"?: CSSProperties["margin"]
}

const ScrollView = styled.div`
  --axis: column;
  --main-axis: center;
  --cross-axis: center;
  --padding: 0;
  --margin: auto;

  overflow: auto;
  display: flex;
  width: 100%;
  flex-direction: var(--axis);
  justify-content: var(--main-axis);
  align-items: var(--cross-axis);
  padding: var(--padding);
  margin: var(--margin);
`

export type ScrollViewProps = BaseHTML<ScrollViewDecoration>

const ScrollViewWrapper: React.FC<ScrollViewProps> = ({
  children,
  innerRef,
  ...props
}) => <ScrollView children={children} {...props} ref={innerRef} />

export default ScrollViewWrapper
