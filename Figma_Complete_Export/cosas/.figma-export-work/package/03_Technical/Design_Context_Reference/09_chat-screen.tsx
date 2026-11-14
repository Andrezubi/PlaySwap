const assetPathPrefix = "./assets";
const imgUserAvatar = `${assetPathPrefix}/32fa5.png`;
const imgFrame = `${assetPathPrefix}/7b06e.svg`;
const imgIosSignal = `${assetPathPrefix}/5ad8e.svg`;
const imgIosWifiSignal = `${assetPathPrefix}/054bf.svg`;
const imgIosBatteryFull = `${assetPathPrefix}/cc14a.svg`;
const imgChevronLeft = `${assetPathPrefix}/a0aff.svg`;
const imgMoreVertical = `${assetPathPrefix}/57fc0.svg`;
const imgMapPin = `${assetPathPrefix}/03acd.svg`;
const imgPlus = `${assetPathPrefix}/fea88.svg`;
const imgSend = `${assetPathPrefix}/22485.svg`;
const imgHome = `${assetPathPrefix}/25aed.svg`;
const imgSearch = `${assetPathPrefix}/6386d.svg`;
const imgBookOpen = `${assetPathPrefix}/e44b7.svg`;
const imgRepeat = `${assetPathPrefix}/e1194.svg`;
const imgUser = `${assetPathPrefix}/e7699.svg`;

export default function ChatScreen() {
  return (
    <div
      className="bg-[#07090e] content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[36px] size-full"
      data-node-id="1:1475"
      data-name="chat-screen"
    >
      <div
        className="absolute h-[874px] left-0 top-0 w-[402px]"
        data-node-id="1:1477"
        data-name="Frame"
      >
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
      </div>
      <div
        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
        data-node-id="1:1523"
        data-name="header-zone"
      >
        <div
          className="content-stretch flex h-[44px] items-center justify-between px-[24px] relative shrink-0 w-full"
          data-node-id="1:1524"
          data-name="status-bar"
        >
          <p
            className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap"
            data-node-id="1:1525"
          >
            9:41
          </p>
          <div
            className="content-stretch flex gap-[8px] items-center relative shrink-0"
            data-node-id="1:1526"
            data-name="status-icons"
          >
            <div
              className="relative shrink-0 size-[20px]"
              data-node-id="1:1527"
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
              data-node-id="1:1529"
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
              data-node-id="1:1531"
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
          className="border-[#282834] border-b border-solid content-stretch flex items-center justify-between px-[20px] py-[12px] relative shrink-0 w-full"
          data-node-id="1:1533"
          data-name="chat-header"
        >
          <div
            className="content-stretch flex gap-[12px] items-center relative shrink-0"
            data-node-id="1:1534"
            data-name="user-meta"
          >
            <div
              className="overflow-clip relative shrink-0 size-[24px]"
              data-node-id="1:1535"
              data-name="Frame"
            >
              <div
                className="absolute left-0 size-[24px] top-0"
                data-node-id="1:1536"
                data-name="chevron-left"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgChevronLeft}
                />
              </div>
            </div>
            <div
              className="relative rounded-[20px] shrink-0 size-[40px]"
              data-node-id="1:1538"
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
              data-node-id="1:1539"
              data-name="Frame"
            >
              <p
                className="font-['Geist:Bold'] font-bold relative shrink-0 text-[15px] text-white"
                data-node-id="1:1540"
              >
                Sofía Valenzuela
              </p>
              <p
                className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#00d9a6] text-[12px]"
                data-node-id="1:1541"
              >
                Activa ahora
              </p>
            </div>
          </div>
          <div
            className="overflow-clip relative shrink-0 size-[24px]"
            data-node-id="1:1542"
            data-name="Frame"
          >
            <div
              className="absolute left-0 size-[24px] top-0"
              data-node-id="1:1543"
              data-name="more-vertical"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgMoreVertical}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex-[1_0_0] min-h-px relative w-full"
        data-node-id="1:1545"
        data-name="chat-messages-container"
      >
        <div
          className="absolute bg-[rgba(139,92,246,0.1)] border border-[#8b5cf6] border-solid content-stretch flex gap-[12px] h-[79px] items-center left-[20px] p-[16px] right-[20px] rounded-[16px] top-[20px]"
          data-node-id="1:1546"
          data-name="proposal-banner"
        >
          <div className="relative shrink-0 size-[24px]" data-node-id="1:1547" data-name="map-pin">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMapPin} />
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px relative"
            data-node-id="1:1549"
            data-name="Frame"
          >
            <p
              className="font-['Geist:Bold'] font-bold relative shrink-0 text-[13px] text-white whitespace-nowrap"
              data-node-id="1:1550"
            >
              ¿Listos para acordar el punto?
            </p>
            <p
              className="font-['Geist:Regular'] font-normal min-w-full relative shrink-0 text-[#a3a3c2] text-[11px] w-[min-content]"
              data-node-id="1:1551"
            >
              Proponer lugar de encuentro en Cochabamba
            </p>
          </div>
          <div
            className="bg-[#8b5cf6] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[12px] shrink-0"
            data-node-id="1:1552"
            data-name="Frame"
          >
            <p
              className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[11px] text-white whitespace-nowrap"
              data-node-id="1:1553"
            >
              Acordar
            </p>
          </div>
        </div>
        <div
          className="absolute content-stretch flex flex-col gap-[4px] items-start left-[20px] right-[20px] top-[115px]"
          data-node-id="1:1554"
          data-name="msg-other"
        >
          <div
            className="bg-[#121218] content-stretch flex items-start max-w-[280px] p-[12px] relative rounded-bl-[4px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0"
            data-node-id="1:1555"
            data-name="bubble"
          >
            <p
              className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular'] font-normal leading-[20px] min-w-px relative text-[14px] text-white"
              data-node-id="1:1556"
            >
              ¡Hola Mateo! Sí, tengo el Elden Ring disponible para intercambio. Me interesa mucho tu
              God of War.
            </p>
          </div>
          <p
            className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#63637a] text-[10px] whitespace-nowrap"
            data-node-id="1:1557"
          >
            10:02 AM
          </p>
        </div>
        <div
          className="absolute content-stretch flex flex-col gap-[4px] items-end left-[20px] right-[20px] top-[232px]"
          data-node-id="1:1558"
          data-name="msg-user"
        >
          <div
            className="bg-[rgba(0,217,166,0.1)] border border-[#00d9a6] border-solid content-stretch flex items-start max-w-[280px] p-[12px] relative rounded-bl-[16px] rounded-br-[4px] rounded-tl-[16px] rounded-tr-[16px] shrink-0"
            data-node-id="1:1559"
            data-name="bubble"
          >
            <p
              className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular'] font-normal leading-[20px] min-w-px relative text-[14px] text-white"
              data-node-id="1:1560"
            >
              Buenísimo. ¿Qué te parece si nos encontramos en el Plaza de Cala Cala o por el Cine
              Center de la Oquendo?
            </p>
          </div>
          <p
            className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#63637a] text-[10px] whitespace-nowrap"
            data-node-id="1:1561"
          >
            10:05 AM
          </p>
        </div>
        <div
          className="absolute content-stretch flex flex-col gap-[4px] items-start left-[20px] right-[20px] top-[349px]"
          data-node-id="1:1562"
          data-name="msg-other"
        >
          <div
            className="bg-[#121218] content-stretch flex items-start max-w-[280px] p-[12px] relative rounded-bl-[4px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0"
            data-node-id="1:1563"
            data-name="bubble"
          >
            <p
              className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular'] font-normal leading-[20px] min-w-px relative text-[14px] text-white"
              data-node-id="1:1564"
            >
              El Cine Center me queda perfecto por las tardes. ¿Puedes hoy a las 5:30 PM?
            </p>
          </div>
          <p
            className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#63637a] text-[10px] whitespace-nowrap"
            data-node-id="1:1565"
          >
            10:07 AM
          </p>
        </div>
      </div>
      <div
        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
        data-node-id="1:1566"
        data-name="input-zone"
      >
        <div
          className="bg-[#121218] border-[#282834] border-solid border-t content-stretch flex gap-[12px] items-center p-[16px] relative shrink-0 w-full"
          data-node-id="1:1567"
          data-name="chat-input-bar"
        >
          <div
            className="overflow-clip relative shrink-0 size-[24px]"
            data-node-id="1:1568"
            data-name="Frame"
          >
            <div
              className="absolute left-0 size-[24px] top-0"
              data-node-id="1:1569"
              data-name="plus"
            >
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
            </div>
          </div>
          <div
            className="bg-[#0b0b0f] border border-[#282834] border-solid content-stretch flex flex-[1_0_0] h-[40px] items-center min-w-px px-[16px] py-[8px] relative rounded-[20px]"
            data-node-id="1:1571"
            data-name="input-field"
          >
            <p
              className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular'] font-normal leading-[normal] min-w-px relative text-[#a3a3c2] text-[14px]"
              data-node-id="1:1572"
            >
              Escribe un mensaje...
            </p>
          </div>
          <div
            className="overflow-clip relative shrink-0 size-[24px]"
            data-node-id="1:1573"
            data-name="Frame"
          >
            <div
              className="absolute left-0 size-[24px] top-0"
              data-node-id="1:1574"
              data-name="send"
            >
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSend} />
            </div>
          </div>
        </div>
        <div
          className="bg-[#121218] border-[#282834] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 w-full"
          data-node-id="1:1576"
          data-name="bottom-navigation"
        >
          <div
            className="content-stretch flex h-[68px] items-center justify-between px-[16px] relative shrink-0 w-full"
            data-node-id="1:1577"
            data-name="nav-tabs"
          >
            <div
              className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]"
              data-node-id="1:1578"
              data-name="nav-tab-inicio"
            >
              <div
                className="overflow-clip relative shrink-0 size-[20px]"
                data-node-id="1:1579"
                data-name="icon-frame"
              >
                <div
                  className="absolute left-0 size-[20px] top-0"
                  data-node-id="1:1580"
                  data-name="home"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgHome}
                  />
                </div>
              </div>
              <p
                className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[10px] text-white whitespace-nowrap"
                data-node-id="1:1582"
              >
                Inicio
              </p>
            </div>
            <div
              className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]"
              data-node-id="1:1583"
              data-name="nav-tab-buscar"
            >
              <div
                className="overflow-clip relative shrink-0 size-[20px]"
                data-node-id="1:1584"
                data-name="icon-frame"
              >
                <div
                  className="absolute left-0 size-[20px] top-0"
                  data-node-id="1:1585"
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
                data-node-id="1:1587"
              >
                Buscar
              </p>
            </div>
            <div
              className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]"
              data-node-id="1:1588"
              data-name="nav-tab-mis-juegos"
            >
              <div
                className="overflow-clip relative shrink-0 size-[20px]"
                data-node-id="1:1589"
                data-name="icon-frame"
              >
                <div
                  className="absolute left-0 size-[20px] top-0"
                  data-node-id="1:1590"
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
                data-node-id="1:1592"
              >
                Mis juegos
              </p>
            </div>
            <div
              className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]"
              data-node-id="1:1593"
              data-name="nav-tab-intercambios"
            >
              <div
                className="overflow-clip relative shrink-0 size-[20px]"
                data-node-id="1:1594"
                data-name="icon-frame"
              >
                <div
                  className="absolute left-0 size-[20px] top-0"
                  data-node-id="1:1595"
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
                data-node-id="1:1597"
              >
                Intercambios
              </p>
            </div>
            <div
              className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]"
              data-node-id="1:1598"
              data-name="nav-tab-perfil"
            >
              <div
                className="overflow-clip relative shrink-0 size-[20px]"
                data-node-id="1:1599"
                data-name="icon-frame"
              >
                <div
                  className="absolute left-0 size-[20px] top-0"
                  data-node-id="1:1600"
                  data-name="user"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgUser}
                  />
                </div>
              </div>
              <p
                className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#63637a] text-[10px] whitespace-nowrap"
                data-node-id="1:1602"
              >
                Perfil
              </p>
            </div>
          </div>
          <div
            className="content-stretch flex items-start justify-center py-[8px] relative shrink-0 w-full"
            data-node-id="1:1603"
            data-name="home-indicator-area"
          >
            <div
              className="bg-[#63637a] h-[5px] relative rounded-[100px] shrink-0 w-[134px]"
              data-node-id="1:1604"
              data-name="indicator-bar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
