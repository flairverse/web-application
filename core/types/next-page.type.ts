import type { AuthWrapper } from '@/components/layouts/auth-wrapper'
import type { ErrorWrapper } from '@/components/layouts/error-wrapper'
import type { MainWrapper } from '@/components/layouts/main-wrapper'
import type { NextPage } from 'next'

export type MainPage<T = {}> = NextPage<T> & { layout: typeof MainWrapper }

export type AuthPage<T = {}> = NextPage<T> & { layout: typeof AuthWrapper }

export type ErrorPage<T = {}> = NextPage<T> & { layout: typeof ErrorWrapper }

export type NextComponent<T = {}> = NextPage<{
  Component: MainPage<T> | AuthPage<T>
  pageProps: object
}>
