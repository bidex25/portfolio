import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'gold' | 'ghost' | 'whatsapp'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  as?: 'button' | 'a'
  href?: string
  target?: string
  rel?: string
}

const variantClasses: Record<Variant, string> = {
  gold:
    'bg-gold text-black font-semibold hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(212,175,55,0.4)] active:translate-y-0',
  ghost:
    'border border-gold/40 text-white hover:border-gold hover:text-gold hover:bg-gold/5',
  whatsapp:
    'bg-[#1DA851] text-white hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(29,168,81,0.4)] active:translate-y-0',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'gold', className, children, as = 'button', href, target, rel, ...props }, ref) => {
    const base =
      'inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-poppins tracking-wide transition-all duration-200 cursor-pointer'

    if (as === 'a') {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={cn(base, variantClasses[variant], className)}
        >
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} className={cn(base, variantClasses[variant], className)} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
