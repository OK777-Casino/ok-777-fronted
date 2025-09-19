'use client'

import { useEffect } from 'react'

import Link from 'next/link'

import { useState } from 'react'

import ChevronDownIcon from '@/components/ui/icons/chevron-down'
import FootballIcon from '@/components/ui/icons/football'
import GiftIcon from '@/components/ui/icons/gift'
import SpadeIcon from '@/components/ui/icons/spade'
import ChevronsDownIcon from '@/components/ui/icons/chevrons-down'
import CasinoPromotionCard from '@/components/ui/cards/PromotionCard'
import NormalButton from '@/components/ui/Button/NormalButton'
import { useT } from '@/context/I18nProvider'

interface Tab {
  id: string
  label: string
  icon: React.ReactNode
  count?: number
}

const PromotionsPage = () => {
  const [activeTab, setActiveTab] = useState('all')
  const t = useT()
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
  }

  const tabs: Tab[] = [
    {
      id: 'all',
      label: t('promotions.all'),
      icon: <GiftIcon className="w-6 h-6" />,
      count: 4,
    },
    {
      id: 'casino',
      label: t('promotions.casino'),
      icon: <SpadeIcon className="w-6 h-6" />,
    },
    {
      id: 'sport',
      label: t('promotions.sport'),
      icon: <FootballIcon />,
    },
  ]

  const bannerCards = [
    {
      button: t('promotions.joinnow'),
      image: '/images/banner/Banner01.jpg',
      link: '/joincommunity',
    },
    {
      button: `${t('promotions.get')} $588`,
      image: '/images/banner/Banner10.jpg',
      link: '/livecasino',
    },
    {
      button: `${t('promotions.claimnow')}`,
      image: '/images/banner/Banner03.jpg',
      link: '/firstdeposit',
    },
    {
      button: `${t('promotions.claimnow')}`,
      image: '/images/banner/Banner12.jpg',
      link: '/first-deposit',
    },
    {
      button: `${t('promotions.get')} $588`,
      image: '/images/banner/Banner02.jpg',
      link: '/hashchallenge ',
    },
    {
      button: `${t('promotions.get')} $1588`,
      image: '/images/banner/Banner08.jpg',
      link: '/electronicsubmit',
    },
    {
      button: `${t('promotions.claimnow')}`,
      image: '/images/banner/Banner03.jpg',
      link: '/firstdeposit',
    },
    {
      button: `${t('promotions.claimnow')}`,
      image: '/images/banner/Banner06.jpg',
      link: '/checkinrewards',
    },
    {
      button: `${t('promotions.get')} $588`,
      image: '/images/banner/Banner05.jpg',
      link: '/roadtochampion ',
    },
    {
      button: `${t('promotions.get')} $1588`,
      image: '/images/banner/Banner04.jpg',
      link: '/minigame',
    },
    {
      button: `${t('promotions.claimnow')}`,
      image: '/images/banner/Banner09.jpg',
      link: '/nonstop',
    },
    {
      button: `${t('promotions.get')} $588`,
      image: '/images/banner/Banner11.jpg',
      link: '/depositbonus ',
    },
    {
      button: `${t('promotions.get')} $1588`,
      image: '/images/banner/Banner07.jpg',
      link: '/energybank',
    },
  ] as const

  return (
    <div className="flex flex-col gap-8 mx-auto mb-16 pt-2 max-w-7xl p-2 m-auto">
      <div className="flex items-center w-full md:w-[28.125rem] p-1 bg-[#1A2332] rounded-xl m-auto">
        {tabs.map(tab => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              className={`flex items-center justify-start flex-1 p-2 rounded-lg transition-colors gap-2 ${
                isActive
                  ? 'bg-[#2A3546] text-white'
                  : 'text-[#A7B5CA] hover:text-white'
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.icon}
              <div className="text-sm font-bold font-montserrat">
                {tab.label}
              </div>
              {tab.count && (
                <div className="flex items-center justify-start h-5 px-1.5 bg-[#00D4AA] rounded-md">
                  <span className="text-white font-montserrat text-xs font-bold">
                    {tab.count}
                  </span>
                </div>
              )}
            </button>
          )
        })}
      </div>

      {/* Game Providers Grid */}
      <div className="flex flex-wrap justify-center gap-6">
        {bannerCards.map((card, index) => (
          <CasinoPromotionCard key={index} {...card} />
        ))}
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-2.5">
        {/* Show More Button */}
        <div className="flex justify-center">
          <div className="h-9 bg-ebony-clay w-[9.8125rem] gap-2 text-casper font-montserrat text-[0.875rem] flex items-center justify-center font-bold rounded-[0.5rem] hover:bg-ebony-clay/80 transition-colors">
            Show 4 more
            <ChevronDownIcon className=" text-casper" />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-[9.875rem] mx-auto">
          <div className="h-1.5 bg-oxford-blue rounded-lg overflow-hidden">
            <div className="h-full w-[73%] bg-dodger-blue rounded-lg"></div>
          </div>
        </div>

        {/* Progress Text */}
        <div className="text-center">
          <span className="text-polo-blue font-montserrat text-[0.625rem] font-normal">
            Show 18 of 22 games
          </span>
        </div>
      </div>
    </div>
  )
}

export default PromotionsPage
