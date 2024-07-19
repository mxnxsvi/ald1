import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[29px] gap-[25px] text-left text-sm text-white font-kameron ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-[33px]">
        <a className="[text-decoration:none] w-[222px] relative font-bold text-[inherit] inline-block shrink-0 z-[1]">
          Clients Profile
        </a>
      </div>
      <div className="self-stretch shadow-[5px_5px_4px_rgba(0,_0,_0,_0.17)] rounded-xl bg-white flex flex-row items-start justify-start py-2 px-[19px] gap-[19px] z-[1] border-[1px] border-solid border-gray">
        <div className="h-[90px] w-[314px] relative shadow-[5px_5px_4px_rgba(0,_0,_0,_0.17)] rounded-xl bg-white box-border hidden border-[1px] border-solid border-gray" />
        <img
          className="h-[70px] w-[73px] relative rounded-[50%] object-contain z-[2]"
          loading="lazy"
          alt=""
          src="/ellipse-1@2x.png"
        />
        <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
          <button className="cursor-pointer [border:none] py-3.5 px-7 bg-[transparent] shadow-[5px_5px_4px_rgba(0,_0,_0,_0.17)] rounded-3xs [background:linear-gradient(90deg,_#d50080,_#e10050_57.52%,_#e2192f)] flex flex-row items-start justify-start whitespace-nowrap z-[2]">
            <div className="h-11 w-[175px] relative shadow-[5px_5px_4px_rgba(0,_0,_0,_0.17)] rounded-3xs [background:linear-gradient(90deg,_#d50080,_#e10050_57.52%,_#e2192f)] hidden" />
            <div className="relative text-sm font-karla text-white text-left inline-block [text-shadow:1px_0_0_rgba(255,_255,_255,_0),_0_1px_0_rgba(255,_255,_255,_0),_-1px_0_0_rgba(255,_255,_255,_0),_0_-1px_0_rgba(255,_255,_255,_0)] min-w-[119px] z-[3]">
              Blair Wiliam Rose
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
