export default function Separator({
  title,
  description,
  sentence,
  isLow = false,
}: {
  title: string;
  description: string;
  sentence: string;
  isLow?: boolean;
}) {
  return (
    <div className="mb-[4rem]" style={{ direction: "rtl" }}>
      <p style={{ lineHeight: "5px" }}>{title}</p>
      <div className={`flex  gap-1.5 mb-[1rem]`}>
        <img src="/icons/Separator.svg" alt="separator icon" />
        <p className="text-[#939393] text-[1.4rem]" style={{ fontWeight: 300 }}>
          {description}
        </p>
      </div>
      <p className={`text-[2.5rem] ${isLow ? "text-[#939393]" : "text-black"}`}>
        {sentence}
      </p>
    </div>
  );
}
