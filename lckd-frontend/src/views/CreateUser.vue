<template>
    <section id="login">
   
    <article class="logo">
      <img src="@/assets/Logo.png" alt="" />
      <h2>KEEP YOUR</h2>
      <h2>PASSWORD SAFE</h2>
    </article>

    <article class="input-field">
      <label for="username" class="lb-username">username</label>
      <input type="text" name="username" class="input-username" />
      <label for="password" class="lb-password">password</label>
      <input type="password" name="password" class="input-password" />
    </article>

    <button @click="letMeIn" class="btn-letmein">Create User</button>
  </section>
</template>

<script>
export default {
  name:"CreateUser"

}
</script>

<style>

</style>