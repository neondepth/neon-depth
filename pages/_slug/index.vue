<template>
  <div class="container">
      <main>
          <h1>{{ post.title }}</h1>
          <div class="content">
              <div v-html="post.html">{{ post.html }}</div>
          </div>
      </main>
   
  </div>
</template>

<script>
import { getSinglePost } from "../../api/posts";

export default {
  async asyncData({ params }) {
    const post = await getSinglePost(params.slug);
    return { post: post };
  }
};
</script>

<style lang="scss">

    header {
        height: 15em;
    }

    h1 {
        color: white;
        margin-bottom: 1em;
    }

    .content {
        background: white;
        border-radius: 1em;
        padding:1em;
    }

    main {
        margin-top: -9em;  
    }

    .content img {
            max-width: 100%;
            height: auto;
        }
  

  @media only screen and (min-width: 768px) {
      .content {
          padding: 2em;
      }
    }
  

</style>
