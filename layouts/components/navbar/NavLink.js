import Link from 'next/link'
import React from 'react'

const NavLink = ({ children, to = '/', passHref }) => {
  if (passHref)
    return (
      <div className='NavLink'>
        <Link href={to} passHref>
          <a>{children}</a>
        </Link>
      </div>
    )
  return (
    <div className='NavLink'>
      <Link href={to} passHref>
        {children}
      </Link>
    </div>
  )
}

export default NavLink
