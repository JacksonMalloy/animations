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
  overflow-x: hidden;
  overflow-y: scroll;
`

const IndexPage = () => {
  const [animation, setAnimation] = useState(null)
  const [transcript, setTranscript] = useState('')

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

  return (
    <Layout>
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
      />
    </Layout>
  )
}

export default IndexPage
