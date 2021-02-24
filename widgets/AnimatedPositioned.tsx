import styled, { CSSProperties } from "styled-components"
import { Positioned, PositionedDecoration } from "./Positioned"

export type AnimatedPositionedDecoration = {
  readonly "--x"?: CSSProperties["translate"]
  readonly "--y"?: CSSProperties["translate"]
  readonly "--curve"?: CSSProperties["transitionTimingFunction"]
  readonly "--duration"?: CSSProperties["transitionDuration"]
  readonly "--delay"?: CSSProperties["transitionDelay"]
}

export const AnimatedPositioned = styled(Positioned)`
  --x: 0;
  --y: 0;
  --curve: linear;
  --duration: 300ms;
  --delay: 0ms;

  transition-property: transform, width;
  transition-timing-function: var(--curve);
  transition-duration: var(--duration);
  transition-delay: var(--delay);

  transform: translate(var(--x), var(--y));
`

export type AnimatedPositionedProps = BaseHTML<
  PositionedDecoration & AnimatedPositionedDecoration
>

const AnimatedPositionedWrapper: React.FC<AnimatedPositionedProps> = ({
  innerRef,
  ...props
}) => <AnimatedPositioned {...props} ref={innerRef} />

export default AnimatedPositionedWrapper
