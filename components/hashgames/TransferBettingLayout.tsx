'use client'

import React, { useState } from 'react'
import MenuModal from '@/components/modals/MenuModal'
import Link from 'next/link'
import { useSidebar } from '@/context/SidebarProvider'
import { CopyBox } from '@/components/ui/CopyBox'
import { board } from './mockboard'
import { useI18n } from '@/context/I18nProvider'

const TransferBettingLayout: React.FC = () => {
  const { t } = useI18n()
  const { isCollapsed } = useSidebar()
  const [difficulty, setDifficulty] = useState<'Beginner' | 'Intermediate'>(
    'Beginner'
  )

  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false)

  const handleCloseMenuModal = () => {
    setIsMenuModalOpen(false)
  }

  const GameBoard = ({ board }: { board: (string | null)[][] }) => {
    return (
      <div className=" rounded-lg w-full mb-4">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1 mb-1 bg-[#1b2430]">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className="w-10 h-10 flex items-center justify-center border border-gray-700"
              >
                {cell === 'E' ? (
                  <div className="w-5 h-5 flex items-center justify-center rounded-full bg-yellow-500 text-black text-xs font-bold [@media(max-width:850px)]:text-[10px] [@media(max-width:850px)]:w-4 [@media(max-width:850px)]:h-4">
                    E
                  </div>
                ) : cell === 'O' ? (
                  <div className="w-5 h-5 flex items-center justify-center rounded-full bg-red-600 text-white text-xs font-bold [@media(max-width:850px)]:text-[10px] [@media(max-width:850px)]:w-4 [@media(max-width:850px)]:h-4">
                    O
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      <div
        className={`w-full max-w-6xl lg:px-0 p-2 mx-auto ${isCollapsed ? 'sidebar-collapsed' : ''}`}
      >
        {/* Header Section */}
        <div className=" justify-between items-center mb-8 bg-[#222d3d] pr-4 rounded-lg flex  [@media(max-width:768px)]:hidden">
          <div className="flex bg-[#72707038] rounded-lg p-1 ">
            <div
              className={` px-8  py-1.5 rounded-lg font-bold transition-all duration-200 text-sm border-none flex items-center gap-2 bg-[rgba(255,255,255,0.13)] text-gray-300 hover:bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)]`}
            >
              {' '}
              <img
                src="/icons/swap-horizontal.svg"
                alt="transfer"
                className="w-6 h-6"
              />
              {t('hashgame.transferBetting')}
            </div>
            <Link
              href="/hashgames/bankerplayer/page-betting"
              className={`px-8 py-1.5 rounded-lg font-bold transition-all duration-200 text-sm border-none flex items-center gap-2 
                bg-color-[#FFFFFF] text-white shadow-lg hover:bg-[rgba(255,255,255,0.08)]`}
            >
              {' '}
              <img src="/icons/wallet.svg" alt="page" className="w-6 h-6" />
              {t('hashgame.pageBetting')}
            </Link>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <span className="text-sm text-gray-300">
              {t('hashgame.beginner')}
            </span>
            <div className="relative">
              <input
                type="checkbox"
                id="difficulty-toggle"
                className="sr-only"
                checked={difficulty === 'Intermediate'}
                onChange={e =>
                  setDifficulty(e.target.checked ? 'Intermediate' : 'Beginner')
                }
              />
              <label
                htmlFor="difficulty-toggle"
                className={`block w-12 h-6 rounded-full cursor-pointer relative ${
                  difficulty === 'Intermediate'
                    ? 'bg-[#2283F6]'
                    : 'bg-[#a7b5ca73]'
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    difficulty === 'Intermediate' ? 'translate-x-6' : ''
                  }`}
                />
              </label>
            </div>
            <span className="text-sm text-gray-300">
              {t('hashgame.intermediate')}
            </span>
          </div>
        </div>
        {/* Mobile view Header Section*/}
        <div className="bg-[#72707038] rounded-lg w-full  p-1 hidden [@media(max-width:768px)]:flex ">
          <div
            className={` w-[50%] flex justify-center  py-1.5 rounded-lg font-bold transition-all duration-200 text-sm border-none items-center gap-2 bg-[rgba(255,255,255,0.13)] text-gray-300 hover:bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)]`}
          >
            {' '}
            <img
              src="/icons/swap-horizontal.svg"
              alt="transfer"
              className="w-6 h-6"
            />
            {t('hashgame.transferBetting')}
          </div>
          <Link
            href="/hashgames/bankerplayer/page-betting"
            className={` w-[50%] justify-center flex justify-center items-center  py-1.5 rounded-lg font-bold transition-all duration-200 text-white text-sm border-none flex items-center gap-2 hover:bg-[rgba(255,255,255,0.08)]`}
          >
            {' '}
            <img
              src="/icons/swap-horizontal.svg"
              alt="page"
              className="w-6 h-6"
            />
            {t('hashgame.pageBetting')}
          </Link>
        </div>

        {/* Mobile view Header Section1s*/}
        <div className="items-center gap-2 mt-4 mb-4 justify-center [@media(max-width:768px)]:flex hidden">
          <span className="text-sm text-gray-300">
            {t('hashgame.beginner')}
          </span>
          <div className="relative">
            <input
              type="checkbox"
              id="difficulty-toggle"
              className="sr-only"
              checked={difficulty === 'Intermediate'}
              onChange={e =>
                setDifficulty(e.target.checked ? 'Intermediate' : 'Beginner')
              }
            />
            <label
              htmlFor="difficulty-toggle"
              className="block w-12 h-6 bg-gray-600 rounded-full cursor-pointer relative"
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  difficulty === 'Intermediate' ? 'translate-x-6' : ''
                }`}
              />
            </label>
          </div>
          <span className="text-sm text-gray-300">
            {t('hashgame.intermediate')}
          </span>
        </div>

        {/* Desktop view Bid address and Wallet Section*/}
        <div className="bg-[#111923] rounded-lg p-3 mb-6  border border-[rgba(12,96,255,0.1)] shadow-xl [@media(max-width:768px)]:block hidden">
          <h2 className="text-lg font-bold mb-4 text-[#FFFFFF] flex items-center gap-2">
            {t('hashgame.bettingAddress')}
            <span className="font-bold text-xs opacity-80">
              {t('hashgame.useDecWallet')}
            </span>
          </h2>
          <CopyBox className="w-full mb-4">
            <span className="text-chip-blue">TXS3</span>PfAUShemKkoBWRUFsUkGBSrZ
            <span className="text-chip-blue">gh..</span>
          </CopyBox>

          <div className="relative mb-4">
            <div className="absolute inset-0 bg-[#003a8a] rounded-[12px] translate-y-1"></div>
            <div className=" w-full relative text-center rounded-[12px] bg-[linear-gradient(to_top,#0C60FF_70%,#2C9FFA_100%)] text-white px-8 py-3 text-sm font-bold hover:from-[#0a56e6] hover:to-[#2590e6] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg cursor-pointer">
              {t('hashgame.activeAddress')}
            </div>
          </div>
          <div className="bg-[#FFFFFF0A] rounded-lg p-3 mb-6 border border-[rgba(12,96,255,0.1)] shadow-xl">
            <p className="text-white text-sm font-bold mb-2">
              {t('hashgame.chances')}:
              <span className="text-chip-blue">1:1.95</span>
            </p>
            <p className="text-white text-sm font-bold">
              {t('hashgame.limitation')}:
              <span className="text-chip-blue">10-15000 USDT 2-30000 </span>TRX
            </p>
            <div className="text-chip-blue text-sm font-normal mt-5 opacity-80">
              {t('hashgame.notetitle')}
            </div>

            <div className="mt-4 text-[#FFFFFF] text-sm font-normal opacity-80 ">
              {t('hashgame.notecontent')}
            </div>
          </div>
          {/* Mobile view Desktop View Example Section */}
          <div className="bg-[url('/images/agloss.png')] bg-no-repeat bg-cover bg-center [@media(max-width:768px)]:block hidden">
            <div className=" rounded-lg p-4 mb-6   relative overflow-none shadow-xl bg-[linear-gradient(to_bottom,#253041_70%,#0C60FF_100%)] opacity-85">
              {/* Background cryptocurrency coin outlines - Exact match to image */}
              <div className="flex gap-8 relative z-10">
                {/* Left Column - Title, Hash Example, and Rules */}
                <div>
                  <p className="text-sm text-align-left font-bold mb-5 text-white leading-tight">
                    {t('hashgame.blockChainRule')}
                  </p>
                  <img
                    src="/icons/down-arrow.svg"
                    alt="down-arrow"
                    className="w-6 h-4 m-auto mb-2 opacity-40"
                  />
                  <div className="text-left">
                    <div className="flex items-center gap-6  px-8 rounded-xl justify-center  relative ">
                      <span className="text-white font-bold text-sm tracking-wider flex text-left">
                        EX:0000000 .... e
                        <span className="text-[#FFB636] text-sm font-bold">
                          5
                        </span>
                        s
                      </span>
                      {/* Enhanced Magnifying Glass Effect - Exact Match */}
                      <div className="relative flex-shrink-0">
                        <img
                          src="/images/magnifying.png"
                          alt="magnifying.png"
                          className="w-10 h-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6 bg-[#FFFFFF0A]  t-[14px] p-4 rounded-xl font-bold">
            <h3 className="text-lg font-normal mb-3 text-white flex items-center gap-2">
              {t('hashgame.bettingRules')}
            </h3>
            <p className="text-white font-normal  leading-relaxed text-sm opacity-80">
              The last digit of the Active amount, 1,3,5,7,9 are placed on{' '}
              <span className="font-normal text-[#64B5F6]">odd</span>, 0,2,4,6,8
              are placed on{' '}
              <span className="font-normal text-[#64B5F6]">even</span>.
            </p>
            <h3 className="text-lg font-normal mb-3 text-white flex items-center gap-2">
              {t('hashgame.gameRules')}
            </h3>
            <p className="text-white font-normal  leading-relaxed text-sm opacity-80">
              1,3,5,7,9 is{' '}
              <span className="font-normal text-[#64B5F6]">odd</span>, 0,2,4,6,8
              is <span className="font-normal text-[#64B5F6]">even</span>.
            </p>
          </div>
        </div>

        {/* Game Description and Rules */}
        <div className="bg-[url('/images/agloss.png')] bg-no-repeat bg-cover bg-center [@media(max-width:768px)]:hidden">
          <div className=" rounded-lg p-8 mb-6 relative overflow-none shadow-xl bg-[linear-gradient(to_bottom,#253041_70%,#0C60FF_100%)] opacity-85">
            {/* Background cryptocurrency coin outlines - Exact match to image */}

            <div className="flex gap-8 relative z-10">
              {/* Left Column - Title, Hash Example, and Rules */}
              <div className="w-[60%]">
                <p className="text-2xl text-align-left font-bold mb-5 text-white leading-tight">
                  {t('hashgame.blockChainRule')}
                </p>

                <div className="text-left mb-6">
                  <div className="inline-flex items-center gap-6 bg-gradient-to-r from-[#2283F621] to-[#2283F621] px-12 py-4 rounded-xl border border-[rgba(12,96,255,0.3)] relative shadow-2xl">
                    <span className="text-white font-bold text-[20px] tracking-wider flex-1 text-left">
                      EX:0000000 .... e
                      <span className="text-[#FFB636] text-[20px] font-bold">
                        5
                      </span>
                      s
                    </span>
                    {/* Enhanced Magnifying Glass Effect - Exact Match */}
                    <div className="relative flex-shrink-0">
                      <img
                        src="/images/magnifying.png"
                        alt="magnifying.png"
                        className="w-20 h-12"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-6 bg-[#1119238A]  t-[14px] p-4 rounded-xl font-bold none [@media(max-width:768px)]:block">
                  <h3 className="text-lg font-normal mb-3 text-white flex items-center gap-2">
                    {t('hashgame.bettingRules')}
                  </h3>
                  <p className="text-white font-normal  leading-relaxed text-sm">
                    The last digit of the Active amount, 1,3,5,7,9 are placed on{' '}
                    <span className="font-normal text-[#64B5F6]">odd</span>,
                    0,2,4,6,8 are placed on{' '}
                    <span className="font-normal text-[#64B5F6]">even</span>.
                  </p>
                  <h3 className="text-lg font-normal mb-3 text-white flex items-center gap-2">
                    {t('hashgame.gameRules')}
                  </h3>
                  <p className="text-white font-normal  leading-relaxed text-sm">
                    1,3,5,7,9 is{' '}
                    <span className="font-normal text-[#64B5F6]">odd</span>,
                    0,2,4,6,8 is{' '}
                    <span className="font-normal text-[#64B5F6]">even</span>.
                  </p>
                </div>
              </div>

              {/* Right Column - Examples */}
              <div className="w-[40%] space-y-2 t-[14px] bg-[#1119238A] p-6 rounded-xl h-min-content">
                <h3 className=" font-bold mb-3 text-white flex items-center gap-2">
                  Example 1
                </h3>
                <p className="text-white  font-normal text-sm">
                  Your Active amount is:{' '}
                  <span className="text-[#64B5F6] font-normal">100.22</span>,
                  recognized as{' '}
                  <span className="text-[#64B5F6] font-normal">a pair</span>,
                  Decimal point is an invalid amount, Block hash of this Active:
                  646rgd**d9f9{' '}
                  <span className="text-[#64B5F6] font-normal">2</span> The last
                  digit of block hash 2 is determined as{' '}
                  <span className="text-[#64B5F6] font-normal">a pair</span>,
                  the result is{' '}
                  <span className="text-[#64B5F6] font-normal">a win</span>.
                  System refund amount: 100*1.95=195.00
                </p>
                <h3 className="font-bold  text-white ">Example 2</h3>
                <p className="text-white  font-normal text-sm">
                  Your Active amount is:{' '}
                  <span className="text-[#64B5F6] font-normal">9</span>, limit:
                  10 - 900 USDT, No Active amount{' '}
                  <span className="text-[#64B5F6] font-normal">
                    Within the specified bet value
                  </span>
                  , the platform directly calculates the Active amount for
                  invalid bets.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bid Address and Wallet Section */}
        <div className="bg-[#111923] rounded-lg p-6 mb-6 shadow-xl [@media(max-width:768px)]:hidden">
          <h2 className="text-lg font-bold mb-4 text-[#FFFFFF] flex items-center gap-2">
            {t('hashgame.bettingAddress')}
            <span className="font-bold text-xs">
              {t('hashgame.useDecWallet')}
            </span>
          </h2>
          <div className="flex items-center gap-4  ">
            <div className="flex opacity-80 justify-between w-[80%] bg-[#2a3546] p-3 border rounded-lg p-3Icon.svg border-[rgba(255,255,255,0.1)]">
              <div className="flex items-center">
                <span className="text-gray-300 text-xs font-bold">
                  <span className="text-[#2283F6]">TXS3</span>
                  <span className="text-[#FFFFFF]">
                    PfAUShemKkoBWRUFsUkGBSrZGagh6X
                  </span>
                  <span className="text-[#2283F6]">gh6X</span>
                </span>
              </div>
              <img src="/icons/copy.svg" alt="copy" className="w-6 h-6" />
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#003a8a] rounded-[12px] translate-y-1"></div>
              <div className="relative rounded-[12px] bg-[linear-gradient(to_top,#0C60FF_70%,#2C9FFA_100%)] text-white px-8 py-3 text-sm font-bold hover:from-[#0a56e6] hover:to-[#2590e6] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg cursor-pointer">
                {t('hashgame.activeAddress')}
              </div>
            </div>
          </div>
          <h2 className="text-sm font-bold mt-5 mb-4 text-[#FFFFFF] items-center gap-2 hidden md:flex">
            {t('hashgame.lotteryRule')}
          </h2>
          <div className="border-2 border-[#0C60FF] rounded-lg  bg-[#2283F621] shadow-inner hidden md:flex">
            <div className="flex items-center gap-3 w-[50%] justify-center border-r border-[#0C60FF] p-10 ">
              <span className="text-white font-bold text-sm">Odds:</span>
              <div className="bg-[#111923] rounded-lg px-5 py-1.5">
                <span className="text-[#0C60FF] font-bold text-sm">1:1.95</span>
              </div>
            </div>
            <div className="w-[50%] flex justify-center items-center gap-3">
              <span className="text-white font-bold text-sm">
                {t('hashgame.limitation')}:
              </span>
              <div className="bg-[#111923] rounded-lg px-3 py-2 mt-2">
                <p className="text-[#2283F6] text-sm font-medium">
                  10-15000 <span className="text-white">USDT</span>
                </p>
                <p className="text-[#2283F6] text-sm font-medium">
                  2-30000 <span className="text-white">TRX</span>
                </p>
              </div>
            </div>
          </div>
          <div className="text-[#2283F6] text-sm font-normal mt-5 opacity-80 [@media(max-width:768px)]:hidden">
            {t('hashgame.notetitle')}
          </div>
          <div className="mt-4 text-[#FFFFFF] text-sm font-normal opacity-80 [@media(max-width:768px)]:hidden">
            {t('hashgame.notecontent')}
          </div>
        </div>

        {/* Lottery Trend Section */}
        <div className="bg-[#111923] rounded-lg py-4 px-6 mb-6 border border-[rgba(255,255,255,0.1)] shadow-xl [@media(max-width:768px)]:hidden">
          <div className="flex justify-between items-center">
            <div>
              <div className="flex justify-between items-center mb-4 gap-4">
                <h2 className="text-sm font-bold text-white flex items-center gap-2">
                  {t('hashgame.lotteryTrend')}
                </h2>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-xs font-bold">O</span>
                    </div>
                    <span className="text-sm text-white">91</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-black text-xs font-bold">E</span>
                    </div>
                    <span className="text-sm text-white">112</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center mb-4 mt-2 rounded-lg">
              <div className="flex bg-[#FFFFFF0A] rounded-lg p-2 gap-2">
                <div
                  className={`px-8 py-1.5 rounded-lg font-bold transition-all duration-200 text-sm border-none flex items-center gap-2 bg-[rgba(255,255,255,0.13)] text-gray-300 hover:bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] cursor-pointer`}
                >
                  {t('hashgame.blockTrend')}
                </div>
                <div
                  className={`px-8 py-1.5 rounded-lg font-bold transition-all duration-200 text-sm border-none flex items-center gap-2 bg-[rgba(255,255,255,0.13)] text-gray-300 hover:bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] cursor-pointer`}
                >
                  {t('hashgame.myTrend')}
                </div>
              </div>
            </div>
          </div>
          <GameBoard board={board} />
          <div className="flex items-center gap-2 text-sm text-gray-300 bg-[#FFFFFF0A] rounded-lg p-4">
            <img src="/icons/Vector.svg" alt="info" className="w-5 h-5" />
            <p className="opacity-80">{t('hashgame.roadMap')}</p>
          </div>
        </div>

        {/* Tutorial Video Section */}
        <div className="bg-[url('/images/game-video.png')] bg-cover bg-center rounded-lg p-6 mb-6 ">
          <div className="rounded-lg relative overflow-none md:p-4">
            {/* Left Side - Text and Button */}
            <div className="flex flex-col items-start justify-center h-full">
              <h2 className="font-bold text-white mb-6 text-left text-sm md:text-lg">
                Hash even and odd {t('help.video')}
              </h2>
              <div className="relative">
                <div className=" text-xs relative bg-[#2283F6] text-white px-8 py-3 rounded-lg font-bold hover:bg-[linear-gradient(#0a56e6,#2590e6)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0">
                  {t('hashgame.viewPlay')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Betting Record Section */}
        <div className="bg-[#111923] rounded-lg p-6 border border-[rgba(12,96,255,0.1)] shadow-xl hidden md:block">
          <div className="flex justify-between items-center mb-4 ">
            <h2 className="text-[18px] font-bold text-white flex items-center gap-2">
              {t('hashgame.bettingRecord')}
            </h2>
            <div className="text-[#0C60FF] text-sm font-bold hover:text-[#64B5F6] transition-colors">
              {t('app.showMore')}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 items-center p-2 px-8">
            <span className="text-[#55657E] font-bold text-xs opacity-80">
              {t('wallet.currency')}
            </span>
            <span className="text-[#55657E] font-bold text-xs opacity-80">
              {t('hashgame.betLimit')}
            </span>
            <span className="text-[#55657E] font-bold text-xs opacity-80">
              {t('hashgame.betAmount')}
            </span>
            <span className="text-[#55657E] font-bold text-xs opacity-80 text-right">
              {t('hashgame.toDayWinOrLoss')}
            </span>
          </div>
          <div className="space-y-3">
            {/* USDT Row */}
            <div className="bg-[#1C2532] rounded-lg p-4 px-8 border border-[rgba(255,255,255,0.1)] shadow-md">
              <div className="grid grid-cols-4 gap-4 items-center">
                <div className="flex items-center gap-1 ">
                  <img
                    src="/icons/coin-icon/USDT.svg"
                    alt="usdt"
                    className="w-5 h-5"
                  />
                  <span className="text-white font-bold text-sm mt-1">
                    USDT
                  </span>
                </div>
                <div className="text-white">0</div>
                <div className="flex items-center gap-1">
                  <img
                    src="/icons/coin-icon/USDT.svg"
                    alt="tron"
                    className="w-5 h-5"
                  />
                  <span className="text-white">4.77000000</span>
                </div>
                <div className="flex items-center gap-1 text-crimson ml-6 justify-end font-medium">
                  <img
                    src="/icons/coin-icon/USDT.svg"
                    alt="tron"
                    className="w-5 h-5"
                  />
                  <span>3214.789</span>
                </div>
              </div>
            </div>

            {/* TRX Row */}
            <div className="bg-[#1C2532] rounded-lg p-4 px-8 border border-[rgba(255,255,255,0.1)] shadow-md">
              <div className="grid grid-cols-4 gap-4 items-center">
                <div className="flex items-center gap-1">
                  <img
                    src="/icons/coin-icon/TRX.svg"
                    alt="tron"
                    className="w-5 h-5"
                  />
                  <span className="text-white font-bold text-sm mt-1">TRX</span>
                </div>
                <div className="text-white">0</div>
                <div className="flex items-center gap-2">
                  <img
                    src="/icons/coin-icon/BTC.svg"
                    alt="tron"
                    className="w-5 h-5"
                  />
                  <span className="text-white">7.60300</span>
                </div>
                <div className="flex items-center gap-1 text-crimson justify-end font-medium">
                  <img
                    src="/icons/coin-icon/TRX.svg"
                    alt="tron"
                    className="w-5 h-5"
                  />
                  <span>5785.685</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View Example Section */}
        <div className="w-full space-y-2 t-[14px] bg-[#FFFFFF0A] p-6 rounded-xl h-min-content hidden [@media(max-width:768px)]:block">
          <h3 className=" font-bold mb-3 text-white flex items-center gap-2">
            Example 1
          </h3>
          <p className="text-white  font-normal text-sm opacity-80">
            Your Active amount is:{' '}
            <span className="text-[#64B5F6] font-normal">100.22</span>,
            recognized as{' '}
            <span className="text-[#64B5F6] font-normal">a pair</span>, Decimal
            point is an invalid amount, Block hash of this Active: 646rgd**d9f9{' '}
            <span className="text-[#64B5F6] font-normal">2</span> The last digit
            of block hash 2 is determined as{' '}
            <span className="text-[#64B5F6] font-normal">a pair</span>, the
            result is <span className="text-[#64B5F6] font-normal">a win</span>.
            System refund amount: 100*1.95=195.00
          </p>
          <h3 className="font-bold  text-white ">Example 2</h3>
          <p className="text-white  font-normal text-sm opacity-80">
            Your Active amount is:{' '}
            <span className="text-[#64B5F6] font-normal">9</span>, limit: 10 -
            900 USDT, No Active amount{' '}
            <span className="text-[#64B5F6] font-normal">
              Within the specified bet value
            </span>
            , the platform directly calculates the Active amount for invalid
            bets.
          </p>
        </div>
      </div>
      <MenuModal isOpen={isMenuModalOpen} onClose={handleCloseMenuModal} />
    </>
  )
}

export default TransferBettingLayout
