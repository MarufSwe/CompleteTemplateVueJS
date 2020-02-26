<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <Parents>
      <template v-slot:parents>
        <Header/>
        <IntroSection/>
        <BusinessView/>
        <DividerSection/>
        <LatestPost/>
        <NewsLatterSection/>
        <GallerySection/>
      </template>
      </Parents>
  </div>
</template>

<script>
import Parents from '../layouts/Parents'
import Header from '../layouts/HomePages/Header'
import IntroSection from '../layouts/HomePages/IntroSection'
import BusinessView from '../layouts/HomePages/BusinessView'
import DividerSection from '../layouts/HomePages/DividerSection'
import LatestPost from '../layouts/HomePages/LatestPost'
import NewsLatterSection from '../layouts/HomePages/NewsLatterSection'
import GallerySection from '../layouts/HomePages/GallerySection'

export default {
  name: 'Home',
  components: {
    Parents,
    Header,
    IntroSection,
    BusinessView,
    DividerSection,
    LatestPost,
    NewsLatterSection,
    GallerySection
  }
}
</script>

<style scoped>

</style>
