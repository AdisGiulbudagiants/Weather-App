import { animated, useSpring } from "react-spring"

const SpringIn = ({ children }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: {
      tension: 112,
      friction: 60,
    },
  })
  return <animated.div style={props}>{children}</animated.div>
}

export default SpringIn
