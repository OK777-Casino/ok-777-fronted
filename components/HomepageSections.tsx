"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "../context/I18nProvider";
import CasinoCard from "./ui/cards/CasinoCard";
import HashCard from "./ui/cards/HashCard";
import FutureCard from "./ui/cards/FutureCard";
import SwiperSlider from "./ui/slider/SwiperSlider";

// Generate game data with images
const generateGameImages = () => {
  const gameImages = [];
  for (let i = 1; i <= 15; i++) {
    const gameNumber = i.toString().padStart(2, '0');
    gameImages.push({
      id: `game-${gameNumber}`,
      image: `/images/games/Game${gameNumber}.jpg`,
      title: `Game ${gameNumber}`,
      link: `/hashgames/game${gameNumber}`
    });
  }
  return gameImages;
};

const gameImages = generateGameImages();

// Game Image Card Component
const GameImageCard: React.FC<{
  id: string;
  image: string;
  title: string;
  link: string;
}> = ({ image, title, link }) => (
  <Link href={link} className="block">
    <div className="relative group cursor-pointer">
      <div className="aspect-square rounded-lg overflow-hidden bg-gray-800">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
          onError={(e) => {
            // Fallback if image doesn't exist
            e.currentTarget.src = '/images/placeholder-game.jpg';
          }}
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white text-black px-3 py-1 rounded-full text-sm font-bold">
            {title}
          </div>
        </div>
      </div>
    </div>
  </Link>
);

// Section header component
const SectionHeader: React.FC<{
  icon: string;
  title: string;
  alt: string;
  count?: number;
}> = ({ icon, title, alt, count }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-4.5 font-bold flex items-center text-white gap-2">
        <img className="grayscale" src={icon} alt={alt} />
        {title}
      </h2>
      {count && (
        <span className="font-bold flex items-center text-[14px] text-[#2283F6]">
          <span>all {count}</span>
        </span>
      )}
    </div>
  );
};

// Homepage sections with SwiperSlider
export const HomepageSections: React.FC<{
  card1: any[];
  card2: any[];
  card3: any[];
  card4: any[];
  card5: any[];
  card6: any[];
  cryptoCards: any[];
  extendedHashGames: any[];
}> = ({
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  cryptoCards,
  extendedHashGames,
}) => {
  const { t } = useI18n();

  // Helper function to duplicate data for two rows
  const duplicateDataForTwoRows = (data: any[]) => {
    return [...data, ...data];
  };

  return (
    <>
      {/* New Launches Section */}
      <div className="lg:mb-16 mb-8">
        <SectionHeader
          icon="/icons/Home.svg"
          title={t("games.new")}
          alt="home"
          count={card1.length}
        />
        <SwiperSlider
          key="homepage-new-launches-swiper"
          autoplayDelay={1000000}
          data={card1}
          renderSlide={(card, index) => <CasinoCard {...card} />}
          slidesPerView={7}
          spaceBetween={12}
          breakpoints={{
            320: { slidesPerView: 3.3 },
            375: { slidesPerView: 3.5 },
            425: { slidesPerView: 4.1 },
            768: { slidesPerView: 4.3 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
            1440: { slidesPerView: 7.3 },
          }}
          showProgressBars={true}
        />
      </div>

      {/* Live Casino Section */}
      <div className="lg:mb-16 mb-8">
        <SectionHeader
          icon="/icons/Casino1.svg"
          title={t("games.live")}
          alt="home"
          count={card2.length}
        />
        <SwiperSlider
          key="homepage-live-casino-swiper"
          data={duplicateDataForTwoRows(card2)}
          renderSlide={(card, index) => <CasinoCard key={index} {...(card as any)} />}
          slidesPerView={7}
          spaceBetween={12}
          grid={{ rows: 2, fill: 'row' }}
          breakpoints={{
            320: { slidesPerView: 3.3, grid: { rows: 2, fill: 'row' } },
            375: { slidesPerView: 3.5, grid: { rows: 2, fill: 'row' } },
            425: { slidesPerView: 4.1, grid: { rows: 2, fill: 'row' } },
            768: { slidesPerView: 4.3, grid: { rows: 2, fill: 'row' } },
            1024: { slidesPerView: 5, spaceBetween: 20, grid: { rows: 2, fill: 'row' } },
            1440: { slidesPerView: 7.3, grid: { rows: 2, fill: 'row' } },
          }}
          showProgressBars={true}
          autoplayDelay={1000000}
        />
      </div>

      {/* Hash Section */}
      <div className="lg:mb-16 mb-8">
        <SectionHeader
          icon="/icons/Hash.svg"
          title={t("games.hashgames")}
          alt="hash"
          count={gameImages.length}
        />
        <SwiperSlider
          key="homepage-hash-games-swiper"
          data={gameImages}
          renderSlide={(card: any) => <GameImageCard key={card.id} {...card} />}
          slidesPerView={7}
          spaceBetween={12}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            375: { slidesPerView: 1.3 },
            425: { slidesPerView: 1.6 },
            768: { slidesPerView: 2.7 },
            1024: { slidesPerView: 2.8, spaceBetween: 20 },
            1440: { slidesPerView: 3.1 },
          }}
          showProgressBars={true}
          autoplayDelay={1000000}
        />
      </div>

      {/* Slots Section */}
      <div className="lg:mb-16 mb-8">
        <SectionHeader
          icon="/icons/Slots.svg"
          title={t("games.slots")}
          alt="slots"
          count={card3.length}
        />
        <SwiperSlider
          key="homepage-slots-swiper"
          data={duplicateDataForTwoRows(card3)}
          renderSlide={(card, index) => <CasinoCard key={index} {...(card as any)} />}
          slidesPerView={7}
          spaceBetween={12}
          grid={{ rows: 2, fill: 'row' }}
          breakpoints={{
            320: { slidesPerView: 3.3, grid: { rows: 2, fill: 'row' } },
            375: { slidesPerView: 3.5, grid: { rows: 2, fill: 'row' } },
            425: { slidesPerView: 4.1, grid: { rows: 2, fill: 'row' } },
            768: { slidesPerView: 4.3, grid: { rows: 2, fill: 'row' } },
            1024: { slidesPerView: 5, spaceBetween: 20, grid: { rows: 2, fill: 'row' } },
            1440: { slidesPerView: 7.3, grid: { rows: 2, fill: 'row' } },
          }}
          showProgressBars={true}
          autoplayDelay={1000000}
        />
      </div>

      {/* P/F Futures Section */}
      <div className="lg:mb-16 mb-8">
        <SectionHeader
          icon="/icons/Futures1.svg"
          title="P/F Futures"
          alt="future"
          count={card4.length}
        />
        <SwiperSlider
          key="homepage-futures-swiper"
          data={cryptoCards}
          renderSlide={(card, index) => <FutureCard key={index} {...(card as any)} />}
          slidesPerView={7}
          spaceBetween={12}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            375: { slidesPerView: 1.3 },
            425: { slidesPerView: 1.6 },
            768: { slidesPerView: 2.7 },
            1024: { slidesPerView: 2.8, spaceBetween: 20 },
            1440: { slidesPerView: 3.1 },
          }}
          showProgressBars={true}
          autoplayDelay={1000000}
        />
      </div>

      {/* Cryptogra Section */}
      <div className="lg:mb-16 mb-8">
        <SectionHeader
          icon="/icons/Cryptogra1.svg"
          title={t("games.crypto")}
          alt="cryptogra"
          count={cryptoCards.length}
        />
        <SwiperSlider
          key="homepage-crypto-games-swiper"
          data={card4}
          renderSlide={(card, index) => <CasinoCard key={index} {...(card as any)} />}
          slidesPerView={7}
          spaceBetween={12}
          breakpoints={{
            320: { slidesPerView: 3.3 },
            375: { slidesPerView: 3.5 },
            425: { slidesPerView: 4.1 },
            768: { slidesPerView: 4.3 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
            1440: { slidesPerView: 7.3 },
          }}
          showProgressBars={true}
          autoplayDelay={1000000}
        />
      </div>

      {/* Sport Section */}
      <div className="lg:mb-16 mb-8">
        <SectionHeader
          icon="/icons/Sport.svg"
          title={t("games.sports")}
          alt="Sport"
          count={card5.length}
        />
        <SwiperSlider
          key="homepage-sports-swiper"
          data={card5}
          renderSlide={(card, index) => <CasinoCard key={index} {...(card as any)} />}
          slidesPerView={7}
          spaceBetween={12}
          breakpoints={{
            320: { slidesPerView: 3.3 },
            375: { slidesPerView: 3.5 },
            425: { slidesPerView: 4.1 },
            768: { slidesPerView: 4.3 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
            1440: { slidesPerView: 7.3 },
          }}
          showProgressBars={true}
          autoplayDelay={1000000}
        />
      </div>

      {/* Chess and cards Section */}
      <div className="lg:mb-16 mb-8">
        <SectionHeader
          icon="/icons/tablegame.svg"
          title={t("games.table")}
          alt="tablegame"
          count={card6.length}
        />
        <SwiperSlider
          key="homepage-table-games-swiper"
          data={card6}
          renderSlide={(card, index) => <CasinoCard key={index} {...(card as any)} />}
          slidesPerView={7}
          spaceBetween={12}
          breakpoints={{
            320: { slidesPerView: 3.3 },
            375: { slidesPerView: 3.5 },
            425: { slidesPerView: 4.1 },
            768: { slidesPerView: 4.3 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
            1440: { slidesPerView: 7.3 },
          }}
          showProgressBars={true}
          autoplayDelay={1000000}
        />
      </div>
    </>
  );
};
