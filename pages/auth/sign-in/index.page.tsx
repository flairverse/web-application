import { AuthWrapper } from '@/components/layouts/auth-wrapper'
import type { AuthPage } from '@/types/next-page.type'
import Link from 'next/link'

const SignIn: AuthPage = () => {
  return (
    <>
      <p style={{ color: 'white' }}>sign in</p>

      <Link href="/">home</Link>
    </>
  )
}

SignIn.layout = AuthWrapper

export default SignIn
