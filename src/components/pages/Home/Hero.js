import { Link } from 'react-router-dom';
import restaurantFoodImage1 from './assets/restaurant-chef.jpg';
import restaurantFoodImage2 from './assets/bruschetta.jpg';
import restaurantFoodImage3 from './assets/greek-salad.jpg';
import './Hero.css';
import pages from '../../../utils/pages';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const carouselImages = [
    restaurantFoodImage1,
    restaurantFoodImage2,
    restaurantFoodImage3,
  ];
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000, // Ajuste o valor conforme necessário (em milissegundos)
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant,
            focused on traditional recipes served with a modern twist.
          </p>
          <Link className="button-primary" to={pages.get('bookings').path}>
            Reserve a table
          </Link>
        </div>
        <Slider {...settings} className="hero-image carousel">
          {carouselImages.map((image, index) => (
            <img key={index} src={image} alt={`Restaurant food ${index + 1}`} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
