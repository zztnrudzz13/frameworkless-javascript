function Ipad($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    const main = document.createElement('main');
    main.classList.add('ipadPage');
    main.innerText = '아이패드를 살 수 있습니다.';
    this.$container.replaceChildren(main);
  };

  this.render();
}

export default Ipad;
