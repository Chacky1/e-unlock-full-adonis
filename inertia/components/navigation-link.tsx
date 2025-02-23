import { Link } from '@inertiajs/react'

type NavigationLinkProps = {
  href: string
  label: string
}

const NavigationLink = ({ href, label }: NavigationLinkProps) => {
  return (
    <Link href={href} className='text-muted-foreground transition-colors hover:text-foreground'>
      {label}
    </Link>
  )
}

export default NavigationLink
