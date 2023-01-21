function Iphone($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <main class="iphonePage">
        아이폰을 살 수 있습니다.
      </main>
    `;
  };

  this.render();
}

export default Iphone;
