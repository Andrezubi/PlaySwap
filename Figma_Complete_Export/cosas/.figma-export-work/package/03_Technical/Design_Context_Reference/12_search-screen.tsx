const assetPathPrefix = "./assets";
const imgGameCover = `${assetPathPrefix}/5825b.png`;
const imgRectangle = `${assetPathPrefix}/85e7e.png`;
const imgGameCover1 = `${assetPathPrefix}/8542a.png`;
const imgRectangle1 = `${assetPathPrefix}/e83a9.png`;
const imgIosSignal = `${assetPathPrefix}/5ad8e.svg`;
const imgIosWifiSignal = `${assetPathPrefix}/054bf.svg`;
const imgIosBatteryFull = `${assetPathPrefix}/cc14a.svg`;
const imgSearch = `${assetPathPrefix}/14880.svg`;
const imgHome = `${assetPathPrefix}/3d070.svg`;
const imgSearch1 = `${assetPathPrefix}/9c8b7.svg`;
const imgBookOpen = `${assetPathPrefix}/e44b7.svg`;
const imgRepeat = `${assetPathPrefix}/e1194.svg`;
const imgUser = `${assetPathPrefix}/e7699.svg`;

export default function SearchScreen() {
  return (
    <div
      className="bg-[#0b0b0f] content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[36px] size-full"
      data-node-id="1:2339"
      data-name="search-screen"
    >
      <div
        className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full"
        data-node-id="1:2340"
        data-name="header-zone"
      >
        <div
          className="content-stretch flex h-[44px] items-center justify-between px-[24px] relative shrink-0 w-full"
          data-node-id="1:2341"
          data-name="status-bar"
        >
          <p
            className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap"
            data-node-id="1:2342"
          >
            9:41
          </p>
          <div
            className="content-stretch flex gap-[8px] items-center relative shrink-0"
            data-node-id="1:2343"
            data-name="status-icons"
          >
            <div
              className="relative shrink-0 size-[20px]"
              data-node-id="1:2344"
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
              data-node-id="1:2346"
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
              data-node-id="1:2348"
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
          className="content-stretch flex items-start px-[20px] relative shrink-0 w-full"
          data-node-id="1:2350"
          data-name="search-bar-row"
        >
          <div
            className="bg-[#121218] border border-[#282834] border-solid content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px px-[16px] py-[10px] relative rounded-[24px]"
            data-node-id="1:2351"
            data-name="search-input"
          >
            <div
              className="overflow-clip relative shrink-0 size-[20px]"
              data-node-id="1:2352"
              data-name="Frame"
            >
              <div
                className="absolute left-0 size-[20px] top-0"
                data-node-id="1:2353"
                data-name="search"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgSearch}
                />
              </div>
            </div>
            <p
              className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular'] font-normal leading-[normal] min-w-px relative text-[#a3a3c2] text-[14px]"
              data-node-id="1:2355"
            >
              Buscar juegos o gamers...
            </p>
          </div>
        </div>
        <div
          className="content-stretch flex flex-col gap-[8px] items-start px-[20px] relative shrink-0 w-full"
          data-node-id="1:2356"
          data-name="filter-chips-container"
        >
          <div
            className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
            data-node-id="1:2357"
            data-name="chips-row-1"
          >
            <div
              className="bg-[rgba(0,217,166,0.1)] border border-[#00d9a6] border-solid content-stretch flex items-start px-[12px] py-[6px] relative rounded-[12px] shrink-0"
              data-node-id="1:2358"
              data-name="Frame"
            >
              <p
                className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#00d9a6] text-[12px] whitespace-nowrap"
                data-node-id="1:2359"
              >
                PS5
              </p>
            </div>
            <div
              className="bg-[#121218] border border-[#282834] border-solid content-stretch flex items-start px-[12px] py-[6px] relative rounded-[12px] shrink-0"
              data-node-id="1:2360"
              data-name="Frame"
            >
              <p
                className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#a3a3c2] text-[12px] whitespace-nowrap"
                data-node-id="1:2361"
              >
                PS4
              </p>
            </div>
            <div
              className="bg-[#121218] border border-[#282834] border-solid content-stretch flex items-start px-[12px] py-[6px] relative rounded-[12px] shrink-0"
              data-node-id="1:2362"
              data-name="Frame"
            >
              <p
                className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#a3a3c2] text-[12px] whitespace-nowrap"
                data-node-id="1:2363"
              >
                Xbox
              </p>
            </div>
            <div
              className="bg-[#121218] border border-[#282834] border-solid content-stretch flex items-start px-[12px] py-[6px] relative rounded-[12px] shrink-0"
              data-node-id="1:2364"
              data-name="Frame"
            >
              <p
                className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#a3a3c2] text-[12px] whitespace-nowrap"
                data-node-id="1:2365"
              >
                Switch
              </p>
            </div>
          </div>
          <div
            className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
            data-node-id="1:2366"
            data-name="chips-row-2"
          >
            <div
              className="bg-[#121218] border border-[#282834] border-solid content-stretch flex items-start px-[12px] py-[6px] relative rounded-[12px] shrink-0"
              data-node-id="1:2367"
              data-name="Frame"
            >
              <p
                className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#a3a3c2] text-[12px] whitespace-nowrap"
                data-node-id="1:2368"
              >
                1 km
              </p>
            </div>
            <div
              className="bg-[#121218] border border-[#282834] border-solid content-stretch flex items-start px-[12px] py-[6px] relative rounded-[12px] shrink-0"
              data-node-id="1:2369"
              data-name="Frame"
            >
              <p
                className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#a3a3c2] text-[12px] whitespace-nowrap"
                data-node-id="1:2370"
              >
                5 km
              </p>
            </div>
            <div
              className="bg-[#121218] border border-[#282834] border-solid content-stretch flex items-start px-[12px] py-[6px] relative rounded-[12px] shrink-0"
              data-node-id="1:2371"
              data-name="Frame"
            >
              <p
                className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#a3a3c2] text-[12px] whitespace-nowrap"
                data-node-id="1:2372"
              >
                10 km
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex-[1_0_0] min-h-px relative w-full"
        data-node-id="1:2373"
        data-name="results-content"
      >
        <p
          className="[word-break:break-word] absolute font-['Geist:Bold'] font-bold leading-[normal] left-[20px] text-[#63637a] text-[13px] top-[20px] uppercase whitespace-nowrap"
          data-node-id="1:2374"
        >
          Resultados en Cochabamba
        </p>
        <div
          className="absolute bg-[#121218] border border-[#282834] border-solid content-stretch flex gap-[12px] h-[96px] items-center left-[20px] p-[12px] right-[20px] rounded-[16px] top-[53px]"
          data-node-id="1:2375"
          data-name="result-card-1"
        >
          <div
            className="h-[72px] relative rounded-[8px] shrink-0 w-[54px]"
            data-node-id="1:2376"
            data-name="game-cover"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full"
              src={imgGameCover}
            />
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative"
            data-node-id="1:2377"
            data-name="Frame"
          >
            <p
              className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] min-w-full overflow-hidden relative shrink-0 text-[14px] text-ellipsis text-white w-[min-content] whitespace-nowrap"
              data-node-id="1:2378"
            >
              Hogwarts Legacy
            </p>
            <div
              className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
              data-node-id="1:2379"
              data-name="Frame"
            >
              <div
                className="relative rounded-[9px] shrink-0 size-[18px]"
                data-node-id="1:2380"
                data-name="Rectangle"
              >
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9px] size-full"
                  src={imgRectangle}
                />
              </div>
              <p
                className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular'] font-normal leading-[normal] min-w-px overflow-hidden relative text-[#a3a3c2] text-[12px] text-ellipsis whitespace-nowrap"
                data-node-id="1:2381"
              >
                Disponible con Lucas G.
              </p>
            </div>
            <div
              className="content-stretch flex gap-[8px] items-center relative shrink-0"
              data-node-id="1:2382"
              data-name="Frame"
            >
              <div
                className="bg-[rgba(0,217,166,0.1)] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0"
                data-node-id="1:2383"
                data-name="Frame"
              >
                <p
                  className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#00d9a6] text-[9px] whitespace-nowrap"
                  data-node-id="1:2384"
                >
                  PS5
                </p>
              </div>
              <p
                className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#63637a] text-[11px] whitespace-nowrap"
                data-node-id="1:2385"
              >
                A 1.5 km (América Este)
              </p>
            </div>
          </div>
        </div>
        <div
          className="absolute bg-[#121218] border border-[#282834] border-solid content-stretch flex gap-[12px] h-[96px] items-center left-[20px] p-[12px] right-[20px] rounded-[16px] top-[165px]"
          data-node-id="1:2386"
          data-name="result-card-2"
        >
          <div
            className="h-[72px] relative rounded-[8px] shrink-0 w-[54px]"
            data-node-id="1:2387"
            data-name="game-cover"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full"
              src={imgGameCover1}
            />
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative"
            data-node-id="1:2388"
            data-name="Frame"
          >
            <p
              className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] min-w-full overflow-hidden relative shrink-0 text-[14px] text-ellipsis text-white w-[min-content] whitespace-nowrap"
              data-node-id="1:2389"
            >
              Super Mario Odyssey
            </p>
            <div
              className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
              data-node-id="1:2390"
              data-name="Frame"
            >
              <div
                className="relative rounded-[9px] shrink-0 size-[18px]"
                data-node-id="1:2391"
                data-name="Rectangle"
              >
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9px] size-full"
                  src={imgRectangle1}
                />
              </div>
              <p
                className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular'] font-normal leading-[normal] min-w-px overflow-hidden relative text-[#a3a3c2] text-[12px] text-ellipsis whitespace-nowrap"
                data-node-id="1:2392"
              >
                Disponible con Camila N.
              </p>
            </div>
            <div
              className="content-stretch flex gap-[8px] items-center relative shrink-0"
              data-node-id="1:2393"
              data-name="Frame"
            >
              <div
                className="bg-[rgba(225,29,72,0.1)] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0"
                data-node-id="1:2394"
                data-name="Frame"
              >
                <p
                  className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#e11d48] text-[9px] whitespace-nowrap"
                  data-node-id="1:2395"
                >
                  SWITCH
                </p>
              </div>
              <p
                className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#63637a] text-[11px] whitespace-nowrap"
                data-node-id="1:2396"
              >
                A 3.2 km (Sarco)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-[#121218] border-[#282834] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 w-full"
        data-node-id="1:2397"
        data-name="bottom-navigation"
      >
        <div
          className="content-stretch flex h-[68px] items-center justify-between px-[16px] relative shrink-0 w-full"
          data-node-id="1:2398"
          data-name="nav-tabs"
        >
          <div
            className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]"
            data-node-id="1:2399"
            data-name="nav-tab-inicio"
          >
            <div
              className="overflow-clip relative shrink-0 size-[20px]"
              data-node-id="1:2400"
              data-name="icon-frame"
            >
              <div
                className="absolute left-0 size-[20px] top-0"
                data-node-id="1:2401"
                data-name="home"
              >
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHome} />
              </div>
            </div>
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#63637a] text-[10px] whitespace-nowrap"
              data-node-id="1:2403"
            >
              Inicio
            </p>
          </div>
          <div
            className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]"
            data-node-id="1:2404"
            data-name="nav-tab-buscar"
          >
            <div
              className="overflow-clip relative shrink-0 size-[20px]"
              data-node-id="1:2405"
              data-name="icon-frame"
            >
              <div
                className="absolute left-0 size-[20px] top-0"
                data-node-id="1:2406"
                data-name="search"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgSearch1}
                />
              </div>
            </div>
            <p
              className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[10px] text-white whitespace-nowrap"
              data-node-id="1:2408"
            >
              Buscar
            </p>
          </div>
          <div
            className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]"
            data-node-id="1:2409"
            data-name="nav-tab-mis-juegos"
          >
            <div
              className="overflow-clip relative shrink-0 size-[20px]"
              data-node-id="1:2410"
              data-name="icon-frame"
            >
              <div
                className="absolute left-0 size-[20px] top-0"
                data-node-id="1:2411"
                data-name="book-open"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgBookOpen}
                />
              </div>
            </div>
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#63637a] text-[10px] whitespace-nowrap"
              data-node-id="1:2413"
            >
              Mis juegos
            </p>
          </div>
          <div
            className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]"
            data-node-id="1:2414"
            data-name="nav-tab-intercambios"
          >
            <div
              className="overflow-clip relative shrink-0 size-[20px]"
              data-node-id="1:2415"
              data-name="icon-frame"
            >
              <div
                className="absolute left-0 size-[20px] top-0"
                data-node-id="1:2416"
                data-name="repeat"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgRepeat}
                />
              </div>
            </div>
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#63637a] text-[10px] whitespace-nowrap"
              data-node-id="1:2418"
            >
              Intercambios
            </p>
          </div>
          <div
            className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]"
            data-node-id="1:2419"
            data-name="nav-tab-perfil"
          >
            <div
              className="overflow-clip relative shrink-0 size-[20px]"
              data-node-id="1:2420"
              data-name="icon-frame"
            >
              <div
                className="absolute left-0 size-[20px] top-0"
                data-node-id="1:2421"
                data-name="user"
              >
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUser} />
              </div>
            </div>
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#63637a] text-[10px] whitespace-nowrap"
              data-node-id="1:2423"
            >
              Perfil
            </p>
          </div>
        </div>
        <div
          className="content-stretch flex items-start justify-center py-[8px] relative shrink-0 w-full"
          data-node-id="1:2424"
          data-name="home-indicator-area"
        >
          <div
            className="bg-[#63637a] h-[5px] relative rounded-[100px] shrink-0 w-[134px]"
            data-node-id="1:2425"
            data-name="indicator-bar"
          />
        </div>
      </div>
    </div>
  );
}
