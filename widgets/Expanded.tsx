import styled, { CSSProperties } from "styled-components"

export type ExpandedDecoration = {
  readonly "--flex": CSSProperties["flex"]
}

export const Expanded = styled.div`
  --flex: 1;

  flex: var(--flex);
  display: flex;
  flex-direction: inherit;
  width: 100%;
  height: 100%;
  justify-content: inherit;
  align-items: inherit;
`

export type ExpandedProps = BaseHTML<ExpandedDecoration>

const ExpandedWrapper: React.FC<ExpandedProps> = ({ innerRef, ...props }) => (
  <Expanded {...props} ref={innerRef} />
)

export default ExpandedWrapper
