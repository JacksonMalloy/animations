import React, { useState } from 'react'
import { useSpeechRecognition } from './useSpeechRecognition'
import styled from 'styled-components'
import { BsMicFill } from 'react-icons/bs'
import Waveform from '../../sound.gif'

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

export const SpeechRecognition = ({ setTranscript, handleAnimation }) => {
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
    toggle()
    handleAnimation()
  }

  const toggle = listening
    ? stop
    : () => {
        setBlocked(false)
        listen('en-US')
      }

  return (
    <>
      {!supported && <p>Oh no, it looks like your browser doesn’t support Speech Recognition.</p>}
      {supported && (
        <>
          <StyledButton disabled={blocked} type="button" onClick={handleClick}>
            {listening ? <img src={Waveform} alt="loading..." className="invert" /> : <BsMicFill />}
          </StyledButton>
          {blocked && <p style={{ color: 'red' }}>The microphone is blocked for this site in your browser.</p>}
        </>
      )}
    </>
  )
}
