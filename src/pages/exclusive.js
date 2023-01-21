function Exclusive($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <main class="exclusivePage">
        독점 제공입니다.
      </main>
    `;
  };

  this.render();
}

export default Exclusive;
