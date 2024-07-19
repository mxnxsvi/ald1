import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";

const Resume = () => {
  return (
    <div className="w-full relative rounded-[35px] bg-white overflow-hidden flex flex-col items-start justify-start pt-[27px] pb-14 pr-[22px] pl-6 box-border gap-[35px] leading-[normal] tracking-[normal] text-left text-sm font-karla">
      <FrameComponent1 />
      <section className="w-full h-48 absolute !m-[0] top-[0px] right-[0px] left-[0px]">
        <img
          className="absolute top-[-36px] left-[-6px] w-[373px] h-[228px]"
          alt=""
          src="/rectangle-19.svg"
        />
        <img
          className="absolute top-[31px] left-[47px] w-[9px] h-3 object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
      </section>
      <FrameComponent />
      <img
        className="w-6 h-6 absolute !m-[0] right-[50px] bottom-[98px] overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/mdicommentstext.svg"
      />
      <img
        className="w-6 h-6 absolute !m-[0] right-[49px] bottom-[52px] overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/mdicommentstextoutline.svg"
      />
      <div className="flex flex-row items-start justify-start pt-0 pb-2 pr-[33px] pl-[26px]">
        <img
          className="h-7 w-[255px] relative"
          loading="lazy"
          alt=""
          src="/group-11.svg"
        />
      </div>
      <div className="w-[107px] flex flex-row items-start justify-start py-0 px-[19px] box-border">
        <div className="flex-1 relative text-transparent !bg-clip-text [background:linear-gradient(180deg,_#d50080,_#e10050_50%,_#e2192f)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:1px_0_0_rgba(213,_0,_128,_0),_0_1px_0_rgba(213,_0,_128,_0),_-1px_0_0_rgba(213,_0,_128,_0),_0_-1px_0_rgba(213,_0,_128,_0)]">
          Skillset
        </div>
      </div>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[17px] pr-[3px] pl-0.5">
        <textarea
          className="[border:none] bg-[transparent] h-[94px] w-auto [outline:none] flex-1 shadow-[5px_5px_4px_rgba(0,_0,_0,_0.25)] rounded-xl [background:linear-gradient(180deg,_#d50080,_#e10050_47.52%,_#e2192f)] flex flex-col items-start justify-start py-[22px] px-[26px] box-border font-karla text-sm text-white"
          placeholder="UI/UX Designing"
          rows={5}
          cols={15}
        />
      </section>
      <div className="w-[177px] flex flex-row items-start justify-start py-0 px-[17px] box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[30px]">
          <div className="relative text-transparent !bg-clip-text [background:linear-gradient(180deg,_#d50080,_#e10050_50%,_#e2192f)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:1px_0_0_rgba(213,_0,_128,_0),_0_1px_0_rgba(213,_0,_128,_0),_-1px_0_0_rgba(213,_0,_128,_0),_0_-1px_0_rgba(213,_0,_128,_0)]">
            Recruiters Comments
          </div>
          <div className="self-stretch relative text-transparent !bg-clip-text [background:linear-gradient(180deg,_#d50080,_#e10050_50%,_#e2192f)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:1px_0_0_rgba(213,_0,_128,_0),_0_1px_0_rgba(213,_0,_128,_0),_-1px_0_0_rgba(213,_0,_128,_0),_0_-1px_0_rgba(213,_0,_128,_0)]">
            Clients Comments
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
