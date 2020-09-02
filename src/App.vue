<template>
  <div>
    <AuthLayout v-if="$route.path.split('/')[0] === 'auth'">
      <router-view></router-view>
    </AuthLayout>
    <DefaultLayout v-else>
      <router-view></router-view>
    </DefaultLayout>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import AuthLayout from '@/components/layouts/authLayout/AuthLayout';
  import DefaultLayout from '@/components/layouts/defaultLayout/DefaultLayout';

  export default {
    components: {
      AuthLayout,
      DefaultLayout,
    },
    name: 'PomodoroApp',
    computed: {
      ...mapState({
        isTokenValid: (state) => state.auth.isTokenValid,
      }),
    },
    mounted() {
      if (!this.isTokenValid) {
        this.$router.push('/auth/sign-in/').catch(console.log);
      }
    },
  };
</script>
