<template>
  <section id="login">
    <CookiesPolicy v-if="getPolicy"   />
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

    <article
      class="cookie-banner"
      v-bind:class="{
        'show-banner': this.cookies,
        'hide-banner': !this.cookies,
      }"
    >
      <article class="cookies-policy">
        <h3>We use coockies to give you a better experience</h3>
        <p>
          By clicking <span class="accept-all">"ACCEPT ALL"</span> , you accept
          the use of our own and third party cookies for statistical, functional
          and marketing purposes. You can change your consent any time and read
          more in our cookie and privacy policy Only the necessary cookies
        </p>
      </article>
      <button class="btn-accept" @click="hideCookies">Accept all</button>
      <button class="btn-details" @click="showCookiesPolicy">
        Show details
      </button>
      <article class="cookies-details"></article>
    </article>
  </section>
</template>

<script>
import CookiesPolicy from "@/components/CookiesPolicy.vue";
export default {
  name: "Login",
  components: {
    CookiesPolicy,
  },
  data() {
    return {
      cookies: false,
    
    };
  },
  mounted() {
    setTimeout(() => {
      this.showCookies();
    }, 900);
  },
  methods: {
    letMeIn() {
      this.$router.push("/viewstoredpwd");
    },
    createUser() {
      this.$router.push("/createuser");
    },
    showCookies() {
      this.cookies = !this.cookies;
    },
    hideCookies() {
      this.cookies = !this.cookies;
    },
    showCookiesPolicy() {
      this.$store.dispatch('getPolicy')
      this.cookies = !this.cookies;
    },
  },

  computed:{
   getPolicy(){
     return this.$store.state.cookiesPolicy
   }
  }
};
</script>

<style></style>
