import type { AuthPage } from '@/types/next-page.type'
import Link from 'next/link'
import { AuthWrapper } from '@/components/layouts/auth-wrapper'

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
