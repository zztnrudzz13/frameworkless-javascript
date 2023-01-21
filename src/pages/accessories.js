function Accessories($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <main class="accessoriesPage">
        악세서리를 살 수 있습니다.
      </main>
    `;
  };

  this.render();
}

export default Accessories;
