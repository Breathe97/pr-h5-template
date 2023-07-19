import HelloWorld from '@/components/HelloWorld/HelloWorld.vue'

export default {
  install: (app: any) => {
    app.component('HelloWorld', HelloWorld)
  },
}
