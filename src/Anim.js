import { useSpring, animated } from 'react-spring'

function Anim() {
  const props = useSpring({ 
      to: { opacity: 1 }, 
      from: { opacity: 0 },
      delay: 2000
    })
  return <animated.div style={props}>I will fade in</animated.div>
}

export default Anim;
