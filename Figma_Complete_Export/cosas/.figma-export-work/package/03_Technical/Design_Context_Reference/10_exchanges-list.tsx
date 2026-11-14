const assetPathPrefix = "./assets";
const imgUserAvatar = `${assetPathPrefix}/96bfe.png`;
const imgRectangle = `${assetPathPrefix}/cc4f9.png`;
const imgRectangle1 = `${assetPathPrefix}/41245.png`;
const imgUserAvatar1 = `${assetPathPrefix}/5c111.png`;
const imgRectangle2 = `${assetPathPrefix}/a124e.png`;
const imgRectangle3 = `${assetPathPrefix}/8cdf2.png`;
const imgIosSignal = `${assetPathPrefix}/5ad8e.svg`;
const imgIosWifiSignal = `${assetPathPrefix}/054bf.svg`;
const imgIosBatteryFull = `${assetPathPrefix}/cc14a.svg`;
const imgArrowLeftRight = `${assetPathPrefix}/d5ab4.svg`;
const imgHome = `${assetPathPrefix}/3d070.svg`;
const imgSearch = `${assetPathPrefix}/6386d.svg`;
const imgBookOpen = `${assetPathPrefix}/e44b7.svg`;
const imgRepeat = `${assetPathPrefix}/a1117.svg`;
const imgUser = `${assetPathPrefix}/e7699.svg`;

export default function ExchangesList() {
  return (
    <div
      className="bg-[#0b0b0f] content-stretch flex flex-col items-start overflow-clip relative rounded-[36px] size-full"
      data-node-id="1:1605"
      data-name="exchanges-list"
    >
      <div
        className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
        data-node-id="1:1606"
        data-name="header-zone"
      >
        <div
          className="content-stretch flex h-[44px] items-center justify-between px-[24px] relative shrink-0 w-full"
          data-node-id="1:1607"
          data-name="status-bar"
        >
          <p
            className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap"
            data-node-id="1:1608"
          >
            9:41
          </p>
          <div
            className="content-stretch flex gap-[8px] items-center relative shrink-0"
            data-node-id="1:1609"
            data-name="status-icons"
          >
            <div
              className="relative shrink-0 size-[20px]"
              data-node-id="1:1610"
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
              data-node-id="1:1612"
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
              data-node-id="1:1614"
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
          className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] px-[24px] relative shrink-0 w-full whitespace-nowrap"
          data-node-id="1:1616"
          data-name="title-block"
        >
          <p
            className="font-['Gabarito:ExtraBold'] font-extrabold relative shrink-0 text-[28px] text-white"
            data-node-id="1:1617"
          >
            Tus Intercambios
          </p>
          <p
            className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#a3a3c2] text-[13px]"
            data-node-id="1:1618"
          >
            Gestiona tus propuestas y préstamos de juegos
          </p>
        </div>
        <div
          className="content-stretch flex items-start px-[20px] relative shrink-0 w-full"
          data-node-id="1:1619"
          data-name="segmented-tabs"
        >
          <div
            className="bg-[#121218] border border-[#282834] border-solid content-stretch flex flex-[1_0_0] items-start min-w-px p-[4px] relative rounded-[16px]"
            data-node-id="1:1620"
            data-name="Frame"
          >
            <div
              className="content-stretch flex flex-[1_0_0] h-[36px] items-center justify-center min-w-px relative rounded-[12px]"
              data-node-id="1:1621"
              data-name="Frame"
            >
              <p
                className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#a3a3c2] text-[13px] whitespace-nowrap"
                data-node-id="1:1622"
              >
                Pendientes
              </p>
            </div>
            <div
              className="bg-[rgba(0,217,166,0.1)] border border-[#00d9a6] border-solid content-stretch flex flex-[1_0_0] h-[36px] items-center justify-center min-w-px relative rounded-[12px]"
              data-node-id="1:1623"
              data-name="Frame"
            >
              <p
                className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#00d9a6] text-[13px] whitespace-nowrap"
                data-node-id="1:1624"
              >
                Activos
              </p>
            </div>
            <div
              className="content-stretch flex flex-[1_0_0] h-[36px] items-center justify-center min-w-px relative rounded-[12px]"
              data-node-id="1:1625"
              data-name="Frame"
            >
              <p
                className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#a3a3c2] text-[13px] whitespace-nowrap"
                data-node-id="1:1626"
              >
                Historial
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-[610px] relative shrink-0 w-full"
        data-node-id="1:1627"
        data-name="exchanges-content"
      >
        <div
          className="absolute bg-[#121218] border border-[#282834] border-solid content-stretch flex flex-col gap-[16px] items-start left-[20px] p-[16px] right-[20px] rounded-[20px] top-[20px]"
          data-node-id="1:1628"
          data-name="exchange-card"
        >
          <div
            className="content-stretch flex items-center justify-between relative shrink-0 w-full"
            data-node-id="1:1629"
            data-name="card-header"
          >
            <div
              className="content-stretch flex gap-[10px] items-center relative shrink-0"
              data-node-id="1:1630"
              data-name="user-meta"
            >
              <div
                className="relative rounded-[16px] shrink-0 size-[32px]"
                data-node-id="1:1631"
                data-name="user-avatar"
              >
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full"
                  src={imgUserAvatar}
                />
              </div>
              <div
                className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] relative shrink-0 whitespace-nowrap"
                data-node-id="1:1632"
                data-name="Frame"
              >
                <p
                  className="font-['Geist:Bold'] font-bold relative shrink-0 text-[13px] text-white"
                  data-node-id="1:1633"
                >
                  Sofía Valenzuela
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#63637a] text-[11px]"
                  data-node-id="1:1634"
                >
                  Queru Queru · Hace 2 días
                </p>
              </div>
            </div>
            <div
              className="bg-[rgba(0,217,166,0.1)] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[8px] shrink-0"
              data-node-id="1:1635"
              data-name="Frame"
            >
              <p
                className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#00d9a6] text-[11px] whitespace-nowrap"
                data-node-id="1:1636"
              >
                Activo
              </p>
            </div>
          </div>
          <div
            className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full"
            data-node-id="1:1637"
            data-name="games-exchange-row"
          >
            <div
              className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0"
              data-node-id="1:1638"
              data-name="Frame"
            >
              <div
                className="h-[84px] relative rounded-[8px] shrink-0 w-[64px]"
                data-node-id="1:1639"
                data-name="Rectangle"
              >
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full"
                  src={imgRectangle}
                />
              </div>
              <p
                className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] overflow-hidden relative shrink-0 text-[#a3a3c2] text-[10px] text-ellipsis w-[64px] whitespace-nowrap"
                data-node-id="1:1640"
              >
                Elden Ring
              </p>
            </div>
            <div
              className="relative shrink-0 size-[20px]"
              data-node-id="1:1641"
              data-name="arrow-left-right"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgArrowLeftRight}
              />
            </div>
            <div
              className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0"
              data-node-id="1:1643"
              data-name="Frame"
            >
              <div
                className="h-[84px] relative rounded-[8px] shrink-0 w-[64px]"
                data-node-id="1:1644"
                data-name="Rectangle"
              >
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full"
                  src={imgRectangle1}
                />
              </div>
              <p
                className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] overflow-hidden relative shrink-0 text-[#a3a3c2] text-[10px] text-ellipsis w-[64px] whitespace-nowrap"
                data-node-id="1:1645"
              >
                God of War
              </p>
            </div>
            <div
              className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px pl-[8px] relative whitespace-nowrap"
              data-node-id="1:1646"
              data-name="Frame"
            >
              <p
                className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#63637a] text-[12px]"
                data-node-id="1:1647"
              >
                Tiempo restante:
              </p>
              <p
                className="font-['Geist:Bold'] font-bold relative shrink-0 text-[16px] text-white"
                data-node-id="1:1648"
              >
                12 Días
              </p>
            </div>
          </div>
        </div>
        <div
          className="absolute bg-[#121218] border border-[#282834] border-solid content-stretch flex flex-col gap-[16px] items-start left-[20px] p-[16px] right-[20px] rounded-[20px] top-[219px]"
          data-node-id="1:1649"
          data-name="exchange-card"
        >
          <div
            className="content-stretch flex items-center justify-between relative shrink-0 w-full"
            data-node-id="1:1650"
            data-name="card-header"
          >
            <div
              className="content-stretch flex gap-[10px] items-center relative shrink-0"
              data-node-id="1:1651"
              data-name="user-meta"
            >
              <div
                className="relative rounded-[16px] shrink-0 size-[32px]"
                data-node-id="1:1652"
                data-name="user-avatar"
              >
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full"
                  src={imgUserAvatar1}
                />
              </div>
              <div
                className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] relative shrink-0 whitespace-nowrap"
                data-node-id="1:1653"
                data-name="Frame"
              >
                <p
                  className="font-['Geist:Bold'] font-bold relative shrink-0 text-[13px] text-white"
                  data-node-id="1:1654"
                >
                  Carlos Mendoza
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#63637a] text-[11px]"
                  data-node-id="1:1655"
                >
                  Cala Cala · Ayer
                </p>
              </div>
            </div>
            <div
              className="bg-[rgba(139,92,246,0.1)] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[8px] shrink-0"
              data-node-id="1:1656"
              data-name="Frame"
            >
              <p
                className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#8b5cf6] text-[11px] whitespace-nowrap"
                data-node-id="1:1657"
              >
                Pendiente
              </p>
            </div>
          </div>
          <div
            className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full"
            data-node-id="1:1658"
            data-name="games-exchange-row"
          >
            <div
              className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0"
              data-node-id="1:1659"
              data-name="Frame"
            >
              <div
                className="h-[84px] relative rounded-[8px] shrink-0 w-[64px]"
                data-node-id="1:1660"
                data-name="Rectangle"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
                  <img
                    alt=""
                    className="absolute h-[117.44%] left-0 max-w-none top-[-17.05%] w-full"
                    src={imgRectangle2}
                  />
                </div>
              </div>
              <p
                className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] overflow-hidden relative shrink-0 text-[#a3a3c2] text-[10px] text-ellipsis w-[64px] whitespace-nowrap"
                data-node-id="1:1661"
              >
                Spider-Man 2
              </p>
            </div>
            <div
              className="relative shrink-0 size-[20px]"
              data-node-id="1:1662"
              data-name="arrow-left-right"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgArrowLeftRight}
              />
            </div>
            <div
              className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0"
              data-node-id="1:1664"
              data-name="Frame"
            >
              <div
                className="h-[84px] relative rounded-[8px] shrink-0 w-[64px]"
                data-node-id="1:1665"
                data-name="Rectangle"
              >
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full"
                  src={imgRectangle3}
                />
              </div>
              <p
                className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] overflow-hidden relative shrink-0 text-[#a3a3c2] text-[10px] text-ellipsis w-[64px] whitespace-nowrap"
                data-node-id="1:1666"
              >{`Demon's Souls`}</p>
            </div>
            <div
              className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pl-[8px] relative"
              data-node-id="1:1667"
              data-name="Frame"
            >
              <p
                className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#8b5cf6] text-[11px] whitespace-nowrap"
                data-node-id="1:1668"
              >
                Esperando confirmación
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-[#121218] border-[#282834] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 w-full"
        data-node-id="1:1669"
        data-name="bottom-navigation"
      >
        <div
          className="content-stretch flex h-[68px] items-center justify-between px-[16px] relative shrink-0 w-full"
          data-node-id="1:1670"
          data-name="nav-tabs"
        >
          <div
            className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]"
            data-node-id="1:1671"
            data-name="nav-tab-inicio"
          >
            <div
              className="overflow-clip relative shrink-0 size-[20px]"
              data-node-id="1:1672"
              data-name="icon-frame"
            >
              <div
                className="absolute left-0 size-[20px] top-0"
                data-node-id="1:1673"
                data-name="home"
              >
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHome} />
              </div>
            </div>
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#63637a] text-[10px] whitespace-nowrap"
              data-node-id="1:1675"
            >
              Inicio
            </p>
          </div>
          <div
            className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]"
            data-node-id="1:1676"
            data-name="nav-tab-buscar"
          >
            <div
              className="overflow-clip relative shrink-0 size-[20px]"
              data-node-id="1:1677"
              data-name="icon-frame"
            >
              <div
                className="absolute left-0 size-[20px] top-0"
                data-node-id="1:1678"
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
              data-node-id="1:1680"
            >
              Buscar
            </p>
          </div>
          <div
            className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]"
            data-node-id="1:1681"
            data-name="nav-tab-mis-juegos"
          >
            <div
              className="overflow-clip relative shrink-0 size-[20px]"
              data-node-id="1:1682"
              data-name="icon-frame"
            >
              <div
                className="absolute left-0 size-[20px] top-0"
                data-node-id="1:1683"
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
              data-node-id="1:1685"
            >
              Mis juegos
            </p>
          </div>
          <div
            className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]"
            data-node-id="1:1686"
            data-name="nav-tab-intercambios"
          >
            <div
              className="overflow-clip relative shrink-0 size-[20px]"
              data-node-id="1:1687"
              data-name="icon-frame"
            >
              <div
                className="absolute left-0 size-[20px] top-0"
                data-node-id="1:1688"
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
              className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[10px] text-white whitespace-nowrap"
              data-node-id="1:1690"
            >
              Intercambios
            </p>
          </div>
          <div
            className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]"
            data-node-id="1:1691"
            data-name="nav-tab-perfil"
          >
            <div
              className="overflow-clip relative shrink-0 size-[20px]"
              data-node-id="1:1692"
              data-name="icon-frame"
            >
              <div
                className="absolute left-0 size-[20px] top-0"
                data-node-id="1:1693"
                data-name="user"
              >
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUser} />
              </div>
            </div>
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#63637a] text-[10px] whitespace-nowrap"
              data-node-id="1:1695"
            >
              Perfil
            </p>
          </div>
        </div>
        <div
          className="content-stretch flex items-start justify-center py-[8px] relative shrink-0 w-full"
          data-node-id="1:1696"
          data-name="home-indicator-area"
        >
          <div
            className="bg-[#63637a] h-[5px] relative rounded-[100px] shrink-0 w-[134px]"
            data-node-id="1:1697"
            data-name="indicator-bar"
          />
        </div>
      </div>
    </div>
  );
}
