import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = 'primary', ...props }, ref) => {
    const baseStyle = "inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition-colors focus-visible:outline-none disabled:opacity-50";
    const variants = {
      primary: "bg-primary text-primary-foreground hover:opacity-90",
      outline: "border border-input hover:bg-muted",
      ghost: "hover:bg-muted"
    };
    return <button ref={ref} className={`${baseStyle} ${variants[variant]} ${className}`} {...props} />
  }
)
Button.displayName = "Button"
export { Button }