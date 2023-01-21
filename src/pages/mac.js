function Mac($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <main class="macPage">
        맥을 살 수 있습니다.
      </main>
    `;
  };

  this.render();
}

export default Mac;
