<template>
    <div>
        <!-- Navbar Start-->
        <Navbar/>
      <slot name="parents"/>
        <Footer/>
    </div>
</template>

<script>
import Navbar from './HomePages/Navbar'
import Footer from './HomePages/Footer'

export default {
  name: 'Parents',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>

</style>
