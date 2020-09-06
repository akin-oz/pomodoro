<template>
  <q-item>
    <q-item-section side>
      <q-icon name="alarm" color="blue"></q-icon>
      <q-tooltip>Duration for work</q-tooltip>
    </q-item-section>
    <q-item-section>
      <q-slider
        label
        label-always
        v-model="sliderValue"
        :min="15"
        :max="60"
        @change="handleWorkingTimeChange"
      ></q-slider>
    </q-item-section>
  </q-item>
</template>
<script>
  import { mapState } from 'vuex';

  export default {
    data() {
      return {
        sliderValue: undefined,
      };
    },
    computed: {
      ...mapState({
        totalSeconds: (state) => state.timer.totalSeconds,
      }),
    },
    methods: {
      handleWorkingTimeChange() {
        const { sliderValue } = this;
        const totalSeconds = sliderValue * 60;
        this.$store.commit('timer/setTotalSeconds', totalSeconds);
      },
    },
    watch: {
      totalSeconds: {
        immediate: true,
        handler(newValue) {
          this.sliderValue = newValue / 60;
        },
      },
    },
  };
</script>
