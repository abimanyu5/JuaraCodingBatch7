import Component from "./Component";

class Card extends Component {
  generateUI() {
    this.innerHTML = `
        <div class="card" style="width: 18rem;">
  <img src="${this.properties.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${this.properties.title}</h5>
    <p class="card-text">${this.properties.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        `;
  }

  setProperties(img, title, description, action) {
    this.properties = {
      img: img,
      title: title,
      description: description,
      action: action,
    };
  }
}
export default Card;
