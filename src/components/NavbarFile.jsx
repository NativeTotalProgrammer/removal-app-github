import '../styles/NavbarFile.css';

export function NavbarComponent() {
  return(
    <header>
      <nav>
        <img src="./home-icon.png" alt="" />
        <ul>
          <a href="/#">How We Work</a>
          <a href="/#">Services</a>
          <a href="/#">Free Quote</a>
          <a href="/#">Contact</a>
        </ul>
      </nav>
    </header>
  );
};