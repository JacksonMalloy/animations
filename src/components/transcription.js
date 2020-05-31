import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const StyledTranscript = styled(motion.h2)`
  position: absolute;
  top: 50%;
  left: 10%;
  font-family: 'Gotham Black';
  font-size: 1.2rem;
`

export const Transcription = ({ transcript }) => {
  console.log(`THE TRANSCRIPT: `, transcript)

  return (
    <StyledTranscript initial={{ y: 0 }}>
      <>{transcript}</>
    </StyledTranscript>
  )
}
