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
        y: 222,
        opacity: 1,
        transition: {
          delay: (7 - i) * 0.15,
          type: 'spring',
          mass: 0.3,
          damping: 600,
          velocity: 10,
          staggerDirection: -1,
        },
      }))
  }, [controls, animation])

  return (
    <StyledContent>
      <motion.h1 custom={6} animate={controls} initial={{ height: 0, y: -522, opacity: 0 }}>
        Thanks!
      </motion.h1>
      <motion.h1 custom={3} animate={controls} initial={{ height: 0, y: 522, opacity: 0 }}>
        Now go see
      </motion.h1>
      <motion.h1 custom={2} animate={controls} initial={{ height: 0, y: 522, opacity: 0 }}>
        what others
      </motion.h1>
      <motion.h1 custom={1} animate={controls} initial={{ height: 0, y: 522, opacity: 0 }}>
        have shared!
      </motion.h1>
    </StyledContent>
  )
}
