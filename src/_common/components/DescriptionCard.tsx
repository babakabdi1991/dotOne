export default function DescriptionCard() {
  return (
    <div className="flex-col content-center  rounded-[2.4rem] bg-white p-[2.4rem]">
      <img
        src="/public/icons/description.svg"
        alt="Play icon"
        className="w-50 h-50 m-auto mb-[2.4rem]"
      />
      <p className="text-[1.4rem] text-black opacity-60">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
      </p>
    </div>
  );
}
