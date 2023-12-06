import {useTranslations} from 'next-intl';

export default function Home() {
    const t = useTranslations('Index');
    return (
      <div className="flex flex-col">
        {t('title')}
      </div>
    )
  }
  