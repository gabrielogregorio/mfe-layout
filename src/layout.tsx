import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChatIcon,
  DevIcon,
  DnaIcon,
  FinancingIcon,
  GalleryIcon,
  GamesIcon,
  HomeIcon,
  MusicIcon,
  TaskIcon,
  UxIcon,
} from "./icons";

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
      className={`text-base flex items-center py-[10px] px-[40px] font-semibold transition-all duration-700 hover:text-[#EEEEEE] hover:duration-150 flex-1  hover:bg-[#3f4252] z-[50] ${
        isActive ? "bg-[#3f4252] text-[#EEEEEE]" : "bg-[#2A2D3E] text-[#EEEEEE]"
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
      <div className="bg-[#2A2D3E] flex flex-col items-center justify-center w-full h-full">
        <h3 className="mt-[55px] text-left w-full text-base font-semibold px-[40px]">
          Introdução
        </h3>

        <div className="w-full">
          <NavItem toUrl="/" isActive={location.pathname === "/"}>
            <HomeIcon />

            <div className="ml-[28px]">Início</div>
          </NavItem>
        </div>

        <h3 className="mt-[55px] text-left w-full text-base font-semibold px-[40px]">
          Utilitários
        </h3>

        <div className="w-full">
          <NavItem
            toUrl="/remaining-money"
            isActive={location.pathname === "/remaining-money"}
          >
            <FinancingIcon />

            <div className="ml-[28px]"> Quanto vai sobrar?</div>
          </NavItem>

          <NavItem toUrl="/tasks" isActive={location.pathname === "/tasks"}>
            <TaskIcon />
            <div className="ml-[28px]"> Gerenciador de tasks</div>
          </NavItem>

          <NavItem toUrl="/tasks" isActive={location.pathname === "/tasks"}>
            <DevIcon />
            <div className="ml-[28px]"> Configs do vscode</div>
          </NavItem>

          <NavItem toUrl="/tasks" isActive={location.pathname === "/tasks"}>
            <ChatIcon />
            <div className="ml-[28px]"> Chatbot Yara</div>
          </NavItem>

          <NavItem toUrl="/tasks" isActive={location.pathname === "/tasks"}>
            <UxIcon />
            <div className="ml-[28px]"> Ajuda UX</div>
          </NavItem>
        </div>

        <h3 className="mt-[55px] text-left w-full text-base font-semibold px-[40px]">
          Entreterimento
        </h3>

        <div className="w-full">
          <NavItem
            toUrl="/playlists"
            isActive={location.pathname === "/playlists"}
          >
            <MusicIcon />
            <div className="ml-[28px]"> Playlist diversos</div>
          </NavItem>

          <NavItem
            toUrl="/playlists"
            isActive={location.pathname === "/playlists"}
          >
            <DnaIcon />
            <div className="ml-[28px]"> Pesquisa maluca</div>
          </NavItem>

          <NavItem toUrl="/games" isActive={location.pathname === "/games"}>
            <GamesIcon />
            <div className="ml-[28px]"> Jogos e review pessoal</div>
          </NavItem>

          <NavItem toUrl="/gallery" isActive={location.pathname === "/gallery"}>
            <GalleryIcon />
            <div className="ml-[28px]"> Galeria</div>
          </NavItem>

          <NavItem toUrl="/eris" isActive={location.pathname === "/eris"}>
            <ChatIcon />
            <div className="ml-[28px]"> Chatbot Éris - troll</div>
          </NavItem>
        </div>
      </div>
    </>
  );
};

export { Layout };
