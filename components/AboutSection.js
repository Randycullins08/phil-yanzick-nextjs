import Link from "next/link";

export default function AboutSection() {
  return (
    <div className="about-section-container">
      <div className="image-wrapper">
        <img src="/img/voodoo.jpg" alt="phil" />
      </div>

      <div className="about-content-wrapper">
        <div className="bio-wrapper">
          <h3>Hey, I’m Phillip!</h3>

          <p>
            I’m a music and sound producer operating from the great state of
            Montana. I have a background in engineering, mixing, and mastering
            bands from the Midwest, and Pacific Northwest. I have a passion for
            helping bands and artists realize their goals and the sounds they
            are trying to capture.
          </p>

          <p>
            In the early stages of my love affair with music, I shared the
            common struggle of many Montana DIY bands and artists in gathering
            the resources necessary to produce a quality album. I initially
            started recording my own bands and ideas as a way to document
            progress while I saved money for sessions with established studios,
            but I quickly became enchanted by every aspect of audio production.
          </p>

          <p>
            I have spent years studying best practices and accumulating
            professional audio equipment, and along the way have helped dozens
            of bands and artists turn their ideas into tangible, marketable
            content.
          </p>

          <p>
            My studio has evolved into a “destination studio” of sorts, located
            in sleepy Basin MT, a small eclectic town nestled in the Central
            Montana Rocky Mountains. Although remote, my studio space is ideal
            if you’d like to create and capture your work in an environment
            close to nature that is free from the distractions and commotion of
            city life.
          </p>
        </div>

        <Link href="/Contact">Book The Space!</Link>
      </div>
    </div>
  );
}
