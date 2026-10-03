import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-3 tracking-tight">
        {title}
      </h2>
      <div
        className={cn(
          "w-16 h-1 bg-accent-400 rounded-full mb-4",
          centered && "mx-auto"
        )}
      />
      {subtitle && (
        <p className="text-neutral-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
