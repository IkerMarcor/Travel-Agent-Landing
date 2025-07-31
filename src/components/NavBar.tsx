import { NavLink } from "react-router-dom";

export const NavBar = () => {

    const links = [
        { to: "/", label: "Home" },
        { to: "/contactus", label: "Contact Us" }
    ];
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Travel Agent</div>
        <ul className="flex space-x-4">
          {links.map(link => (
            <li key={link.to}>
              <NavLink to={link.to} className={({ isActive }) =>
                isActive ? "text-yellow-500" : "text-white hover:text-yellow-500"
              }>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}