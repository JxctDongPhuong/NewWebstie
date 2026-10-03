import { cn } from "@/lib/utils";

interface TextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  error?: string;
  rows?: number;
  placeholder?: string;
  className?: string;
}

export default function Textarea({
  label,
  name,
  value,
  onChange,
  required,
  error,
  rows = 4,
  placeholder,
  className = "",
}: TextareaProps) {
  return (
    <div className={cn("mb-4", className)}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-neutral-700 mb-1.5"
      >
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        placeholder={placeholder}
        className={cn(
          "w-full px-4 py-2.5 rounded-xl border bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors text-sm resize-none",
          error
            ? "border-red-400 focus:ring-red-500"
            : "border-neutral-200 focus:ring-primary-500 focus:border-primary-500"
        )}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
