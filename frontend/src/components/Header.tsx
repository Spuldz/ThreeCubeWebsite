import { useNavigate } from 'react-router-dom';
import Logo from '../assets/3cube1.svg';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="headerContent">
        <div className="headerLogo">
          <img src={Logo} className="logo" alt=""></img>
          <p id="logoText">ThreeClub</p>
        </div>
        <div className="headerOptions">
          <li className="headerLi" onClick={() => navigate("/about")}>Par Mums</li>
          <li className="headerLi" onClick={() => navigate("/toys")}>Smart Toys</li>
          <li className="headerLi">C-APP</li>
          <li className="headerLi">#Reveal22</li>
        </div>

        <div className="headerLanguage">
          <select className="HeaderLanguageSelect">
            <option className="HeaderLanguageSelect">Lv</option>
            <option className="HeaderLanguageSelect">En</option>
            <option className="HeaderLanguageSelect">Et</option>
            <option className="HeaderLanguageSelect">Rus</option>
            <option className="HeaderLanguageSelect">De</option>
          </select>
        </div>
      </div>
    </header>
  );
}
