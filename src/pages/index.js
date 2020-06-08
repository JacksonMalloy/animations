import React, { useState } from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import { Shapes } from '../components/shapes'
import { Content } from '../components/content'
import { SpeechRecognition } from '../components/SpeechRecognition'
import { Transcription } from '../components/transcription'

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 3fr 1fr;
  height: 100%;
  overflow: hidden;
  position: relative;
`

const StyledSupported = styled.section`
  font-family: 'Gotham Light';
  font-weight: 900;
  background-color: red;
  padding: 1rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  color: white;
`

const IndexPage = () => {
  const [animation, setAnimation] = useState(null)
  const [transcript, setTranscript] = useState('')
  const [isSupported, setIsSupported] = useState(true)

  const handleAnimation = () => {
    if (!animation) {
      setAnimation('initialized')
    }

    if (animation === 'initialized') {
      setAnimation('phase one')
    }

    if (animation === 'phase one') {
      setAnimation('phase two')
    }

    if (animation === 'phase two') {
      setAnimation('leave')
    }

    if (animation === 'leave') {
      setAnimation('initialized')
    }
  }

  console.log(animation)

  return (
    <Layout>
      {!isSupported ? (
        <StyledSupported>
          The Speech Recognition API is currently only supported by Chrome and will not work within this browser. Sorry
          for the inconvenience!
        </StyledSupported>
      ) : null}
      <StyledSection>
        <Content animation={animation} />
        <Shapes animation={animation} />
      </StyledSection>
      <Transcription transcript={transcript} animation={animation} />
      <SpeechRecognition
        setTranscript={setTranscript}
        handleAnimation={handleAnimation}
        transcript={transcript}
        animation={animation}
        setIsSupported={setIsSupported}
      />
    </Layout>
  )
}

export default IndexPage
