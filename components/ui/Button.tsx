import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
  "aria-label"?: string;
}

const sizeClasses = {
  sm: "px-4 py-2 text-xs font-semibold uppercase tracking-wider",
  md: "px-5 py-2.5 text-sm font-semibold",
  lg: "px-7 py-3.5 text-sm md:text-base font-semibold",
};

const variantClasses = {
  primary:
    "bg-[#641C2D] text-[#F4EBDD] border border-[#641C2D] hover:bg-[#8A263D] hover:border-[#8A263D] active:bg-[#4E1422] disabled:opacity-50 disabled:pointer-events-none",
  secondary:
    "bg-transparent border border-[#171514] text-[#171514] hover:bg-[#171514] hover:text-[#F4EBDD] active:bg-[#2A2421] disabled:opacity-50 disabled:pointer-events-none",
  ghost:
    "bg-transparent text-[#641C2D] hover:text-[#8A263D] underline-offset-4 hover:underline disabled:opacity-50 disabled:pointer-events-none",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  external = false,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md transition-colors duration-150 cursor-pointer select-none text-center";
  const classes = `${base} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
