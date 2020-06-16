import React, { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import styled from 'styled-components'
import Image from '../components/image'
import Layout from '../components/layout'
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
      <InspiredBy />
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

const StyledInspired = styled(motion.div)`
  font-family: 'Gotham Light';
  font-weight: 900;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #4862d3;
  font-size: 0.8rem;
  z-index: 10;

  a {
    text-decoration: none;
    color: black;
    cursor: pointer;
    width: 100%;
    height: 100%;
    color: #ffffff;
    z-index: 10;
    position: relative;
    padding-left: 2.5rem;

    .gatsby-image-wrapper {
      position: absolute !important;
      top: -10px;
      left: 0;
      display: inline-block;
      width: 30px;
      height: 30px;
    }
  }

  span {
    cursor: pointer;
    color: #ffffff;
    padding-left: 1rem;
    font-size: 1.2rem;
  }
`

const InspiredBy = () => {
  const [isClosed, setIsClosed] = useState(false)

  const handleClick = () => {
    setIsClosed(true)
  }

  return (
    <>
      {isClosed ? null : (
        <StyledInspired initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.61, delay: 1 }}>
          <a href="https://www.turtleinc.com/" target="_blank" rel="noreferrer">
            Design Inspired By <Image /> Turtle Design Inc.
          </a>
          <span onClick={handleClick}>x</span>
        </StyledInspired>
      )}
    </>
  )
}
