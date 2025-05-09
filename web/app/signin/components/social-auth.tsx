import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'next/navigation'
import style from '../page.module.css'
import Button from '@/app/components/base/button'
import { apiPrefix } from '@/config'
import classNames from '@/utils/classnames'
import { getPurifyHref } from '@/utils'

type SocialAuthProps = {
  disabled?: boolean
}

export default function SocialAuth(props: SocialAuthProps) {
  const { t } = useTranslation()
  const searchParams = useSearchParams()

  const getOAuthLink = (href: string) => {
    const url = getPurifyHref(`${apiPrefix}${href}`)
    if (searchParams.has('invite_token'))
      return `${url}?${searchParams.toString()}`

    return url
  }
  return <>
    <div className='w-full'>
      <a href={getOAuthLink('/oauth/login/galaxy')}>
        <Button
          disabled={props.disabled}
          className='w-full'
        >
          <>
            <span className={
              classNames(
                style.githubIcon,
                'w-5 h-5 mr-2',
              )
            } />
            <span className="truncate">{t('login.withGalaxy')}</span>
          </>
        </Button>
      </a>
    </div>
  </>
}
