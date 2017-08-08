import React from 'react';
import classNames from 'classnames';

class MiniSliderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {slideIndex: 0};
  }

  componentDidMount() {
    //this.showSlides(this.state.slideIndex);
  }

 // showSlides(n) {
 //    var i;
 //    var slides = document.getElementsByClassName("mySlides");
 //    var dots = document.getElementsByClassName("dot");
 //    if (n > slides.length) {slideIndex = 1}
 //    if (n < 1) {slideIndex = slides.length}
 //    for (i = 0; i < slides.length; i++) {
 //        slides[i].style.display = "none";
 //    }
 //    for (i = 0; i < dots.length; i++) {
 //        dots[i].className = dots[i].className.replace(" active", "");
 //    }
 //    slides[slideIndex-1].style.display = "block";
 //    dots[slideIndex-1].className += " active";
 //  }

  plusSlides(n) {
    const photosCount = this.props.photos.length;

    let tempIndex = this.state.slideIndex + n;
    if(tempIndex < 0)
      tempIndex = photosCount - 1;
    if(tempIndex >= photosCount)
      tempIndex = 0;

    this.setState({slideIndex: tempIndex});
  }

  currentSlide(n) {
    this.setState({slideIndex: n});
  }

  getSlideClasses(index, currentSlideIndex){
    return classNames({
      'slide': true,
      //'fade': true,
      'active': currentSlideIndex === index,
      'inactive': currentSlideIndex != index,
    });
  }

  getDotClasses(index, currentSlideIndex){
    return classNames({
      'dot': true,
      'active': currentSlideIndex === index,
      'inactive': currentSlideIndex != index,
    });
  }

  render() {
    const photos = this.props.photos;
    const photosCount = photos.length;

    const self = this;

    const photosComponent = this.props.photos.map((photo, index) =>
      <div key={photo.url} className={self.getSlideClasses(index, self.state.slideIndex)}>
        <img src={photo.url}/>
        <div className="caption">{photo.title}</div>
      </div>
    );

    const dotsComponent = this.props.photos.map((photo, index) =>
      <span key={index} className={self.getDotClasses(index, self.state.slideIndex)} onClick={() => this.currentSlide(index)}></span>
    );

    return (
      <div className="slideshow-container">

        <div className='slides'>
          {photosComponent}
        </div>

        <div className="slide-index">{this.state.slideIndex + 1} / {photosCount}</div>

        <div className='controls'>
          <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
          <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>
        </div>

        <div className='dots'>
          {dotsComponent}
        </div>

      </div>

    );
  }
}
export default MiniSliderComponent;
