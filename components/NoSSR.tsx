import PropTypes from "prop-types"
import { useEffect, useLayoutEffect, useState } from "react"

const useEnhancedEffect =
  typeof window !== "undefined" && process.env.NODE_ENV !== "test"
    ? useLayoutEffect
    : useEffect

/**
 *  NoSsr purposely removes components from the subject of Server Side Rendering (SSR).
    This component can be useful in a variety of situations:

    - Escape hatch for broken dependencies not supporting SSR.
    - Improve the time-to-first paint on the client by only rendering above the fold.
    - Reduce the rendering time on the server.
    - Under too heavy server load, you can turn on service degradation.
 *
 */
const NoSSR = ({ children, defer, fallback }) => {
  const [isMounted, setMountedState] = useState(false)

  useEnhancedEffect(() => {
    if (!defer) setMountedState(true)
  }, [defer])

  useEffect(() => {
    if (defer) setMountedState(true)
  }, [defer])

  return isMounted ? children : fallback
}

NoSSR.propTypes = {
  children: PropTypes.node.isRequired,
  defer: PropTypes.bool,
  fallback: PropTypes.node,
}

NoSSR.defaultProps = {
  defer: false,
  fallback: null,
}

export default NoSSR
