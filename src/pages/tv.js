function TV($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    const main = document.createElement('main');
    main.classList.add('tvPage');
    main.innerText = 'TV 및 홈입니다.';
    this.$container.replaceChildren(main);
  };

  this.render();
}

export default TV;
