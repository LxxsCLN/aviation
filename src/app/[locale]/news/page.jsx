import React from 'react'
import { useTranslations } from 'next-intl';

const News = () => {
    const t = useTranslations('News');
    return (
      <div>{t("title")}</div>
    )
}

export default News