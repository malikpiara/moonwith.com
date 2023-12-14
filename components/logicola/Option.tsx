export interface OptionProps {
  label: string;

  onClick: () => void;
}
export default function Option({
  label,

  onClick,
}: OptionProps) {
  return (
    <button
      onClick={onClick}
      className='w-full ps-4 text-green-600 flex items-center border border-slate-200 rounded-lg focus:ring-green-500 focus:ring-2'
    >
      <div className='flex'>
        <div className='py-4 ms-2 text-sm font-medium text-slate-600'>
          {label}
        </div>
      </div>
    </button>
  );
}
