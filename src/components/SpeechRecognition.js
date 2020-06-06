import React, { useState, useEffect } from 'react'
import { useSpeechRecognition } from './useSpeechRecognition'
import styled from 'styled-components'
import { BsMicFill } from 'react-icons/bs'
import Waveform from '../../sound.gif'

import { motion, useAnimation } from 'framer-motion'

const StyledButton = styled.button`
  position: fixed;
  bottom: 2.2rem;
  left: 2.2rem;
  border-radius: 8rem;
  padding: 1.8rem 2rem;
  background-color: #0a0b0f;
  color: #ffffff;
  font-family: 'Gotham Black';
  font-size: 1.5rem;
  border: none;
  letter-spacing: 0.2rem;

  .invert {
    filter: invert(100%);
    width: 1.5rem;
  }

  @media (min-width: 430px) {
    position: absolute;
    bottom: null;
  }
`

export const SpeechRecognition = ({ setTranscript, handleAnimation, transcript, animation }) => {
  const [blocked, setBlocked] = useState(false)

  const onEnd = () => {
    // You could do something here after listening has finished
  }

  const onResult = (result) => {
    setTranscript(result)
  }

  const onError = (event) => {
    if (event.error === 'not-allowed') {
      setBlocked(true)
    }
  }

  const { listen, listening, stop, supported } = useSpeechRecognition({ onResult, onEnd, onError })

  const handleClick = () => {
    if (!animation) {
      toggle()
      handleAnimation()
    }

    if (animation === 'initialized') {
      toggle()
      handleAnimation()
    }

    if (animation === 'phase one') {
      handleAnimation()
    }

    if (animation === 'phase two') {
      handleAnimation()
    }

    if (animation === 'leave') {
      handleAnimation()
    }
  }

  const toggle = listening
    ? stop
    : () => {
        setBlocked(false)
        listen('en-US')
      }

  const getButtonComponent = () => {
    switch (animation) {
      case null:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <BsMicFill />
          </motion.div>
        )
      case 'initialized':
        return (
          <motion.img
            src={Waveform}
            alt="loading..."
            className="invert"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          />
        )
      case 'phase one':
        return <div>SAVE</div>
      case 'phase two':
        return <div>P2</div>
      case 'leave':
        return <div>Leaving...</div>

      default:
        break
    }
  }

  return (
    <>
      <StyledButton disabled={blocked} type="button" onClick={handleClick}>
        {getButtonComponent()}
      </StyledButton>
      {blocked && <p style={{ color: 'red' }}>The microphone is blocked for this site in your browser.</p>}
    </>
  )
}
