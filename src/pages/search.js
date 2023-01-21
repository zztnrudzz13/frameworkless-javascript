function Search($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <main class="searchPage">
        검색을 할 수 있습니다.
      </main>
    `;
  };

  this.render();
}

export default Search;
