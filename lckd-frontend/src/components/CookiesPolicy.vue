<template>
  <article id="cookies-details">
    <section class="wrapper">
      <header class="cookies-policy">
        <h3>LCKD COOKIE POLICY</h3>
        <p>
          This Cookie policy provides important information about how we process
          user and usage data related to site and its functionality
        </p>
      </header>
      <article class="data-type">
        <!-- cookies btn -->
        <header class="btn-cookies">
          <h3>
            <img
              class="arrow-right"
              src="../assets/chevron-forward.svg"
              alt=""
            />
            Data do we use
          </h3>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </header>
        <ul class="data-list">
          <li class="li">username</li>
          <li class="li">password</li>
          <li class="li">Favorite website</li>
          <li class="li">password of the related website</li>
          <li class="li">username of the related website</li>
        </ul>
      </article>
      <article class="data-usage">
        <!-- cookies btn -->
        <header class="btn-cookies">
          <h3>
            <img
              class="arrow-right"
              src="../assets/chevron-forward.svg"
              alt=""
            />Store and accessed information on a device
          </h3>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </header>

        <ul class="data-list">
          <li>
            Cookies, device identifiers, or other information can be stored or
            accessed on your device for the purposes presented to you.
          </li>
          <li>
            We keep all preferred user information on a database that can only
            be accessed with the correct ID and token. The necessary information
            is stored in a database to service you as a customer in the best
            possible way.
          </li>
        </ul>
      </article>
      <article class="data-access">
        <!-- cookies btn -->
        <header class="btn-cookies">
          <h3>
            <img
              class="arrow-right"
              src="../assets/chevron-forward.svg"
              alt=""
            />How can I access my data ?
          </h3>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </header>
        <p class="data-list">
          Go to your profile page and click on <b>“GDPR”</b> at the bottom left
          or Sign-in on www.LCKD.com/GDPR to your account. Where you’ll be able
          to:
        </p>
        <ul class="data-list">
          <li>Request information we have on you.</li>
          <li>Request to correct information we have on you.</li>
          <li>Request to transfer your data to another service provider.</li>
          <li>Request to delete all related data on you</li>
        </ul>
      </article>
      <button @click="setPolicy" class="btn-accept">accept</button>
    </section>
  </article>
</template>

<script>
export default {
  name: "CookiePolicy",

  methods: {
    setPolicy() {
      this.$store.dispatch("getPolicy");
    },
  },
};
</script>

<style></style>
