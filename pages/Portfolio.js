import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Player from "../components/Player";
import { albumData } from "../data/albumData";

export default function Portfolio() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handlePrev = () => {
    setCarouselIndex((prev) => Math.max(prev - 3, 0));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => Math.min(prev + 3, albumData.length - 3));
  };

  const carouselItems = albumData.slice(carouselIndex, carouselIndex + 3);

  return (
    <>
      <Header />
      <div className="portfolio-container">
        <div className="portolio-header">
          <h1>Portfolio</h1>
        </div>

        <div className="portfolio-content">
          {albumData.slice(0, 3).map((album) => (
            <div key={album.id}>
              <h3 className="band-name">Band Name: {album.bandName}</h3>
              <h3 className="band-name">Work Done: {album.work}</h3>
              <div className="band-player">
                <Player src={album.src} />
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-container">
          <button onClick={handlePrev} className="carousel-arrow left">
            {"<"}
          </button>

          <div className="carousel">
            {carouselItems.map((album) => (
              <div key={album.id} className="carousel-item">
                <img
                  src="https://source.unsplash.com/random/?city,night"
                  alt={album.bandName}
                />
              </div>
            ))}

            <button onClick={handleNext} className="carousel-arrow right">
              {">"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
