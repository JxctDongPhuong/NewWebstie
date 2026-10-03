import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variants = {
  primary:
    "bg-primary-500 text-white hover:bg-primary-600 shadow-md shadow-primary-500/25 hover:shadow-lg hover:shadow-primary-500/40",
  secondary:
    "bg-accent-400 text-neutral-900 hover:bg-accent-500 shadow-md shadow-accent-400/25",
  outline:
    "border-2 border-primary-500 text-primary-600 hover:bg-primary-50",
  ghost: "text-primary-600 hover:bg-primary-50",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 cursor-pointer",
    variants[variant],
    sizes[size],
    disabled ? "opacity-50 cursor-not-allowed" : "",
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  );
}
