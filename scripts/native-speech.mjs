import { Capacitor } from "@capacitor/core";
import { SpeechRecognition } from "@capacitor-community/speech-recognition";

if (Capacitor.isNativePlatform()) {
  window.NativeSpeechRecognition = SpeechRecognition;
}