<template>
  <ul class="label-list">
    <li v-for="(nav, index) in navs">
      <a :href="'#anchor-'+index"> {{ nav.message }}</a>
    </li>
  </ul>

</template>
<script>
  export default {
    data () {
      return {
        navs: [
          { message: '圈子' },
          { message: 'CSS/HTML' },
          { message: 'JavaScritp' },
          { message: '移动端/响应式' },
          { message: '文档/资源库' },
          { message: '免费素材' },
          { message: '数据接口/平台' },
          { message: '实用工具' },
          { message: '找工作' },
          { message: '我的链接' }
        ]
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>
