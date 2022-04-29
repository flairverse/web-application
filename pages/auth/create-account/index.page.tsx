import type { AuthPage } from '@/types/next-page.type'
import { AuthWrapper } from '@/components/layouts/auth-wrapper'
import Link from 'next/link'

const CreateAccount: AuthPage = () => {
  return (
    <>
      <p style={{ color: 'white' }}>create account</p>

      <Link href="/">home</Link>
    </>
  )
}

CreateAccount.layout = AuthWrapper

export default CreateAccount
