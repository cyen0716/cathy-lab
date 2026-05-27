"use client"

let voicesLoaded = false

function getKoreanVoice(): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices()
  const koreanVoices = voices.filter(
    (voice) => voice.lang.startsWith("ko") || voice.lang.includes("KR")
  )

  if (koreanVoices.length === 0) return null

  // Prefer natural female Korean voices
  const preferredKeywords = ["female", "yuna", "sora", "heami", "google", "natural"]
  
  // First try to find a female or natural voice
  for (const keyword of preferredKeywords) {
    const preferred = koreanVoices.find(
      (v) => v.name.toLowerCase().includes(keyword)
    )
    if (preferred) return preferred
  }

  // Fallback to first available Korean voice
  return koreanVoices[0]
}

export function speakKorean(text: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    console.warn("Speech synthesis not supported")
    return
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel()

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = "ko-KR"
    utterance.rate = 0.85 // Slightly slower for learning
    utterance.pitch = 1

    const koreanVoice = getKoreanVoice()
    if (koreanVoice) {
      utterance.voice = koreanVoice
    }

    window.speechSynthesis.speak(utterance)
  }

  // Voices may not be loaded yet on first call
  if (!voicesLoaded && window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.onvoiceschanged = () => {
      voicesLoaded = true
      speak()
    }
  } else {
    speak()
  }
}
