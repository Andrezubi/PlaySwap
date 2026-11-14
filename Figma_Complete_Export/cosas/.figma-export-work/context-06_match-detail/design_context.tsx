const assetPathPrefix = "./assets";
const imgOwnerAvatar = `${assetPathPrefix}/e72de.png`;
const imgRectangle = `${assetPathPrefix}/41245.png`;
const imgRectangle1 = `${assetPathPrefix}/cc4f9.png`;
const imgIosSignal = `${assetPathPrefix}/5ad8e.svg`;
const imgIosWifiSignal = `${assetPathPrefix}/054bf.svg`;
const imgIosBatteryFull = `${assetPathPrefix}/cc14a.svg`;
const imgArrowLeft = `${assetPathPrefix}/94ebb.svg`;
const imgMoreVertical = `${assetPathPrefix}/2b540.svg`;

export default function MatchDetail() {
  return (
    <div
      className="bg-[#0b0b0f] content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[36px] size-full"
      data-node-id="1:1357"
      data-name="match-detail"
    >
      <div
        className="content-stretch flex h-[44px] items-center justify-between px-[24px] relative shrink-0 w-full"
        data-node-id="1:1358"
        data-name="status-bar"
      >
        <p
          className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap"
          data-node-id="1:1359"
        >
          9:41
        </p>
        <div
          className="content-stretch flex gap-[8px] items-center relative shrink-0"
          data-node-id="1:1360"
          data-name="status-icons"
        >
          <div
            className="relative shrink-0 size-[20px]"
            data-node-id="1:1361"
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
            data-node-id="1:1363"
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
            data-node-id="1:1365"
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
        data-node-id="1:1367"
        data-name="detail-body"
      >
        <div
          className="content-stretch flex items-center justify-between relative shrink-0 w-full"
          data-node-id="1:1368"
          data-name="detail-nav"
        >
          <div
            className="relative shrink-0 size-[24px]"
            data-node-id="1:1369"
            data-name="arrow-left"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgArrowLeft}
            />
          </div>
          <p
            className="[word-break:break-word] font-['Gabarito:ExtraBold'] font-extrabold leading-[normal] relative shrink-0 text-[18px] text-white whitespace-nowrap"
            data-node-id="1:1371"
          >
            Comparación de biblioteca
          </p>
          <div
            className="relative shrink-0 size-[24px]"
            data-node-id="1:1372"
            data-name="more-vertical"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgMoreVertical}
            />
          </div>
        </div>
        <div
          className="bg-[#121218] border border-[#282834] border-solid content-stretch flex gap-[12px] items-center p-[16px] relative rounded-[16px] shrink-0 w-full"
          data-node-id="1:1374"
          data-name="user-summary"
        >
          <div
            className="relative rounded-[24px] shrink-0 size-[48px]"
            data-node-id="1:1375"
            data-name="owner-avatar"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full"
              src={imgOwnerAvatar}
            />
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[normal] min-w-px relative whitespace-nowrap"
            data-node-id="1:1376"
            data-name="Frame"
          >
            <p
              className="font-['Geist:Bold'] font-bold relative shrink-0 text-[16px] text-white"
              data-node-id="1:1377"
            >
              Sofía Valenzuela
            </p>
            <p
              className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#a3a3c2] text-[12px]"
              data-node-id="1:1378"
            >
              Activa ahora en Queru Queru
            </p>
          </div>
          <div
            className="bg-[rgba(0,217,166,0.1)] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[8px] shrink-0"
            data-node-id="1:1379"
            data-name="compat-badge"
          >
            <p
              className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#00d9a6] text-[12px] whitespace-nowrap"
              data-node-id="1:1380"
            >
              100%
            </p>
          </div>
        </div>
        <div
          className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full"
          data-node-id="1:1381"
          data-name="comparison-quadrants"
        >
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative"
            data-node-id="1:1382"
            data-name="column-me"
          >
            <div
              className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
              data-node-id="1:1383"
              data-name="me-have"
            >
              <p
                className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#00d9a6] text-[13px] whitespace-nowrap"
                data-node-id="1:1384"
              >
                TÚ TIENES
              </p>
              <div
                className="bg-[#121218] border border-[#00d9a6] border-solid content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[12px] shrink-0 w-full"
                data-node-id="1:1385"
                data-name="game-item"
              >
                <div
                  className="h-[48px] relative rounded-[6px] shrink-0 w-[36px]"
                  data-node-id="1:1386"
                  data-name="Rectangle"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full"
                    src={imgRectangle}
                  />
                </div>
                <p
                  className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold'] font-semibold leading-[normal] min-w-px overflow-hidden relative text-[11px] text-ellipsis text-white"
                  data-node-id="1:1387"
                >
                  God of War Ragnarok
                </p>
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
              data-node-id="1:1388"
              data-name="me-seek"
            >
              <p
                className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#8b5cf6] text-[13px] whitespace-nowrap"
                data-node-id="1:1389"
              >
                TÚ BUSCAS
              </p>
              <div
                className="bg-[#121218] border border-[#8b5cf6] border-solid content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[12px] shrink-0 w-full"
                data-node-id="1:1390"
                data-name="game-item"
              >
                <div
                  className="h-[48px] relative rounded-[6px] shrink-0 w-[36px]"
                  data-node-id="1:1391"
                  data-name="Rectangle"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full"
                    src={imgRectangle1}
                  />
                </div>
                <p
                  className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold'] font-semibold leading-[normal] min-w-px overflow-hidden relative text-[11px] text-ellipsis text-white"
                  data-node-id="1:1392"
                >
                  Elden Ring
                </p>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative"
            data-node-id="1:1393"
            data-name="column-other"
          >
            <div
              className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
              data-node-id="1:1394"
              data-name="other-have"
            >
              <p
                className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#a3a3c2] text-[13px] whitespace-nowrap"
                data-node-id="1:1395"
              >
                SOFÍA TIENE
              </p>
              <div
                className="bg-[#121218] border border-[#00d9a6] border-solid content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[12px] shrink-0 w-full"
                data-node-id="1:1396"
                data-name="game-item"
              >
                <div
                  className="h-[48px] relative rounded-[6px] shrink-0 w-[36px]"
                  data-node-id="1:1397"
                  data-name="Rectangle"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full"
                    src={imgRectangle1}
                  />
                </div>
                <p
                  className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold'] font-semibold leading-[normal] min-w-px overflow-hidden relative text-[11px] text-ellipsis text-white"
                  data-node-id="1:1398"
                >
                  Elden Ring
                </p>
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
              data-node-id="1:1399"
              data-name="other-seek"
            >
              <p
                className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#a3a3c2] text-[13px] whitespace-nowrap"
                data-node-id="1:1400"
              >
                SOFÍA BUSCA
              </p>
              <div
                className="bg-[#121218] border border-[#8b5cf6] border-solid content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[12px] shrink-0 w-full"
                data-node-id="1:1401"
                data-name="game-item"
              >
                <div
                  className="h-[48px] relative rounded-[6px] shrink-0 w-[36px]"
                  data-node-id="1:1402"
                  data-name="Rectangle"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full"
                    src={imgRectangle}
                  />
                </div>
                <p
                  className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold'] font-semibold leading-[normal] min-w-px overflow-hidden relative text-[11px] text-ellipsis text-white"
                  data-node-id="1:1403"
                >
                  God of War Ragnarok
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative shrink-0 w-full"
        data-node-id="1:1404"
        data-name="detail-actions"
      >
        <div
          className="bg-gradient-to-r content-stretch flex from-[#00d9a6] h-[48px] items-center justify-center px-[24px] relative rounded-[24px] shrink-0 to-[#8b5cf6] w-full"
          data-node-id="1:1405"
          data-name="button"
        >
          <p
            className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[15px] text-white whitespace-nowrap"
            data-node-id="1:1406"
          >
            Solicitar intercambio
          </p>
        </div>
        <div
          className="border border-[#282834] border-solid content-stretch flex h-[48px] items-center justify-center px-[24px] relative rounded-[24px] shrink-0 w-full"
          data-node-id="1:1407"
          data-name="button"
        >
          <p
            className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[15px] text-white whitespace-nowrap"
            data-node-id="1:1408"
          >
            Enviar mensaje
          </p>
        </div>
      </div>
    </div>
  );
}
