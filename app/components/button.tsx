import clsx from 'clsx'
import { Link, LinkProps } from 'remix'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  color?: keyof typeof buttonColors
  id?: string
  type?: 'button' | 'submit' | 'reset'
}

const buttonColors = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700',
  light: 'bg-gray-100 hover:bg-gray-200',
} as const

function getClassName({
  className,
  color = 'primary',
}: Pick<ButtonProps, 'className' | 'color'>) {
  return clsx(
    'inline-flex items-center rounded border border-transparent px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50',
    buttonColors[color],
    className
  )
}

export function Button({
  className,
  color,
  isDisabled,
  ...props
}: ButtonProps & { isDisabled?: boolean }) {
  return (
    <button
      type="button"
      className={getClassName({ className, color })}
      disabled={isDisabled}
      {...props}
    />
  )
}

export function ButtonLink({
  children,
  className,
  color,
  ...props
}: ButtonProps & LinkProps) {
  return (
    <Link className={getClassName({ className, color })} {...props}>
      {children}
    </Link>
  )
}
