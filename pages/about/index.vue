<template>
  <div class="container">
      <main>
          <h1>{{ page.title }}</h1>
          <div class="content">
              <div v-html="page.html">{{ page.html }}</div>
          </div>
      </main>
   
  </div>
</template>

<script>
import { getPage } from "../../api/posts";

export default {
  async asyncData() {
    const page = await getPage('about');
    return { page: page };
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

