import { NavLink } from "./NavLink";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Header() {
  const router = useRouter();

  let activeStyle = {
    textDecoration: "underline",
    textUnderlineOffset: "0.5em",
  };
  return (
    <>
      <Head>
        <title>Phillip Yanzick</title>
      </Head>
      <div className="header-container">
        <div className="header-title">
          <h1>
            <Link href="/">Phillip Yanzick</Link>
          </h1>
        </div>

        <div className="header-links">
          <NavLink
            href="/"
            style={router.pathname === "/" ? activeStyle : null}
          >
            Home
          </NavLink>
          <NavLink
            href="/Studio"
            style={router.pathname === "/Studio" ? activeStyle : null}
          >
            Studio
          </NavLink>
          <NavLink
            href="/Portfolio"
            style={router.pathname === "/Portfolio" ? activeStyle : null}
          >
            Portfolio
          </NavLink>
          <NavLink
            href="/Contact"
            style={router.pathname === "/Contact" ? activeStyle : null}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
}
