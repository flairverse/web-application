import { FC } from 'react'
import * as Lib from './lib'
import Link from 'next/link'

export const Footer: FC = () => {
  const { links } = Lib.H.useFooter()

  return (
    <Lib.S.FooterContainer className="container">
      <div>
        <p>
          © 2022 <a href="https://flairverse.com">Flairverse.com</a>
        </p>

        <div>
          {links.map(({ href, text }, index) => (
            <Link href={href} key={index}>
              <a>{text}</a>
            </Link>
          ))}
        </div>
      </div>
    </Lib.S.FooterContainer>
  )
}
