'use client'

// this is the first carousel card

import React from 'react'
import FlatButton from '../Button/FlatButton'
import Link from 'next/link'

export interface RewardCardProps {
  button: string
  image: string // image URL from /public
  link?: string
  mainTitle: string
  subTitle: string
}

const RewardCard: React.FC<RewardCardProps> = ({
  button,
  image,
  link,
  mainTitle,
  subTitle,
}) => {
  return (
    <div
      className="relative overflow-hidden rounded-xl p-6 text-white shadow-md transition-all duration-300"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: '35%',
      }}
    >
      {/* Background image layer with hover zoom */}
      <div className="absolute inset-0 bg-no-repeat transition-transform duration-500" />
      <div className="absolute left-[5%] top-[15%] w-3/5">
        <p>
          <span className="text-[1.4rem] font-bold md:text-[1.6]">
            {mainTitle}
          </span>
        </p>
        <p>
          <span className="text-[1rem] font-semibold leading-[1.5rem] md:text-[1.2rem] md:leading-[2rem]">
            {subTitle}
          </span>
        </p>
      </div>

      {/* subtle dark overlay for readability */}
      {/* <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" /> */}

      {/* sheen sweep on hover */}
      {/* <div className="pointer-events-none absolute inset-y-0 left-[-40%] w-[40%] skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:left-[140%]" /> */}

      <div>
        <Link href={`/promotions/${link}`}>
          <FlatButton className="h-[33.73px] w-[125.58px] rounded-[9.15px] bg-[linear-gradient(#0C60FF,#2C9FFA)] text-[13.72px] font-bold lg:h-[52px] lg:w-[173px] lg:rounded-[12.6px] lg:text-[18.9px]">
            {button}
          </FlatButton>
        </Link>
      </div>
    </div>
  )
}

export default RewardCard
