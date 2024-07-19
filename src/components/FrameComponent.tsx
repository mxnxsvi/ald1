import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`w-[293px] flex flex-row items-start justify-start pt-0 px-[17px] pb-[7px] box-border text-left text-sm font-karla ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[30px]">
        <div className="w-[69px] relative text-transparent !bg-clip-text [background:linear-gradient(180deg,_#d50080,_#e10050_50%,_#e2192f)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block [text-shadow:1px_0_0_rgba(213,_0,_128,_0),_0_1px_0_rgba(213,_0,_128,_0),_-1px_0_0_rgba(213,_0,_128,_0),_0_-1px_0_rgba(213,_0,_128,_0)]">
          Contact
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5">
          <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
            <div className="w-[151px] flex flex-col items-start justify-start gap-[52px]">
              <div className="self-stretch flex flex-row items-end justify-between gap-[20px]">
                <img
                  className="h-[29px] w-[27px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/linemdphonecallloop.svg"
                />
                <img
                  className="h-9 w-[37px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/materialsymbolslightmailsharp.svg"
                />
              </div>
              <div className="w-[69px] relative text-transparent !bg-clip-text [background:linear-gradient(180deg,_#d50080,_#e10050_50%,_#e2192f)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block [text-shadow:1px_0_0_rgba(213,_0,_128,_0),_0_1px_0_rgba(213,_0,_128,_0),_-1px_0_0_rgba(213,_0,_128,_0),_0_-1px_0_rgba(213,_0,_128,_0)]">{`Portfolio `}</div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <img
                className="w-[27px] h-[25px] relative"
                loading="lazy"
                alt=""
                src="/group-10.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
