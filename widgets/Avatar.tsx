import styled, { CSSProperties } from "styled-components"

export const Avatar = styled.div`
  --size: 100%;
  --fit: cover;
  --position: center;

  overflow: hidden;
  border-radius: 50%;
  height: var(--size);
  width: var(--size);

  img {
    width: 100%;
    object-fit: var(--fit);
    object-position: var(--position);
  }
`

type AvatarDecoration = {
  readonly "--fit"?: CSSProperties["objectFit"]
  readonly "--position"?: CSSProperties["objectPosition"]
  readonly "--size"?: CSSProperties["width"]
}

export type AvatarProps = BaseHTML<AvatarDecoration, HTMLImageElement>

const AvatarWrapper: React.FC<AvatarProps> = ({
  style,
  innerRef,
  ...props
}) => {
  return (
    <Avatar style={style} ref={innerRef}>
      <img {...props} />
    </Avatar>
  )
}

export default AvatarWrapper
