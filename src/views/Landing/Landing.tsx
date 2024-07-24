import { Carousel } from 'nuka-carousel';
import "./Landing.scss";
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { getListings, getCurrentUser, clearListings } from '../../ducks/reducer';
// import veggiestand from '../../assets/Veggie-Stand.mp4'
import hotpot from "../../assets/hotpot.mp4"
import freshveggie from "../../assets/fresh-veggies.jpeg";
import mexicana from "../../assets/mexicana.png";
import miso from "../../assets/miso.jpg";
import pho from "../../assets/pho.jpg";
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation'

export default function Landing() {
  const [input, setInput] = useState('')
  const photos = [freshveggie, mexicana, miso, pho]

  const renderTypeWriter = () => {
    return (
      <TypeAnimation
        className="description-container"
        sequence={[
          'Desire.',
          1500,
          'Explore.',
          1500,
          'Discover.',
          1500,
          'Nourish.',
          1500
        ]}
        repeat={Infinity}
      />
    )
  }

  // componentDidMount() {
  //   this.props.getCurrentUser();
  // }

  // handleListing() {
  //   const { getListings } = this.props;
  //   if (this.props.listings !== getListings(this.state.input)) {
  //     this.props.clearListings()
  //   }
  //   getListings(this.state.input)
  // }

  const handleSubmit = () => {
    console.log('submitted')
  }

  return (
    <div className="Landing">
      <div className="video-container">
        <div className="video-overlay">
          <div className="search-container">
            <input className="input-bar" type="text" value={input}
              onChange={(e) => setInput(e.target.value)} placeholder="Enter City, State..." required />
            {/* <Link to='/listing' style={{ textDecoration: 'none' }}> */}
            <button type='submit' className="submit-btn"
              onClick={handleSubmit}>Submit</button>
            {/* </Link> */}
          </div>
          {renderTypeWriter()}
        </div>
        <video autoPlay muted loop>
          <source src={hotpot} type="video/mp4" />.
        </video>
      </div>
      <div className="bottom-container">
        <div className="about-container">
          <h1 className="about-title">Plant based Dining</h1>
          <p className="about-description">
            Search around your city to find vegan and vegetarian friendly meals as well as resources.
            This includes restaurants, grocery stores, farmers market, and more! </p>
        </div>
        <div className="carousel-container">
          <Carousel
            // className="carousel-container"
            autoplay={true}
            autoplayInterval={3000}
          // wrapAround={true}
          >
            {photos.map((img, i) => {
              return <img className="carousel-image" src={img} key={i} alt='shows different food' width={300} height={100} />
            })}
          </Carousel>
        </div>
      </div>
    </div >
  );
}

// function mapStateToProps(state) {
//   if (!state) return {};
//   return {
//     listings: state.listings,
//   }
// }

// export default connect(mapStateToProps, { getListings, getCurrentUser, clearListings })(Landing);

// export default Landing