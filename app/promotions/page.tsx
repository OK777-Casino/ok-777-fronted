'use client'

import { useState } from 'react'
import ChevronDownIcon from '@/components/ui/icons/chevron-down'
import FootballIcon from '@/components/ui/icons/football'
import GiftIcon from '@/components/ui/icons/gift'
import SpadeIcon from '@/components/ui/icons/spade'
import CasinoPromotionCard from '@/components/ui/cards/PromotionCard'
import NormalButton from '@/components/ui/Button/NormalButton'
import { useI18n } from '@/context/I18nProvider'

interface Tab {
  id: string
  label: string
  icon: React.ReactNode
  count?: number
}

const tabs: Tab[] = [
  {
    id: 'all',
    label: 'All',
    icon: <GiftIcon className="h-6 w-6" />,
    count: 4,
  },
  {
    id: 'casino',
    label: 'Casino',
    icon: <SpadeIcon className="h-6 w-6" />,
  },
  {
    id: 'sport',
    label: 'Sport',
    icon: <FootballIcon />,
  },
]

const PromotionsPage = () => {
  const { t } = useI18n()
  const bannerCards = [
    {
      button: t('banner.firstDepost.button'),
      image: '/images/banner/banner-first-depost.jpg',
      mainTitle: t('banner.firstDepost.mainTitle'),
      subTitle: t('banner.firstDepost.subTitle'),
      description: '',
      link: 'firstdeposit',
    },
    {
      button: t('banner.cryptoGame.button'),
      image: '/images/banner/banner-crypto-game.jpg',
      mainTitle: t('banner.cryptoGame.mainTitle'),
      subTitle: t('banner.cryptoGame.subTitle'),
      description: '',
      link: '#',
    },
    {
      button: t('banner.dailyDepost.button'),
      image: '/images/banner/banner-daily-depost.jpg',
      mainTitle: t('banner.dailyDepost.mainTitle'),
      subTitle: t('banner.dailyDepost.subTitle'),
      description: '',
      link: '#',
    },
    {
      button: t('banner.dailyQuests.button'),
      image: '/images/banner/banner-daily-quests.jpg',
      mainTitle: t('banner.dailyQuests.mainTitle'),
      subTitle: t('banner.dailyQuests.subTitle'),
      description: '',
      link: '#',
    },
    {
      button: t('banner.footerball.button'),
      image: '/images/banner/banner-footerball.jpg',
      mainTitle: t('banner.footerball.mainTitle'),
      subTitle: t('banner.footerball.subTitle'),
      description: '',
      link: '#',
    },
    {
      button: t('banner.hash.button'),
      image: '/images/banner/banner-hash.jpg',
      mainTitle: t('banner.hash.mainTitle'),
      subTitle: t('banner.hash.subTitle'),
      description: '',
      link: '#',
    },
    {
      button: t('banner.live.button'),
      image: '/images/banner/banner-live.jpg',
      mainTitle: t('banner.live.mainTitle'),
      subTitle: t('banner.live.subTitle'),
      description: '',
      link: '#',
    },
    {
      button: t('banner.rebate.button'),
      image: '/images/banner/banner-rebate.jpg',
      mainTitle: t('banner.rebate.mainTitle'),
      subTitle: t('banner.rebate.subTitle'),
      description: '',
      link: '#',
    },
    {
      button: t('banner.solts.button'),
      image: '/images/banner/banner-solts.jpg',
      mainTitle: t('banner.solts.mainTitle'),
      subTitle: t('banner.solts.subTitle'),
      description: '',
      link: '#',
    },
  ] as const

  const [activeTab, setActiveTab] = useState('all')

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
  }

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 pt-[1.625rem] md:pt-4">
      <div className="grid w-full grid-cols-3 items-start rounded-xl bg-white-4 p-1 md:w-[28.125rem]">
        {tabs.map(tab => {
          const isActive = activeTab === tab.id
          return (
            <NormalButton
              key={tab.id}
              className={isActive ? 'bg-ebony-clay text-gallery' : ''}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.icon}
              {tab.label}
              {tab.count && (
                <div className="flex h-5 items-start justify-start rounded-md bg-malachite px-1.5 shadow-[0_0.0625rem_0_0_var(--white-08)_inset]">
                  <span className="font-montserrat text-xs font-bold text-white">
                    {tab.count}
                  </span>
                </div>
              )}
            </NormalButton>
          )
        })}
      </div>

      {/* Game Providers Grid */}
      {/* <div className="flex flex-wrap justify-center gap-4 md:justify-start"> */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
        {bannerCards.map((card, index) => (
          <CasinoPromotionCard key={index} {...card} />
        ))}
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-2.5">
        {/* Show More Button */}
        <div className="flex cursor-pointer justify-center">
          <div className="hover:bg-ebony-clay/80 flex h-9 w-[9.8125rem] items-center justify-center gap-2 rounded-[0.5rem] bg-ebony-clay font-montserrat text-[0.875rem] font-bold text-casper transition-colors">
            Show 4 more
            <ChevronDownIcon className="text-casper" />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mx-auto w-[9.875rem]">
          <div className="bg-oxford-blue h-1.5 overflow-hidden rounded-lg bg-ebony-clay">
            <div className="h-full w-[50%] rounded-lg bg-dodger-blue"></div>
          </div>
        </div>

        {/* Progress Text */}
        <div className="text-center">
          <span className="font-montserrat text-xs font-normal text-polo-blue">
            Show 18 of 22 games
          </span>
        </div>
      </div>
    </div>
  )
}

export default PromotionsPage
