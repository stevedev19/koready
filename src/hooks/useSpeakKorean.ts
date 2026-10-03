"use client";

import { useCallback, useSyncExternalStore } from "react";

// Reads Korean aloud with the browser's built-in speech (SpeechSynthesis, ko-KR).
// Prefers a voice that runs on the device; only the public slang word is spoken.
const supported = () => typeof window !== "undefined" && "speechSynthesis" in window;

function koreanVoice(): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith("ko"));
  return voices.find((v) => v.localService) ?? voices[0];
}

/** Returns null when the browser has no speech at all (hide the button), else speak(text) → false if no Korean voice. */
export function useSpeakKorean(): ((text: string) => boolean) | null {
  const canSpeak = useSyncExternalStore(
    () => () => {},
    supported,
    () => false,
  );
  const speak = useCallback((text: string) => {
    const synth = window.speechSynthesis;
    const voice = koreanVoice();
    // Some browsers list voices late or not at all; iOS still speaks ko-KR by lang alone.
    if (!voice && synth.getVoices().length > 0) return false;
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ko-KR";
    if (voice) utterance.voice = voice;
    utterance.rate = 0.9;
    synth.speak(utterance);
    return true;
  }, []);
  return canSpeak ? speak : null;
}
