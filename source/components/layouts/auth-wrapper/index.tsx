import { FC } from 'react'

export const AuthWrapper: FC = ({ children }) => {
  return (
    <>
      <div className="auth">{children}</div>
    </>
  )
}
