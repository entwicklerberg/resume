<template>
  <section class="person">
    <div class="foto">
      <img src="../../../../public/img/foto/foto.png" />
    </div>
    <div class="cvname">
      <h3>Dmytro</h3>
      <h4>Bilokhonov</h4>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Person'
}
</script>

<style lang="scss">
  .person {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @include mQ($tablet) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .foto {
      margin: 1em 0;
      @include mQ($tablet) {
        margin: 0 2.56em 0 0;
      }

      img {
        display: block;
        height: 10em;
        width: 10em;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    .cvname {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 1em 0;
      @include mQ($tablet) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0;
      }

      h3,
      h4 {
        @include font-parameters;
        color: $black;
        font-size: 2.4em;
        line-height: 100%;
        letter-spacing: 0.02em;
      }
    }
  }
</style>
