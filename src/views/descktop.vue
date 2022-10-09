<template>
  <div class="desktop">
    <Navigation></Navigation>
    <div class="text">
      <div class="name">
        <h1>Dmytro</h1>
        <h2>Bilokhonov</h2>
      </div>
      <div class="developer">
        <h3>Full stack</h3>
        <h4>developer</h4>
      </div>
    </div>
    <div class="svgContainer">
      <img
        v-for="(im, name, index) in Images"
        :key="index"
        :class="im.c"
        :src="im.p"
        :alt="im.c"
      />
    </div>
    <div class="nuxtLogo">
      <img src="../../public/img/nuxtLogo.svg" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navigation from './components/navigation/Navigation'
import { animations } from './components/mixins/animation'

export default {
  name: 'descktop',
  mixins: [animations],
  components: { Navigation },
  data () {
    return {}
  },
  methods: {
    RandomV: function (el) {
      return Math.random() * el
    },

    Random: function (min, max) {
      let rand = min + Math.random() * (max + 1 - min)
      return Math.floor(rand)
    },

    gS: function (cl) {
      const i = document.querySelector(`.${cl}`)
      const elStyle = window.getComputedStyle(i)
      let w = parseFloat(elStyle.width)
      let h = parseFloat(elStyle.height)
      let t = parseFloat(elStyle.top)
      let r = parseFloat(elStyle.right)

      let W = 0
      let H = 0
      let T = this.RandomV(t)
      let R = this.RandomV(r)

      return { i, w, h, t, r, W, H, T, R }
    },

    repositionProperty: function (e, p, P, ph = 'width', process) {
      let vP = p * 2
      P += vP * process
      let s = P >= p ? p : P
      e['style'][ph] = s + 'px'
    },

    opacity: function (e, elOpacity, process) {
      e.style.opacity = 1 - elOpacity * process
    },

    shake: function (e, process) {
      let magnitude = 16
      let X = this.Random(-magnitude * process, magnitude * process)
      let Y = this.Random(-magnitude * process, magnitude * process)
      e.style.transform = `translate( ${X}px, ${Y}px)`
    },

    letsShake: function (st) {
      let x = this.Random(0, st.length - 1)
      let e = st[x]
      let image = e.i
      let elOpacity = 0.45

      this.animate({
        duration: 8e3,
        timing: this.makeEaseInOut(this.linear),
        draw: process => this.opacity(image, elOpacity, process)
      })

      this.animate({
        duration: 2e3,
        timing: this.makeEaseInOut(this.linear),
        draw: process => this.shake(image, process)
      })
    },

    letsRotate: function (st) {
      let x = this.Random(0, st.length - 1)
      let e = st[x]
      let image = e.i
      let elOpacity = 0.45

      this.animate({
        duration: 5e3,
        timing: this.makeEaseInOut(this.linear),
        draw: process => this.opacity(image, elOpacity, process)
      })

      let counter = 1
      let tiltAngle = 1
      let magnitude = 16
      let numberOfShakes = 16
      let magnitudeUnit = magnitude / numberOfShakes

      function angularShake () {
        if (counter < numberOfShakes) {
          image.style.transform = 'rotate(' + 0 + 'deg)'
          magnitude -= magnitudeUnit
          let angle = magnitude * tiltAngle
          image.style.transform = 'rotate(' + angle + 'deg)'
          counter += 1
          tiltAngle *= -1
          requestAnimationFrame(angularShake)
        } else {
          image.style.transform = 'rotate(' + 0 + 'deg)'
        }
      }
      angularShake()
    },

    imageAnimation: function () {
      const container = document.querySelector('.desktop .svgContainer')
      const images = [...container.querySelectorAll('img[src$=".svg"]')]
      const imagesClassList = [].concat(
        ...images.map(elt => [...elt.classList])
      )
      const st = []
      imagesClassList.forEach(i => {
        st.push(this.gS(i))
      })

      // Animation width
      this.animate({
        duration: 8e3,
        timing: this.makeEaseOut(this.linear),
        draw: process => {
          let x = this.Random(0, st.length - 1)
          let e = st[x]
          this.repositionProperty(e.i, e.w, e.W, 'width', process)
        }
      })

      // Animation height
      this.animate({
        duration: 8e3,
        timing: this.makeEaseOut(this.linear),
        draw: process => {
          let x = this.Random(0, st.length - 1)
          let e = st[x]
          this.repositionProperty(e.i, e.h, e.H, 'height', process)
        }
      })

      // Animation top
      this.animate({
        duration: 8e3,
        timing: this.makeEaseOut(this.linear),
        draw: process => {
          let x = this.Random(0, st.length - 1)
          let e = st[x]
          this.repositionProperty(e.i, e.t, e.T, 'top', process)
        }
      })

      // Animation right
      this.animate({
        duration: 8e3,
        timing: this.makeEaseOut(this.linear),
        draw: process => {
          let x = this.Random(0, st.length - 1)
          let e = st[x]
          this.repositionProperty(e.i, e.r, e.R, 'right', process)
        }
      })

      setInterval(() => {
        this.letsShake(st)
      }, 5e3)
      setInterval(() => {
        this.letsRotate(st)
      }, 7e3)
    },

    starsAnimation: function (prop) {
      const use = {
        test: regexp => regexp.test(window.navigator.userAgent),
        get browser () {
          switch (true) {
            case this.test(/edge/i):
              return 'edge'
            case this.test(/edg/i):
              return 'chromium based edge (dev or canary)'
            case this.test(/opr/i) && !!window.opr:
              return 'opera'
            case this.test(/chrome/i) && !!window.chrome:
              return 'chrome'
            case this.test(/trident/i):
              return 'ie'
            case this.test(/firefox/i):
              return 'firefox'
            case this.test(/safari/i):
              return 'safari'
            default:
              return 'other'
          }
        }
      }

      const dotCount = {
        get make () {
          let w = innerWidth
          let h = innerHeight
          let square = w * h
          let dotes = Math.round(Math.sqrt(square) / 10)
          return dotes
        }
      }

      const particles = []

      const properties = {
        bgcolor: '#000000',
        dotColor: '#ff1189',
        dotRadius: 2,
        dotCount: dotCount.make,
        dotLife: 30,
        maxV: 0.5,
        lineLength: dotCount.make,
        lineWidth: 0.4,
        lineColor: '#ff1189',
        cW: use.browser !== 'firefox' ? innerWidth : 600,
        cH: use.browser !== 'firefox' ? innerHeight : 600
      }

      Object.assign(properties, prop)

      const body = document.querySelector('.desktop')
      body.setAttribute(
        'style',
        '  margin: 0;padding: 0;border: 0;min-width: 300px;min-height: 300px;'
      )

      const div = document.createElement('div')
      div.setAttribute('id', 'animation')
      div.setAttribute(
        'style',
        `position: absolute;top: 0;left: 0;z-index: -1000;font-size: 0;margin: 0;padding: 0;border: 0;width: 100%;height: 100%;background-color: ${properties.bgcolor};`
      )
      body.appendChild(div)

      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      div.appendChild(canvas)

      let w = (canvas.width = properties.cW)
      let h = (canvas.height = properties.cH)

      window.onresize = function () {
        w = canvas.width = properties.cW
        h = canvas.height = properties.cH
      }

      function Random (min, max) {
        return parseFloat(min + Math.random() * (max + 1 - min).toFixed(3))
      }

      function RandomV () {
        return parseFloat(
          (Math.random() * (properties.maxV * 2) - properties.maxV).toFixed(3)
        )
      }

      function RandomL () {
        return Math.random() * properties.dotLife * 60
      }

      function bildDotes () {
        let i = 0
        while (i !== properties.dotCount) {
          let vX = RandomV()
          let vY = RandomV()
          let life = RandomL()
          let x = Random(0, w)
          let y = Random(0, h)
          let parties = { x, y, vX, vY, life }
          particles.push(parties)
          i++
        }
      }

      function rePosition (d) {
        // eslint-disable-next-line no-unused-expressions,no-mixed-operators
        (d.x + d.vX > w && d.vX > 0) || (d.x + d.vX < 0 && d.vX < 0)
          ? (d.vX *= -1)
          : d.vX;
        // eslint-disable-next-line no-mixed-operators,no-unused-expressions
        (d.y + d.vY > h && d.vY > 0) || (d.y + d.vY < 0 && d.vY < 0)
          ? (d.vY *= -1)
          : d.vY
        d.x += d.vX
        d.y += d.vY
      }

      function reLife (d) {
        if (d.life < 1) {
          d.x = Random(0, w)
          d.y = Random(0, h)
          d.vX = RandomV()
          d.vY = RandomV()
          d.life = RandomL()
        }
        d.life--
      }

      function line (i, j) {
        let x1, y1, x2, y2, length, opacity
        x1 = ~~i.x
        y1 = ~~i.y
        x2 = ~~j.x
        y2 = ~~j.y

        let x = x2 - x1
        let y = y2 - y1
        length = ~~Math.sqrt(x * x + y * y).toFixed(3) * 1
        if (length < properties.lineLength) {
          opacity = 0.8 - length / properties.lineLength
          ctx.lineWidth = properties.lineWidth
          ctx.globalAlpha = opacity
          ctx.strokeStyle = properties.lineColor
          ctx.moveTo(x1, y1)
          ctx.lineTo(x2, y2)
        }
      }

      function lines (d) {
        const cl = d.length
        let i = 0
        ctx.beginPath()
        while (i !== cl) {
          let j = i
          rePosition(d[i])
          reLife(d[i])
          while (j !== cl) {
            line(d[i], d[j])
            j++
          }
          i++
        }
        ctx.closePath()
        ctx.stroke()
      }

      function dote (d) {
        ctx.beginPath()
        ctx.arc(d.x, d.y, properties.dotRadius, 0, Math.PI * 2)
        ctx.fillStyle = properties.dotColor
        ctx.closePath()
        ctx.fill()
      }

      function dotes (d) {
        let i = 0
        const count = d.length
        while (i !== count) {
          dote(d[i])
          i++
        }
      }

      function draw () {
        ctx.clearRect(0, 0, w, h)
        dotes(particles)
        lines(particles)
      }

      bildDotes()
      this.animate({
        duration: Infinity,
        timing: this.linear,
        draw: draw
      })
    }
  },
  computed: {
    ...mapGetters(['Images'])
  },
  mounted () {
    this.imageAnimation()
    this.starsAnimation({
      bgcolor: '#ffffff',
      dotColor: '#00C58E',
      dotRadius: 1.3,
      dotLife: 30,
      maxV: 0.5,
      lineWidth: 0.4,
      lineColor: '#2E495E'
    })
  },
  beforeCreate () {
    this.$store.dispatch('Images')
  }
}
</script>

<style lang="scss">
.desktop {
  font-size: 2vmax;
}

.text {
  position: fixed;
  top: 30%;
  left: 2.5em;
  z-index: 300;

  .name {
    margin: 0.4em 0.8em;

    h1,
    h2 {
      @include font-parameters;
      font-size: 3.3em;
      @include mQ($tablet) {
        font-size: 4.2em;
      }
      color: $black;
    }
  }

  .developer {
    margin: 0.4em 0.8em;

    h3,
    h4 {
      @include font-parameters;
      font-size: 2em;
      @include mQ($tablet) {
        font-size: 2.96em;
      }
    }

    h3 {
      color: $green;
    }

    h4 {
      color: $black;
    }
  }
}

.svgContainer {
  width: auto;
  height: 75em;
  position: fixed;
  top: 1.5em;
  right: 2em;
  font-size: 2.5vmin;

  img {
    position: absolute;
    opacity: 0.55;
  }

  /*svg props*/
  .angular {
    width: 6.4em;
    height: 1.6em;
    top: 0.92em;
    right: 21.2em;
  }

  .bootstrap {
    width: 3.2em;
    height: 3.2em;
    top: 25.76em;
    right: 4.96em;
  }

  .css3 {
    width: 3.2em;
    height: 3.2em;
    top: 3.72em;
    right: 5.2em;
  }

  .debian {
    width: 3.2em;
    height: 3.2em;
    top: 3.72em;
    right: 14.68em;
  }

  .git {
    width: 3.2em;
    height: 3.2em;
    top: 14.84em;
    right: 9.4em;
  }

  .gulp {
    width: 3.2em;
    height: 3.2em;
    top: 14.84em;
    right: 0.08em;
  }

  .html {
    width: 3.2em;
    height: 3.2em;
    top: 0.12em;
    right: 0.2em;
  }

  .js {
    width: 3.2em;
    height: 3.2em;
    top: 22.4em;
    right: 0.16em;
  }

  .mongodb {
    width: 5.68em;
    height: 1.6em;
    top: 23.44em;
    right: 9.76em;
  }

  .mysql {
    width: 3.2em;
    height: 3.2em;
    top: 7.6em;
    right: 9.52em;
  }

  .node {
    width: 3.2em;
    height: 3.2em;
    top: 7.6em;
    right: 0.32em;
  }

  .nuxt {
    width: 3.2em;
    height: 3.2em;
    top: 0.44em;
    right: 9.8em;
  }

  .php {
    width: 3.2em;
    height: 3.2em;
    top: 18.4em;
    right: 4.92em;
  }

  .sass {
    width: 3.2em;
    height: 3.2em;
    top: 18.4em;
    right: 14.2em;
  }

  .vue {
    width: 3.2em;
    height: 3.2em;
    top: 11.28em;
    right: 13.84em;
  }
  .webpack{
    width: 3.2em;
    height: 3.2em;
    top: 11.25em;
    right: 4.8em;
  }
  .tailwindcss{
    width: 3.2em;
    height: 3.2em;
    top: 3.72em;
    right: 20em;
  }
}

.nuxtLogo {
  position: fixed;
  bottom: 1em;
  right: 1em;

  img {
    width: 22.5em;
    height: auto;
  }
}
</style>
