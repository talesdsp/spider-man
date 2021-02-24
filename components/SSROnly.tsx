import PropTypes from "prop-types"
import { useEffect } from "react"

let reconciled = true

const SsrOnly = ({ children }) => {
  useEffect(() => {
    reconciled = false
  }, [])

  return reconciled ? children : true
}

SsrOnly.propTypes = {
  children: PropTypes.node.isRequired,
}
