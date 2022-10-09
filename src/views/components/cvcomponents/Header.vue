<template>
  <header>
      <Person/>
    <section class="contacts">
      <ContactLinks/>
      <Adress/>
    </section>
  </header>
</template>

<script>
import ContactLinks from './ContactLinks'
import Person from './Person'
import Adress from './Adress'
export default {
  name: 'Header',
  components: { ContactLinks, Person, Adress }
}
</script>

<style lang="scss">
  header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.5em;
    @include mQ($tablet) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .contacts {
      width: 75%;
      margin: 1em 0;
      @include mQ($tablet) {
        width: 8em;
        margin: 0;
      }

    }
  }
</style>
