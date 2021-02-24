import { BaseHTMLAttributes } from "react"
import styled, { CSSProperties } from "styled-components"
import { Flex, FlexDecoration } from "./Flex"

export type ListViewDecoration = FlexDecoration & {
  readonly "--padding"?: CSSProperties["padding"]
  readonly "--margin"?: CSSProperties["margin"]
}

export const ListView = styled(Flex)`
  --main-axis: flex-start;
  --cross-axis: center;
  --padding: 0;
  --margin: 0;

  scrollbar-width: thin;
  height: inherit;
  flex-direction: var(--axis);
  justify-content: var(--main-axis);
  align-items: var(--cross-axis);
  padding: var(--padding);
  margin: var(--margin);
`
export type ListViewProps = BaseHTMLAttributes<HTMLDivElement> & {
  readonly style?: ListViewDecoration
}

const ListViewWrapper: React.FC<ListViewProps> = ({ ...props }) => (
  <ListView {...props} />
)

export default ListViewWrapper
