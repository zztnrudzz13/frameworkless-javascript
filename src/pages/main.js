import { navigate } from '../utils/navigate';
import { $ } from '../utils/querySelector';

function Main($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <main class="mainPage">
        메인 페이지입니다.
      </main>
    `;
  };

  this.render();
}

export default Main;
