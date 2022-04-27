import { Link } from "react-router-dom";

const link = [
  { to: "/", title: "home", classname: "home" },
  { to: "/section/history", title: "history", classname: "history" },
  {
    to: "/section/technology",
    title: "technology",
    classname: "technology",
  },
  { to: "/section/mystery", title: "mystery", classname: "mystery" },
  {
    to: "/section/mythology",
    title: "mythology",
    classname: "mythology",
  },
];

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        {/* {link.map((el) => {
          return (
            <button className={el.classname}>
              {" "}
              <Link to={el.to}>{el.title}</Link>{" "}
            </button>
          );
        })} */}
        <button className="home">
          <Link to="/">Home</Link>
        </button>
        <button className="history">
          <Link to={"/section/history"}>History</Link>
        </button>
        <button className="mystery">
          <Link to={"/section/mystery"}>mystery</Link>
        </button>
        <button className="mythology">
          <Link to={"/section/mythology"}>mythology</Link>
        </button>
        <button className="technology">
          <Link to={"/section/technology"}>technology</Link>
        </button>
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
      </div>
    </>
  );
};