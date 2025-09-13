"use client";

// this is the game card

import React from "react";
import { Copy, Info, ArrowLeftRight } from "lucide-react";
import { Button } from "..";
import Link from "next/link";
export interface TypeTwoProps {
  title: string;
  chances: string;
  bettingAddress: string;
  leftButtonLink: string;
  rightButtonLink: string;
  background: string;
}

const HashCard: React.FC<TypeTwoProps> = ({
  title,
  chances,
  bettingAddress,
  leftButtonLink,
  rightButtonLink,
  background,
}) => {
  const handleCopy = () => navigator.clipboard.writeText(bettingAddress);

  return (
    <div
      style={{
        backgroundImage: `url('${background}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="relative rounded-[14px] w-full h-[173px] p-[8px_10px_12px_10px] text-white overflow-hidden border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="absolute w-full h-[173px] bg-gradient-to-br from-gray-900/90 to-gray-800/80 top-0 left-0" />
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <h1 className="text-[16px] font-bold text-white">{title}</h1>
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
              <Info className="w-3 h-3 text-white" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-300 text-[12px]">Chances:</span>
            <span className="text-red-400 text-[14px] font-bold bg-red-500/20 px-2 py-1 rounded">
              {chances}
            </span>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white text-[12px] font-medium">
              Betting Address
            </span>
            <span className="text-gray-400 text-[12px]">
              Use a Decentralized Wallet
            </span>
          </div>
          <div className="relative">
            <div className="bg-[#090c11] rounded-lg w-full h-[36px] border flex items-center border-gray-600/50 hover:border-gray-500/70 transition-colors">
              <span className="text-gray-300 ml-3 text-[10px] font-mono truncate flex-1">
                {bettingAddress}
              </span>
            </div>
            <div
              onClick={handleCopy}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded bg-gray-700/50 hover:bg-gray-600/70 flex items-center justify-center cursor-pointer transition-colors"
            >
              <Copy className="w-3 h-3 text-gray-300" />
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="green" className="flex-1">
            <Link className="flex items-center justify-center gap-2" href={leftButtonLink}>
              <ArrowLeftRight className="w-3 h-3" />
              <span className="text-[12px] font-medium">Junior field</span>
            </Link>
          </Button>
          <Button variant="blue" className="flex-1">
            <Link href={rightButtonLink} className="flex items-center justify-center">
              <span className="text-[12px] font-medium">Put</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HashCard;
