import Tag from "./Tag";

type TextBannerProps = {
  isDarkMode?: boolean;
};
export default function TextBanner({ isDarkMode = true }: TextBannerProps) {
  return (
    <div
      className={`flex rounded-[1.6rem] ${
        isDarkMode ? "bg-[#141414]" : "bg-[#F5F5F5]"
      } w-full p-[1.4rem]`}
    >
      <div className="w-full ">
        <div className="flex  gap-[1rem] mb-[2.4rem]">
          <Tag title="هواپیما" />
          <Tag title="سفر" />
          <Tag title="فرودگاه" />
          <Tag title="گردشگری" />
        </div>
        <h2
          className={`${
            isDarkMode ? "text-white" : "text-black"
          } text-[1.8rem] mb-[0.8rem]`}
        >
          لورم ایپسوم متن ساختگی
        </h2>
        <p
          className={`${
            isDarkMode ? "text-white" : "text-black"
          } text-[1.2rem] text-justify mb-[1.5rem]`}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد
        </p>
        <div
          className={`w-full flex items-center ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          <p> 24 فروردین 1404</p>
        </div>
      </div>
      <div
        className="w-full relative bg-cover bg-center rounded-[1.6rem] overflow-hidden"
        style={{
          backgroundImage: isDarkMode
            ? "linear-gradient(to right, rgba(20,20,20,0) 80%, rgba(20,20,20,1) 100%), url(/images/BG-Colorful-Banner.png)"
            : "linear-gradient(to right, rgba(245,245,245,0) 80%, rgba(245,245,245,1) 100%),url(/images/BG-Simple-Banner.png)",
        }}
      >
        <div className="absolute left-[1rem] bottom-[1rem]">
          <img src="/icons/Arrow.svg" alt="Arrow icon" className="w-20 h-20" />
        </div>
      </div>
    </div>
  );
}
