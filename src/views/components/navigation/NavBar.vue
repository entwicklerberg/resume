<template>
  <div class="sidebar">
    <div class="sidebar-backdrop" @click="toggleNav" v-if="isPanelOpen"></div>
    <transition name="slide">
      <div v-if="isPanelOpen" >
       <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['toggleNav'])
  },
  computed: mapState({
    isPanelOpen: function (store) {
      return store.isNavOpen
    }
  })
}
</script>
<style lang="scss">
  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.2s ease;
  }

  .slide-enter,
  .slide-leave-to {
    transform: translateX(-100%);
    transition: all 150ms ease-in 0s
  }

  .sidebar-backdrop {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
  }

</style>
