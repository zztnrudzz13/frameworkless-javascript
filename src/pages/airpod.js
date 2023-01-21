function Airpod($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <main class="airpodPage">
        에어팟을 살 수 있습니다.
      </main>
    `;
  };

  this.render();
}

export default Airpod;
