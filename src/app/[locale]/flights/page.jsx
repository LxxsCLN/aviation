import React from 'react'
import { useTranslations } from 'next-intl';

const Flights = () => {
    const t = useTranslations('Flights');
    return (
      <div>{t("title")}</div>
    )
}

export default Flights