function Shoppingbag($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <main class="shoppingbagPage">
        장바구니입니다.
      </main>
    `;
  };

  this.render();
}

export default Shoppingbag;
