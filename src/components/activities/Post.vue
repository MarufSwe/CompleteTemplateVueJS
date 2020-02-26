<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <BlogLayout>
    <template v-slot:postContent>
      <RecentPost/>
    </template>
    <template v-slot:sideBar>
      <BlogSearch/>
    </template>
  </BlogLayout>
</template>

<script>
import BlogLayout from '../layouts/BlogLayout'
import RecentPost from '../layouts/BlogPages/Recent/RecentPost'
import BlogSearch from '../layouts/BlogPages/SideBar/BlogSearch'

export default {
  name: 'Post',
  components: {
    BlogLayout,
    RecentPost,
    BlogSearch
  }
}
</script>

<style scoped>

</style>
