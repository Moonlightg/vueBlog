<template>
  <div class="blog-container">
    <labels-list/>
    <router-view/>
  </div>
</template>
<script>
  import LabelsList from '../components/LabelsList.vue'

  export default {
    components: {
      LabelsList
    }
  }
</script>
