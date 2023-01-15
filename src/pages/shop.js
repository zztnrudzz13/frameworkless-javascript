function Shop($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <main class="postPage">
        샵 페이지가 맞을까요?
      </main>
    `;
  };

  this.render();
}

export default Shop;
