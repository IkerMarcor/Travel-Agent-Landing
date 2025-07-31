import { NavLink } from "react-router-dom";

export const NavBar = () => {

    const links = [
        { to: "/", label: "Home" },
        { to: "/blog", label: "Blog" },
        { to: "/packages", label: "Packages" },
        { to: "/contact", label: "Contact Us" },
        { to: "/about", label: "About Us" },
    ];
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Travel Agent</div>
        <ul className="flex space-x-4">
          {links.map(link => (
            <li key={link.to}>
              <NavLink to={link.to} className={({ isActive }) =>
                isActive ? "text-yellow-500" : "text-white hover:text-yellow-500 group"
              }>
                {link.label}
                <div className="bg-yellow-500 h-[2px] w-0 group-hover:w-full ease-in-out transition-all duration-500"/>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}