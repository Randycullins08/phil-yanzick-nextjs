import Link from "next/link";

import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  function Mailto({ email, subject, ...props }) {
    return (
      <Link legacyBehavior href={`mailto:${email}?subject=${subject || ""}`}>
        {props.children}
      </Link>
    );
  }

  return (
    <div className="footer-container">
      <div className="footer-header">
        <h3>Phillip Yanzick</h3>
      </div>

      <div className="footer-content">
        <a href="https://www.instagram.com/dingus666/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <Mailto email="phillipyanzick@gmail.com" subject="Hello">
          phillipyanzick@gmail.com
        </Mailto>
      </div>
    </div>
  );
}
