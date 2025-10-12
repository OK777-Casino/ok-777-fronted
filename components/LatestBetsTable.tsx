'use client'

import React, { useState } from 'react'
import SwiperSlider from '@/components/ui/slider/SwiperSlider'
import {
  StatusDropdown,
  StatusDropdownTrigger,
  StatusDropdownContent,
  StatusDropdownItem,
} from '@/components/ui/StatusDropdown'

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
  const latestBets = [
    {
      game: 'Cavesone',
      player: 'User***123',
      time: '2 min ago',
      bet: '0.001 BTC',
      multiplier: '2.5x',
      payout: '1',
    },
    {
      game: 'Cavesone',
      player: 'User***456',
      time: '5 min ago',
      bet: '0.002 BTC',
      multiplier: '1.8x',
      payout: '0.5',
    },
    {
      game: 'Cavesone',
      player: 'User***789',
      time: '8 min ago',
      bet: '0.0005 BTC',
      multiplier: '3.2x',
      payout: '20',
    },
    {
      game: 'Cavesone',
      player: 'User***123',
      time: '2 min ago',
      bet: '0.001 BTC',
      multiplier: '2.5x',
      payout: '25',
    },
    {
      game: 'Cavesone',
      player: 'User***456',
      time: '5 min ago',
      bet: '0.002 BTC',
      multiplier: '1.8x',
      payout: '30',
    },
    {
      game: 'Cavesone',
      player: 'User***789',
      time: '8 min ago',
      bet: '0.0005 BTC',
      multiplier: '3.2x',
      payout: '50',
    },
    {
      game: 'Cavesone',
      player: 'User***123',
      time: '2 min ago',
      bet: '0.001 BTC',
      multiplier: '2.5x',
      payout: '100',
    },
    {
      game: 'Cavesone',
      player: 'User***456',
      time: '5 min ago',
      bet: '0.002 BTC',
      multiplier: '1.8x',
      payout: '25',
    },
    {
      game: 'Cavesone',
      player: 'User***789',
      time: '8 min ago',
      bet: '0.0005 BTC',
      multiplier: '3.2x',
      payout: '26',
    },
    {
      game: 'Cavesone',
      player: 'User***123',
      time: '2 min ago',
      bet: '0.001 BTC',
      multiplier: '2.5x',
      payout: '24.6',
    },
    {
      game: 'Cavesone',
      player: 'User***456',
      time: '5 min ago',
      bet: '0.002 BTC',
      multiplier: '1.8x',
      payout: '200',
    },
    {
      game: 'Cavesone',
      player: 'User***789',
      time: '8 min ago',
      bet: '0.0005 BTC',
      multiplier: '3.2x',
      payout: '35',
    },
    {
      game: 'Cavesone',
      player: 'User***123',
      time: '2 min ago',
      bet: '0.001 BTC',
      multiplier: '2.5x',
      payout: '40',
    },
    {
      game: 'Cavesone',
      player: 'User***456',
      time: '5 min ago',
      bet: '0.002 BTC',
      multiplier: '1.8x',
      payout: '40',
    },
    {
      game: 'Cavesone',
      player: 'User***789',
      time: '8 min ago',
      bet: '0.0005 BTC',
      multiplier: '3.2x',
      payout: '1000',
    },
    {
      game: 'Cavesone',
      player: 'User***123',
      time: '2 min ago',
      bet: '0.001 BTC',
      multiplier: '2.5x',
      payout: '1444',
    },
    {
      game: 'Cavesone',
      player: 'User***456',
      time: '5 min ago',
      bet: '0.002 BTC',
      multiplier: '1.8x',
      payout: '1520',
    },
    {
      game: 'Cavesone',
      player: 'User***789',
      time: '8 min ago',
      bet: '0.0005 BTC',
      multiplier: '3.2x',
      payout: '124',
    },
    {
      game: 'Cavesone',
      player: 'User***123',
      time: '2 min ago',
      bet: '0.001 BTC',
      multiplier: '2.5x',
      payout: '36',
    },
    {
      game: 'Cavesone',
      player: 'User***456',
      time: '5 min ago',
      bet: '0.002 BTC',
      multiplier: '1.8x',
      payout: '80',
    },
    {
      game: 'Cavesone',
      player: 'User***789',
      time: '8 min ago',
      bet: '0.0005 BTC',
      multiplier: '3.2x',
      payout: '700',
    },
  ]

  const [selectedStatus, setSelectedStatus] = useState('Up to date')
  return (
    <>
      <div className="text-4.5 mb-4 flex w-full items-center justify-between gap-2 font-bold text-white">
        <span>Latest Bets</span>
        <StatusDropdown>
          <StatusDropdownTrigger className="border-none bg-ebony-clay outline-none ring-0 focus:ring-0">
            {selectedStatus}
          </StatusDropdownTrigger>
          <StatusDropdownContent
            className="border-none bg-ebony-clay"
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
        className={`grid lg:md:grid-cols-[15%_15%_20%_15%_25%_10%] ${
          selectedStatus !== 'Daily'
            ? 'grid-cols-[30%_25%_20%_30%]'
            : 'grid-cols-[30%_30%_40%]'
        } `}
      >
        <div className="py-2 text-center text-xs font-bold text-white">
          Game
        </div>
        <div className="py-2 text-center text-xs font-bold text-white">
          Player
        </div>
        <div className="hidden py-2 text-center text-xs font-bold text-white md:lg:block">
          Time
        </div>
        <div className="hidden truncate py-2 text-center text-xs font-bold text-white md:lg:block">
          Bet Amount
        </div>
        <div className="py-2 text-center text-xs font-bold text-white">
          Multiplier
        </div>
        {selectedStatus !== 'Daily' && (
          <div className="py-2 text-center text-xs font-bold text-white">
            Payout
          </div>
        )}
      </div>
      <div className="relative z-[-1] mb-8 h-[30rem] lg:mb-16">
        <SwiperSlider
          data={latestBets}
          allowTouchMove={false}
          renderSlide={(bet, index) => (
            <div
              className={`grid h-10 w-full overflow-hidden rounded-[16px] bg-[#1C2532] lg:md:grid-cols-[15%_15%_20%_15%_25%_10%] ${
                selectedStatus !== 'Daily'
                  ? 'grid-cols-[30%_25%_20%_30%]'
                  : 'grid-cols-[33%_33%_33%]'
              } items-center`}
              key={index}
            >
              <div className="flex items-center justify-center truncate text-xs font-bold text-white">
                <img
                  src="/images/gameLogo.png"
                  alt="game"
                  className="h-6 w-6"
                />
                {bet.game}
              </div>
              <div className="flex items-center justify-center truncate text-xs font-bold text-gray-300">
                <img
                  src="/images/avatar(1).png"
                  alt="avatar"
                  className="hidden h-6 w-6 md:lg:block"
                />
                {bet.player}
              </div>
              <div className="hidden items-center justify-center truncate text-xs font-bold text-gray-300 md:lg:flex">
                {bet.time}
              </div>
              <div className="hidden items-center justify-end truncate pr-8 text-xs font-bold text-gray-300 md:flex md:gap-2">
                <div>
                  <span>{bet.bet}</span>
                </div>
                <div>
                  <img
                    src="/icons/coin-icon/USDT.svg"
                    alt="coin"
                    className="h-6 w-6"
                  />
                </div>
              </div>

              {selectedStatus !== 'Daily' && (
                <div className="flex items-center justify-center truncate text-xs font-bold text-dodger-blue">
                  {bet.multiplier}
                </div>
              )}
              <div className="flex items-center justify-end gap-2 truncate pr-8 text-xs font-bold text-green-400">
                <div>
                  <span>{bet.payout}</span>
                </div>
                <div className="overflow-hidden rounded-[8px]">
                  <img
                    src="/icons/coin-icon/USDT.svg"
                    alt="coin"
                    className="h-6 w-6"
                  />
                </div>
              </div>
            </div>
          )}
          direction="vertical"
          slidesPerView={9.1}
          spaceBetween={6}
          autoplayDelay={1500}
          className="h-full"
        />
        <div className="pointer-events-none absolute bottom-0 left-0 z-[30] h-[254px] w-full bg-gradient-to-b from-transparent to-[#111923]"></div>
      </div>
    </>
  )
}

export default LatestBetsTable
