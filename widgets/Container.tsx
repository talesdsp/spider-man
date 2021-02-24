import styled, { CSSProperties } from "styled-components"

type BoxDecoration = {
  readonly "--shadow"?: CSSProperties["boxShadow"]
  readonly "--radius"?: CSSProperties["borderRadius"]
  readonly "--border"?: CSSProperties["border"]
  readonly "--background"?: CSSProperties["background"]
  readonly "--gradient"?: CSSProperties["backgroundImage"]
  readonly "--overflow"?: CSSProperties["overflow"]
  readonly "--flex"?: CSSProperties["flex"]
}

type ImageDecoration = {
  readonly "--image"?: CSSProperties["backgroundImage"]
  readonly "--fit"?: CSSProperties["backgroundSize"]
  readonly "--alignment"?: CSSProperties["backgroundPosition"]
}

type ContainerDecoration = BoxDecoration &
  ImageDecoration & {
    readonly "--width"?: CSSProperties["width"]
    readonly "--height"?: CSSProperties["height"]
    readonly "--padding"?: CSSProperties["padding"]
    readonly "--margin"?: CSSProperties["margin"]
  }

const Container = styled.div`
  --shadow: unset;
  --radius: 0;
  --border: none;
  --background: transparent;
  --gradient: transparent;
  --image: var(--gradient);
  --fit: cover;
  --alignment: center;
  --overflow: hidden;
  --width: unset;
  --height: unset;
  --padding: 0;
  --margin: 0;
  --flex: unset;

  position: relative;
  flex: var(--flex);
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  border: var(--border);
  background: var(--background);
  background-image: var(--image);
  background-size: var(--fit);
  background-position: var(--alignment);
  overflow: var(--overflow);
  width: var(--width);
  min-width: var(--width);
  height: var(--height);
  min-height: var(--height);
  padding: var(--padding);
  margin: var(--margin);
`

export type ContainerProps = BaseHTML<ContainerDecoration>

const ContainerWrapper: React.FC<ContainerProps> = ({ innerRef, ...props }) => {
  return <Container {...props} ref={innerRef} />
}

export default ContainerWrapper
