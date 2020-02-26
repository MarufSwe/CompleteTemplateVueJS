<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
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
export default {
  name: 'PostLayout'
}
</script>

<style scoped>

</style>
