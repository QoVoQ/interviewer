// Fix this search component
class SearchComponent {
  constructor() {
    this.input = document.getElementById('search');
    this.input.addEventListener('input', this.handleSearch);
  }

  value = '';

  handleSearch() {
    // read property `value`
    console.log(`Searching for: ${this.value}`);
  }
}
