<template>
  <div class="cv" >
    <Navigation />
    <Header />
    <MainInfo />
    <Footer />
  </div>
</template>

<script>
import Navigation from './components/navigation/Navigation'
import Footer from './components/cvcomponents/Footer'
import MainInfo from './components/cvcomponents/MainInfo'
import Header from './components/cvcomponents/Header'

export default {
  name: 'cv',
  components: { Footer, Header, Navigation, MainInfo }
}
</script>

<style lang="scss">
.cv {
  font-size: 2vmax;
  margin: 1em;
}
</style>
