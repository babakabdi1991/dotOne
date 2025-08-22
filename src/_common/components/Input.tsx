type InputProps = {
  label?: string;
  id?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  isTextArea?: boolean;
  rows?: number;
};

export default function Input({
  label,
  id,
  placeholder,
  type = "text",
  className = "",
  isTextArea = false,
  rows = 4,
}: InputProps) {
  return (
    <div className="flex w-full flex-col gap-[0.5rem]">
      {label ? (
        <label
          htmlFor={id}
          className="text-[1rem] font-medium text-black mr-[0.5rem]"
        >
          {label}
        </label>
      ) : null}
      {isTextArea ? (
        <textarea
          id={id}
          rows={rows}
          placeholder={placeholder}
          className={`w-full rounded-[1.2rem] bg-white text-black placeholder-[#9F9F9F] border border-transparent px-[1.6rem] py-[1rem] shadow-sm focus:outline-none focus:ring-0 focus:border-black focus:placeholder-black resize-y ${className}`}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className={`w-full rounded-[1.2rem] bg-white text-black placeholder-[#9F9F9F] border border-transparent px-[1.6rem] py-[1rem] shadow-sm focus:outline-none focus:ring-0 focus:border-black focus:placeholder-black ${className}`}
        />
      )}
    </div>
  );
}
