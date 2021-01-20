class Component {
  constructor() {
    this.innerHTML = "";
  }

  generateUI() {
    this.innerHTML = "<div></div>";
  }

  render() {
    this.generateUI();
    return this.innerHTML;
  }
  setProperties() {
    this.properties = properties;
  }
}

export default Component;
