<template>
  <div>
    <AuthLayout v-if="!isTokenValid">
      <router-view></router-view>
    </AuthLayout>
  </div>
</template>

<script>
import AuthLayout from '@/components/layouts/authLayout/AuthLayout';

export default {
  components: {
    AuthLayout,
  },
  name: "PomodoroApp",
  data() {
    return {
      isTokenValid: false
    }
  },
  mounted () {
    if(!this.isTokenValid){
      this.$router.push('/auth/sign-in/').catch(console.log);
    }
  },
};
</script>
