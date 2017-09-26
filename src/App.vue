<template>
  <div class="app">
    <left-layout class="left-container"/>
    <router-view class="main-container"/>
    <bga-back-top :svgMajorColor="'#7b79e5'" :bottom="90" :right="5" :svgMinorColor="'#ba6fda'"
                  :svgType="'rocket_smoke'"/>
  </div>
</template>
<script>
  import LeftLayout from './components/LeftLayout.vue'
  import { mapActions } from 'vuex'

  export default {
    components: {
      LeftLayout
    },
    methods: {
      ...mapActions([
        'setLabels',
        'setGitHubUser'
      ])
    },
    mounted () {
      this.$nextTick(function () {
        this.$gitHubApi.getUserInfo(this).then(this.$http.spread((userResp, labelResp) => {
          this.setGitHubUser(userResp.data)
          this.setLabels(labelResp.data)
        }))
      })
    }
  }
</script>
