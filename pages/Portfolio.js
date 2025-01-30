import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { albumData } from "../data/albumData";
import AlbumData from "../components/AlbumData";

export default function Portfolio() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const itemsPerPage = 3;

  const maxIndex = Math.ceil();

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

        <AlbumData albumData={albumData} />

        <div className="carousel-container">
          <button onClick={handlePrev} className="carousel-arrow left">
            {"<"}
          </button>

          <div className="carousel">
            {carouselItems.map((album) => (
              <div key={album.id} className="carousel-item">
                <img src="https://picsum.photos/100/100" alt={album.bandName} />
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
