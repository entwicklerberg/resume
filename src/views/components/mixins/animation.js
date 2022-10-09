export const animations = {
  methods: {
    makeEaseOut: function (timing) {
      return function (timeFraction) {
        return 1 - timing(1 - timeFraction)
      }
    },

    makeEaseInOut: function (timing) {
      return function (timeFraction) {
        if (timeFraction < 0.5) {
          return timing(2 * timeFraction) / 2
        } else {
          return (2 - timing(2 * (1 - timeFraction))) / 2
        }
      }
    },

    linear: function (timeFraction) {
      return timeFraction
    },

    bounce: function (timeFraction) {
      // eslint-disable-next-line no-unused-vars
      for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
          return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
      }
    },

    quad: function (timeFraction) {
      return Math.pow(timeFraction, 2)
    },

    qubiq: function (timeFraction) {
      return Math.pow(timeFraction, 3)
    },

    easeOutLinear: function () {
      return this.makeEaseOut(this.linear)
    },

    animate: function (options) {
      let start = performance.now()

      function amate (time) {
        let timeFraction = (time - start) / options.duration
        let progress = options.timing(timeFraction)
        options.draw(progress)
        if (timeFraction < 1) requestAnimationFrame(amate)
      }

      requestAnimationFrame(amate)
    }
  }
}
