import '@testing-library/jest-dom/extend-expect'
import { setConfig } from 'next/config'
import { publicRuntimeConfig } from './next.config'

setConfig({ publicRuntimeConfig })
