const assetPathPrefix = "./assets";
const imgAvatar = `${assetPathPrefix}/c197f.png`;
const imgIosSignal = `${assetPathPrefix}/5ad8e.svg`;
const imgIosWifiSignal = `${assetPathPrefix}/054bf.svg`;
const imgIosBatteryFull = `${assetPathPrefix}/cc14a.svg`;
const imgArrowLeft = `${assetPathPrefix}/4a2a2.svg`;
const imgChevronRight = `${assetPathPrefix}/b63a0.svg`;
const imgNotificacionesActivado = `${assetPathPrefix}/c7942.svg`;
const imgPerfilVisibleEnBusquedasDesactivado = `${assetPathPrefix}/a8a73.svg`;
const imgHome = `${assetPathPrefix}/3d070.svg`;
const imgSearch = `${assetPathPrefix}/6386d.svg`;
const imgBookOpen = `${assetPathPrefix}/e44b7.svg`;
const imgRepeat = `${assetPathPrefix}/e1194.svg`;
const imgUser = `${assetPathPrefix}/84566.svg`;

export default function Configuracion() {
  return (
    <div
      className="bg-[#0b0b0f] overflow-clip relative rounded-[36px] size-full"
      data-node-id="1:2577"
      data-name="Configuración"
    >
      <div
        className="absolute content-stretch flex h-[44px] items-center justify-between left-0 px-[24px] top-0 w-[402px]"
        data-node-id="1:2578"
        data-name="status-bar"
      >
        <p
          className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap"
          data-node-id="1:2579"
        >
          9:41
        </p>
        <div
          className="content-stretch flex gap-[8px] items-center relative shrink-0"
          data-node-id="1:2580"
          data-name="status-icons"
        >
          <div
            className="relative shrink-0 size-[20px]"
            data-node-id="1:2581"
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
            data-node-id="1:2583"
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
            data-node-id="1:2585"
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
        className="absolute h-[80px] left-[24px] overflow-clip top-[60px] w-[354px]"
        data-node-id="1:2587"
        data-name="Cabecera"
      >
        <div
          className="absolute left-0 size-[24px] top-[4px]"
          data-node-id="1:2588"
          data-name="arrow-left"
        >
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowLeft} />
        </div>
        <p
          className="[word-break:break-word] absolute font-['Gabarito:ExtraBold'] font-extrabold leading-[normal] left-[36px] text-[28px] text-white top-0 w-[318px]"
          data-node-id="1:2590"
        >
          Configuración
        </p>
        <p
          className="[word-break:break-word] absolute font-['Geist:Regular'] font-normal leading-[normal] left-0 text-[#a3a3c2] text-[14px] top-[44px] w-[354px]"
          data-node-id="1:2591"
        >
          Tu cuenta, a tu manera.
        </p>
      </div>
      <div
        className="absolute h-[560px] left-[24px] overflow-clip top-[160px] w-[354px]"
        data-node-id="1:2592"
        data-name="Contenido principal"
      >
        <div
          className="absolute bg-[#121218] border border-[#282834] border-solid h-[72px] left-0 overflow-clip rounded-[16px] top-0 w-[354px]"
          data-node-id="1:2593"
          data-name="Cuenta de Mateo"
        >
          <div
            className="absolute border-2 border-[#282834] border-solid left-[15px] rounded-[44px] size-[40px] top-[15px]"
            data-node-id="1:2594"
            data-name="avatar"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[44px] size-full"
              src={imgAvatar}
            />
          </div>
          <p
            className="[word-break:break-word] absolute font-['Geist:SemiBold'] font-semibold leading-[normal] left-[67px] text-[14px] text-white top-[13px] w-[250px]"
            data-node-id="1:2595"
          >
            Mateo Claros
          </p>
          <p
            className="[word-break:break-word] absolute font-['Geist:Regular'] font-normal leading-[normal] left-[67px] text-[#a3a3c2] text-[12px] top-[37px] w-[250px]"
            data-node-id="1:2596"
          >
            Cala Cala · Cochabamba
          </p>
        </div>
        <p
          className="[word-break:break-word] absolute font-['Geist:SemiBold'] font-semibold leading-[normal] left-0 text-[#a3a3c2] text-[12px] top-[96px] w-[354px]"
          data-node-id="1:2597"
        >
          CUENTA
        </p>
        <div
          className="absolute bg-[#121218] border border-[#282834] border-solid h-[104px] left-0 overflow-clip rounded-[16px] top-[122px] w-[354px]"
          data-node-id="1:2598"
          data-name="Preferencias de cuenta"
        >
          <p
            className="[word-break:break-word] absolute font-['Geist:SemiBold'] font-semibold leading-[normal] left-[15px] text-[14px] text-white top-[16px] w-[292px]"
            data-node-id="1:2599"
          >
            Editar perfil
          </p>
          <div
            className="absolute left-[321px] size-[16px] top-[17px]"
            data-node-id="1:2600"
            data-name="chevron-right"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgChevronRight}
            />
          </div>
          <p
            className="[word-break:break-word] absolute font-['Geist:SemiBold'] font-semibold leading-[normal] left-[15px] text-[14px] text-white top-[68px] w-[292px]"
            data-node-id="1:2602"
          >
            Contraseña y seguridad
          </p>
          <div
            className="absolute left-[321px] size-[16px] top-[69px]"
            data-node-id="1:2603"
            data-name="chevron-right"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgChevronRight}
            />
          </div>
        </div>
        <p
          className="[word-break:break-word] absolute font-['Geist:SemiBold'] font-semibold leading-[normal] left-0 text-[#a3a3c2] text-[12px] top-[250px] w-[354px]"
          data-node-id="1:2605"
        >
          PREFERENCIAS
        </p>
        <div
          className="absolute bg-[#121218] border border-[#282834] border-solid h-[156px] left-0 overflow-clip rounded-[16px] top-[276px] w-[354px]"
          data-node-id="1:2606"
          data-name="Preferencias de la aplicación"
        >
          <p
            className="[word-break:break-word] absolute font-['Geist:SemiBold'] font-semibold leading-[normal] left-[15px] text-[13px] text-white top-[16px] w-[260px]"
            data-node-id="1:2607"
          >
            Notificaciones
          </p>
          <div
            className="absolute h-[24px] left-[293px] top-[13px] w-[44px]"
            data-node-id="1:2608"
            data-name="Notificaciones · Activado"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgNotificacionesActivado}
            />
          </div>
          <p
            className="[word-break:break-word] absolute font-['Geist:SemiBold'] font-semibold leading-[normal] left-[15px] text-[13px] text-white top-[68px] w-[260px]"
            data-node-id="1:2610"
          >
            Recordatorios de devolución
          </p>
          <div
            className="absolute h-[24px] left-[293px] top-[65px] w-[44px]"
            data-node-id="1:2611"
            data-name="Recordatorios de devolución · Activado"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgNotificacionesActivado}
            />
          </div>
          <p
            className="[word-break:break-word] absolute font-['Geist:SemiBold'] font-semibold leading-[normal] left-[15px] text-[13px] text-white top-[120px] w-[260px]"
            data-node-id="1:2613"
          >
            Perfil visible en búsquedas
          </p>
          <div
            className="absolute h-[24px] left-[293px] top-[117px] w-[44px]"
            data-node-id="1:2614"
            data-name="Perfil visible en búsquedas · Desactivado"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgPerfilVisibleEnBusquedasDesactivado}
            />
          </div>
        </div>
        <div
          className="absolute bg-[#121218] border border-[#282834] border-solid h-[52px] left-0 overflow-clip rounded-[16px] top-[452px] w-[354px]"
          data-node-id="1:2616"
          data-name="Ayuda y privacidad"
        >
          <p
            className="[word-break:break-word] absolute font-['Geist:SemiBold'] font-semibold leading-[normal] left-[15px] text-[14px] text-white top-[16px] w-[292px]"
            data-node-id="1:2617"
          >
            Ayuda y privacidad
          </p>
          <div
            className="absolute left-[321px] size-[16px] top-[17px]"
            data-node-id="1:2618"
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
        className="absolute h-[73px] left-[24px] overflow-clip top-[694px] w-[354px]"
        data-node-id="1:2620"
        data-name="Acciones"
      >
        <div
          className="absolute bg-[#1c1c24] content-stretch flex h-[48px] items-center justify-center left-0 px-[24px] rounded-[24px] top-0 w-[354px]"
          data-node-id="1:2621"
          data-name="Cerrar sesión"
        >
          <p
            className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#f79aa8] text-[15px] whitespace-nowrap"
            data-node-id="1:2622"
          >
            Cerrar sesión
          </p>
        </div>
        <p
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:Regular'] font-normal leading-[normal] left-[177px] text-[#a3a3c2] text-[11px] text-center top-[58px] w-[354px]"
          data-node-id="1:2623"
        >
          PlaySwap · Versión 1.0.0
        </p>
      </div>
      <div
        className="absolute bg-[#121218] border-[#282834] border-solid border-t content-stretch flex flex-col items-start left-0 top-[785px] w-[402px]"
        data-node-id="1:2624"
        data-name="bottom-navigation"
      >
        <div
          className="content-stretch flex h-[68px] items-center justify-between px-[16px] relative shrink-0 w-full"
          data-node-id="1:2625"
          data-name="nav-tabs"
        >
          <div
            className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]"
            data-node-id="1:2626"
            data-name="nav-tab-inicio"
          >
            <div
              className="overflow-clip relative shrink-0 size-[20px]"
              data-node-id="1:2627"
              data-name="icon-frame"
            >
              <div
                className="absolute left-0 size-[20px] top-0"
                data-node-id="1:2628"
                data-name="home"
              >
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHome} />
              </div>
            </div>
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#63637a] text-[10px] whitespace-nowrap"
              data-node-id="1:2630"
            >
              Inicio
            </p>
          </div>
          <div
            className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]"
            data-node-id="1:2631"
            data-name="nav-tab-buscar"
          >
            <div
              className="overflow-clip relative shrink-0 size-[20px]"
              data-node-id="1:2632"
              data-name="icon-frame"
            >
              <div
                className="absolute left-0 size-[20px] top-0"
                data-node-id="1:2633"
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
              data-node-id="1:2635"
            >
              Buscar
            </p>
          </div>
          <div
            className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]"
            data-node-id="1:2636"
            data-name="nav-tab-mis-juegos"
          >
            <div
              className="overflow-clip relative shrink-0 size-[20px]"
              data-node-id="1:2637"
              data-name="icon-frame"
            >
              <div
                className="absolute left-0 size-[20px] top-0"
                data-node-id="1:2638"
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
              data-node-id="1:2640"
            >
              Mis juegos
            </p>
          </div>
          <div
            className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]"
            data-node-id="1:2641"
            data-name="nav-tab-intercambios"
          >
            <div
              className="overflow-clip relative shrink-0 size-[20px]"
              data-node-id="1:2642"
              data-name="icon-frame"
            >
              <div
                className="absolute left-0 size-[20px] top-0"
                data-node-id="1:2643"
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
              data-node-id="1:2645"
            >
              Intercambios
            </p>
          </div>
          <div
            className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]"
            data-node-id="1:2646"
            data-name="nav-tab-perfil"
          >
            <div
              className="overflow-clip relative shrink-0 size-[20px]"
              data-node-id="1:2647"
              data-name="icon-frame"
            >
              <div
                className="absolute left-0 size-[20px] top-0"
                data-node-id="1:2648"
                data-name="user"
              >
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUser} />
              </div>
            </div>
            <p
              className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[10px] text-white whitespace-nowrap"
              data-node-id="1:2650"
            >
              Perfil
            </p>
          </div>
        </div>
        <div
          className="content-stretch flex items-start justify-center py-[8px] relative shrink-0 w-full"
          data-node-id="1:2651"
          data-name="home-indicator-area"
        >
          <div
            className="bg-[#63637a] h-[5px] relative rounded-[100px] shrink-0 w-[134px]"
            data-node-id="1:2652"
            data-name="indicator-bar"
          />
        </div>
      </div>
    </div>
  );
}
