<template>
  <q-layout view="hHh lpR fFf">
    <Header></Header>

    <q-page-container class="window-height">
      <slot></slot>
    </q-page-container>

    <Footer></Footer>
  </q-layout>
</template>

<script>
  import Header from '@/components/layouts/authLayout/header/Header';
  import Footer from '@/components/layouts/authLayout/footer/Footer';

  export default {
    components: {
      Header,
      Footer,
    },
  };
</script>
