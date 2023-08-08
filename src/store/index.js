import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images: [],
    links: [],
    certifications: [],
    isNavOpen: false,
    isModal: false
  },
  getters: {
    Images: state => state.images,
    Links: state => state.links,
    Certifications: state => state.certifications
  },
  mutations: {
    Images: (state, payload) => {
      state.images = payload
    },
    Links: (state, payload) => {
      state.links = payload
    },
    Certifications: (state, payload) => {
      state.certifications = payload
    },
    toggleNav: (state) => {
      state.isNavOpen = !state.isNavOpen
    },
    toggleModal: (state) => {
      state.isModal = !state.isModal
    }

  },
  actions: {
    Images: (context, payload) => {
      let images = [
        {
          c: 'angular',
          p: 'img/angular.svg'
        },
        {
          c: 'bootstrap',
          p: 'img/bootstrap.svg'
        },
        {
          c: 'css3',
          p: 'img/css3.svg'
        },
        {
          c: 'debian',
          p: 'img/debian.svg'
        },
        {
          c: 'git',
          p: 'img/git.svg'
        },
        {
          c: 'gulp',
          p: 'img/gulp.svg'
        },
        {
          c: 'html',
          p: 'img/html.svg'
        },
        {
          c: 'js',
          p: 'img/js.svg'
        },
        {
          c: 'mongodb',
          p: 'img/mongodb.svg'
        },
        {
          c: 'mysql',
          p: 'img/mysql.svg'
        },
        {
          c: 'node',
          p: 'img/node.svg'
        },
        {
          c: 'nuxt',
          p: 'img/nuxt.svg'
        },
        {
          c: 'php',
          p: 'img/php.svg'
        },
        {
          c: 'sass',
          p: 'img/sass.svg'
        },
        {
          c: 'vue',
          p: 'img/vue.svg'
        },
        {
          c: 'webpack',
          p: 'img/webpack.svg'
        },
        {
          c: 'tailwindcss',
          p: 'img/tailwindcss.svg'
        }
      ]
      context.commit('Images', images)
    },
    Links: (context, payload) => {
      let links = [
        {
          n: 'git',
          i: 'img/cvlinks/git.svg',
          l: 'https://github.com/entwicklerberg'
        },
        {
          n: 'linkedin',
          i: 'img/cvlinks/ld.svg',
          l: 'https://www.linkedin.com/in/dimabilokhonov/'
        }
      ]
      context.commit('Links', links)
    },
    Certifications: (context, payload) => {
      let certificates = [
        {
          name: 'MongoDB Universiry',
          course: 'MongoDB Basics',
          image: 'certificates/mongo.png'
        },
        {
          name: 'SoloLearn',
          course: 'JavaScript Tutorial course',
          image: 'certificates/sololern.png'
        },
        {
          name: 'Easycode',
          course: 'Frontend (js)',
          image: 'certificates/easycode.png'
        },
        {
          name: 'Source IT',
          course: 'Web-programing (php)',
          image: 'certificates/sourceIT.png'
        }
      ]
      context.commit('Certifications', certificates)
    }
  },
  modules: {}
})
