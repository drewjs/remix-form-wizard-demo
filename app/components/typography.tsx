import clsx from 'clsx'

export interface TitleProps {
  as?: React.ElementType
  className?: string
  children: React.ReactNode
  id?: string
}

const fontSizes = {
  h1: 'text-4xl font-extrabold leading-tight md:text-5xl',
  h2: 'text-3xl font-extrabold leading-tight md:text-4xl',
  h3: 'text-2xl md:text-3xl',
  h4: 'text-xl md:text-2xl',
} as const

function getClassName({
  className,
  size = 'h1',
}: Pick<TitleProps, 'className'> & { size?: keyof typeof fontSizes }) {
  return clsx(
    'tracking-tight text-gray-900 dark:text-white',
    fontSizes[size],
    className
  )
}

export function Title({
  as = 'h1',
  className,
  id,
  size,
  ...props
}: TitleProps & { size: keyof typeof fontSizes }) {
  let Tag = as ?? size
  return <Tag className={getClassName({ className, size })} {...props} />
}

export function H1(props: TitleProps) {
  return <Title size="h1" {...props} />
}

export function H2(props: TitleProps) {
  return <Title size="h2" {...props} />
}

export function H3(props: TitleProps) {
  return <Title size="h3" {...props} />
}

export function H4(props: TitleProps) {
  return <Title size="h4" {...props} />
}
