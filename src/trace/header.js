import "./header.scss";
import logo from "./fonts/g4l.svg";
export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />

      <h1 className="heading">Trace your milk's journey.</h1>
    </div>
  );
}
