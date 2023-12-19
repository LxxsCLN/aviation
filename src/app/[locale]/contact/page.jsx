import React from 'react'
import { useTranslations } from 'next-intl';

const Contact = () => {
    const t = useTranslations('Contact');
    return (
      <div>{t("title")}</div>
    )
}

export default Contact