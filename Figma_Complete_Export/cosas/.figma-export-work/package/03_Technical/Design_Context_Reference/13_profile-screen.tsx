const assetPathPrefix = "./assets";
const imgAvatar = `${assetPathPrefix}/c197f.png`;
const imgIosSignal = `${assetPathPrefix}/5ad8e.svg`;
const imgIosWifiSignal = `${assetPathPrefix}/054bf.svg`;
const imgIosBatteryFull = `${assetPathPrefix}/cc14a.svg`;
const imgStar = `${assetPathPrefix}/85276.svg`;
const imgStar1 = `${assetPathPrefix}/c0282.svg`;
const imgChevronRight = `${assetPathPrefix}/b63a0.svg`;
const imgHome = `${assetPathPrefix}/3d070.svg`;
const imgSearch = `${assetPathPrefix}/6386d.svg`;
const imgBookOpen = `${assetPathPrefix}/e44b7.svg`;
const imgRepeat = `${assetPathPrefix}/e1194.svg`;
const imgUser = `${assetPathPrefix}/84566.svg`;

export default function ProfileScreen() {
  return (
    <div
      className="bg-[#0b0b0f] content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[36px] size-full"
      data-node-id="1:2426"
      data-name="profile-screen"
    >
      <div
        className="h-[252px] relative shrink-0 w-full"
        data-node-id="1:2427"
        data-name="header-zone"
      >
        <div
          className="absolute content-stretch flex h-[44px] items-center justify-between left-0 px-[24px] right-0 top-0"
          data-node-id="1:2428"
          data-name="status-bar"
        >
          <p
            className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap"
            data-node-id="1:2429"
          >
            9:41
          </p>
          <div
            className="content-stretch flex gap-[8px] items-center relative shrink-0"
            data-node-id="1:2430"
            data-name="status-icons"
          >
            <div
              className="relative shrink-0 size-[20px]"
              data-node-id="1:2431"
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
              data-node-id="1:2433"
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
              data-node-id="1:2435"
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
          className="absolute content-stretch flex flex-col gap-[16px] items-center left-0 px-[24px] py-[12px] right-0 top-[44px]"
          data-node-id="1:2437"
          data-name="profile-card"
        >
          <div
            className="border-2 border-[#282834] border-solid relative rounded-[44px] shrink-0 size-[88px]"
            data-node-id="1:2438"
            data-name="avatar"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[44px] size-full"
              src={imgAvatar}
            />
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center leading-[normal] relative shrink-0 whitespace-nowrap"
            data-node-id="1:2439"
            data-name="Frame"
          >
            <p
              className="font-['Gabarito:ExtraBold'] font-extrabold relative shrink-0 text-[22px] text-white"
              data-node-id="1:2440"
            >
              Mateo Claros
            </p>
            <p
              className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#a3a3c2] text-[13px]"
              data-node-id="1:2441"
            >
              Cala Cala, Cochabamba
            </p>
          </div>
          <div
            className="content-stretch flex gap-[8px] items-center relative shrink-0"
            data-node-id="1:2442"
            data-name="Frame"
          >
            <div
              className="content-stretch flex gap-[4px] items-center relative shrink-0"
              data-node-id="1:2443"
              data-name="rating-stars"
            >
              <div className="relative shrink-0 size-[16px]" data-node-id="1:2444" data-name="star">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
              </div>
              <div className="relative shrink-0 size-[16px]" data-node-id="1:2446" data-name="star">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
              </div>
              <div className="relative shrink-0 size-[16px]" data-node-id="1:2448" data-name="star">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
              </div>
              <div className="relative shrink-0 size-[16px]" data-node-id="1:2450" data-name="star">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
              </div>
              <div className="relative shrink-0 size-[16px]" data-node-id="1:2452" data-name="star">
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgStar1}
                />
              </div>
            </div>
            <p
              className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#00d9a6] text-[13px] whitespace-nowrap"
              data-node-id="1:2454"
            >
              4.8
            </p>
            <p
              className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#63637a] text-[13px] whitespace-nowrap"
              data-node-id="1:2455"
            >
              (18 calificaciones)
            </p>
          </div>
        </div>
      </div>
      <div
        className="[word-break:break-word] h-[66px] leading-[normal] relative shrink-0 w-full whitespace-nowrap"
        data-node-id="1:2456"
        data-name="stats-row"
      >
        <div
          className="absolute bg-[#121218] content-stretch flex flex-col gap-[4px] items-center left-[24px] p-[12px] rounded-[12px] top-0 w-[106px]"
          data-node-id="1:2457"
          data-name="Frame"
        >
          <p
            className="font-['Gabarito:ExtraBold'] font-extrabold relative shrink-0 text-[20px] text-white"
            data-node-id="1:2458"
          >
            14
          </p>
          <p
            className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#a3a3c2] text-[11px] text-center"
            data-node-id="1:2459"
          >
            Completados
          </p>
        </div>
        <div
          className="absolute bg-[#121218] content-stretch flex flex-col gap-[4px] items-center left-[148px] p-[12px] rounded-[12px] top-0 w-[106px]"
          data-node-id="1:2460"
          data-name="Frame"
        >
          <p
            className="font-['Gabarito:ExtraBold'] font-extrabold relative shrink-0 text-[20px] text-white"
            data-node-id="1:2461"
          >
            8
          </p>
          <p
            className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#a3a3c2] text-[11px] text-center"
            data-node-id="1:2462"
          >
            Disponibles
          </p>
        </div>
        <div
          className="absolute bg-[#121218] content-stretch flex flex-col gap-[4px] items-center left-[272px] p-[12px] rounded-[12px] top-0 w-[106px]"
          data-node-id="1:2463"
          data-name="Frame"
        >
          <p
            className="font-['Gabarito:ExtraBold'] font-extrabold relative shrink-0 text-[20px] text-white"
            data-node-id="1:2464"
          >
            6m
          </p>
          <p
            className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#a3a3c2] text-[11px] text-center"
            data-node-id="1:2465"
          >
            Tiempo app
          </p>
        </div>
      </div>
      <div
        className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px p-[20px] relative w-full"
        data-node-id="1:2466"
        data-name="details-zone"
      >
        <div
          className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
          data-node-id="1:2467"
          data-name="Frame"
        >
          <p
            className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#63637a] text-[12px] uppercase whitespace-nowrap"
            data-node-id="1:2468"
          >
            Consolas
          </p>
          <div
            className="content-stretch flex gap-[8px] items-start relative shrink-0"
            data-node-id="1:2469"
            data-name="Frame"
          >
            <div
              className="bg-[rgba(0,217,166,0.1)] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[8px] shrink-0"
              data-node-id="1:2470"
              data-name="Frame"
            >
              <p
                className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#00d9a6] text-[12px] whitespace-nowrap"
                data-node-id="1:2471"
              >
                PlayStation 5
              </p>
            </div>
            <div
              className="bg-[rgba(139,92,246,0.1)] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[8px] shrink-0"
              data-node-id="1:2472"
              data-name="Frame"
            >
              <p
                className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#8b5cf6] text-[12px] whitespace-nowrap"
                data-node-id="1:2473"
              >
                Xbox Series X
              </p>
            </div>
          </div>
        </div>
        <div
          className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
          data-node-id="1:2474"
          data-name="Frame"
        >
          <div
            className="border border-[#282834] border-solid content-stretch flex items-center justify-between px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full"
            data-node-id="1:2475"
            data-name="Frame"
          >
            <p
              className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap"
              data-node-id="1:2476"
            >
              Editar Perfil
            </p>
            <div
              className="overflow-clip relative shrink-0 size-[16px]"
              data-node-id="1:2477"
              data-name="Frame"
            >
              <div
                className="absolute left-0 size-[16px] top-0"
                data-node-id="1:2478"
                data-name="chevron-right"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgChevronRight}
                />
              </div>
            </div>
          </div>
          <div
            className="border border-[#282834] border-solid content-stretch flex items-center justify-between px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full"
            data-node-id="1:2480"
            data-name="Frame"
          >
            <p
              className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap"
              data-node-id="1:2481"
            >
              Configuración
            </p>
            <div
              className="overflow-clip relative shrink-0 size-[16px]"
              data-node-id="1:2482"
              data-name="Frame"
            >
              <div
                className="absolute left-0 size-[16px] top-0"
                data-node-id="1:2483"
                data-name="chevron-right"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgChevronRight}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-[#121218] border-[#282834] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 w-full"
        data-node-id="1:2485"
        data-name="bottom-navigation"
      >
        <div
          className="content-stretch flex h-[68px] items-center justify-between px-[16px] relative shrink-0 w-full"
          data-node-id="1:2486"
          data-name="nav-tabs"
        >
          <div
            className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]"
            data-node-id="1:2487"
            data-name="nav-tab-inicio"
          >
            <div
              className="overflow-clip relative shrink-0 size-[20px]"
              data-node-id="1:2488"
              data-name="icon-frame"
            >
              <div
                className="absolute left-0 size-[20px] top-0"
                data-node-id="1:2489"
                data-name="home"
              >
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHome} />
              </div>
            </div>
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#63637a] text-[10px] whitespace-nowrap"
              data-node-id="1:2491"
            >
              Inicio
            </p>
          </div>
          <div
            className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]"
            data-node-id="1:2492"
            data-name="nav-tab-buscar"
          >
            <div
              className="overflow-clip relative shrink-0 size-[20px]"
              data-node-id="1:2493"
              data-name="icon-frame"
            >
              <div
                className="absolute left-0 size-[20px] top-0"
                data-node-id="1:2494"
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
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#63637a] text-[10px] whitespace-nowrap"
              data-node-id="1:2496"
            >
              Buscar
            </p>
          </div>
          <div
            className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]"
            data-node-id="1:2497"
            data-name="nav-tab-mis-juegos"
          >
            <div
              className="overflow-clip relative shrink-0 size-[20px]"
              data-node-id="1:2498"
              data-name="icon-frame"
            >
              <div
                className="absolute left-0 size-[20px] top-0"
                data-node-id="1:2499"
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
              data-node-id="1:2501"
            >
              Mis juegos
            </p>
          </div>
          <div
            className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]"
            data-node-id="1:2502"
            data-name="nav-tab-intercambios"
          >
            <div
              className="overflow-clip relative shrink-0 size-[20px]"
              data-node-id="1:2503"
              data-name="icon-frame"
            >
              <div
                className="absolute left-0 size-[20px] top-0"
                data-node-id="1:2504"
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
              data-node-id="1:2506"
            >
              Intercambios
            </p>
          </div>
          <div
            className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]"
            data-node-id="1:2507"
            data-name="nav-tab-perfil"
          >
            <div
              className="overflow-clip relative shrink-0 size-[20px]"
              data-node-id="1:2508"
              data-name="icon-frame"
            >
              <div
                className="absolute left-0 size-[20px] top-0"
                data-node-id="1:2509"
                data-name="user"
              >
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUser} />
              </div>
            </div>
            <p
              className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[10px] text-white whitespace-nowrap"
              data-node-id="1:2511"
            >
              Perfil
            </p>
          </div>
        </div>
        <div
          className="content-stretch flex items-start justify-center py-[8px] relative shrink-0 w-full"
          data-node-id="1:2512"
          data-name="home-indicator-area"
        >
          <div
            className="bg-[#63637a] h-[5px] relative rounded-[100px] shrink-0 w-[134px]"
            data-node-id="1:2513"
            data-name="indicator-bar"
          />
        </div>
      </div>
    </div>
  );
}
