import Tag from "./Tag";

export default function InfoBanner({ img }: { img: string }) {
  return (
    <div className="rounded-[2.4rem] bg-[#F5F5F5] p-[1.4rem] w-full">
      <div className="flex justify-between items-center mb-[2rem]">
        <div className="w-full flex justify-start gap-[1rem]">
          <Tag title="سینما" />
          <Tag title="لحظه تی وی" />
        </div>
        <div className="w-full flex justify-end items-center">
          <p> 24 فروردین 1404</p>
        </div>
      </div>
      <h3
        className="text-[1.8rem] "
        style={{ fontWeight: 600, opacity: "0.7" }}
      >
        لورم ایپسون ساختگی!
      </h3>
      <div
        className="bg-cover bg-center"
        style={{
          height: "200px",
          backgroundImage: `url(${img})`,
        }}
      ></div>
    </div>
  );
}
