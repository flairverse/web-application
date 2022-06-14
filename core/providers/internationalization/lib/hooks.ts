import { I18n } from '@/helpers/language.helper'
import { providerInternationalizationAtoms } from '@/store/atoms'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

/**
 * a provider to store current user's language into the recoil atom
 * @returns { mounted: boolean, language: LANGUAGES_TYPE }
 */
export const useInternationalization = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const [language, setLanguage] = useRecoilState(providerInternationalizationAtoms.language)

  useEffect(() => {
    if (typeof window === 'object') {
      setLanguage(I18n.get)
      setMounted(true)
    }
  }, [])

  /**
   * return language for test only purposes
   */
  return { mounted, language }
}
