import React from 'react'
import { useTranslations } from 'next-intl';

const Blog = () => {
    const t = useTranslations('Blog');
  return (
    <div>{t("title")}</div>
  )
}

export default Blog