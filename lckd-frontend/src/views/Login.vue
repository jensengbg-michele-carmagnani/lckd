<template>
  <section id="login">
    <article class="sign-up">
      <img @click="createUser" src="@/assets/SingIn.png" alt="Sing-up" />
    </article>

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

    <button @click="letMeIn" class="btn-letmein">LET ME IN</button>

    <article class="cookie-banner">
      <article class="cookies">
        <h3>We use coockies to give you a better experience</h3>
        <p>
          By clicking "OK", you accept the use of our own and third party
          cookies for statistical, functional and marketing purposes. You can
          change your consent any time and read more in our cookie and privacy
          policy Only the necessary cookies
        </p>
        </article>
        <button>Show details</button>
      <article class="cookies-details">

      </article>
      
    </article>
  </section>
</template>

<script>
export default {
  name: "Login",
  components: {},
  methods: {
    letMeIn() {
      this.$router.push("/viewstoredpwd");
    },
    createUser() {
      this.$router.push("/createuser");
    },
  },
};
</script>

<style></style>
