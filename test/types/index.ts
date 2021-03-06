import Vue, { ComponentOptions } from 'vue'
import * as types from '@nuxt/vue-app'

const options: ComponentOptions<Vue> = {}

// asyncData

options.asyncData = (context) => {
  return {
    foo: 'bar'
  }
}

options.asyncData = () => undefined

// fetch

options.fetch = ({ store }) => {
  return Promise.resolve('bar').then(res => {
    store.commit('setFoo', res)
  })
}

options.fetch = async ({ store }) => {
  let res = await Promise.resolve('bar')
  store.commit('setFoo', res)
}

// key

options.key = 'foo'
options.key = (to) => to.fullPath

// head

const metaInfo = {
  title: 'Home',
  meta: [
    { hid: 'description', name: 'description', content: 'My custom description' }
  ]
}

options.head = metaInfo
options.head = () => metaInfo

// layout

options.layout = 'foo'
options.layout = (context) => 'foo'

// middleware

const middlewares: types.Middleware[] = [
  'foo',
  (ctx) => {},
  (ctx, cb) => {},
  async (ctx) => {},
  async (ctx, cb) => {} // unlikely
]

options.middleware = middlewares
options.middleware = middlewares[0]
options.middleware = middlewares[1]
options.middleware = middlewares[2]

// scrollToTop

options.scrollToTop = true

// transition

options.transition = 'foo'
options.transition = { name: 'foo' }
options.transition = (to, from) => 'foo'

// validate

options.validate = (context) => true
options.validate = async (context) => true

// watchQuery

options.watchQuery = true
options.watchQuery = ['foo', 'bar']

// $nuxt

const vm = new Vue(options)

vm.$nuxt.$loading.start()
vm.$nuxt.$loading.finish()
