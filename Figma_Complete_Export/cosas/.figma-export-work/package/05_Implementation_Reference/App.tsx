import { useEffect, useState, type ReactNode } from "react";

type Screen =
  | "splash"
  | "welcome"
  | "consoles"
  | "create-profile"
  | "home"
  | "match"
  | "request"
  | "sent"
  | "chat"
  | "exchanges"
  | "games"
  | "search"
  | "profile"
  | "rating"
  | "settings"
  | "login"
  | "return";

const A = "/assets";
const assets = {
  welcome: `${A}/dcc58.png`,
  avatarMateo: `${A}/c197f.png`,
  avatarSofia: `${A}/96bfe.png`,
  avatarSofiaAlt: `${A}/e72de.png`,
  avatarAndres: `${A}/13139.png`,
  avatarCarlos: `${A}/5c111.png`,
  god: `${A}/41245.png`,
  elden: `${A}/cc4f9.png`,
  mario: `${A}/8542a.png`,
  spider: `${A}/a124e.png`,
  last: `${A}/4140b.png`,
  ghost: `${A}/05574.png`,
  cyber: `${A}/1a11d.png`,
  zelda: `${A}/32819.png`,
  hogwarts: `${A}/5825b.png`,
  searchOwner1: `${A}/85e7e.png`,
  searchOwner2: `${A}/e83a9.png`,
  gamepad: `${A}/a5c75.svg`,
  back: `${A}/4a2a2.svg`,
  matchBack: `${A}/94ebb.svg`,
  matchMore: `${A}/2b540.svg`,
  bell: `${A}/d6100.svg`,
  ps: `${A}/88d1e.svg`,
  xbox: `${A}/6fbff.svg`,
  nintendo: `${A}/df23a.svg`,
  check: `${A}/dc106.svg`,
  userPlaceholder: `${A}/7691a.svg`,
  mapPin: `${A}/52e8b.svg`,
  repeat: `${A}/81721.svg`,
  success: `${A}/5dc89.svg`,
  chatAvatar: `${A}/32fa5.png`,
  chatBack: `${A}/a0aff.svg`,
  chatMore: `${A}/57fc0.svg`,
  chatMap: `${A}/03acd.svg`,
  chatDecorations: `${A}/7b06e.svg`,
  plus: `${A}/fea88.svg`,
  send: `${A}/22485.svg`,
  searchIcon: `${A}/14880.svg`,
  profileStar: `${A}/85276.svg`,
  profileStarEmpty: `${A}/c0282.svg`,
  ratingCheck: `${A}/724cd.svg`,
  ratingStar: `${A}/7b22a.svg`,
  ratingStarEmpty: `${A}/ec885.svg`,
  chevron: `${A}/b63a0.svg`,
  returnCheck: `${A}/bf098.svg`,
  exchangeArrow: `${A}/d5ab4.svg`,
  addGame: `${A}/9e32b.svg`,
};

const navIcons: Record<string, { idle: string; active: string }> = {
  home: { idle: `${A}/3d070.svg`, active: `${A}/5ce24.svg` },
  search: { idle: `${A}/6386d.svg`, active: `${A}/9c8b7.svg` },
  games: { idle: `${A}/e44b7.svg`, active: `${A}/24217.svg` },
  exchanges: { idle: `${A}/e1194.svg`, active: `${A}/a1117.svg` },
  profile: { idle: `${A}/e7699.svg`, active: `${A}/84566.svg` },
};

function Brand({ large = false }: { large?: boolean }) {
  return (
    <div className={`brand ${large ? "brand--large" : ""}`}>
      <span className="brand__icon">
        <img src={assets.gamepad} alt="" />
      </span>
      <span>
        <strong>
          Play<span>Swap</span>
        </strong>
        <small>COCHABAMBA</small>
      </span>
    </div>
  );
}

function PrimaryButton({
  children,
  onClick,
  secondary = false,
}: {
  children: ReactNode;
  onClick?: () => void;
  secondary?: boolean;
}) {
  return (
    <button className={secondary ? "button button--secondary" : "button"} onClick={onClick}>
      {children}
    </button>
  );
}

function Field({
  label,
  children,
  active = false,
  tall = false,
}: {
  label: string;
  children: ReactNode;
  active?: boolean;
  tall?: boolean;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <div
        className={`field__input ${active ? "field__input--active" : ""} ${tall ? "field__input--tall" : ""}`}
      >
        {children}
      </div>
    </label>
  );
}

const navItems: Array<[string, string, Screen]> = [
  ["home", "Inicio", "home"],
  ["search", "Buscar", "search"],
  ["games", "Mis juegos", "games"],
  ["exchanges", "Intercambios", "exchanges"],
  ["profile", "Perfil", "profile"],
];

function BottomNav({ active, go }: { active: string; go: (s: Screen) => void }) {
  return (
    <nav className="bottom-nav">
      {navItems.map(([key, label, screen]) => (
        <button key={key} className={active === key ? "active" : ""} onClick={() => go(screen)}>
          <img src={active === key ? navIcons[key].active : navIcons[key].idle} alt="" />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}

function AppScreen({
  children,
  nav,
  go,
  light = false,
  className = "",
}: {
  children: ReactNode;
  nav?: string;
  go: (s: Screen) => void;
  light?: boolean;
  className?: string;
}) {
  return (
    <main className={`screen ${light ? "screen--light" : ""} ${className}`}>
      <div className="screen__content">{children}</div>
      {nav && <BottomNav active={nav} go={go} />}
    </main>
  );
}

function BackHeader({
  title,
  subtitle,
  back,
}: {
  title: string;
  subtitle?: string;
  back: () => void;
}) {
  return (
    <header className="back-header">
      <button className="icon-button" onClick={back}>
        <img src={assets.back} alt="" />
      </button>
      <div>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </header>
  );
}

function GameCover({
  src,
  title,
  platform,
  color = "mint",
}: {
  src: string;
  title: string;
  platform?: string;
  color?: "mint" | "purple" | "pink";
}) {
  return (
    <article className="game-card">
      <img src={src} alt="" />
      <strong title={title}>{title}</strong>
      {platform && <small className={`tag tag--${color}`}>{platform}</small>}
    </article>
  );
}

function Splash({ go }: { go: (s: Screen) => void }) {
  useEffect(() => {
    const timer = window.setTimeout(() => go("welcome"), 850);
    return () => window.clearTimeout(timer);
  }, [go]);
  return (
    <AppScreen go={go} className="splash">
      <Brand large />
      <p>Versión 1.0.4 · Cochabamba</p>
    </AppScreen>
  );
}

function Welcome({ go }: { go: (s: Screen) => void }) {
  return (
    <AppScreen go={go} className="welcome">
      <div className="welcome__body">
        <Brand />
        <img className="welcome__hero" src={assets.welcome} alt="Amigos compartiendo videojuegos" />
        <div>
          <h1>
            Intercambia juegos.
            <br />
            Descubre nuevos
            <br />
            mundos.
          </h1>
          <p>
            Encuentra a gamers cerca de ti en Cochabamba. Presta tus juegos de siempre y juega a lo
            que siempre quisiste gratis.
          </p>
        </div>
      </div>
      <div className="bottom-actions">
        <PrimaryButton onClick={() => go("consoles")}>Comenzar</PrimaryButton>
        <button className="text-link muted" onClick={() => go("login")}>
          ¿Ya tienes cuenta? <b>Inicia sesión</b>
        </button>
      </div>
    </AppScreen>
  );
}

function Progress({ value }: { value: number }) {
  return (
    <div className="progress">
      <span style={{ width: `${value}%` }} />
    </div>
  );
}

function Consoles({ go }: { go: (s: Screen) => void }) {
  const [selected, setSelected] = useState(["PlayStation 5", "PlayStation 4"]);
  const options = [
    "PlayStation 5",
    "PlayStation 4",
    "Nintendo Switch",
    "Nintendo Switch 2",
    "Xbox One & Series",
  ];
  return (
    <AppScreen go={go} className="onboarding console-selection">
      <section>
        <Progress value={34} />
        <h2>¿Qué consolas tienes?</h2>
        <p>Selecciona todas las plataformas en las que te gustaría intercambiar juegos.</p>
        <div className="console-list">
          {options.map((name) => {
            const active = selected.includes(name);
            return (
              <button
                key={name}
                className={active ? "selected" : ""}
                onClick={() =>
                  setSelected(active ? selected.filter((x) => x !== name) : [...selected, name])
                }
              >
                <span className="console-icon">
                  <img
                    src={
                      name.includes("Xbox")
                        ? assets.xbox
                        : name.includes("Nintendo")
                          ? assets.nintendo
                          : assets.ps
                    }
                    alt=""
                  />
                </span>
                <strong>{name}</strong>
                {active && <img className="console-check" src={assets.check} alt="" />}
              </button>
            );
          })}
        </div>
      </section>
      <div className="bottom-actions">
        <PrimaryButton onClick={() => go("create-profile")}>Continuar</PrimaryButton>
      </div>
    </AppScreen>
  );
}

function CreateProfile({ go }: { go: (s: Screen) => void }) {
  return (
    <AppScreen go={go} className="onboarding profile-creation">
      <section>
        <Progress value={68} />
        <h2>Crea tu perfil</h2>
        <p>Queremos que tengas la mejor experiencia conectando con tu comunidad local.</p>
        <div className="avatar-picker">
          <span>
            <img src={assets.userPlaceholder} alt="" />
          </span>
          <div>
            <b>Foto de perfil</b>
            <small>Sube una imagen para tu cuenta</small>
          </div>
        </div>
        <div className="form-stack">
          <Field label="Nombre Completo">Mateo Claros</Field>
          <Field label="Zona / Barrio (Cochabamba)" active>
            Queru Queru (Zona Norte)
            <img className="field-icon" src={assets.mapPin} alt="" />
          </Field>
          <Field label="Biografía / ¿Qué buscas jugar?" tall>
            Hola! Juego principalmente en PS5. Busco intercambiar RPGs y juegos de aventura como
            Elden Ring y God of War.
          </Field>
        </div>
      </section>
      <div className="bottom-actions">
        <PrimaryButton onClick={() => go("home")}>Crear perfil</PrimaryButton>
      </div>
    </AppScreen>
  );
}

function MatchCard({ second = false, onClick }: { second?: boolean; onClick: () => void }) {
  const games = second ? [assets.last, assets.ghost] : [assets.elden, assets.mario, assets.spider];
  return (
    <button className={`match-card ${second ? "" : "match-card--active"}`} onClick={onClick}>
      <div className="person-row">
        <img src={second ? assets.avatarAndres : assets.avatarSofia} alt="" />
        <span>
          <strong>{second ? "Andrés Rocha" : "Sofía Valenzuela"}</strong>
          <small>{second ? "Cala Cala · a 4.1 km" : "Queru Queru · a 2.3 km"}</small>
        </span>
        <b>{second ? "75% Compatible" : "100% Compatible"}</b>
      </div>
      <label>TIENE DISPONIBLE:</label>
      <div className="cover-row">
        {games.map((game, i) => (
          <img key={game} src={game} alt="" />
        ))}
        <span>+{second ? 2 : 4}</span>
      </div>
      <footer>
        <span className="tag tag--purple">{second ? "PS4" : "PS5"}</span>
        {!second && <b>¡Ella busca lo que tú tienes!</b>}
      </footer>
    </button>
  );
}

function Home({ go }: { go: (s: Screen) => void }) {
  return (
    <AppScreen go={go} nav="home" className="with-nav home-screen">
      <header className="home-header">
        <img src={assets.avatarMateo} alt="" />
        <span>
          Hola de nuevo,<strong>Mateo</strong>
        </span>
        <button>
          <img src={assets.bell} alt="" />
        </button>
      </header>
      <h2>Coincidencias cercanas</h2>
      <p>Encontrados en Cochabamba basándonos en tu biblioteca</p>
      <div className="match-list">
        <MatchCard onClick={() => go("match")} />
        <MatchCard second onClick={() => go("match")} />
      </div>
    </AppScreen>
  );
}

function MatchDetail({ go }: { go: (s: Screen) => void }) {
  return (
    <AppScreen go={go} className="detail-screen">
      <header className="match-header">
        <button onClick={() => go("home")}>
          <img src={assets.matchBack} alt="" />
        </button>
        <h1>Comparación de biblioteca</h1>
        <img src={assets.matchMore} alt="" />
      </header>
      <div className="profile-strip">
        <img src={assets.avatarSofiaAlt} alt="" />
        <span>
          <b>Sofía Valenzuela</b>
          <small>Activa ahora en Queru Queru</small>
        </span>
        <strong>100%</strong>
      </div>
      <div className="comparison">
        <div>
          <h3>TÚ TIENES</h3>
          <div>
            <img src={assets.god} alt="" />
            God of War Ragnarok
          </div>
        </div>
        <div>
          <h3>SOFÍA TIENE</h3>
          <div>
            <img src={assets.elden} alt="" />
            Elden Ring
          </div>
        </div>
        <div>
          <h3>TÚ BUSCAS</h3>
          <div className="purple">
            <img src={assets.elden} alt="" />
            Elden Ring
          </div>
        </div>
        <div>
          <h3>SOFÍA BUSCA</h3>
          <div className="purple">
            <img src={assets.god} alt="" />
            God of War Ragnarok
          </div>
        </div>
      </div>
      <div className="bottom-actions double">
        <PrimaryButton onClick={() => go("request")}>Solicitar intercambio</PrimaryButton>
        <PrimaryButton secondary onClick={() => go("chat")}>
          Enviar mensaje
        </PrimaryButton>
      </div>
    </AppScreen>
  );
}

function Request({ go }: { go: (s: Screen) => void }) {
  const [days, setDays] = useState("14 días");
  return (
    <AppScreen go={go} className="request">
      <div>
        <h2>Solicitar Intercambio</h2>
        <p>Elige los términos del intercambio con Sofía.</p>
      </div>
      <div className="segmented">
        <button className="active">Intercambio</button>
        <button>Préstamo temporal</button>
      </div>
      <section>
        <label>DURACIÓN RECOMENDADA</label>
        <div className="chips">
          {["7 días", "14 días", "30 días", "Personalizada"].map((x) => (
            <button className={days === x ? "active" : ""} onClick={() => setDays(x)} key={x}>
              {x}
            </button>
          ))}
        </div>
      </section>
      <div className="selected-games">
        <label>JUEGOS SELECCIONADOS</label>
        <div>
          <span>
            <img src={assets.god} alt="" />
            God of War
          </span>
          <img className="repeat-icon" src={assets.repeat} alt="" />
          <span>
            <img src={assets.elden} alt="" />
            Elden Ring
          </span>
        </div>
      </div>
      <div className="bottom-actions double">
        <PrimaryButton onClick={() => go("sent")}>Enviar solicitud</PrimaryButton>
        <PrimaryButton secondary onClick={() => go("match")}>
          Cancelar
        </PrimaryButton>
      </div>
    </AppScreen>
  );
}

function Sent({ go }: { go: (s: Screen) => void }) {
  return (
    <AppScreen go={go} className="success-screen">
      <div className="success-icon">
        <img src={assets.success} alt="" />
      </div>
      <h1>¡Solicitud Enviada!</h1>
      <p>
        Le hemos avisado a Sofía. Te notificaremos en cuanto acepte los términos del intercambio.
      </p>
      <div className="bottom-actions">
        <PrimaryButton onClick={() => go("home")}>Volver al inicio</PrimaryButton>
      </div>
    </AppScreen>
  );
}

function Chat({ go }: { go: (s: Screen) => void }) {
  const [light, setLight] = useState(false);
  const [text, setText] = useState("");
  return (
    <AppScreen go={go} nav="home" light={light} className="chat">
      <header className="chat-header">
        <button onClick={() => go("match")}>
          <img src={assets.chatBack} alt="" />
        </button>
        <img src={assets.chatAvatar} alt="" />
        <span>
          <b>Sofía Valenzuela</b>
          <small>Activa ahora</small>
        </span>
        <button onClick={() => setLight(!light)}>
          <img src={assets.chatMore} alt="" />
        </button>
      </header>
      <div className="proposal">
        <span>
          <img src={assets.chatMap} alt="" />
        </span>
        <div>
          <b>¿Listos para acordar el punto?</b>
          <small>Proponer lugar de encuentro en Cochabamba</small>
        </div>
        <button>Acordar</button>
      </div>
      <div className="messages">
        <div className="message other">
          ¡Hola Mateo! Sí, tengo el Elden Ring disponible para intercambio. Me interesa mucho tu God
          of War.<small>10:02 AM</small>
        </div>
        <div className="message mine">
          Buenísimo. ¿Qué te parece si nos encontramos en el Plaza de Cala Cala o por el Cine Center
          de la Oquendo?<small>10:05 AM</small>
        </div>
        <div className="message other">
          El Cine Center me queda perfecto por las tardes. ¿Puedes hoy a las 5:30 PM?
          <small>10:07 AM</small>
        </div>
      </div>
      <div className="chat-input">
        <button>
          <img src={assets.plus} alt="" />
        </button>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribe un mensaje..."
        />
        <button>
          <img src={assets.send} alt="" />
        </button>
      </div>
    </AppScreen>
  );
}

function Exchanges({ go }: { go: (s: Screen) => void }) {
  return (
    <AppScreen go={go} nav="exchanges" className="with-nav">
      <h1>Tus Intercambios</h1>
      <p>Gestiona tus propuestas y préstamos de juegos</p>
      <div className="segmented thirds">
        <button>Pendientes</button>
        <button className="active">Activos</button>
        <button>Historial</button>
      </div>
      <button className="exchange-card" onClick={() => go("return")}>
        <div className="person-row">
          <img src={assets.avatarSofia} alt="" />
          <span>
            <strong>Sofía Valenzuela</strong>
            <small>Queru Queru · Hace 2 días</small>
          </span>
          <b>Activo</b>
        </div>
        <div className="trade-games">
          <GameCover src={assets.elden} title="Elden Ring" />
          <img className="exchange-arrow" src={assets.exchangeArrow} alt="" />
          <GameCover src={assets.god} title="God of War" />
          <span>
            Tiempo restante:<strong>12 Días</strong>
          </span>
        </div>
      </button>
      <button className="exchange-card" onClick={() => go("chat")}>
        <div className="person-row">
          <img src={assets.avatarCarlos} alt="" />
          <span>
            <strong>Carlos Mendoza</strong>
            <small>Cala Cala · Ayer</small>
          </span>
          <b className="purple-text">Pendiente</b>
        </div>
        <div className="trade-games">
          <GameCover src={assets.spider} title="Spider-Man 2" />
          <img className="exchange-arrow" src={assets.exchangeArrow} alt="" />
          <GameCover src={assets.ghost} title="Demon’s Souls" />
          <span className="purple-text">Esperando confirmación</span>
        </div>
      </button>
    </AppScreen>
  );
}

function Games({ go }: { go: (s: Screen) => void }) {
  return (
    <AppScreen go={go} nav="games" className="with-nav">
      <h1>Mis Juegos</h1>
      <p>Gestiona tu biblioteca personal</p>
      <div className="tabs">
        <button className="active">Tengo (4)</button>
        <button>Busco (2)</button>
      </div>
      <div className="games-grid">
        <GameCover src={assets.god} title="God of War Ragnarok" platform="PS5" />
        <GameCover src={assets.cyber} title="Cyberpunk 2077" platform="XBOX" color="purple" />
        <GameCover
          src={assets.zelda}
          title="Zelda: Tears of the Kingdom"
          platform="SWITCH"
          color="pink"
        />
        <GameCover src={assets.elden} title="Elden Ring" platform="PS5" />
      </div>
      <button className="fab">
        <img src={assets.addGame} alt="" />
      </button>
    </AppScreen>
  );
}

function Search({ go }: { go: (s: Screen) => void }) {
  const [platform, setPlatform] = useState("PS5");
  return (
    <AppScreen go={go} nav="search" className="with-nav search-screen">
      <div className="search-box">
        <img src={assets.searchIcon} alt="" />
        <input placeholder="Buscar juegos o gamers..." />
      </div>
      <div className="chips compact">
        {["PS5", "PS4", "Xbox", "Switch", "1 km", "5 km", "10 km"].map((x) => (
          <button className={platform === x ? "active" : ""} onClick={() => setPlatform(x)} key={x}>
            {x}
          </button>
        ))}
      </div>
      <h3>RESULTADOS EN COCHABAMBA</h3>
      {[
        [
          "Hogwarts Legacy",
          assets.hogwarts,
          assets.searchOwner1,
          "Disponible con Lucas G.",
          "A 1.5 km (América Este)",
          "PS5",
        ],
        [
          "Super Mario Odyssey",
          assets.mario,
          assets.searchOwner2,
          "Disponible con Camila N.",
          "A 3.2 km (Sarco)",
          "SWITCH",
        ],
      ].map((row) => (
        <button className="search-result" key={row[0]} onClick={() => go("match")}>
          <img src={row[1]} alt="" />
          <div>
            <b>{row[0]}</b>
            <span>
              <img src={row[2]} alt="" />
              {row[3]}
            </span>
            <small>
              <i>{row[5]}</i>
              {row[4]}
            </small>
          </div>
        </button>
      ))}
    </AppScreen>
  );
}

function Profile({ go }: { go: (s: Screen) => void }) {
  return (
    <AppScreen go={go} nav="profile" className="with-nav profile">
      <img className="profile__avatar" src={assets.avatarMateo} alt="" />
      <h2>Mateo Claros</h2>
      <p>Cala Cala, Cochabamba</p>
      <div className="rating">
        {[1, 2, 3, 4].map((star) => (
          <img src={assets.profileStar} alt="" key={star} />
        ))}
        <img src={assets.profileStarEmpty} alt="" />
        <b>4.8</b> <span>(18 calificaciones)</span>
      </div>
      <div className="stats">
        <div>
          <b>14</b>
          <span>Completados</span>
        </div>
        <div>
          <b>8</b>
          <span>Disponibles</span>
        </div>
        <div>
          <b>6m</b>
          <span>Tiempo app</span>
        </div>
      </div>
      <label>CONSOLAS</label>
      <div className="chips">
        <button className="active">PlayStation 5</button>
        <button className="purple-chip">Xbox Series X</button>
      </div>
      <button className="menu-row">
        Editar Perfil <img src={assets.chevron} alt="" />
      </button>
      <button className="menu-row" onClick={() => go("settings")}>
        Configuración <img src={assets.chevron} alt="" />
      </button>
    </AppScreen>
  );
}

function Rating({ go }: { go: (s: Screen) => void }) {
  const [rating, setRating] = useState(4);
  return (
    <AppScreen go={go} className="rating-screen">
      <div className="success-icon small">
        <img src={assets.ratingCheck} alt="" />
      </div>
      <h1>¡Intercambio Completado!</h1>
      <p>Califica tu experiencia de intercambio con Sofía.</p>
      <div className="profile-strip">
        <img src={assets.avatarSofia} alt="" />
        <span>
          <b>Sofía Valenzuela</b>
          <small>Queru Queru · 14 intercambios</small>
        </span>
      </div>
      <label>TU CALIFICACIÓN</label>
      <div className="star-picker">
        {[1, 2, 3, 4, 5].map((n) => (
          <button className={n <= rating ? "active" : ""} onClick={() => setRating(n)} key={n}>
            <img src={n <= rating ? assets.ratingStar : assets.ratingStarEmpty} alt="" />
          </button>
        ))}
      </div>
      <label>COMENTARIOS RÁPIDOS</label>
      <div className="chips">
        <button className="active">Puntual</button>
        <button className="active">Juego impecable</button>
        <button className="active">Amable</button>
        <button>Recomendado</button>
        <button>Buena comunicación</button>
      </div>
      <Field label="COMENTARIO OPCIONAL" tall>
        Todo excelente, el disco está impecable y Sofía fue muy puntual en el Cine Center.
        ¡Recomendada!
      </Field>
      <div className="bottom-actions">
        <PrimaryButton onClick={() => go("exchanges")}>Enviar calificación</PrimaryButton>
      </div>
    </AppScreen>
  );
}

function Settings({ go }: { go: (s: Screen) => void }) {
  const [toggles, setToggles] = useState([true, true, false]);
  return (
    <AppScreen go={go} nav="profile" className="with-nav settings">
      <BackHeader
        title="Configuración"
        subtitle="Tu cuenta, a tu manera."
        back={() => go("profile")}
      />
      <div className="profile-strip">
        <img src={assets.avatarMateo} alt="" />
        <span>
          <b>Mateo Claros</b>
          <small>Cala Cala · Cochabamba</small>
        </span>
      </div>
      <label>CUENTA</label>
      <div className="menu-group">
        <button>
          Editar perfil <img src={assets.chevron} alt="" />
        </button>
        <button>
          Contraseña y seguridad <img src={assets.chevron} alt="" />
        </button>
      </div>
      <label>PREFERENCIAS</label>
      <div className="menu-group">
        {["Notificaciones", "Recordatorios de devolución", "Perfil visible en búsquedas"].map(
          (x, i) => (
            <button key={x} onClick={() => setToggles(toggles.map((v, j) => (j === i ? !v : v)))}>
              {x}
              <i className={`toggle ${toggles[i] ? "on" : ""}`} />
            </button>
          ),
        )}
      </div>
      <button className="menu-row">
        Ayuda y privacidad <img src={assets.chevron} alt="" />
      </button>
      <button className="logout" onClick={() => go("welcome")}>
        Cerrar sesión
      </button>
      <small className="version">PlaySwap · Versión 1.0.0</small>
    </AppScreen>
  );
}

function Login({ go }: { go: (s: Screen) => void }) {
  return (
    <AppScreen go={go} className="login">
      <header>
        <button onClick={() => go("welcome")}>
          <img src={assets.back} alt="" />
        </button>
        <Brand />
      </header>
      <h1>Vuelve a la partida</h1>
      <p>
        Inicia sesión y sigue descubriendo juegos
        <br />
        con tu comunidad en Cochabamba.
      </p>
      <div className="form-stack">
        <Field label="Correo electrónico">mateo@correo.com</Field>
        <Field label="Contraseña">••••••••••••</Field>
      </div>
      <button className="text-link align-right">¿Olvidaste tu contraseña?</button>
      <PrimaryButton onClick={() => go("home")}>Iniciar sesión</PrimaryButton>
      <button className="text-link muted">¿Aún no tienes cuenta? Crea tu perfil</button>
      <small>
        Al iniciar sesión aceptas nuestros
        <br />
        Términos de uso y Política de privacidad.
      </small>
    </AppScreen>
  );
}

function ReturnLoan({ go }: { go: (s: Screen) => void }) {
  return (
    <AppScreen go={go} className="return-screen">
      <BackHeader
        title="Devolver préstamo"
        subtitle="Cierra el préstamo con Sofía."
        back={() => go("exchanges")}
      />
      <div className="return-game">
        <img src={assets.elden} alt="" />
        <div>
          <h2>Elden Ring</h2>
          <p>PlayStation 5 · Edición física</p>
          <b>Devolver a Sofía Valenzuela</b>
          <strong>12 días restantes</strong>
        </div>
      </div>
      <label>DETALLES DE LA ENTREGA</label>
      <div className="info-card">
        <small>Fecha y hora acordadas</small>
        <b>Hoy · 18:00</b>
        <small>Lugar de encuentro</small>
        <b>Plaza de las Banderas · Cochabamba</b>
      </div>
      <label>ESTADO DEL JUEGO</label>
      <button className="menu-row">
        En buen estado, con caja y disco <img src={assets.chevron} alt="" />
      </button>
      <label className="check-line">
        <span className="custom-check">
          <img src={assets.returnCheck} alt="" />
        </span>
        Confirmo que entregué el juego a Sofía
        <br />
        en las condiciones acordadas.
      </label>
      <div className="bottom-actions">
        <p>
          Sofía también deberá confirmar la recepción
          <br />
          para finalizar el préstamo.
        </p>
        <PrimaryButton onClick={() => go("rating")}>Confirmar devolución</PrimaryButton>
        <button className="text-link">Coordinar por chat</button>
      </div>
    </AppScreen>
  );
}

export default function App() {
  const requestedScreen = new URLSearchParams(window.location.search).get(
    "screen",
  ) as Screen | null;
  const availableScreens: Screen[] = [
    "splash",
    "welcome",
    "consoles",
    "create-profile",
    "home",
    "match",
    "request",
    "sent",
    "chat",
    "exchanges",
    "games",
    "search",
    "profile",
    "rating",
    "settings",
    "login",
    "return",
  ];
  const [screen, setScreen] = useState<Screen>(
    requestedScreen && availableScreens.includes(requestedScreen) ? requestedScreen : "splash",
  );
  const go = (next: Screen) => {
    setScreen(next);
    window.history.replaceState({}, "", `?screen=${next}`);
    window.scrollTo(0, 0);
  };
  const screens: Record<Screen, ReactNode> = {
    splash: <Splash go={go} />,
    welcome: <Welcome go={go} />,
    consoles: <Consoles go={go} />,
    "create-profile": <CreateProfile go={go} />,
    home: <Home go={go} />,
    match: <MatchDetail go={go} />,
    request: <Request go={go} />,
    sent: <Sent go={go} />,
    chat: <Chat go={go} />,
    exchanges: <Exchanges go={go} />,
    games: <Games go={go} />,
    search: <Search go={go} />,
    profile: <Profile go={go} />,
    rating: <Rating go={go} />,
    settings: <Settings go={go} />,
    login: <Login go={go} />,
    return: <ReturnLoan go={go} />,
  };
  return screens[screen];
}
