<template>
  <address>
    <p>Kharkiv, Ukraine</p>
    <p><a href="tel:+38 (063) 368 08 18" rel="nofollow">+38 (063) 368-08-18</a></p>
    <p><a href="mailto:dmitriy.bilokhonov@gmail.com?Subject=Answer for my resume" target="_top">dmitriy.bilokhonov@gmail.com</a></p>
  </address>
</template>

<script>
export default {
  name: 'Adress'
}
</script>

<style lang="scss">
  address {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    font-style: normal;

    @include mQ($tablet) {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    p {
      font-weight: 300;
      font-size: 1em;
      line-height: 0.92em;
      letter-spacing: 0.01em;
      color: $black;
      margin: 0.5em;
      padding: 0;

      a[href] {
        color: $black;
        text-decoration: none;
      }
      @include mQ($tablet) {
        font-size: 0.68em;
      }
    }
  }
</style>
