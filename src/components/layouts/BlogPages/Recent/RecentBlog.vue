<template>
  <!--  <div class="container">-->
  <!-- Latest Posts -->
  <main class="posts-listing col-lg-8">
    <div class="container">
      <div class="row">

<!--        <div v-for="post in posts" :key="post.id">-->
<!--          &lt;!&ndash;<p>{{ post.body}}</p>&ndash;&gt;-->
<!--          <router-link :to="{name: 'Post', params: { id: post.id }}">-->
<!--            <h3>{{ post.title}}</h3>-->
<!--          </router-link>-->
<!--          <hr>-->
<!--        </div>-->

        <div class="post col-xl-6" v-for="post in posts" :key="post.id">
          <div class="post-thumbnail"><a href="post.html"><img
            src="https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/blog-post-1.jpeg" alt="..." class="img-fluid"></a>
          </div>
          <div class="post-details">
            <div class="post-meta d-flex justify-content-between">
              <div class="date meta-last">20 May | 2016</div>
              <div class="category"><a href="#">Business</a></div>
            </div>

            <a href="#">
              <h3 class="h4"> <router-link :to="{name: 'Post', params: { id: post.id }}">
            <h3>{{ post.title}}</h3>
          </router-link></h3></a>
            <p class="text-muted">{{post.body}}</p>

            <footer class="post-footer d-flex align-items-center"><a href="#"
                                                                     class="author d-flex align-items-center flex-wrap">
              <div class="avatar"><img src="https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/avatar-3.jpg"
                                       alt="..." class="img-fluid"></div>
              <div class="title"><span>John Doe</span></div>
            </a>
              <div class="date"><i class="icon-clock"></i> 2 months ago</div>
              <div class="comments meta-last"><i class="icon-comment"></i>12</div>
            </footer>
          </div>
        </div>
      </div>
      <!-- Pagination -->
      <nav aria-label="Page navigation example">
        <ul class="pagination pagination-template d-flex justify-content-center">
          <li class="page-item"><a href="#" class="page-link"> <i class="fa fa-angle-left"></i></a></li>
          <li class="page-item"><a href="#" class="page-link active">1</a></li>
          <li class="page-item"><a href="#" class="page-link">2</a></li>
          <li class="page-item"><a href="#" class="page-link">3</a></li>
          <li class="page-item"><a href="#" class="page-link"> <i class="fa fa-angle-right"></i></a></li>
        </ul>
      </nav>
    </div>
  </main>
  <!--  </div>-->
</template>

<script>

import axios from 'axios'

export default {
  name: 'RecentPost',
  data () {
    return {
      posts: []
    }
  },
  created () {
    axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then(response => {
        console.log(response)
        this.posts = response.data
      })
  }
}
</script>

<style scoped>

</style>
