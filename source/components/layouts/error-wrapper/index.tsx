import { FC } from 'react'

export const ErrorWrapper: FC = ({ children }) => {
  return (
    <>
      <div className="error">{children}</div>
    </>
  )
}
