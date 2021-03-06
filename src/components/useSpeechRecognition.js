// https://github.com/MikeyParton/react-speech-kit
import { useRef, useEffect, useState } from 'react'

if (typeof window !== `undefined`) {
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
}

export const useSpeechRecognition = (props = {}, setIsSupported) => {
  const { onEnd = () => {}, onResult = () => {}, onError = () => {} } = props
  const recognition = useRef(null)
  const [listening, setListening] = useState(false)
  const supported = typeof window !== `undefined` ? !!window.SpeechRecognition : null

  const processResult = (event) => {
    let transcript = Array.from(event.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join('')

    onResult(transcript)
  }

  const handleError = (event) => {
    if (event.error === 'not-allowed') {
      recognition.current.onend = () => {}
      setListening(false)
    }
    onError(event)
  }

  const listen = (args = {}) => {
    if (listening) return
    const { lang = 'en-US', interimResults = true, continuous = false, maxAlternatives = 1, grammars } = args
    setListening(true)
    recognition.current.lang = lang
    recognition.current.interimResults = interimResults
    recognition.current.onresult = processResult
    recognition.current.onerror = handleError
    recognition.current.continuous = continuous
    recognition.current.maxAlternatives = maxAlternatives
    if (grammars) {
      recognition.current.grammars = grammars
    }
    // SpeechRecognition stops automatically after inactivity
    // We want it to keep going until we tell it to stop
    recognition.current.onend = () => recognition.current.start()
    recognition.current.start()
  }

  const stop = () => {
    if (!listening) return
    recognition.current.onresult = () => {}
    recognition.current.onend = () => {}
    recognition.current.onerror = () => {}
    setListening(false)
    recognition.current.stop()
    onEnd()
  }

  useEffect(() => {
    if (!supported) {
      setIsSupported(false)
      return
    }
    recognition.current = new window.SpeechRecognition()
  }, [])

  return {
    listen,
    listening,
    stop,
    supported,
  }
}
