<template>
  <v-app>
    <div>
      <teste-front-end />
    </div>
  </v-app>
</template>

<script>
import TesteFrontEnd from "./components/TesteFrontEnd.vue";

export default {
  name: "App",
  components: {
    TesteFrontEnd,
  },

  data: () => ({}),
};
</script>
