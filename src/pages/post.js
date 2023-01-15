function Post($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <main class="postPage">
        포스트 페이지 열려라 얍
      </main>
    `;
  };

  this.render();
}

export default Post;
