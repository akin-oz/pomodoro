<template>
  <q-page class="window-width window-height row justify-center items-center">
    <q-card class="row justify-center">
      <q-card-section>
        <q-circular-progress
          reverse
          show-value
          class="text-white q-ma-md"
          :value="progress"
          size="150px"
          :thickness="0.1"
          color="green-5"
          center-color="red-5"
          track-color="transparent"
        >
          {{ minutes }} : {{ seconds }}
        </q-circular-progress>
        <q-media-player
          v-if="timerEnded"
          class="hidden"
          type="audio"
          autoplay
          :sources="audio.sources"
        >
        </q-media-player>
      </q-card-section>
      <q-card-actions align="center">
        <q-btn round @click="startTimer" icon="play_arrow"></q-btn>
        <q-btn round @click="pauseTimer" icon="pause"></q-btn>
        <q-btn round @click="stopTimer" icon="stop"></q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>
<script>
  export default {
    data() {
      const totalSeconds = 1500;
      return {
        totalSeconds,
        secondsRemaining: totalSeconds,
        intervalId: undefined,
        timerStarted: false,
        timerStopped: false,
        timerPaused: false,
        timerEnded: false,
        audio: {
          sources: [
            {
              src: './sound.wav',
              type: 'audio/mp3',
            },
          ],
        },
      };
    },
    computed: {
      seconds() {
        const { secondsRemaining } = this;
        const secondInt = secondsRemaining % 60;
        return secondInt > 9 ? secondInt.toString() : `0${secondInt}`;
      },
      minutes() {
        const { secondsRemaining } = this;
        const minuteInt = parseInt(secondsRemaining / 60, 10);
        return minuteInt > 9 ? minuteInt.toString() : `0${minuteInt}`;
      },
      progress() {
        const { totalSeconds, secondsRemaining } = this;
        return (secondsRemaining / totalSeconds) * 100;
      },
    },
    methods: {
      startTimer() {
        if (!this.timerStarted) {
          this.timerStarted = true;
          this.timerStopped = false;
          this.timerPaused = false;
          this.timerEnded = false;
          this.intervalId = setInterval(() => {
            this.secondsRemaining--;
          }, 1000);
        }
      },
      pauseTimer() {
        if (this.timerStarted) {
          const { intervalId } = this;
          clearInterval(intervalId);
          this.timerPaused = true;
        }
      },
      stopTimer() {
        if (!this.timerStopped) {
          const { intervalId, totalSeconds } = this;
          clearInterval(intervalId);
          this.secondsRemaining = totalSeconds;
          this.timerStopped = true;
          this.timerStarted = false;
          this.timerPaused = false;
        }
      },
    },
    watch: {
      secondsRemaining(newValue) {
        if (newValue === 0) {
          this.timerEnded = true;
          this.stopTimer();
        }
      },
    },
  };
</script>
