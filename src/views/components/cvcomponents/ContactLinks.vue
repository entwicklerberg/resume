<template>
  <div class="links">
    <a v-for="(my, name, index) in Links" :key="index" :href="my.l" target="_blank"><img :key="index" :src="my.i" :alt="my.n"/></a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ContactLinks',
  data () {
    return {}
  },
  methods: {},
  computed: {
    ...mapGetters(['Links'])
  },
  beforeCreate () {
    this.$store.dispatch('Links')
  }
}
</script>

<style lang="scss">
.links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 0 1.28em 0;
  padding: 0;

  img {
    width: auto;
    height: 0.75em;
    margin-right: 1em;
    &:last-of-type{
      margin-right: 0;
      margin-left: 1em;
    }
    @include mQ($tablet) {
      height: 0.48em;
    }
  }
}
</style>
