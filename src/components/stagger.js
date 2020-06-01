import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'

const StyledStagger = styled(motion.div)`
  position: absolute;
  height: ${({ size }) => size};
  width: calc(${({ size }) => size} / 8);
  background-color: ${({ color }) => color};
  top: 0;
  left: ${({ stag }) => (stag ? stag : 0)};
`

export const Stagger = ({ size }) => {
  const controls = useAnimation()

  //   Horizontal IN
  useEffect(() => {
    controls.start((i) => ({
      x: i * 7.86,
      transition: { delay: i * 0.05 + 1, type: 'spring', mass: 1.6, damping: 600, velocity: 10, staggerDirection: 1 },
    }))
  }, [controls])

  return (
    <>
      <StyledStagger color={'#0a0b0f'} size={size} animate={controls} custom={6} initial={{ x: 120 }} />
      <StyledStagger color={'#0a0b0f'} size={size} animate={controls} custom={4} initial={{ x: 120 }} />
      <StyledStagger color={'#0a0b0f'} size={size} animate={controls} custom={2} initial={{ x: 120 }} />
      <StyledStagger color={'#0a0b0f'} size={size} animate={controls} custom={0} initial={{ x: 120 }} />
    </>
  )
}
