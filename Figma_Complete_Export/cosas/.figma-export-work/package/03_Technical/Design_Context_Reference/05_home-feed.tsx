const assetPathPrefix = "./assets";
const imgGameCover2 = `${assetPathPrefix}/8542a.png`;
const imgUserAvatar = `${assetPathPrefix}/7334e.png`;
const imgOwnerAvatar = `${assetPathPrefix}/6f356.png`;
const imgGameCover1 = `${assetPathPrefix}/cc4f9.png`;
const imgGameCover3 = `${assetPathPrefix}/a124e.png`;
const imgOwnerAvatar1 = `${assetPathPrefix}/13139.png`;
const imgGameCover4 = `${assetPathPrefix}/4140b.png`;
const imgGameCover5 = `${assetPathPrefix}/05574.png`;
const imgIosSignal = `${assetPathPrefix}/5ad8e.svg`;
const imgIosWifiSignal = `${assetPathPrefix}/054bf.svg`;
const imgIosBatteryFull = `${assetPathPrefix}/cc14a.svg`;
const imgBell = `${assetPathPrefix}/d6100.svg`;
const imgHome = `${assetPathPrefix}/5ce24.svg`;
const imgSearch = `${assetPathPrefix}/c8177.svg`;
const imgBookOpen = `${assetPathPrefix}/12248.svg`;
const imgRepeat = `${assetPathPrefix}/e153b.svg`;
const imgUser = `${assetPathPrefix}/6a449.svg`;

function GameCover2({ className }: { className?: string }) {
  return (
    <div
      className={className || "h-[96px] overflow-clip relative rounded-[12px] w-[72px]"}
      data-node-id="1:1306"
      data-name="game-cover-2"
    >
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-white inset-0 rounded-[12px]" />
        <img
          alt=""
          className="absolute max-w-none object-cover rounded-[12px] size-full"
          src={imgGameCover2}
        />
      </div>
    </div>
  );
}

export default function HomeFeed() {
  return (
    <div
      className="bg-[#0b0b0f] content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[36px] size-full"
      data-node-id="1:1269"
      data-name="home-feed"
    >
      <div
        className="content-stretch flex h-[44px] items-center justify-between px-[24px] relative shrink-0 w-full"
        data-node-id="1:1270"
        data-name="status-bar"
      >
        <p
          className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap"
          data-node-id="1:1271"
        >
          9:41
        </p>
        <div
          className="content-stretch flex gap-[8px] items-center relative shrink-0"
          data-node-id="1:1272"
          data-name="status-icons"
        >
          <div
            className="relative shrink-0 size-[20px]"
            data-node-id="1:1273"
            data-name="ios-signal"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgIosSignal}
            />
          </div>
          <div
            className="relative shrink-0 size-[20px]"
            data-node-id="1:1275"
            data-name="ios-wifi-signal"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgIosWifiSignal}
            />
          </div>
          <div
            className="h-[20px] relative shrink-0 w-[28px]"
            data-node-id="1:1277"
            data-name="ios-battery-full"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgIosBatteryFull}
            />
          </div>
        </div>
      </div>
      <div
        className="content-stretch flex flex-col gap-[20px] items-start px-[20px] relative shrink-0 w-full"
        data-node-id="1:1279"
        data-name="home-body"
      >
        <div
          className="content-stretch flex items-center justify-between relative shrink-0 w-full"
          data-node-id="1:1280"
          data-name="home-top"
        >
          <div
            className="content-stretch flex gap-[12px] items-center relative shrink-0"
            data-node-id="1:1281"
            data-name="user-welcome"
          >
            <div
              className="relative rounded-[20px] shrink-0 size-[40px]"
              data-node-id="1:1282"
              data-name="user-avatar"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full"
                src={imgUserAvatar}
              />
            </div>
            <div
              className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] relative shrink-0 whitespace-nowrap"
              data-node-id="1:1283"
              data-name="welcome-meta"
            >
              <p
                className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#63637a] text-[12px]"
                data-node-id="1:1284"
              >
                Hola de nuevo,
              </p>
              <p
                className="font-['Gabarito:Bold'] font-bold relative shrink-0 text-[16px] text-white"
                data-node-id="1:1285"
              >
                Mateo
              </p>
            </div>
          </div>
          <div
            className="bg-[#121218] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]"
            data-node-id="1:1286"
            data-name="notifications"
          >
            <div className="relative shrink-0 size-[20px]" data-node-id="1:1287" data-name="bell">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBell} />
            </div>
          </div>
        </div>
        <div
          className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full"
          data-node-id="1:1289"
          data-name="home-header"
        >
          <p
            className="font-['Gabarito:ExtraBold'] font-extrabold min-w-full relative shrink-0 text-[22px] text-white w-[min-content]"
            data-node-id="1:1290"
          >
            Coincidencias cercanas
          </p>
          <p
            className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#a3a3c2] text-[13px] whitespace-nowrap"
            data-node-id="1:1291"
          >
            Encontrados en Cochabamba basándonos en tu biblioteca
          </p>
        </div>
        <div
          className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
          data-node-id="1:1292"
          data-name="matches-list"
        >
          <div
            className="bg-[#121218] border-[#00d9a6] border-[1.5px] border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[20px] shrink-0 w-full"
            data-node-id="1:1293"
            data-name="match-card-1"
          >
            <div
              className="content-stretch flex items-center justify-between relative shrink-0 w-full"
              data-node-id="1:1294"
              data-name="card-top"
            >
              <div
                className="content-stretch flex gap-[10px] items-center relative shrink-0"
                data-node-id="1:1295"
                data-name="owner-details"
              >
                <div
                  className="relative rounded-[18px] shrink-0 size-[36px]"
                  data-node-id="1:1296"
                  data-name="owner-avatar"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[18px] size-full"
                    src={imgOwnerAvatar}
                  />
                </div>
                <div
                  className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] relative shrink-0 whitespace-nowrap"
                  data-node-id="1:1297"
                  data-name="Frame"
                >
                  <p
                    className="font-['Geist:Bold'] font-bold relative shrink-0 text-[14px] text-white"
                    data-node-id="1:1298"
                  >
                    Sofía Valenzuela
                  </p>
                  <p
                    className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#63637a] text-[11px]"
                    data-node-id="1:1299"
                  >
                    Queru Queru · a 2.3 km
                  </p>
                </div>
              </div>
              <div
                className="bg-[rgba(0,217,166,0.1)] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[8px] shrink-0"
                data-node-id="1:1300"
                data-name="compat-badge"
              >
                <p
                  className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#00d9a6] text-[12px] whitespace-nowrap"
                  data-node-id="1:1301"
                >
                  100% Compatible
                </p>
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
              data-node-id="1:1302"
              data-name="games-showcase"
            >
              <p
                className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#63637a] text-[12px] uppercase whitespace-nowrap"
                data-node-id="1:1303"
              >
                Tiene disponible:
              </p>
              <div
                className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                data-node-id="1:1304"
                data-name="games-row"
              >
                <div
                  className="h-[96px] relative rounded-[12px] shrink-0 w-[72px]"
                  data-node-id="1:1305"
                  data-name="game-cover-1"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full"
                    src={imgGameCover1}
                  />
                </div>
                <GameCover2 className="h-[96px] relative rounded-[12px] shrink-0 w-[72px]" />
                <div
                  className="h-[96px] relative rounded-[12px] shrink-0 w-[72px]"
                  data-node-id="1:1307"
                  data-name="game-cover-3"
                >
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                    <img
                      alt=""
                      className="absolute h-[115.61%] left-[0.69%] max-w-none top-[-19.52%] w-full"
                      src={imgGameCover3}
                    />
                  </div>
                </div>
                <div
                  className="bg-[#1c1c24] content-stretch flex flex-col h-[96px] items-center justify-center relative rounded-[12px] shrink-0 w-[72px]"
                  data-node-id="1:1308"
                  data-name="more-games"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap"
                    data-node-id="1:1309"
                  >
                    +4
                  </p>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex items-center justify-between relative shrink-0 w-full"
              data-node-id="1:1310"
              data-name="card-footer"
            >
              <div
                className="bg-[rgba(139,92,246,0.1)] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0"
                data-node-id="1:1311"
                data-name="console-badge"
              >
                <p
                  className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#8b5cf6] text-[11px] whitespace-nowrap"
                  data-node-id="1:1312"
                >
                  PS5
                </p>
              </div>
              <p
                className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#00d9a6] text-[13px] whitespace-nowrap"
                data-node-id="1:1313"
              >
                ¡Ella busca lo que tú tienes!
              </p>
            </div>
          </div>
          <div
            className="bg-[#121218] border border-[#282834] border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[20px] shrink-0 w-full"
            data-node-id="1:1314"
            data-name="match-card-2"
          >
            <div
              className="content-stretch flex items-center justify-between relative shrink-0 w-full"
              data-node-id="1:1315"
              data-name="card-top"
            >
              <div
                className="content-stretch flex gap-[10px] items-center relative shrink-0"
                data-node-id="1:1316"
                data-name="owner-details"
              >
                <div
                  className="relative rounded-[18px] shrink-0 size-[36px]"
                  data-node-id="1:1317"
                  data-name="owner-avatar"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[18px] size-full"
                    src={imgOwnerAvatar1}
                  />
                </div>
                <div
                  className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] relative shrink-0 whitespace-nowrap"
                  data-node-id="1:1318"
                  data-name="Frame"
                >
                  <p
                    className="font-['Geist:Bold'] font-bold relative shrink-0 text-[14px] text-white"
                    data-node-id="1:1319"
                  >
                    Andrés Rocha
                  </p>
                  <p
                    className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#63637a] text-[11px]"
                    data-node-id="1:1320"
                  >
                    Cala Cala · a 4.1 km
                  </p>
                </div>
              </div>
              <div
                className="bg-[#1c1c24] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[8px] shrink-0"
                data-node-id="1:1321"
                data-name="compat-badge"
              >
                <p
                  className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#a3a3c2] text-[12px] whitespace-nowrap"
                  data-node-id="1:1322"
                >
                  75% Compatible
                </p>
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
              data-node-id="1:1323"
              data-name="games-showcase"
            >
              <p
                className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#63637a] text-[12px] uppercase whitespace-nowrap"
                data-node-id="1:1324"
              >
                Tiene disponible:
              </p>
              <div
                className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                data-node-id="1:1325"
                data-name="games-row"
              >
                <div
                  className="h-[96px] relative rounded-[12px] shrink-0 w-[72px]"
                  data-node-id="1:1326"
                  data-name="game-cover-1"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full"
                    src={imgGameCover4}
                  />
                </div>
                <div
                  className="h-[96px] relative rounded-[12px] shrink-0 w-[72px]"
                  data-node-id="1:1327"
                  data-name="game-cover-2"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full"
                    src={imgGameCover5}
                  />
                </div>
                <div
                  className="bg-[#1c1c24] content-stretch flex flex-col h-[96px] items-center justify-center relative rounded-[12px] shrink-0 w-[72px]"
                  data-node-id="1:1328"
                  data-name="more-games"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap"
                    data-node-id="1:1329"
                  >
                    +2
                  </p>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex items-center justify-between relative shrink-0 w-full"
              data-node-id="1:1330"
              data-name="card-footer"
            >
              <div
                className="bg-[rgba(139,92,246,0.1)] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0"
                data-node-id="1:1331"
                data-name="console-badge"
              >
                <p
                  className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#8b5cf6] text-[11px] whitespace-nowrap"
                  data-node-id="1:1332"
                >
                  PS4
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-[#121218] border-[#282834] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 w-full"
        data-node-id="1:1333"
        data-name="bottom-navigation"
      >
        <div
          className="content-stretch flex h-[68px] items-center justify-between px-[16px] relative shrink-0 w-full"
          data-node-id="1:1334"
          data-name="nav-tabs"
        >
          <div
            className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]"
            data-node-id="1:1335"
            data-name="nav-tab-inicio"
          >
            <div className="relative shrink-0 size-[20px]" data-node-id="1:1336" data-name="home">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHome} />
            </div>
            <p
              className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[10px] text-white whitespace-nowrap"
              data-node-id="1:1338"
            >
              Inicio
            </p>
          </div>
          <div
            className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]"
            data-node-id="1:1339"
            data-name="nav-tab-buscar"
          >
            <div className="relative shrink-0 size-[20px]" data-node-id="1:1340" data-name="search">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSearch} />
            </div>
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#63637a] text-[10px] whitespace-nowrap"
              data-node-id="1:1342"
            >
              Buscar
            </p>
          </div>
          <div
            className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]"
            data-node-id="1:1343"
            data-name="nav-tab-mis juegos"
          >
            <div
              className="relative shrink-0 size-[20px]"
              data-node-id="1:1344"
              data-name="book-open"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgBookOpen}
              />
            </div>
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#63637a] text-[10px] whitespace-nowrap"
              data-node-id="1:1346"
            >
              Mis juegos
            </p>
          </div>
          <div
            className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]"
            data-node-id="1:1347"
            data-name="nav-tab-intercambios"
          >
            <div className="relative shrink-0 size-[20px]" data-node-id="1:1348" data-name="repeat">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRepeat} />
            </div>
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#63637a] text-[10px] whitespace-nowrap"
              data-node-id="1:1350"
            >
              Intercambios
            </p>
          </div>
          <div
            className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]"
            data-node-id="1:1351"
            data-name="nav-tab-perfil"
          >
            <div className="relative shrink-0 size-[20px]" data-node-id="1:1352" data-name="user">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUser} />
            </div>
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#63637a] text-[10px] whitespace-nowrap"
              data-node-id="1:1354"
            >
              Perfil
            </p>
          </div>
        </div>
        <div
          className="content-stretch flex items-start justify-center py-[8px] relative shrink-0 w-full"
          data-node-id="1:1355"
          data-name="home-indicator-area"
        >
          <div
            className="bg-[#63637a] h-[5px] relative rounded-[100px] shrink-0 w-[134px]"
            data-node-id="1:1356"
            data-name="indicator-bar"
          />
        </div>
      </div>
    </div>
  );
}
