'use client'
// this is the game card
import React from 'react'
import { Copy, Info, ArrowLeftRight } from 'lucide-react'
import { Button } from '..'
import Link from 'next/link'
import { useI18n } from '@/context/I18nProvider'

export interface TypeTwoProps {
  title: string
  chances: string
  bettingAddress: string
  leftButtonLink: string
  rightButtonLink: string
  background: string
}

const HashCard: React.FC<TypeTwoProps> = ({
  title,
  chances,
  bettingAddress,
  leftButtonLink,
  rightButtonLink,
  background,
}) => {
  const { t } = useI18n()
  const handleCopy = () => navigator.clipboard.writeText(bettingAddress)

  return (
    <div
      style={{
        backgroundImage: `url('${background}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="relative rounded-lg w-full p-3 sm:p-2 text-white overflow-hidden  shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col"
    >
      <div className="absolute w-full h-full bg-black opacity-60 top-0 left-0" />
      <div className="relative z-10 flex flex-col h-full">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-2 sm:mb-3">
          <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-1">
            <h1 className="text-[.8rem] sm:text-[.9] font-bold text-white truncate">
              {title}
            </h1>
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors flex-shrink-0">
              <Info className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
            </div>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <span className="text-gray-300 text-[.9rem] sm:text-[1rem] font-medium">
              {t('hashgame.chances')}:
            </span>
            <span className="text-red-400 text-[.9rem] sm:text-[1rem] font-bold bg-red-500/20 px-1 py-0.5 sm:px-1.5 sm:py-1 rounded">
              {chances}
            </span>
          </div>
        </div>

        {/* Betting Address Section */}
        <div className="flex-1 flex flex-col justify-center mb-2 sm:mb-3">
          <div className="flex items-center justify-between mb-1 sm:mb-1.5">
            <span className="text-white text-[.7rem] sm:text-[.8rem] font-medium">
              {t('hashgame.bettingAddress')}
            </span>
            <span className="text-gray-400 text-[.7rem] sm:text-[.8rem] leading-tight">
              <span
                className="block overflow-hidden"
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  lineHeight: '1.2',
                  maxHeight: '2.4em',
                }}
              >
                {t('hashgame.useDecWallet')}
              </span>
            </span>
          </div>
          <div className="relative">
            <div className="bg-[#090c11] rounded-lg w-full h-[2rem] sm:h-[2.5rem]  flex items-center border-gray-600/50 hover:border-gray-500/70 transition-colors">
              <span className="text-gray-300 ml-2 font-medium sm:ml-3 text-[.7rem] font-mono pr-8 leading-tight">
                <span
                  className="block overflow-hidden"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    lineHeight: '1.5',
                    maxHeight: '2.4em',
                  }}
                >
                  {bettingAddress}
                </span>
              </span>
            </div>
            <div
              onClick={handleCopy}
              className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 h-8 rounded bg-gray-700/50 hover:bg-gray-600/70 flex items-center justify-center cursor-pointer transition-colors"
            >
              <Copy className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-gray-300" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-1.5 sm:gap-2 mt-auto">
          <Button
            variant="green"
            className="flex-1 min-h-[28px] sm:min-h-[32px]"
          >
            <Link
              className="flex items-center justify-center gap-1 sm:gap-1.5"
              href={leftButtonLink}
            >
              <ArrowLeftRight className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
              <span className="text-xs sm:text-[11px] font-medium">
                Junior field
              </span>
            </Link>
          </Button>
          <Button
            variant="blue"
            className="flex-1 min-h-[28px] sm:min-h-[32px]"
          >
            <Link
              href={rightButtonLink}
              className="flex items-center justify-center"
            >
              <span className="text-xs sm:text-[11px] font-medium">Put</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HashCard
