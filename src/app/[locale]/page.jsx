"use client"

import { useContext } from "react";
import { ThemeContext } from '../context/ThemeContext'
import { useTranslations } from 'next-intl';

export default function Home() {
    const t = useTranslations('Index');

    const { theme } = useContext(ThemeContext)

    return (
      <div className="flex flex-col">
        <p>{t('title')}</p>
        <div
            style={{
                backgroundImage: `url("/${theme === "night" ? "stars.jpg" : "clouds.svg"}")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover', 
                width: '100vw',
                height: '50svh',
            }}
            >
        </div>
      </div>
    )
  }
  