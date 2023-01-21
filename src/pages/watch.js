function Watch($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <main class="watchPage">
        시계를 살 수 있습니다
      </main>
    `;
  };

  this.render();
}

export default Watch;
