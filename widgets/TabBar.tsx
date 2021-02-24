import NoSSR from "@/components/NoSSR"
import React, { useEffect, useRef, useState } from "react"
import { CSSProperties } from "styled-components"
import { AnimatedPositioned, Padding, Row, Stack } from "."
import Tab, { TabDecoration } from "./Tab"

type TabBarDecoration = TabDecoration & {
  readonly "--indicator-color"?: CSSProperties["color"]
}

export type TabBarProps = TabBarDecoration & {
  tabs: any[]
  onTap?: (index: number) => void
  style?: TabBarDecoration
  controller?: TabControllerTypes
}

const TabBar: React.FC<TabBarProps> = ({ tabs, onTap, style, controller }) => {
  const [currentTab, setTab] = useState(0)

  const [target, setTarget] = useState(null)
  const [isJSAnimation, setJSAnimation] = useState(false)

  useEffect(() => {
    if (controller) {
      controller.animateTo = (index) => {
        setJSAnimation(true)
        setTarget(rowRef.current.children[index])
        setTab(index)

        setTimeout(() => {
          setJSAnimation(false)
        }, controller.duration)
      }
    }
  }, [controller, setTab, setJSAnimation])

  const rowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (rowRef?.current != null) {
      setTarget(rowRef.current.children[0])
    }
  }, [])

  function handleClick(i: number) {
    return (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      setTab(i)
      setTarget(e.target)
      onTap(currentTab)
    }
  }
  const tabList = tabs.map((v, index) => {
    const isSelected = currentTab == index

    return (
      <Tab
        key={v + index}
        text={v}
        onClick={handleClick(index)}
        selected={isSelected}
        style={style}
      />
    )
  })

  const setCustomStyle = isJSAnimation
    ? {
        "--duration": controller.duration + "ms",
        "--curve": controller.curve,
      }
    : {}

  return (
    <Stack>
      <NoSSR defer={true}>
        <AnimatedPositioned
          style={{
            "--x": target.offsetLeft + target.clientWidth / 3 + "px",
            "--bottom": "0px",
            "--curve": "ease-out",

            ...setCustomStyle,
          }}
        >
          <div
            style={{
              transition: `width 300ms var(--curve)`,
              background: "var(--green)",
              width: target.clientWidth / 3 + "px",
              height: "3px",
              borderRadius: "5px",
            }}
          ></div>
        </AnimatedPositioned>
      </NoSSR>

      <Padding style={{ "--padding": "10px 0" }}>
        <Row style={{ "--main-axis": "space-evenly" }} innerRef={rowRef}>
          {tabList}
        </Row>
      </Padding>
    </Stack>
  )
}

export default TabBar

declare global {
  type TabControllerTypes = {
    animateTo?: (index: number) => void

    /**
     * @description The transition duration in ms
     */
    duration?: number

    /**
     * @description The transition timing function
     */
    curve?: CSSProperties["transitionTimingFunction"]
  }
}

export const TabController = (
  args = {
    curve: "var(--curve)",
    duration: 300,
  },
): TabControllerTypes => {
  return {
    curve: args.curve,
    duration: args.duration,
  }
}
