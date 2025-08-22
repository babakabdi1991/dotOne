export default function LabelCard({ title }: { title: string }) {
  return (
    <div className="flex justify-center items-center max-width:[30rem] bg-[#141414] text-white rounded-[1.6rem] py-[2rem] text-[1.6rem]">
      {title}
    </div>
  );
}
