import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

const NavItem = ({
  children,
  isActive,
  toUrl,
}: {
  children: ReactNode;
  isActive: boolean;
  toUrl: string;
}) => {
  return (
    <Link
      to={toUrl}
      className={`flex items-center justify-center transition-all duration-700 hover:text-[#EEEEEE] hover:duration-150 flex-1 h-[4rem] hover:bg-[#333333] z-[50] ${
        isActive ? "bg-[#333333] text-[#EEEEEE]" : "bg-white text-[#333333]"
      }`}
    >
      {children}
    </Link>
  );
};

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <div className="bg-[#FBFBFB] flex flex-col items-center justify-center">
        <header className="flex text-[#333333] fixed z-[50] top-0 left-0 items-center justify-around bg-white shadow-sm w-full">
          <NavItem toUrl="/" isActive={location.pathname === "/"}>
            Início
          </NavItem>
          <NavItem toUrl="/about" isActive={location.pathname === "/about"}>
            Sobre min
          </NavItem>
          <NavItem toUrl="/tasks" isActive={location.pathname === "/tasks"}>
            daily tasks
          </NavItem>
          <NavItem toUrl="/gallery" isActive={location.pathname === "/gallery"}>
            Galeria
          </NavItem>
          <NavItem toUrl="/games" isActive={location.pathname === "/games"}>
            Jogos
          </NavItem>
          <NavItem toUrl="/movies" isActive={location.pathname === "/movies"}>
            Filmes
          </NavItem>
          <NavItem
            toUrl="/playlists"
            isActive={location.pathname === "/playlists"}
          >
            Playlist
          </NavItem>
          <NavItem toUrl="/eris" isActive={location.pathname === "/eris"}>
            éris
          </NavItem>

          <NavItem
            toUrl="/remaining-money"
            isActive={location.pathname === "/remaining-money"}
          >
            remaining money
          </NavItem>
        </header>
      </div>
    </>
  );
};

export { Layout };
