import React from 'react';
import classNames from 'classnames';

class MiniSliderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {slideIndex: 0};
  }

  componentDidMount() {
    this.showSlides(this.state.slideIndex);
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
    const tempSlideIndex = this.state.slideIndex + n;
    this.setState({slideIndex: tempSlideIndex});
    //this.showSlides(tempSlideIndex);
  }

  currentSlide(n) {
    this.setState({slideIndex: n});
    //this.showSlides(n);
  }

  render() {
    const photos = this.props.photos;
    const photosCount = photos.length;
    const photosComponent = this.props.photos.map((photo, index) =>
      let slideClasses = classNames({
        'mySlides': true,
        'fade': true,
        'active': this.state.slideIndex === index,
        'inactive': this.state.slideIndex != index,
      });

      <div key={photo.url} className="mySlides fade">
        <div className="numbertext">{index} / {photosCount}</div>
        <img src={photo.url} style="width:100%">
        <div className="text">{photo.title}</div>
      </div>
    );

    const dotsComponent = this.props.photos.map((photo, index) =>
      <span key={index} className="dot" onClick={() => this.currentSlide(index)}></span>
    );

    return (

      <div className="slideshow-container">
        {photosComponent}

        <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>
      </div>
      <br>

      <div className='dots-container'>
        {dotsComponent}
      </div>

    );
  }
}
export default MiniSliderComponent;
