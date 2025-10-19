import { NavLink, Link } from "react-router";

function Nav() {
  return (
    <header>
      <Link to="/">
        <h1>CRUD App</h1>
      </Link>
      <nav>
        <NavLink to="/posts">posts</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/contact">contact</NavLink>
      </nav>
    </header>
  );
}
export default Nav;
