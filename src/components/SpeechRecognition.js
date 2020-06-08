import React, { useState, useEffect } from 'react'
import { useSpeechRecognition } from './useSpeechRecognition'
import styled from 'styled-components'
import { BsMicFill } from 'react-icons/bs'
import { IoIosSave } from 'react-icons/io'
import { FaCheck } from 'react-icons/fa'
import { navigate } from 'gatsby'
import { motion } from 'framer-motion'
import { gql, useMutation } from '@apollo/client'

const ADD_STATEMENT = gql`
  mutation AddStatement($data: StatementInput!) {
    createStatement(data: $data) {
      utterance
    }
  }
`

const SAVE_STATEMENT = gql`
  mutation SaveStatement($saved: String!) {
    updateStatement(saved: $saved) {
      saved
    }
  }
`

const StyledButton = styled(motion.button)`
  position: fixed;
  bottom: 2.2rem;
  left: 2.2rem;
  border-radius: 8rem;
  padding: 1.8rem 2rem;
  background-color: ${({ phase }) => phase};
  transition: 1s linear;
  color: #ffffff;
  font-family: 'Gotham Black';
  font-size: 1.5rem;
  border: none;
  letter-spacing: 0.2rem;
  min-width: 82.5px;
  min-height: 82.5px;

  .text {
    font-size: 0.8rem;
  }

  .invert {
    filter: invert(100%);
    width: 1.5rem;
  }

  @media (min-width: 430px) {
    position: absolute;
    bottom: null;
  }
`

export const SpeechRecognition = ({ setTranscript, handleAnimation, transcript, animation, setIsSupported }) => {
  const [blocked, setBlocked] = useState(false)
  const [routePush, setRoutePush] = useState(false)

  const [addStatement] = useMutation(ADD_STATEMENT)
  const [saveStatement] = useMutation(SAVE_STATEMENT)

  useEffect(() => {
    if (routePush) {
      console.log('pushing to next page')
      navigate('/archive')
    }
  }, [routePush])

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

  const { listen, listening, stop, supported } = useSpeechRecognition({ onResult, onEnd, onError }, setIsSupported)

  const handleClick = () => {
    if (!animation) {
      toggle()
      handleAnimation()

      // if (!supported) {
      //   navigate('/archive')
      //   setIsSupported(false)
      // }
    }

    if (animation === 'initialized') {
      if (transcript) {
        addStatement({ variables: { data: { utterance: transcript } } })
        toggle()
        handleAnimation()
      }
    }

    if (animation === 'phase one') {
      handleAnimation()
      // Add state here
      saveStatement({ variables: { data: { saved: true } } })
    }

    if (animation === 'phase two') {
      handleAnimation()
      setTimeout(() => {
        setRoutePush(true)
      }, 3000)
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
          <StyledButton disabled={blocked} type="button" onClick={handleClick} phase={'#0a0b0f'}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              <BsMicFill />
            </motion.div>
          </StyledButton>
        )
      case 'initialized':
        return (
          <StyledButton disabled={blocked} type="button" onClick={handleClick} phase={'#0174f8'}>
            <motion.div
              animate={{ opacity: 0.5 }}
              transition={{
                yoyo: Infinity,
                duration: 1.3,
                ease: 'easeInOut',
              }}
            >
              <BsMicFill />
            </motion.div>
          </StyledButton>
        )
      case 'phase one':
        return (
          <StyledButton disabled={blocked} type="button" onClick={handleClick} phase={'#e24d32'}>
            <motion.div
              animate={{ opacity: 0.5 }}
              transition={{
                yoyo: Infinity,
                duration: 1.3,
                ease: 'easeInOut',
              }}
            >
              <IoIosSave />
            </motion.div>
          </StyledButton>
        )
      case 'phase two':
        return (
          <StyledButton disabled={blocked} type="button" onClick={handleClick} phase={'#0a0b0f'}>
            <motion.div
              animate={{ opacity: 0.5 }}
              transition={{
                yoyo: Infinity,
                duration: 1.3,
                ease: 'easeInOut',
              }}
            >
              <FaCheck />
            </motion.div>
          </StyledButton>
        )
      case 'leave':
        return (
          <StyledButton
            disabled={blocked}
            type="button"
            onClick={handleClick}
            initial={{ scale: 5 }}
            animate={{ scale: 100 }}
            transition={{ duration: 0.5, delay: 1 }}
            phase={'#0a0b0f'}
          >
            <motion.div></motion.div>
          </StyledButton>
        )

      default:
        break
    }
  }

  return getButtonComponent()
}
