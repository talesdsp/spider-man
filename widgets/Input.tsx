import { InputHTMLAttributes } from "react"
import styled, { CSSProperties } from "styled-components"

type InputStyleProps = {
  readonly "--radius"?: CSSProperties["borderRadius"]
  readonly "--background"?: CSSProperties["background"]
  readonly "--border"?: CSSProperties["background"]
  readonly "--color"?: CSSProperties["color"]
  readonly "--font-size"?: CSSProperties["fontSize"]
  readonly "--font-weight"?: CSSProperties["fontWeight"]
}

const InputStyle = styled.div<InputStyleProps>`
  --background: transparent;
  --border: none;
  --radius: 0;
  --color: #fff;
  --font-size: 16px;
  --font-weight: normal;

  display: flex;
  align-items: center;
  justify-content: start;
  height: 36px;
  width: 100%;
  max-width: 100%;
  padding: 4px 8px;
  background: var(--background);
  border: var(--border);
  border-radius: var(--radius);

  input {
    border: none;
    width: 100%;
    padding: 5px 10px;
    font-size: var(--font-size);
    font-weight: var(--font-weight);
    background-color: transparent;
    color: var(--color);
    outline: none;
  }
`

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  style?: InputStyleProps
  leading?: JSX.Element
  action?: JSX.Element
  innerRef?: React.MutableRefObject<HTMLInputElement>
}

const Input: React.FC<InputProps> = ({
  leading,
  action,
  style,
  innerRef,
  ...props
}) => {
  return (
    <InputStyle style={style}>
      {leading || null}

      <input {...props} ref={innerRef} />

      {action || null}
    </InputStyle>
  )
}

export default Input
