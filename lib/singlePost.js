import { fetchSingleBlogPost } from './api.js';

const postTitle = document.getElementById('post-title');
const postImage = document.getElementById('post-image');
const postContent = document.getElementById('post-content');

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

document.addEventListener('DOMContentLoaded', async () => {
  const blogPost = await fetchSingleBlogPost(postId);
  if (blogPost) {
    postTitle.innerText = blogPost.title;
    postImage.src = blogPost.media.url;
    postImage.alt = blogPost.media.alt;
    postContent.innerText = blogPost.body;
  }
});
