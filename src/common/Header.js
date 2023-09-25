import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav id="navContainer">
        <div className="navMain">
          <a id="community" href="#">
            커뮤니티
          </a>
          <a id="skillInformation" href="#">
            스킬정보
          </a>
        </div>
        <div className="navSub">
          <a>로그인</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
