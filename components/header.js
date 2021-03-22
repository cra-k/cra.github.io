import Link from "next/link";

import { craSocialLinks } from "../lib/utils";

export default function Header() {
  return (
    <>
      <header className="app-header">
        <nav className="app-header-nav flex">
          <Link href="/">
            <a className="app-header-left-items flex">
              <HeaderLogo />
            </a>
          </Link>

          <div className="app-header-right-items-parent flex">
            <HeaderLeftItems />
          </div>
        </nav>
      </header>
    </>
  );
}

function HeaderLogo() {
  return (
    <>
      <img src="/images/cra-icon.png" alt="CRA's logo" className="acem-icon" />
      <div className="app-nav-title flex">
        <span className="app-nav-title-item cra">CRA</span>
        <span className="app-nav-title-item acem">ACEM</span>
        <span className="app-nav-title-item kenitra">KENITRA</span>
      </div>
    </>
  );
}

function HeaderLeftItems() {
  return (
    <div className="app-header-right-items flex">
      <label id="switch" className="switch flex">
        <input type="checkbox" id="slider" className="hidden" />
        <span className="slider round flex"></span>
      </label>
      <div className="app-header-social-container">
        <i className="fab fa-github-square app-header-social up app-header-github-icon"></i>
        <i className="fab fa-facebook-square app-header-social up app-header-facebook-icon"></i>
        <i className="fab fa-whatsapp-square app-header-social up app-header-whatsapp-icon"></i>
      </div>
      {/* <i className="fad fa-arrow-alt-from-bottom arrow"></i> */}
      {/* <Link href={craSocialLinks.githubRepo()}>
        <a className="app-header-github-btn" id="app-github-link">
          <i className="app-header-github-icon fab fa-github"></i>
        </a>
      </Link> */}
    </div>
  );
}
