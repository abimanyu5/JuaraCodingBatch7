import Component from "./component";

class Carousel extends Component {
  generateUI() {
    this.innerHTML = `
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    ${this.generateCarouselItem()}
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        `;
  }

  generateCarouselItem(items) {
    let htmlCarousel = ";";
    items.forEach((items, index) => {
      if (index === 0) {
        htmlCarousel += `<div class="carousel-item active">`;
      } else {
        htmlCarousel += `<div class="carousel-item">`;
      }

      htmlCarousel += `<img src="${items}" class="d-block w-100"></div>`;
    });
    return htmlCarousel;
  }
  setProperties(...gambar) {
    this.properties = { images: gambar };
  }
}
export default Carousel;
