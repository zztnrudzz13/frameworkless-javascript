function Post($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <main class="postPage">
        포스트 페이지가 맞습니다.
      </main>
    `;
  };

  this.render();
}

export default Post;
