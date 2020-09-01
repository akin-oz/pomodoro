<template>
  <div class="row full-height justify-center items-center">
    <q-card flat bordered>
      <q-card-section>
        <q-input v-model="form.email" filled type="email" hint="Email" />
        <q-input v-model="form.password" filled type="password" hint="Password" />
      </q-card-section>
      <q-cart-actions class="row justify-end">
        <q-btn color="primary" label="Submit" class="q-ma-md" />
      </q-cart-actions>
    </q-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: 'test@te.st',
        password: 'test',
      }
    }
  },
}
</script>