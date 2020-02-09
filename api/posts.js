import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
    url: 'https://chanellehartwig.ghost.io',
    key: 'b1ecee95e289b0c1b308e082d7',
    version: 'v3'
});


export async function getPosts() {
    return await api.posts
      .browse({
        limit: 'all',
        include: 'tags, authors'
      })
      .catch(err => {
        console.error(err);
      });
  }

  export async function getSinglePost(postSlug) {
    return await api.posts
      .read({
        slug: postSlug
      })
      .catch(err => {
        console.error(err);
      });
  }

  export async function getPage(pageSlug) {
    return await api.pages
      .read({
        slug: pageSlug
      })
      .catch(err => {
        console.error(err);
      });
  }


