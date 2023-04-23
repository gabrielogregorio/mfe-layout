import "./layout.css";

const Layout = () => {
  return (
    <>
      <header className="mfe-layout-header">
        Gerenciador de microfrontends
      </header>

      <div className="mfe-layout-center">
        <aside className="mfe-layout-menu">
          <button type="button" className="mfe-layout-menu-item">
            Éris
          </button>

          <button type="button" className="mfe-layout-menu-item">
            Preferências
          </button>
        </aside>

        <main id="main-content"></main>
      </div>
    </>
  );
};

export { Layout };
