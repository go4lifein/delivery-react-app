import logo from "./../images/logo.png";
export default function Header() {
  return (
    <div className="flex space-bw middle header p-10">
      <img src={logo} alt="logo" className="logo" />

      <h1 className="heading">Trace your milk's journey.</h1>
    </div>
  );
}
