<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        Nuxt SSR - Firebase
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi consectetur corporis ea harum incidunt mollitia neque quisquam tenetur! Aliquid aut cum dicta esse excepturi nihil quia recusandae, rem sit.</p>
      <p>Commodi consequatur ipsa, ipsum minima molestias qui repudiandae sapiente ut? Architecto aspernatur corporis cumque mollitia sint unde velit vero voluptatum. Accusantium atque et fugiat laboriosam numquam officia quia rem, tenetur?</p>

      <div class="links">
        <nuxt-link
          class="button--green"
          to="/">index</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
