'use client'

import React, { useState } from 'react'
import mainContentData from '../main-content-data.json'
import SwiperSlider from '@/components/ui/slider/SwiperSlider'
import {
  StatusDropdown,
  StatusDropdownTrigger,
  StatusDropdownContent,
  StatusDropdownItem,
} from '@/components/ui/StatusDropdown'

// Extract data from JSON
const { latestBets } = mainContentData

const statusOptions = [
  'Up to date',
  'Daily',
  'Checking for updates...',
  'Installing updates',
  'Update failed',
  'Connected',
  'Disconnected',
]

const LatestBetsTable: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState('Up to date')
  return (
    <>
      <div className="text-4.5 mb-4 flex w-full items-center justify-between gap-2 font-bold text-white">
        <span>Latest Bets</span>
        <StatusDropdown>
          <StatusDropdownTrigger className="border-none bg-[#2A3546] outline-none ring-0 focus:ring-0">
            {selectedStatus}
          </StatusDropdownTrigger>
          <StatusDropdownContent
            className="border-none bg-[#2A3546]"
            align="center"
          >
            {statusOptions.map(status => (
              <StatusDropdownItem
                key={status}
                onClick={() => setSelectedStatus(status)}
              >
                {status}
              </StatusDropdownItem>
            ))}
          </StatusDropdownContent>
        </StatusDropdown>
      </div>
      <div
        className={`grid grid-cols-[20%_20%_20%_40%] gap-[6px] px-[6px] lg:md:grid-cols-[15%_15%_20%_15%_25%_10%] lg:px-8 ${
          selectedStatus !== 'Daily'
            ? 'grid-cols-[20%_20%_20%_40%]'
            : 'grid-cols-[30%_30%_40%]'
        } `}
      >
        <div className="py-2 text-left text-[12px] font-bold text-white">
          Game
        </div>
        <div className="py-2 text-left text-[12px] font-bold text-white">
          Player
        </div>
        <div className="hidden py-2 text-left text-[12px] font-bold text-white md:lg:block">
          Time
        </div>
        <div className="hidden truncate py-2 text-left text-[12px] font-bold text-white md:lg:block">
          Bet Amount
        </div>
        <div className="py-2 text-left text-[12px] font-bold text-white">
          Multiplier
        </div>
        {selectedStatus !== 'Daily' && (
          <div className="py-2 text-left text-[12px] font-bold text-white">
            Payout
          </div>
        )}
      </div>
      <div className="relative z-[-1] mb-8 h-[462px] w-full lg:mb-16">
        <SwiperSlider
          data={latestBets}
          allowTouchMove={false}
          renderSlide={(bet, index) => (
            <div
              className={`mb-[6px] grid h-[48px] w-full grid-cols-[20%_20%_20%_40%] gap-[6px] overflow-hidden rounded-[16px] bg-[#1C2532] px-[6px] lg:md:grid-cols-[15%_15%_20%_15%_25%_10%] lg:px-8 ${
                selectedStatus !== 'Daily'
                  ? 'grid-cols-[20%_20%_20%_40%]'
                  : 'grid-cols-[30%_30%_40%]'
              } items-center`}
              key={index}
            >
              <div className="flex items-center gap-2 truncate text-[12px] font-bold text-white">
                <img
                  src="/images/gameLogo.png"
                  alt="game"
                  className="h-6 w-6"
                />
                {bet.game}
              </div>
              <div className="flex items-center gap-2 truncate text-[12px] font-bold text-gray-300">
                <img
                  src="/images/avatar(1).png"
                  alt="avatar"
                  className="hidden h-6 w-6 md:lg:block"
                />
                {bet.player}
              </div>
              <div className="hidden items-center truncate text-[12px] font-bold text-gray-300 md:lg:flex">
                {bet.time}
              </div>
              <div className="hidden items-center gap-2 truncate text-[12px] font-bold text-gray-300 md:lg:flex">
                <img
                  src="/icons/coin-icon/BTC.svg"
                  alt="coin"
                  className="h-6 w-6"
                />
                {bet.bet}
              </div>
              {selectedStatus !== 'Daily' && (
                <div className="flex items-center truncate text-[12px] font-bold text-[#2283F6]">
                  {bet.multiplier}
                </div>
              )}
              <div className="flex items-center gap-2 truncate text-[12px] font-bold text-green-400">
                {bet.payout}
                <div className="!h-6 !w-6 overflow-hidden rounded-[8px]">
                  <img
                    src="/icons/coin-icon/BTC.svg"
                    alt="coin"
                    className="h-full w-full"
                  />
                </div>
              </div>
            </div>
          )}
          direction="vertical"
          slidesPerView={9.1}
          spaceBetween={6}
          autoplayDelay={1000}
          className="h-full"
        />
        <div className="pointer-events-none absolute bottom-0 left-0 z-[30] h-[254px] w-full bg-gradient-to-b from-transparent to-[#111923]"></div>
      </div>
    </>
  )
}

export default LatestBetsTable
