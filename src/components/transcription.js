import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'

const StyledTranscript = styled(motion.div)`
  position: absolute;
  top: 35%;
  left: 10%;
  font-family: 'Gotham Black';
  font-size: 1.2rem;
  max-width: 13rem;
  display: flex;
  flex-wrap: wrap;
`

const StyledWord = styled(motion.p)`
  margin: 0;
  padding: 0.2rem 0.4rem 0.2rem 0rem;
`

export const Transcription = ({ transcript, animation }) => {
  const controls = useAnimation()

  //   Horizontal IN
  useEffect(() => {
    if (animation === 'phase one') {
      controls.start((i) => ({
        y: -100,
        transition: {
          delay: 0.7 + i * 0.1,
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
        x: -250,
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
  }, [controls, animation])

  const renderedTranscript = () => {
    const word = transcript.split(` `)

    const html = word.map((word, i) => {
      console.log(word)
      console.log(i)

      if (i === 0) {
        function capitalizeFirstLetter(string) {
          return string.charAt(0).toUpperCase() + string.slice(1)
        }

        return (
          <StyledWord
            animate={controls}
            custom={i}
            key={i}
            initial={{ opacity: 2 / i, y: 0 }}
            whileHover={{ scale: 1.2 }}
          >
            {capitalizeFirstLetter(word)}
          </StyledWord>
        )
      } else {
        return (
          <StyledWord
            animate={controls}
            custom={i}
            key={i}
            initial={{ opacity: 2 / i, y: 0 }}
            whileHover={{ scale: 1.2 }}
          >
            {word}
          </StyledWord>
        )
      }
    })

    return html
  }

  const actual = renderedTranscript()

  return <StyledTranscript>{actual}</StyledTranscript>
}
