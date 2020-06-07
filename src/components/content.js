import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'

const StyledContent = styled(motion.div)`
  h1 {
    font-family: 'Gotham Black';
    font-size: 1.8rem;
    padding: 0.6rem 0.2rem 0.9rem 1.8rem;
  }
`

export const Content = ({ animation }) => {
  const controls = useAnimation()

  useEffect(() => {
    if (animation === 'initialized') {
      controls.start((i) => ({
        y: 90,
        x: 250,
        height: 0,
        transform: `translate3d(0,500px,0)`,
        transition: { delay: i * 0.1, type: 'spring', mass: 0.8, damping: 300, velocity: 20 },
      }))
    }

    if (animation === 'phase one') {
      controls.start((i) => ({
        x: -250,
        height: 0,
        transform: `translate3d(0,500px,0)`,
        transition: { delay: i * 0.1, type: 'spring', mass: 0.8, damping: 300, velocity: 20 },
      }))
    }

    if (animation === 'phase two') {
      controls.start((i) => ({
        y: 200,
        x: 0,
        height: 0,
        transform: `translate3d(0,500px,0)`,
        transition: { delay: i * 0.1, type: 'spring', mass: 0.8, damping: 300, velocity: 20 },
      }))
    }
  }, [animation, controls])

  // Horizontal IN
  useEffect(() => {
    controls.start((i) => ({
      x: 250,
      transition: { delay: i * 0.02, type: 'spring', mass: 0.8, damping: 300, velocity: 20 },
    }))
  }, [controls])

  return (
    <StyledContent initial={{ x: -250, y: -70 }}>
      <motion.h1 custom={1} animate={controls} initial={{ height: 0, y: 222 }}>
        What’s on
      </motion.h1>
      <motion.h1 custom={2} animate={controls} initial={{ height: 0, y: 222 }}>
        your mind?
      </motion.h1>
    </StyledContent>
  )
}
