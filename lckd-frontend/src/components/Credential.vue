<template>
  <section id="container-credential">
    <div class="credential">
      <span class="website">{{ website }}</span>
      <img v-if="isVisible" class="eye" src="../assets/eye.svg" alt="" />
      <img v-else class="eye" src="../assets/eye-off.svg" alt="" />
      
    </div>
  </section>
</template>

<script>
export default {
  name: "Credential",
  data() {
    return {
      website: "google.com",
      isVisible: false,
    };
  },
};
</script>

<style></style>
