import Footer from "../components/Footer";
import Header from "../components/Header";
import Player from "../components/Player";
import { albumData } from "../data/albumData";

export default function Portfolio() {
  return (
    <>
      <Header />
      <div className="portfolio-container">
        <div className="portolio-header">
          <h1>Portfolio</h1>
        </div>

        <div className="portfolio-content">
          {albumData.map((album) => (
            <div key={album.id}>
              <h3 className="band-name">Band Name: {album.bandName}</h3>
              <h3 className="band-name">Work Done: {album.work}</h3>
              <div className="band-player">
                <Player src={album.src} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
