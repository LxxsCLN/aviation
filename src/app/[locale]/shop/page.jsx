import React from 'react'
import { useTranslations } from 'next-intl';

const Shop = () => {
    const t = useTranslations('Shop');
    return (
      <div>{t("title")}</div>
    )
}

export default Shop