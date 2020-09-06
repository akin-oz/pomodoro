<template>
  <q-layout view="hHh LpR fFf">
    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title @click="$router.push('/')">
          Pomodoro App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above overlay v-model="left" side="left">
      <q-list bordered padding class="rounded-borders text-primary full-height">
        <q-item
          clickable
          @click="() => (isTimerSettingsVisible = !isTimerSettingsVisible)"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>

          <q-item-section>Settings</q-item-section>
        </q-item>
        <TimerSettings v-if="isTimerSettingsVisible"></TimerSettings>
      </q-list>
    </q-drawer>

    <q-page-container>
      <slot></slot>
    </q-page-container>

    <q-footer class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          Pomodoro App
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
  import TimerSettings from '@/components/shared/settings/timerSettings/TimerSettings';

  export default {
    components: {
      TimerSettings,
    },
    data() {
      return {
        left: false,
        isTimerSettingsVisible: false,
      };
    },
  };
</script>
