import Logo from "../assets/3cube1.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="headerContent">
        <div className="headerLogo"></div>
        <div className="headerOptions">
          <li className="headerLi">Par Mums</li>
          <li className="headerLi">Smart Toys</li>
          <li className="headerLi">C-APP</li>
          <li className="headerLi">#Reveal22</li>
        </div>

        <div className="headerLanguage">
          <select className="HeaderLanguageSelect">
            <option>Lv</option>
          </select>
        </div>
      </div>
    </header>
  );
}
