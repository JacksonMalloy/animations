import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'

const StyledContent = styled(motion.div)`
  position: absolute;
  bottom: 95%;
  left: 0.2rem;

  h1 {
    font-family: 'Gotham Black';
    font-size: 1.8rem;
    padding: 0.6rem 0.2rem 0.9rem 1.8rem;
  }
`

export const Thanks = ({ animation }) => {
  const controls = useAnimation()

  // Horizontal IN
  useEffect(() => {
    if (animation === 'phase two')
      controls.start((i) => ({
        x: 0,
        opacity: 1,
        transition: { delay: 2 + i * 0.02, type: 'spring', mass: 0.8, damping: 300, velocity: 20 },
      }))

    if (animation === 'leave') {
      controls.start((i) => ({
        y: 200,
        x: 0,
        height: 0,
        transform: `translate3d(0,500px,0)`,
        transition: { delay: i * 0.1, type: 'spring', mass: 0.8, damping: 300, velocity: 20 },
      }))
    }
  }, [controls, animation])

  return (
    <StyledContent animate={controls} initial={{ opacity: 0 }}>
      <motion.h1 custom={1} animate={controls} initial={{ height: 0, y: 222 }}>
        Thanks!
      </motion.h1>
      <motion.h1 custom={2} animate={controls} initial={{ height: 0, y: 222 }}>
        Now go see
      </motion.h1>
      <motion.h1 custom={3} animate={controls} initial={{ height: 0, y: 222 }}>
        what others
      </motion.h1>
      <motion.h1 custom={4} animate={controls} initial={{ height: 0, y: 222 }}>
        have shared!
      </motion.h1>
    </StyledContent>
  )
}
