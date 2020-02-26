<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <BlogLayout>
    <template v-slot:postContent>
      <RecentBlog/>
    </template>
    <template v-slot:sideBar>
      <BlogSearch/>
    </template>
  </BlogLayout>
</template>

<script>
import BlogLayout from '../layouts/BlogLayout'
import RecentBlog from '../layouts/BlogPages/Recent/RecentBlog'
import BlogSearch from '../layouts/BlogPages/SideBar/BlogSearch'

export default {
  name: 'Blog',
  components: {
    BlogLayout,
    RecentBlog,
    BlogSearch
  }
}
</script>

<style scoped>

</style>
