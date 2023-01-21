function Store($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <main class="storePage">
        가게입니다.
      </main>
    `;
  };

  this.render();
}

export default Store;
