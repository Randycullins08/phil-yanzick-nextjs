import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StudioCarousel from "../components/StudioCarousel";
import { studioImages } from "../data/studioImages";

export default function Studio() {
  return (
    <>
      <Header />
      <div className="studio-container">
        <div className="studio-header">
          <h1>Studio</h1>
        </div>

        <div className="studio-content">
          <StudioCarousel images={studioImages} />
        </div>

        <div className="gear-header">
          <h2>Gear</h2>
        </div>

        <div className="gear-content">
          <div className="recording">
            <h3>Recording</h3>

            <ul>
              <li>DAW: protools 12</li>
              <li>Focusrite ISA Dual Mono</li>
              <li>Stamchild (Fairchild clone)</li>
              <li>Distressor</li>
              <li>1176 warm</li>
              <li>8 channel art tube pre</li>
              <li>AVID protools carbon interface</li>
              <li>Presonus sceptre s8 monitors</li>
            </ul>
          </div>

          <div className="mics">
            <h3>Mics</h3>

            <ul>
              <li>STAM u87</li>
              <li>Royer R-121 Ribbon Mic</li>
              <li>Neumann tlm102 Stereo Pair</li>
              <li>Sennheiser 421 x2</li>
              <li>Shure 57 x7</li>
              <li>Shure 58 x3</li>
              <li>Shure Beta 58</li>
              <li>Shure Beta 52</li>
              <li>Shure sm7b</li>
              <li>Beyerdynamic m88 tg</li>
              <li>Audio tech At4040 Sterio Pair</li>
              <li>Electro Voice re10</li>
              <li>Royer 121 Russian Clone Stereo Pair</li>
              <li>Golden age FC1 Stereo Pair</li>
              <li>Telefunken M81</li>
              <li>Sennheiser e835 x4</li>
              <li>Cloudlifter X2</li>
            </ul>
          </div>

          <div className="guitar-amps">
            <h3>Guitar Amps</h3>

            <ul>
              <li>Ampeg Super Jet SJ12T</li>
              <li>1974 Super Reverb</li>
              <li>Marshall 1988 Gold Face Jubilee</li>
              <li>Dr Z Maz 18</li>
              <li>Morgan 30/800</li>
              <li>Mesa Big Block 750</li>
              <li>Darkglass Micro Tube 900</li>
              <li>Mesa Boogie 4x12 Cab with V30s</li>
              <li>Mesa Boogie 4x12 Bass Cab</li>
              <li>Marshall 4x12 JCM 800 Lead 1960</li>
              <li>Dr Z 2x12 Z-Best Cab (closed back)</li>
              <li>Custom 4x10 Ported Guitar Cab </li>
              <li>Custom 2x12 with Greenbacks (open back)</li>
              <li>1964 Fender Bassman With Matching 2x12 Cab</li>
              <li>2x12 1974 Creamback 25 Watt</li>
            </ul>
          </div>

          <div className="guitars">
            <h3>Guitars</h3>

            <ul>
              <li>1974 Gibson Les Paul Custom</li>
              <li>1989 American Pro Stratocaster</li>
              <li>2017 American Pro Telecaster</li>
              <li>Warmoth/All Parts Stratocaster Build</li>
              <li>With 2002 American Pro Noiseless Pickups</li>
              <li>
                Fender 2010 Mexican Made Jazz Master With American Jazz Master
                Pick Ups and Wiring.
              </li>
              <li>Fender All Parts P Bass With 62 Reissue Pickups</li>
              <li>Fender Mexican Made Mustang</li>
              <li>Gibson 1964 LGO</li>
              <li>1991 Gibson EB-Bass</li>
              <li>2022 Fender Telecaster Deluxe MIM</li>
              <li>2010 Epiphone casino semi hollow</li>
            </ul>
          </div>

          <div className="pedals">
            <h3>Pedals</h3>

            <ul>
              <li>Klone Clone Centaur</li>
              <li>Pedal Monsters Klone/Superbolt</li>
              <li>Blues Driver</li>
              <li>Swollen Pickle</li>
              <li>Dd20 Giga Delay</li>
              <li>Jhs Pink Panther</li>
              <li>Jhs Colour Box v1</li>
              <li>Small Clone Chorus</li>
              <li>Strymon Flint Reverb and Tremolo</li>
              <li>Dispatch Master Delay/Reverb</li>
              <li>Darkglass b3k v2</li>
              <li>Waza Dimension C Chorus</li>
              <li>Ibanez TS808 (with the fancy chip)</li>
              <li>Big Muff Fuzz</li>
              <li>Earthquaker Devices Plumes</li>
              <li>Octave Multiplexor</li>
              <li>Micro POG</li>
              <li>Strymon Isolated Power Supplies X2</li>
            </ul>
          </div>

          <div className="drum-gear">
            <h3>Drum Gear</h3>

            <ul>
              <li>
                Tama Star Classic 22"x20" kick, 10", 12", 14" toms. 14" x 5"
                snare
              </li>
              <li>1964 Ludwig Maple Marching Snare 15×12</li>
              <li>Tama SLP Steal 14×8</li>
              <li>Sjc Brass Snare 14×6.5</li>
              <li>Pork Pie Acrylic 14×5</li>
              <li>Mapex Mars Birch Kit</li>
              <li>K Series Zildjian 20” Ride</li>
              <li>K Dry Series Zildjian 14” Hi Hats</li>
              <li>A Custom Zildjian 20” Ride</li>
              <li>Sabian 24” Thin Ride</li>
              <li>TRX 24” Ride</li>
              <li>Zildjian A 24” Ping Ride</li>
              <li>A Custom Zildjian 17” Crash</li>
              <li>A Custom Zildjian 19” Thin Crash</li>
              <li>K Custom 19” Sweet Crash</li>
              <li>A Custom Zildjian 14” New Beat Hi Hats</li>
              <li>14" A Custom Zildjian Hi Hats</li>
              <li>20" 1980 A Zildjian</li>
              <li>C&C dirty copper over steel Snare 14”x5”</li>
            </ul>
          </div>

          <div className="inspiration">
            <h3>Inspiration</h3>
            <Link href="/Inspiration">Puffco Peak</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
