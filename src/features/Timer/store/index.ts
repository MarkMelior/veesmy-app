import { create } from 'zustand';

interface ITimerStore {
  audio: HTMLAudioElement | null
  initializeAudio: () => void
  isPaused: boolean
  isPlaying: boolean
  isRunning: boolean
  pauseTimer: () => void
  playSound: () => void
  resetTimer: () => void
  resumeTimer: () => void
  startTimer: () => void
  stopSound: () => void
  time: number
}

export const useTimer = create<ITimerStore>((set, get) => {
  let timer: NodeJS.Timeout | null = null;

  return {
    audio: null,
    initializeAudio: () => {
      const sound = new Audio('/sounds/alarm.mp3');

      sound.loop = true;
      set(() => ({ audio: sound }));
    },
    isPaused: false,
    isPlaying: false,
    isRunning: false,

    pauseTimer: () => {
      set(() => ({ isPaused: true }));
    },

    playSound: () => {
      const { audio, isPlaying } = get();

      if (audio && !isPlaying) {
        audio.play();
        set(() => ({ isPlaying: true }));

        if (navigator.vibrate) {
          navigator.vibrate([500, 200, 500]);
        }
      }
    },

    resetTimer: () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
      set(() => ({ isPaused: false, isRunning: false, time: 240 }));
    },

    resumeTimer: () => {
      set(() => ({ isPaused: false }));
    },

    startTimer: () => {
      if (timer) {
        clearInterval(timer);
      }

      set(() => ({ isPaused: false, isRunning: true }));

      timer = setInterval(() => {
        const { isPaused, playSound, time } = get();

        if (!isPaused) {
          if (time > 0) {
            set((state) => ({ time: state.time - 1 }));
          }
          else {
            clearInterval(timer!);
            timer = null;
            playSound();
          }
        }
      }, 1000);
    },

    stopSound: () => {
      const { audio } = get();

      if (audio) {
        audio.pause();
        audio.currentTime = 0;
        set(() => ({ isPlaying: false }));
        get().resetTimer();

        if (navigator.vibrate) {
          navigator.vibrate(0);
        }
      }
    },

    time: 240,
  };
});
