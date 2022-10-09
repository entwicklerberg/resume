<template>
  <div>
    <Burger/>
    <NavBar>
      <nav>
        <ul>
          <li>
            <router-link to="descktop">Desktop</router-link>
          </li>
          <li>
            <router-link to="cv">CV</router-link>
          </li>
        </ul>
      </nav>
    </NavBar>
  </div>
</template>

<script>
import NavBar from './NavBar'
import Burger from './Burger'

export default {
  name: 'Navigation',
  components: { NavBar, Burger }
}
</script>

<style lang="scss">
  nav {
    width: 3em;
    height: 100%;
    background: linear-gradient(to left, $span 40%, transparent 100%);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;

    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      list-style-type: none;
      padding: 0;
      margin: 1em;

      li {
        margin: 0.5em;
        padding: 0.5em;
        transform: rotate(90deg);

        &:hover {
          transform: rotate(0deg);
          transition: transform 0.5s ease-in-out;
        }

        a {
          @include font-parameters;
          font-size: 0.65em;

          &:link {
            color: #1a203c;
            text-decoration: none;
          }

          &:visited {
            color: $green;
            text-decoration: none;
          }

          &:hover {
            color: #df0000;
            text-decoration: underline;
          }

          &:active {
            color: $green;
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>
