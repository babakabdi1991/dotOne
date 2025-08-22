export default function Tag({
  title,
}: //   size = "medium",
{
  title: string;
  //   size: "small" | "medium";
}) {
  return (
    <p className="px-[1.6rem] py-[0.5rem] rounded-[1rem] text-black bg-white ">
      {title}
    </p>
  );
}
