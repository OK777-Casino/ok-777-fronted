'use client'

import React from 'react'
import DefaultPageLayout from '@/components/hashgames/DefaultPageLayout'
import { User } from '@/components/ui/icons'
const BankerPlayerDefault: React.FC = () => {
  

  return (
    <DefaultPageLayout>
      <div className="flex p-4 md:p-8 items-start gap-4 w-full rounded-xl bg-white/[0.04]">
          

          {/* bnaker Section */}
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="flex pb-4 justify-between items-center w-full">
              {/* Progress Circle for banker */}
              <div className="relative w-10 h-10">
                <svg className="w-10 h-10 transform -rotate-90" viewBox="0 0 40 40">
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    stroke="rgba(255,255,255,0.13)"
                    strokeWidth="4"
                    fill="none"
                  />
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    stroke="#ED1D49"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={`${100 * 1.13} ${(100 - 100) * 1.13}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-crimson">100%</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-base font-bold text-right">
                  <span className="text-casper">$</span>
                  <span className="text-white">7592</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold text-casper">11</span>
                  <User className="w-4 h-4 text-casper" />
                </div>
              </div>
            </div>
            <div className="flex h-9 px-4 justify-center items-center gap-2 rounded-lg border border-white/[0.08] bg-mirage shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-[32px]">
              <span className="text-sm font-bold text-white">$0</span>
            </div>
            <div className="text-[20px] font-bold text-crimson">BANKER</div>
            <div className="flex h-9 px-4 justify-center items-center gap-2 rounded-lg border border-white/[0.08] bg-mirage shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-[32px]">
              <span className="text-sm font-bold text-white">1 : 1.95</span>
            </div>
          </div>
          {/* Divider */}
          <div className="w-[1px] h-[188px]  bg-white/[0.04]"></div>
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="flex pb-4 justify-between items-center w-full">
              {/* Progress Circle for tie */}
              <div className="relative w-10 h-10">
                <svg className="w-10 h-10 transform -rotate-90" viewBox="0 0 40 40">
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    stroke="rgba(255,255,255,0.13)"
                    strokeWidth="4"
                    fill="none"
                  />
                  {/* <circle
                    cx="20"
                    cy="20"
                    r="18"
                    stroke="#1BB83D"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={`${0 * 1.13} ${(100 - 0) * 1.13}`}
                    strokeLinecap="round"
                  /> */}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-[#1BB83D]">0%</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-base font-bold text-right">
                  <span className="text-casper">$</span>
                  <span className="text-white">7592</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold text-casper">11</span>
                  <User className="w-4 h-4 text-casper" />
                </div>
              </div>
            </div>
            <div className="flex h-9 px-4 justify-center items-center gap-2 rounded-lg border border-white/[0.08] bg-mirage shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-[32px]">
              <span className="text-sm font-bold text-white">$0</span>
            </div>
            <div className="text-[20px] font-bold text-[#1BB83D]">TIE</div>
            <div className="flex h-9 px-4 justify-center items-center gap-2 rounded-lg border border-white/[0.08] bg-mirage shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-[32px]">
              <span className="text-sm font-bold text-white">1 : 1.95</span>
            </div>
          </div>
          {/* Divider */}
          <div className="w-[1px] h-[188px]  bg-white/[0.04]"></div>
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="flex pb-4 justify-between items-center w-full">
              {/* Progress Circle for player */}
              <div className="relative w-10 h-10">
                <svg className="w-10 h-10 transform -rotate-90" viewBox="0 0 40 40">
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    stroke="rgba(255,255,255,0.13)"
                    strokeWidth="4"
                    fill="none"
                  />
                  {/* <circle
                    cx="20"
                    cy="20"
                    r="18"
                    stroke="#FFB636"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={`${43 * 1.13} ${(100 - 43) * 1.13}`}
                    strokeLinecap="round"
                  /> */}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-yellow-orange">0%</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-base font-bold text-right">
                  <span className="text-casper">$</span>
                  <span className="text-white">7592</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold text-casper">11</span>
                  <User className="w-4 h-4 text-casper" />
                </div>
              </div>
            </div>
            <div className="flex h-9 px-4 justify-center items-center gap-2 rounded-lg border border-white/[0.08] bg-mirage shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-[32px]">
              <span className="text-sm font-bold text-white">$0</span>
            </div>
            <div className="text-[20px] font-bold text-yellow-orange">PLAYER</div>
            <div className="flex h-9 px-4 justify-center items-center gap-2 rounded-lg border border-white/[0.08] bg-mirage shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-[32px]">
              <span className="text-sm font-bold text-white">1 : 1.95</span>
            </div>
          </div>
        </div>
    </DefaultPageLayout>
  )
}

export default BankerPlayerDefault
