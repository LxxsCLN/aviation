import React from 'react'
import {useTranslations} from 'next-intl';

const page = () => {
    const t = useTranslations('About');

  return (
    <div>{t("title")}</div>
  )
}

export default page