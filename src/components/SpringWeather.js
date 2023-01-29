import { animated, useSpring } from "react-spring"

const SpringWeather = ({ children }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: {
      mass: 8.6,
      tension: 21,
      friction: 100,
    },
  })
  return <animated.div style={props}>{children}</animated.div>
}

export default SpringWeather
