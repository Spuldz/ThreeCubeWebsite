import Logo from "../assets/3cube1.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="headerContent">
        <div className="headerLogo">
          <img src={Logo} className="logo"></img>
          <p id="logoText">ThreeClub</p>
        </div>
        <div className="headerOptions">
          <li className="headerLi">Par Mums</li>
          <li className="headerLi">Smart Toys</li>
          <li className="headerLi">C-APP</li>
          <li className="headerLi">#Reveal22</li>
        </div>

        <div className="headerLanguage">
          <select className="HeaderLanguageSelect">
            <option className="HeaderLanguageSelect">Lv</option>
          </select>
        </div>
      </div>
    </header>
  );
}
