import "./Header.scss";
export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header_bg">
          <div className="header_menu">
            <p className="header_text">WELCOME</p>
            <div className="header_li">
            <div>
                <span className="header_vl"></span>
              </div>
              <div>
                <ul>
                  <li>about me</li>
                  <li>education</li>
                  <li>career</li>
                  <li>skills</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
