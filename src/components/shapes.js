import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'
import { Stagger } from './stagger'

// Generic sizes
const large = '4.2rem'
const small = '2.1rem'

const StyledSquare = styled(motion.div)`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  background-color: ${({ color }) => color};
  border-bottom-left-radius: ${({ radius }) => (radius === 'bl' ? '100%' : 0)};
  border-top-left-radius: ${({ radius }) => (radius === 'tl' ? '100%' : 0)};
  position: ${({ position }) => position};
  top: 50%;
  left: 50%;
  transform: ${({ transform }) => (transform ? 'translate(-50%, -50%)' : 'none')};
  z-index: 9;
`

const StyledSphere = styled(motion.div)`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  border-radius: 100%;
  background-color: ${({ color }) => color};
`

const StyledTriangleTopLeft = styled(motion.div)`
  width: 0;
  height: 0;
  border-top: ${({ size }) => size} solid ${({ color }) => color};
  border-right: ${({ size }) => size} solid transparent;
`

const StyledCombine = styled(motion.div)`
  position: relative;
  width: ${({ size }) => size};
  height: ${({ size }) => size};

  .center {
    height: 50px;
    position: absolute;
    z-index: 9;
    top: 12%;
    left: 50%;
    transform: ${({ transform }) => (transform ? 'translate(-50%, -50%)' : 'none')};
  }
`

const StyledTriangleTopRight = styled(motion.div)`
  width: 0;
  height: 0;
  border-top: ${({ size }) => size} solid ${({ color }) => color};
  border-left: ${({ size }) => size} solid transparent;
  position: ${({ position }) => position};
`

const StyledTriangleBottomRight = styled(motion.div)`
  width: 0;
  height: 0;
  border-bottom: ${({ size }) => size} solid ${({ color }) => color};
  border-left: ${({ size }) => size} solid transparent;
  position: absolute;
  bottom: 0;
  right: 0;
`

const StyledTriangleBottomLeft = styled(motion.div)`
  width: 0;
  height: 0;
  border-bottom: ${({ size }) => size} solid ${({ color }) => color};
  border-right: ${({ size }) => size} solid transparent;
  position: ${({ position }) => position};
`

const StyledShapes = styled(motion.div)`
  justify-self: end;
  padding-right: 1rem;
`

export const Shapes = ({ animation }) => {
  const controls = useAnimation()

  useEffect(() => {
    if (animation === 'initialized') {
      controls.start((i) => ({
        opacity: 1,
        y: -272,
        transition: { delay: i * 0.1, type: 'spring', mass: 0.8, damping: 300, velocity: 20 },
      }))
    }

    if (animation === 'phase one') {
      controls.start((i) => ({
        y: -338,
        transition: {
          delay: i * 0.1,
          type: 'spring',
          mass: 0.8,
          damping: 300,
          velocity: 20,
          staggerDirection: 1,
        },
      }))
    }

    if (animation === 'phase two') {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: (10 - i) * 0.1,
          type: 'spring',
          mass: 0.8,
          damping: 300,
          velocity: 20,
          staggerDirection: 1,
        },
      }))
    }

    if (animation === 'leave') {
      controls.start((i) => ({
        x: 65,
        transition: {
          delay: (10 - i) * 0.1,
          type: 'spring',
          mass: 0.8,
          damping: 300,
          velocity: 20,
          staggerDirection: 1,
        },
      }))
    }
  }, [animation, controls])

  // Horizontal IN
  useEffect(() => {
    controls.start((i) => ({
      x: -65,
      transition: { delay: i * 0.05, type: 'spring', mass: 0.8, damping: 300, velocity: 20 },
    }))
  }, [controls])

  return (
    <StyledShapes initial={{ x: 80, y: 20 }}>
      <StyledSquare radius={'tl'} size={large} color={'#0174f8'} custom={0} animate={controls} />
      <StyledTriangleTopRight color={'#ff83fc'} size={large} custom={1} animate={controls} />
      <StyledCombine custom={2} animate={controls}>
        <StyledSquare color={'#e24d32'} size={large} />
        <Stagger size={large} />
      </StyledCombine>
      <StyledSphere color={'#ff83fc'} custom={3} animate={controls} size={large} />
      {/* Clipping square */}
      <StyledCombine size={large}>
        <motion.div className="center" custom={4} animate={controls}>
          <StyledSquare
            color={'#fff'}
            size={small}
            position={'absolute'}
            transform="true"
            animate={{ rotate: 90, delay: 1 }}
            transition={{
              delay: 1,
              duration: 0.5,
              ease: 'easeInOut',
            }}
            initial={{ x: -15, y: -15 }}
          />
        </motion.div>

        <StyledTriangleBottomLeft color={'#0a0b0f'} size={large} position={'absolute'} custom={6} animate={controls} />
        <StyledTriangleTopRight color={'#e24d32'} size={large} position={'absolute'} custom={5} animate={controls} />
      </StyledCombine>
      {/* Triangle Split */}
      <StyledCombine size={large}>
        <StyledTriangleTopLeft color={'#0174f8'} custom={7} animate={controls} size={large} />
        <StyledTriangleBottomRight color={'#ff83fc'} custom={8} animate={controls} size={large} />
      </StyledCombine>
      <StyledSquare radius={'bl'} color={'#0a0b0f'} size={large} custom={9} animate={controls} />
    </StyledShapes>
  )
}
