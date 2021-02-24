import React from "react"
import styled, { CSSProperties } from "styled-components"
import { Text } from "./Text"

export type TabDecoration = {
  readonly "--label-color"?: CSSProperties["color"]
  readonly "--unselected-label-color"?: CSSProperties["color"]
  readonly "--active-color"?: CSSProperties["color"]
}

export const Tab = styled(Text)`
  --unselected-label-color: #000;
  --label-color: blue;
  --active-color: var(--unselected-label-color);

  color: var(--active-color);
  /* flex: 1; */
`

type TabProps = BaseHTML<TabDecoration> & {
  text: string
  selected?: boolean
  onClick?: Function
}

const TabWrapper: React.FC<TabProps> = ({
  text,
  selected,
  style,
  innerRef,
  ...props
}) => {
  const isActive = {
    "--active-color": selected
      ? "var(--label-color)"
      : "var(--unselected-label-color)",
  }

  return (
    <Tab
      {...props}
      children={text}
      style={{ ...style, ...isActive }}
      ref={innerRef}
    />
  )
}

export default TabWrapper
