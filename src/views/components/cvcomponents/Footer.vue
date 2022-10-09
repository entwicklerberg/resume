<template>
  <footer >
    <img v-for="(im, name, index) in Images" :key="index" :src="im.p" :alt="im.c" />
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
import { animations } from '../mixins/animation'

export default {
  name: 'Footer',
  mixins: [animations],
  computed: {
    ...mapGetters(['Images'])
  },
  methods: {
    animationEngineFunction: function (index) {
      switch (true) {
        case index % 2 === 0:
          return this.bounce
        case index % 3 === 0:
          return this.linear
        case index % 4 === 0:
          return this.makeEaseInOut(this.linear)
        case index % 5 === 0:
          return this.makeEaseInOut(this.bounce)
        case index % 6 === 0:
          return this.qubiq
        default:
          return this.quad
      }
    },
    animateText: function () {
      const cv = document.querySelector('.cv')
      const p = [...cv.querySelectorAll('p')]
      const footer = document.querySelector('footer')
      footer.style.display = 'none'

      p.forEach((i, index) => {
        let text = i.outerHTML
        let to = text.length
        let from = 0

        const regex = /<(\/)??p>/ig

        text = text.replace(regex, '')

        this.animate({
          duration: 10e3,
          timing: this.animationEngineFunction(index),
          draw: progress => {
            let result = (to - from) * progress + from
            i.innerHTML = text.substr(0, Math.ceil(result))
          }
        })
      })
    },
    move: function (moveElement, parent, safeWidth, process) {
      let select = moveElement[0]
      let sel = window.getComputedStyle(select)
      let selectW = parseFloat(sel.width)

      switch (true) {
        case process < 0.5:
          select.style.width = selectW - (process * 4) + 'px'
          break
        default:
          parent.append(select)
          select.style.width = selectW < safeWidth ? selectW + (process * 4) + 'px' : safeWidth
          break
      }
    },
    footerMove: function () {
      const parent = document.querySelector('footer')
      const moveElement = [...parent.querySelectorAll('img')]
      let select = moveElement[0]
      let sel = window.getComputedStyle(select)
      const safeWidth = parseFloat(sel.width)

      this.animate({
        duration: 3e3,
        timing: this.easeOutLinear(),
        draw: process => this.move(moveElement, parent, safeWidth, process)
      })
    },
    footerBounce: function () {
      let footer = document.querySelector('.cv footer')
      let cv = document.querySelector('.cv')
      footer.style.display = 'flex'

      let cvH = window.getComputedStyle(cv)
      let fcH = window.getComputedStyle(footer)

      let to = parseFloat(cvH.height) + parseFloat(fcH.height) / 2

      this.animate({
        duration: 2e3,
        timing: this.makeEaseOut(this.bounce),
        // eslint-disable-next-line no-return-assign
        draw: process => footer.style.top = to * process + 'px'
      })
      setInterval(() => { this.footerMove() }, 3000)
    }
  },
  mounted () {
    this.animateText()
    setTimeout(() => { this.footerBounce() }, 10e3)
  },
  beforeCreate () {
    this.$store.dispatch('Images')
  }
}
</script>

<style lang="scss">
  footer {
    left: 4em;
    right: 4em;
    padding-top: 1em;
    padding-bottom: 1em;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: absolute;

    &:before,
    &:after {
      content: "";
      position: absolute;
      display: block;
      width: 5em;
      height: 1.44em;
      z-index: 10;
    }

    &:before {
      left: -4em;
      background-image: linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0.71));
      @include mQ($tablet) {
        right: -1em;
      }
    }

    &:after {
      right: -4em;
      background-image: linear-gradient(to left, #ffffff, rgba(255, 255, 255, 0.71));
      @include mQ($tablet) {
        right: -1em;
      }
    }

    img {
      width: auto;
      height: 1.44em;
    }
  }
</style>
