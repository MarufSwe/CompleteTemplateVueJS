<template>
  <Parents>
    <template v-slot:parents>
      <div class="container">
        <div class="row">
          <slot name="postContent"></slot>
          <slot name="sideBar"></slot>
        </div>
      </div>
    </template>
  </Parents>
</template>

<script>
import Parents from './Parents'

export default {
  name: 'BlogLayout',
  components: {
    Parents
  }
}
</script>

<style scoped>

</style>
