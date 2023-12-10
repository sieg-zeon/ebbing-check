import * as React from 'react'
import Link from 'next/link'

const Header = ({ pathname }: {pathname: string}) => (
  <header>
    <Link href="/" className={pathname === '/' ? 'is-active' : ''}>
      Home
    </Link>{' '}
    <Link href="/about" className={pathname === '/about' ? 'is-active' : ''}>
      About
    </Link>
  </header>
)

export default Header
