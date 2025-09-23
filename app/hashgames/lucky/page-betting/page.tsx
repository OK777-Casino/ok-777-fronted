'use client'

import React from 'react'
import PageBettingLayout from '@/components/hashgames/PageBettingLayout'
const LuckyDefault: React.FC = () => {
  // Lucky page has a single HASH betting option
  const bettingOptions = [
    {
      id: 'hash',
      label: 'HASH',
      color: '#FFB636',
      progress: 100,
      amount: '10038',
      users: 12,
      odds: '1 : 1.95',
    },
  ]

  return <PageBettingLayout gameType="lucky" bettingOptions={bettingOptions} />
}

export default LuckyDefault
