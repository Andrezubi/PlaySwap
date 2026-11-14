const assetPathPrefix = "./assets";
const imgUserAvatar = `${assetPathPrefix}/3f109.png`;
const imgIosSignal = `${assetPathPrefix}/5ad8e.svg`;
const imgIosWifiSignal = `${assetPathPrefix}/054bf.svg`;
const imgIosBatteryFull = `${assetPathPrefix}/cc14a.svg`;
const imgCheck = `${assetPathPrefix}/724cd.svg`;
const imgStar = `${assetPathPrefix}/7b22a.svg`;
const imgStar1 = `${assetPathPrefix}/ec885.svg`;

export default function RatingScreen() {
  return (
    <div
      className="bg-[#0b0b0f] content-stretch flex flex-col items-start overflow-clip relative rounded-[36px] size-full"
      data-node-id="1:2514"
      data-name="rating-screen"
    >
      <div
        className="content-stretch flex h-[44px] items-center justify-between px-[24px] relative shrink-0 w-full"
        data-node-id="1:2515"
        data-name="status-bar"
      >
        <p
          className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap"
          data-node-id="1:2516"
        >
          9:41
        </p>
        <div
          className="content-stretch flex gap-[8px] items-center relative shrink-0"
          data-node-id="1:2517"
          data-name="status-icons"
        >
          <div
            className="relative shrink-0 size-[20px]"
            data-node-id="1:2518"
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
            data-node-id="1:2520"
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
            data-node-id="1:2522"
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
        className="h-[697px] relative shrink-0 w-full"
        data-node-id="1:2524"
        data-name="rating-body"
      >
        <div
          className="absolute bg-[rgba(0,217,166,0.1)] border-2 border-[#00d9a6] border-solid content-stretch flex flex-col items-center justify-center left-[169px] rounded-[32px] size-[64px] top-[70px]"
          data-node-id="1:2525"
          data-name="checkmark-animation"
        >
          <div
            className="overflow-clip relative shrink-0 size-[24px]"
            data-node-id="1:2526"
            data-name="Frame"
          >
            <div
              className="absolute left-0 size-[24px] top-0"
              data-node-id="1:2527"
              data-name="check"
            >
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheck} />
            </div>
          </div>
        </div>
        <div
          className="[word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center leading-[normal] left-[24px] right-[24px] text-center top-[158px] whitespace-nowrap"
          data-node-id="1:2529"
          data-name="rating-header"
        >
          <p
            className="font-['Gabarito:ExtraBold'] font-extrabold relative shrink-0 text-[24px] text-white"
            data-node-id="1:2530"
          >
            ¡Intercambio Completado!
          </p>
          <p
            className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#a3a3c2] text-[14px]"
            data-node-id="1:2531"
          >
            Califica tu experiencia de intercambio con Sofía.
          </p>
        </div>
        <div
          className="absolute bg-[#121218] border border-[#282834] border-solid content-stretch flex gap-[12px] h-[64px] items-center left-[24px] p-[12px] right-[24px] rounded-[16px] top-[237px]"
          data-node-id="1:2532"
          data-name="other-user-summary"
        >
          <div
            className="relative rounded-[20px] shrink-0 size-[40px]"
            data-node-id="1:2533"
            data-name="user-avatar"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full"
              src={imgUserAvatar}
            />
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[normal] min-w-px relative whitespace-nowrap"
            data-node-id="1:2534"
            data-name="Frame"
          >
            <p
              className="font-['Geist:Bold'] font-bold relative shrink-0 text-[14px] text-white"
              data-node-id="1:2535"
            >
              Sofía Valenzuela
            </p>
            <p
              className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#63637a] text-[11px]"
              data-node-id="1:2536"
            >
              Queru Queru · 14 intercambios
            </p>
          </div>
        </div>
        <div
          className="absolute content-stretch flex flex-col gap-[8px] items-center left-[24px] right-[24px] top-[325px]"
          data-node-id="1:2537"
          data-name="star-selector"
        >
          <p
            className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#63637a] text-[12px] uppercase whitespace-nowrap"
            data-node-id="1:2538"
          >
            Tu Calificación
          </p>
          <div
            className="content-stretch flex gap-[12px] items-start relative shrink-0"
            data-node-id="1:2539"
            data-name="star-row"
          >
            <div
              className="overflow-clip relative shrink-0 size-[36px]"
              data-node-id="1:2540"
              data-name="Frame"
            >
              <div
                className="absolute left-0 size-[36px] top-0"
                data-node-id="1:2541"
                data-name="star"
              >
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
              </div>
            </div>
            <div
              className="overflow-clip relative shrink-0 size-[36px]"
              data-node-id="1:2543"
              data-name="Frame"
            >
              <div
                className="absolute left-0 size-[36px] top-0"
                data-node-id="1:2544"
                data-name="star"
              >
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
              </div>
            </div>
            <div
              className="overflow-clip relative shrink-0 size-[36px]"
              data-node-id="1:2546"
              data-name="Frame"
            >
              <div
                className="absolute left-0 size-[36px] top-0"
                data-node-id="1:2547"
                data-name="star"
              >
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
              </div>
            </div>
            <div
              className="overflow-clip relative shrink-0 size-[36px]"
              data-node-id="1:2549"
              data-name="Frame"
            >
              <div
                className="absolute left-0 size-[36px] top-0"
                data-node-id="1:2550"
                data-name="star"
              >
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
              </div>
            </div>
            <div
              className="overflow-clip relative shrink-0 size-[36px]"
              data-node-id="1:2552"
              data-name="Frame"
            >
              <div
                className="absolute left-0 size-[36px] top-0"
                data-node-id="1:2553"
                data-name="star"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgStar1}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute content-stretch flex flex-col gap-[10px] items-start left-[24px] right-[24px] top-[409px]"
          data-node-id="1:2555"
          data-name="quick-feedback"
        >
          <p
            className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#63637a] text-[12px] uppercase whitespace-nowrap"
            data-node-id="1:2556"
          >
            Comentarios Rápidos
          </p>
          <div
            className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full"
            data-node-id="1:2557"
            data-name="tags-wrapper"
          >
            <div
              className="bg-[rgba(0,217,166,0.1)] border border-[#00d9a6] border-solid content-stretch flex items-start px-[14px] py-[8px] relative rounded-[16px] shrink-0"
              data-node-id="1:2558"
              data-name="Frame"
            >
              <p
                className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#00d9a6] text-[12px] whitespace-nowrap"
                data-node-id="1:2559"
              >
                Puntual
              </p>
            </div>
            <div
              className="bg-[rgba(0,217,166,0.1)] border border-[#00d9a6] border-solid content-stretch flex items-start px-[14px] py-[8px] relative rounded-[16px] shrink-0"
              data-node-id="1:2560"
              data-name="Frame"
            >
              <p
                className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#00d9a6] text-[12px] whitespace-nowrap"
                data-node-id="1:2561"
              >
                Juego impecable
              </p>
            </div>
            <div
              className="bg-[rgba(0,217,166,0.1)] border border-[#00d9a6] border-solid content-stretch flex items-start px-[14px] py-[8px] relative rounded-[16px] shrink-0"
              data-node-id="1:2562"
              data-name="Frame"
            >
              <p
                className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#00d9a6] text-[12px] whitespace-nowrap"
                data-node-id="1:2563"
              >
                Amable
              </p>
            </div>
            <div
              className="bg-[#121218] border border-[#282834] border-solid content-stretch flex items-start px-[14px] py-[8px] relative rounded-[16px] shrink-0"
              data-node-id="1:2564"
              data-name="Frame"
            >
              <p
                className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#a3a3c2] text-[12px] whitespace-nowrap"
                data-node-id="1:2565"
              >
                Recomendado
              </p>
            </div>
            <div
              className="bg-[#121218] border border-[#282834] border-solid content-stretch flex items-start px-[14px] py-[8px] relative rounded-[16px] shrink-0"
              data-node-id="1:2566"
              data-name="Frame"
            >
              <p
                className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#a3a3c2] text-[12px] whitespace-nowrap"
                data-node-id="1:2567"
              >
                Buena comunicación
              </p>
            </div>
          </div>
        </div>
        <div
          className="absolute content-stretch flex flex-col gap-[8px] items-start left-[24px] right-[24px] top-[531px]"
          data-node-id="1:2568"
          data-name="comment-area"
        >
          <p
            className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#63637a] text-[12px] uppercase whitespace-nowrap"
            data-node-id="1:2569"
          >
            Comentario Opcional
          </p>
          <div
            className="bg-[#121218] border border-[#282834] border-solid content-stretch flex h-[72px] items-start p-[12px] relative rounded-[12px] shrink-0 w-full"
            data-node-id="1:2570"
            data-name="text-area"
          >
            <p
              className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular'] font-normal leading-[normal] min-w-px relative text-[#a3a3c2] text-[13px]"
              data-node-id="1:2571"
            >
              Todo excelente, el disco está impecable y Sofía fue muy puntual en el Cine Center.
              ¡Recomendada!
            </p>
          </div>
        </div>
      </div>
      <div
        className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-full"
        data-node-id="1:2572"
        data-name="actions-footer"
      >
        <div
          className="bg-gradient-to-r content-stretch flex from-[#00d9a6] h-[48px] items-center justify-center px-[24px] relative rounded-[24px] shrink-0 to-[#8b5cf6] w-full"
          data-node-id="1:2573"
          data-name="button"
        >
          <p
            className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[15px] text-white whitespace-nowrap"
            data-node-id="1:2574"
          >
            Enviar calificación
          </p>
        </div>
        <div
          className="content-stretch flex items-start justify-center py-[8px] relative shrink-0 w-full"
          data-node-id="1:2575"
          data-name="home-indicator-area"
        >
          <div
            className="bg-[#63637a] h-[5px] relative rounded-[100px] shrink-0 w-[134px]"
            data-node-id="1:2576"
            data-name="indicator-bar"
          />
        </div>
      </div>
    </div>
  );
}
