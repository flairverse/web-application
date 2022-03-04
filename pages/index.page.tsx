import { I18n } from '@/helpers/language.helper'
import * as Lib from './lib'
import { MainWrapper } from '@/components/layouts/main-wrapper'
import type { MainPage } from '@/types/next-page.type'
import Link from 'next/link'

const Homepage: MainPage = () => {
  return (
    <Lib.S.Container>
      <div className="container">
        <p className="col-lg-12">{I18n.get}</p>
        <Link href="/auth">to login</Link>
      </div>
    </Lib.S.Container>
  )
}

Homepage.layout = MainWrapper

export default Homepage
