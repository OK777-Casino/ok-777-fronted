"use client";

import React from "react";
import { useI18n } from "../context/I18nProvider";
import CasinoCard from "./ui/cards/CasinoCard";
import HashCard from "./ui/cards/HashCard";
import FutureCard from "./ui/cards/FutureCard";
import SwiperSlider from "./ui/slider/SwiperSlider";

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
          count={extendedHashGames.length}
        />
        <SwiperSlider
          key="homepage-hash-games-swiper"
          data={extendedHashGames}
          renderSlide={(card, index) => <HashCard key={index} {...(card as any)} />}
          slidesPerView={7}
          spaceBetween={12}
          breakpoints={{
            320: { slidesPerView: 2.2 },
            375: { slidesPerView: 2.5 },
            425: { slidesPerView: 3.5 },
            768: { slidesPerView: 4.1 },
            1024: { slidesPerView: 4.5, spaceBetween: 20 },
            1440: { slidesPerView: 4.7 },
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
