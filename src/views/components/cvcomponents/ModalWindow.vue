<template>
  <div class="shadow" @click.stop.self="toggleModal" v-if="isModalShow" >
    <div class="certificate" @mouseleave.stop.self="toggleModal" >
      <img :src="link" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'ModalWindow',
  props: {
    link: {
      type: String,
      default: 'certificates/sololern.png'
    }
  },
  methods: {
    ...mapMutations(['toggleModal'])
  },
  computed: {
    ...mapState({
      isModalShow: function (store) {
        return store.isModal
      }
    })
  }
}
</script>

<style lang="scss">
  .shadow {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 1000;
    background-color: $shadow;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .certificate{
      width: 20em;
      height: auto;
      img{
        width:100%;
        height:100%;
        object-fit: cover;
        overflow: hidden;
      }
    }

  }

</style>
