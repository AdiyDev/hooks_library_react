import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { Language } from '@/context/i18nContext';
import { setLanguage } from '@/store/layout/layoutSlice';
import { useCallback, useEffect } from 'react';
import { i18n } from 'i18next';

export const useLanguage = ({ i18n }: { i18n: i18n }) => {
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.layout.language);
  const languages = useAppSelector((state) => state.layout.languages);
  const selectLanguage = useCallback(
    (language: Language['key']) => {
      dispatch(setLanguage(language));
    },
    [dispatch],
  );

  useEffect(() => {
    if (i18n.language === language) {
      return;
    }
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return {
    language,
    languages,
    setLanguage: selectLanguage,
  };
};
