<template>
  <div id="app">
    <div class="container">
      <transition>
        <router-view />
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  user-select: none;
}

body {
  font-family: Segoe UI, Quicksand, Source Sans Pro, BlinkMacSystemFont, Roboto,
    Helvetica Neue, Arial, sans-serif;
  font-style: normal;
  background: $white;
}

#animation {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  min-width: 300px;
  max-width: 1440px;
  margin: 0 auto;
}

@include print() {
  * {
    font-size: 14px;
  }

  body {
    background: none !important;
  }

  #animation,
  .desktop,
  #burger,
  .sidebar,
  nav,
  footer,
  .links {
    display: none !important;
  }

  .container {
    width: 21cm;
    height: 29cm;
    margin: 0 auto;

    header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 0.5em;

      .contacts {
        width: 100%;
        margin: 0;
      }
      .person {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .foto {
          margin: 0 2.56em 0 0;

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
          align-items: flex-start;
          margin: 0;

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
      main{
        .info {
          page-break-before: avoid;
          page-break-after: avoid;
          p {
            widows: 1;
          }
        }
      }
    }

  }

}
</style>
