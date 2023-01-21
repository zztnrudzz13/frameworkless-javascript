function Customer($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <main class="customerPage">
        고객을 지원해주는 페이지입니다.
      </main>
    `;
  };

  this.render();
}

export default Customer;
