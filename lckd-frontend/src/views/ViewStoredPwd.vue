<template>
  <section id="views-storedpwd">
    <article class="logo">
      <img src="@/assets/Logo-small.png" alt="" />
      <h1>lckd</h1>
    </article>
    <article class="stored-pwd-container">
      <label class="lb-stored-pwd" for="plainsight">stored password</label>
      <article class="stored-pwd">
        <Credential />
        <Credential />
        <Credential />
        <Credential />
        <Credential />
      </article>
      <article class="plain-sight">
        <label class="lb-plainsight" for="plainsight">plainsight</label>
        <p type="text" name="plainsight" class="output-plainsight">
          <span class="password">dfasfdasfg89x.,+</span>
          <img src="../assets/copy-icon.svg" class="copy" alt="" />
        </p>
      </article>
    </article>
    <button @click="newlckd" class="btn-newlckd">new lckd</button>
  </section>
</template>

<script>
import Credential from "@/components/Credential.vue";
export default {
  name: "ViewStoredPwd",
  components: {
    Credential,
  },
  methods: {
    newlckd() {
      this.$router.push("/newlckd");
    },
  },
};
</script>

<style></style>
