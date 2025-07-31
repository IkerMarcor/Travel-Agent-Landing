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
    <nav className="fixed bg-sky-950/50 p-4 top-0 left-0 z-50 w-full backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Travel Agent Logo</div>
        <ul className="flex space-x-4">
          {links.map(link => (
            <li key={link.to}>
              <NavLink to={link.to} className={({ isActive }) =>
                isActive ? "text-yellow-500" : "text-white hover:text-yellow-500 group transition-colors duration-300"
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