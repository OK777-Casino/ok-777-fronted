"use client";

import React, { useState } from "react";
import mainContentData from "../../main-content-data.json";
import { useModal } from "../../context/ModalProvider";
import { useI18n } from "../../context/I18nProvider";
import { Swiper as SwiperType } from "swiper";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import {
  setMainBannerSlide,
  setHashSlide,
} from "../../store/slices/carouselSlice";
import RewardCard from "../../components/ui/cards/RewardCard";
import HashCard from "../../components/ui/cards/HashCard";
import { SuccessForm } from "../../components/auth/SuccessForm";
import SwiperSlider from "../../components/ui/slider/SwiperSlider";
import { X } from "lucide-react";

// Extract data from JSON
const {
  card9,
} = mainContentData;

// Generate extended hash games data (30 total)
const generateHashGames = () => {
  const baseGames = card9;
  const extendedGames = [];
  
  // Add the original 5 games
  extendedGames.push(...baseGames);
  
  // Generate 25 more hash games with variations
  const gameTemplates = [
    { title: "Dice Roll", chances: "1.95" },
    { title: "Coin Flip", chances: "1.98" },
    { title: "Number Guess", chances: "1.92" },
    { title: "Color Pick", chances: "1.96" },
    { title: "Card Draw", chances: "1.94" },
    { title: "Lucky 7", chances: "1.97" },
    { title: "High Low", chances: "1.93" },
    { title: "Sum Total", chances: "1.91" },
    { title: "Pattern Match", chances: "1.99" },
    { title: "Random Pick", chances: "1.89" },
    { title: "Double Up", chances: "1.88" },
    { title: "Triple Win", chances: "1.87" },
    { title: "Mega Roll", chances: "1.86" },
    { title: "Super Flip", chances: "1.85" },
    { title: "Ultra Guess", chances: "1.84" },
    { title: "Pro Pick", chances: "1.83" },
    { title: "Elite Draw", chances: "1.82" },
    { title: "Master 7", chances: "1.81" },
    { title: "Champion Low", chances: "1.80" },
    { title: "Legend Sum", chances: "1.79" },
    { title: "Hero Match", chances: "1.78" },
    { title: "King Pick", chances: "1.77" },
    { title: "Queen Up", chances: "1.76" },
    { title: "Ace Win", chances: "1.75" },
    { title: "Joker Roll", chances: "1.74" }
  ];
  
  gameTemplates.forEach((template, index) => {
    extendedGames.push({
      title: template.title,
      chances: template.chances,
      background: "/images/games/6850b36f2bd45516f6329cf19663fc91b6440882.png",
      bettingAddress: "TXS3PfAU9hemKkoBWRUfsUkGBSrZGagh6X",
      leftButtonLink: `/hashgames/${template.title.toLowerCase().replace(/\s+/g, '')}/active`,
      rightButtonLink: `/hashgames/${template.title.toLowerCase().replace(/\s+/g, '')}/default`
    });
  });
  
  return extendedGames;
};

const extendedHashGames = generateHashGames();

// Game Grid Component for dedicated pages
const GameGrid: React.FC<{
  data: any[];
  renderCard: (item: any, index: number) => React.ReactNode;
}> = ({ data, renderCard }) => {
  return (
    <div className="grid grid-cols-3 gap-1 p-1 xs:gap-1.5 xs:p-1.5 sm:gap-2 sm:p-2 md:gap-3 md:p-4">
      {data.map((item, index) => renderCard(item, index))}
    </div>
  );
};

const bannerCards = [
  {
    button: "CLAIM NOW",
    image: "/images/banner/Banner12.jpg",
    link: "#",
  },
  {
    button: "JOIN NOW",
    image: "/images/banner/Banner10.jpg",
    link: "#",
  },
  {
    button: "JOIN NOW",
    image: "/images/banner/Banner09.jpg",
    link: "#",
  },
  {
    button: "CLAIM NOW",
    image: "/images/banner/Banner12.jpg",
    link: "#",
  },
  {
    button: "JOIN NOW",
    image: "/images/banner/Banner10.jpg",
    link: "#",
  },
  {
    button: "JOIN NOW",
    image: "/images/banner/Banner09.jpg",
    link: "#",
  },
  {
    button: "CLAIM NOW",
    image: "/images/banner/Banner12.jpg",
    link: "#",
  },
  {
    button: "JOIN NOW",
    image: "/images/banner/Banner10.jpg",
    link: "#",
  },
  {
    button: "JOIN NOW",
    image: "/images/banner/Banner09.jpg",
    link: "#",
  },
] as const;


// Filtered Page Header Component
const FilteredPageHeader: React.FC<{
  title: string;
  count: number;
  icon: string;
}> = ({ title, count, icon }) => {
  const { openGameProviderModal, openChooseModal } = useModal();
  const { t } = useI18n();
  const [isOpenSearch, setIsOpenSearch] = useState(true);

  const toggleOpenSearch = () => {
    setIsOpenSearch(!isOpenSearch);
  };

  return (
    <div className="p-4 pb-0 pt-0">
      <div className="flex items-center justify-between mb-4 [@media(max-width:1024px)]:mt-[-4px]">
        <div className="bg-[rgba(255,255,255,0.08)] rounded-lg p-[7px]">
          <h1 className="text-white text-[14px] font-bold flex items-center gap-2">
            <img src={icon} className="w-6 hidden lg:block h-6" alt="game" />
            {title}{" "}
            <span className="text-[#2283F6] text-[12px] bg-[#111923] px-2 py-0.5 rounded-[4px]">
              {count}
            </span>
          </h1>
        </div>
        <div
          onClick={toggleOpenSearch}
          className="p-[10px] bg-[#111923] lg:hidden lg:bg-[rgba(255,255,255,0.04)] flex gap-1 items-center lg:w-50 rounded-lg hover:bg-[rgba(255,255,255,0.08)] transition-colors"
        >
          {!isOpenSearch ? (
            <X className="w-[18px] h-[18px] text-white" />
          ) : (
            <img
              src="/icons/search.svg"
              alt="search"
              className="w-[18px] h-[18px]"
            />
          )}
          <span className="text-[#A7B5CA] hidden lg:block text-sm">Search</span>
        </div>
        <div className="flex gap-4 [@media(max-width:1024px)]:hidden">
          <div
            onClick={openGameProviderModal}
            className="hidden lg:flex w-50 items-center justify-between h-12 px-3 bg-[rgba(255,255,255,0.04)] rounded-lg hover:bg-[rgba(255,255,255,0.08)] transition-colors"
          >
            <span className="text-[#A7B5CA] text-sm">Game provider</span>
            <svg
              className="w-4 h-4 text-[#A7B5CA]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          <div
            onClick={openChooseModal}
            className="hidden lg:flex w-50 items-center justify-between h-12 px-3 bg-[rgba(255,255,255,0.04)] rounded-lg hover:bg-[rgba(255,255,255,0.08)] transition-colors"
          >
            <span className="text-[#A7B5CA] text-sm">All</span>
            <svg
              className="w-4 h-4 text-[#A7B5CA]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
          <div
            onClick={toggleOpenSearch}
            className="p-[10px] bg-[#111923] lg:bg-[rgba(255,255,255,0.04)] flex gap-1 items-center lg:w-50 rounded-lg hover:bg-[rgba(255,255,255,0.08)] transition-colors"
          >
            <img
              src="/icons/search.svg"
              alt="search"
              className="w-[18px] h-[18px]"
            />
            <span className="text-[#A7B5CA] hidden lg:block text-sm">
              {t("app.search")}
            </span>
          </div>
        </div>
      </div>

      <div className="flex xl:hidden items-center gap-3">
        {isOpenSearch ? (
          <>
            <div
              onClick={openGameProviderModal}
              className="flex w-[50%] items-center justify-between h-10 px-3 bg-[rgba(255,255,255,0.04)] rounded-lg hover:bg-[rgba(255,255,255,0.08)] transition-colors"
            >
              <span className="text-[#A7B5CA] text-sm">
                {t("games.providers")}
              </span>
              <svg
                className="w-4 h-4 text-[#A7B5CA]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>

            <div
              onClick={openChooseModal}
              className="flex w-[50%] items-center justify-between h-10 px-3 bg-[rgba(255,255,255,0.04)] rounded-lg hover:bg-[rgba(255,255,255,0.08)] transition-colors"
            >
              <span className="text-[#A7B5CA] text-sm">All</span>
              <svg
                className="w-4 h-4 text-[#A7B5CA]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </>
        ) : (
          <>
            <div className="flex w-full items-center gap-2 h-10 px-3 bg-[rgba(255,255,255,0.04)] rounded-lg hover:bg-[rgba(255,255,255,0.08)] transition-colors">
              <img
                src="/icons/search.svg"
                alt="search"
                className="w-[18px] h-[18px] flex-shrink-0"
              />
              <input
                type="text"
                placeholder={t("app.search")}
                className="flex-1 bg-transparent text-[#A7B5CA] text-sm placeholder:text-[#A7B5CA] border-none outline-none min-w-0"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Section header component
const SectionHeader: React.FC<{
  icon: string;
  title: string;
  alt: string;
}> = ({ icon, title, alt }) => (
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-4.5 font-bold flex items-center text-white gap-2">
      <img className="grayscale" src={icon} alt={alt} />
      {title}
    </h2>
    <span className="font-bold flex items-center text-[14px] text-[#2283F6]">
      <span>all 13</span>
    </span>
  </div>
);

export default function HashGamesPage() {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  // Redux state and dispatch
  const dispatch = useAppDispatch();
  const carouselState = useAppSelector((state) => state.carousel);

  // Carousel slide change handlers
  const handleMainBannerSlideChange = (swiper: SwiperType) => {
    dispatch(setMainBannerSlide(swiper.realIndex ?? swiper.activeIndex));
  };

  const handleHashSlideChange = (swiper: SwiperType) => {
    dispatch(setHashSlide(swiper.realIndex ?? swiper.activeIndex));
  };

  return (
    <div
      className="lg:px-6 px-1 py-6 pt-4 w-full max-w-[1920px] mx-auto overflow-x-hidden"
      style={{ margin: "auto" }}
    >
      <SuccessForm isOpen={isOpen} />

      {/* Main Banner Section */}
      <div className="lg:mb-16 mb-8 lg:mt-0 mt-[45px]">
        <SwiperSlider
          key="banner-swiper"
          data={bannerCards}
          renderSlide={(card, index) => <RewardCard {...card} />}
          slidesPerView="auto"
          autoplay={false}
          spaceBetween={12}
          slideClassName="!w-[min(486.76px,100%)]"
          showProgressBars={true}
          customPagination={true}
          initialSlide={carouselState.mainBannerCurrentSlide}
          onSlideChange={handleMainBannerSlideChange}
          carouselId="main-banner"
        />
      </div>

      {/* Mobile Filtered View */}
      <div className="">
        <FilteredPageHeader
          title="Hash Games"
          icon="/icons/Hash.svg"
          count={extendedHashGames.length}
        />

        <GameGrid
          data={extendedHashGames}
          renderCard={(card, index) => <HashCard key={index} {...card} />}
        />
      </div>

      {/* Desktop Slider View */}
      <div className="hidden lg:block">
        <div className="lg:mb-16 mb-8">
          <SectionHeader
            icon="/icons/Hash.svg"
            title={t("games.hashgames")}
            alt="hash"
          />
          <SwiperSlider
            data={extendedHashGames}
            autoplay={false}
            renderSlide={(card, index) => <HashCard {...card} />}
            spaceBetween={12}
            slidesPerView="auto"
            slideClassName="!w-[min(320px,100%)]"
            initialSlide={carouselState.hashCurrentSlide}
            onSlideChange={handleHashSlideChange}
            carouselId="hash"
          />
        </div>
      </div>
    </div>
  );
}
