import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import Player from "./Player";

export default function AlbumData({ albumData }) {
  if (!albumData) {
    return <FontAwesomeIcon icon={faSpinner} className="fa-spin" />;
  }

  const firstAlbums = albumData.slice(0, 3);

  return (
    <div className="portfolio-content">
      {firstAlbums.map((album) => (
        <div key={album.id}>
          <h3 className="band-name">Band Name: {album.bandName}</h3>
          <h3 className="band-name">Work Done: {album.work}</h3>
          <div className="band-player">
            <Player src={album.src} />
          </div>
        </div>
      ))}
    </div>
  );
}
