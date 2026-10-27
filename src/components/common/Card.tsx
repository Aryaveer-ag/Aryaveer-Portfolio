import React from "react";

export type CardVariant = "default" | "interactive" | "subtle" | "ghost";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  children: React.ReactNode;
}

export function Card({
  variant = "default",
  className = "",
  children,
  ...props
}: CardProps) {
  const variantClasses: Record<CardVariant, string> = {
    default:
      "bg-[var(--bg-surface-1)] border border-[var(--border-subtle)] text-[var(--text-primary)] shadow-sm",
    interactive:
      "bg-[var(--bg-surface-1)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface-2)] transition-all duration-200 text-[var(--text-primary)] shadow-sm",
    subtle:
      "bg-[var(--bg-surface-2)]/60 border border-[var(--border-subtle)] text-[var(--text-primary)]",
    ghost:
      "bg-transparent border border-[var(--border-subtle)] text-[var(--text-primary)]",
  };

  return (
    <div
      className={`rounded-[var(--radius-lg)] p-5 md:p-6 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`mb-4 space-y-1.5 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className = "",
  as: Component = "h3",
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h2" | "h3" | "h4";
}) {
  return (
    <Component
      className={`text-lg font-semibold tracking-tight text-[var(--text-primary)] ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export function CardDescription({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={`text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`space-y-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-muted)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

