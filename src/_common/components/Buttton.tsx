export default function Button({ title }: { title: string }) {
  return (
    <button className="bg-black rounded-[1.4rem] text-white px-[4rem] py-[1rem]">
      {title}
    </button>
  );
}
