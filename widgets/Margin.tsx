import styled, { CSSProperties } from "styled-components"

type MarginDecoration = {
  readonly "--margin"?: CSSProperties["margin"]
}

export const Margin = styled.div`
  --margin: auto;

  margin: var(--margin);
`

export type MarginProps = BaseHTML<MarginDecoration>

const MarginWrapper: React.FC<MarginProps> = ({ innerRef, ...props }) => (
  <Margin {...props} ref={innerRef} />
)

export default MarginWrapper
