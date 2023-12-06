import React from 'react'
import { useTranslations } from 'next-intl';

const About = () => {
    const t = useTranslations('About');

    return (
        <div>{t("title")}</div>
    )
}

export default About