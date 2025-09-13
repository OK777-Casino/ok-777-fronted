"use client";

import React, { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import mainContentData from "../main-content-data.json";
import { useSidebar } from "../context/SidebarProvider";
import { useModal } from "../context/ModalProvider";
import { useI18n } from "../context/I18nProvider";
import { Swiper as SwiperType } from "swiper";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import {
  setMainBannerSlide,
  setNewLaunchesSlide,
  setLiveCasinoSlide,
  setSlotsSlide,
  setHashSlide,
  setSportSlide,
  setFuturesSlide,
  setCryptograSlide,
  setTableGamesSlide,
  setLatestEarningsSlide,
  setGameManufacturersSlide,
} from "../store/slices/carouselSlice";
import CasinoCard from "./ui/cards/CasinoCard";
import RewardCard from "./ui/cards/RewardCard";
import HashCard from "./ui/cards/HashCard";
import FutureCard from "./ui/cards/FutureCard";
import GameCard from "./ui/cards/GameCard";
import { Icon } from "@iconify/react";
import { SuccessForm } from "./auth/SuccessForm";
import SwiperSlider from "./ui/slider/SwiperSlider";
import { X } from "lucide-react";

import {
  StatusDropdown,
  StatusDropdownTrigger,
  StatusDropdownContent,
  StatusDropdownItem,
} from "@/components/ui/StatusDropdown";
import EarningCard from "./ui/cards/EarningCard";

const statusOptions = [
  "Up to date",
  "Daily",
  "Checking for updates...",
  "Installing updates",
  "Update failed",
  "Connected",
  "Disconnected",
  "Syncing...",
  "Sync complete",
];

// Extract data from JSON
const {
  card1,
  card2,
  card3,
  cryptoCards,
  card4,
  card5,
  card6,
  card7,
  card9,
  card10,
  brand,
  latestBets,
  gameManufacturers,
  footerContent,
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

// Game Grid Component with View All functionality
const GameGrid: React.FC<{
  data: any[];
  renderCard: (item: any, index: number) => React.ReactNode;
  initialVisible?: number;
  viewAllLink?: string;
}> = ({ data, renderCard, initialVisible = 18, viewAllLink }) => {
  const visibleData = data.slice(0, initialVisible);
  const hasMore = data.length > initialVisible;
  
  return (
    <div>
      <div className="grid grid-cols-3 gap-1 p-1 xs:gap-1.5 xs:p-1.5 sm:gap-2 sm:p-2 md:gap-3 md:p-4">
        {visibleData.map((item, index) => renderCard(item, index))}
      </div>
      {hasMore && viewAllLink && (
        <div className="flex justify-center mt-6">
          <Link
            href={viewAllLink}
            className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            View All ({data.length})
          </Link>
        </div>
      )}
    </div>
  );
};

// Latest bets table component
const LatestBetsTable: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState("Up to date");
  return (
    <>
      <div className="text-4.5 font-bold flex items-center w-full justify-between text-white mb-4  gap-2">
        <span>Latest Bets</span>
        <StatusDropdown>
          <StatusDropdownTrigger className="bg-[#2A3546] border-none ring-0 focus:ring-0 outline-none">
            {selectedStatus}
          </StatusDropdownTrigger>
          <StatusDropdownContent
            className="bg-[#2A3546] border-none"
            align="center"
          >
            {statusOptions.map((status) => (
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
        className={` grid lg:md:grid-cols-[15%_15%_20%_15%_25%_10%] grid-cols-[20%_20%_20%_40%] gap-[6px] lg:px-8 px-[6px] ${
          selectedStatus !== "Daily"
            ? "grid-cols-[20%_20%_20%_40%]"
            : "grid-cols-[30%_30%_40%]"
        } `}
      >
        <div className="text-left text-[12px] font-bold py-2 text-white">
          Game
        </div>
        <div className="text-left text-[12px] font-bold py-2 text-white">
          Player
        </div>
        <div className="text-left text-[12px] hidden md:lg:block font-bold py-2 text-white">
          Time
        </div>
        <div className="text-left text-[12px] hidden md:lg:block font-bold py-2 truncate text-white">
          Bet Amount
        </div>
        <div className="text-left text-[12px] font-bold py-2 text-white">
          Multiplier
        </div>
        {selectedStatus !== "Daily" && (
          <div className="text-left text-[12px] font-bold py-2 text-white">
            Payout
          </div>
        )}
      </div>
      <div className="w-full relative h-[462px] z-[-1] lg:mb-16 mb-8">
        <SwiperSlider
          data={latestBets}
          allowTouchMove={false}
          renderSlide={(bet, index) => (
            <div
              className={`bg-[#1C2532] lg:px-8 gap-[6px] px-[6px] w-full grid lg:md:grid-cols-[15%_15%_20%_15%_25%_10%] grid-cols-[20%_20%_20%_40%] rounded-[16px] h-[48px] overflow-hidden mb-[6px] ${
                selectedStatus !== "Daily"
                  ? "grid-cols-[20%_20%_20%_40%]"
                  : "grid-cols-[30%_30%_40%]"
              } items-center`}
              key={index}
            >
              <div className="text-white flex text-[12px] font-bold truncate items-center gap-2">
                <img
                  src="/images/gameLogo.png"
                  alt="game"
                  className="w-6 h-6"
                />
                {bet.game}
              </div>
              <div className="text-gray-300 text-[12px] font-bold truncate flex items-center gap-2">
                <img
                  src="/images/avatar(1).png"
                  alt="avatar"
                  className="w-6 h-6 hidden md:lg:block"
                />
                {bet.player}
              </div>
              <div className="text-gray-300 text-[12px] hidden md:lg:flex items-center font-bold truncate">
                {bet.time}
              </div>
              <div className="text-gray-300 text-[12px] hidden md:lg:flex font-bold truncate items-center gap-2">
                <img
                  src="/icons/coin-icon/BTC.svg"
                  alt="coin"
                  className="w-6 h-6"
                />
                {bet.bet}
              </div>
              {selectedStatus !== "Daily" && (
                <div className="text-[#2283F6] text-[12px] font-bold truncate flex items-center">
                  {bet.multiplier}
                </div>
              )}
              <div className="text-green-400 text-[12px] font-bold truncate flex items-center gap-2">
                {bet.payout}
                <div className="rounded-[8px] overflow-hidden !w-6 !h-6">
                  <img
                    src="/icons/coin-icon/BTC.svg"
                    alt="coin"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          )}
          direction="vertical"
          slidesPerView={9.1}
          spaceBetween={6}
          autoplayDelay={1000}
          className="h-full"
        />
        <div className="absolute bottom-0 left-0 w-full h-[254px] bg-gradient-to-b z-[30] from-transparent to-[#111923] pointer-events-none"></div>
      </div>
    </>
  );
};

// Game manufacturers section component
const GameManufacturersSection: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const dispatch = useAppDispatch();
  const carouselState = useAppSelector((state) => state.carousel);

  const handleGameManufacturersSlideChange = (swiper: SwiperType) => {
    dispatch(setGameManufacturersSlide(swiper.realIndex ?? swiper.activeIndex));
  };

  return (
    <div className="lg:mb-16 mb-8">
      <div className="flex items-center justify-between">
        <h2 className="text-4.5 font-bold text-white mb-4 flex gap-2">
          Game Manufacturers
        </h2>
        <div className="flex justify-end mb-4">
          <div
            className=" hover:bg-gray-600 active:bg-gray-600 w-9 h-9 flex items-center justify-center rounded-l-lg transition-colors cursor-pointer"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <Icon icon="mdi:chevron-left" className="text-white text-[24px] " />
          </div>
          <div
            className="hover:bg-gray-600 active:bg-gray-600 w-9 h-9 flex items-center justify-center rounded-r-lg transition-colors cursor-pointer"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <Icon
              icon="mdi:chevron-right"
              className="text-white text-[24px] "
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto">
        <SwiperSlider
          data={gameManufacturers}
          renderSlide={(manufacturer, index) => (
            <GameCard {...manufacturer} gameCount={manufacturer.gamesCount} />
          )}
          slidesPerView={4.4}
          spaceBetween={12}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            375: { slidesPerView: 1.4 },
            425: { slidesPerView: 1.8 },
            768: { slidesPerView: 3.6 },
            1024: { slidesPerView: 4.2, spaceBetween: 20 },
            1440: { slidesPerView: 4.8 },
          }}
          navigationRef={swiperRef}
          initialSlide={carouselState.gameManufacturersCurrentSlide}
          onSlideChange={handleGameManufacturersSlideChange}
          carouselId="game-manufacturers"
        />
      </div>
    </div>
  );
};


interface MainContentProps {}
const MainContent: React.FC<MainContentProps> = () => {
  const { isCollapsed, activeGameCategory } = useSidebar();
  const { openGameProviderModal, openChooseModal, openLocalGameSearchModal } =
    useModal();
  const { t, locale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();

  // Debug: Log when component re-renders with new locale
  console.log("MainContent re-rendered with locale:", locale);
  console.log("Translation test - games.slots:", t("games.slots"));
  console.log("Translation test - app.search:", t("app.search"));
  console.log("Translation test - games.all:", t("games.all"));

  // Redux state and dispatch
  const dispatch = useAppDispatch();
  const carouselState = useAppSelector((state) => state.carousel);


  // Helper function to get category display labels
  const getCategoryLabel = (category: string) => {
    const categoryLabels: { [key: string]: string } = {
      home: t("games.all"),
      hash: t("games.hashgames"),
      slots: t("games.slots"),
      casino: t("games.live"),
      sport: t("games.sports"),
      futures: t("games.futures"),
      crypto: t("games.crypto"),
      table: t("games.table"),
    };
    return categoryLabels[category] || t("games.title");
  };


  // Carousel slide change handlers
  const handleMainBannerSlideChange = (swiper: SwiperType) => {
    dispatch(setMainBannerSlide(swiper.realIndex ?? swiper.activeIndex));
  };

  const handleNewLaunchesSlideChange = (swiper: SwiperType) => {
    dispatch(setNewLaunchesSlide(swiper.realIndex ?? swiper.activeIndex));
  };

  const handleLiveCasinoSlideChange = (swiper: SwiperType) => {
    dispatch(setLiveCasinoSlide(swiper.realIndex ?? swiper.activeIndex));
  };

  const handleSlotsSlideChange = (swiper: SwiperType) => {
    dispatch(setSlotsSlide(swiper.realIndex ?? swiper.activeIndex));
  };

  const handleHashSlideChange = (swiper: SwiperType) => {
    dispatch(setHashSlide(swiper.realIndex ?? swiper.activeIndex));
  };

  const handleSportSlideChange = (swiper: SwiperType) => {
    dispatch(setSportSlide(swiper.realIndex ?? swiper.activeIndex));
  };

  const handleFuturesSlideChange = (swiper: SwiperType) => {
    dispatch(setFuturesSlide(swiper.realIndex ?? swiper.activeIndex));
  };

  const handleCryptograSlideChange = (swiper: SwiperType) => {
    dispatch(setCryptograSlide(swiper.realIndex ?? swiper.activeIndex));
  };

  const handleTableGamesSlideChange = (swiper: SwiperType) => {
    dispatch(setTableGamesSlide(swiper.realIndex ?? swiper.activeIndex));
  };

  const handleLatestEarningsSlideChange = (swiper: SwiperType) => {
    dispatch(setLatestEarningsSlide(swiper.realIndex ?? swiper.activeIndex));
  };

  const handleGameManufacturersSlideChange = (swiper: SwiperType) => {
    dispatch(setGameManufacturersSlide(swiper.realIndex ?? swiper.activeIndex));
  };


  // Function to determine which sections to show based on query parameter
  const shouldShowSection = (sectionType: string) => {
    const tabFromQuery = searchParams.get('tab');
    
    // If no tab parameter, show all sections (home page)
    if (!tabFromQuery) {
      return true;
    }
    
    // Map tab parameters to section types
    const tabToSectionMap: { [key: string]: string[] } = {
      'home': ['new-launches', 'live-casino', 'hash', 'slots', 'sport', 'futures', 'crypto', 'table', 'latest-bets', 'game-manufacturers', 'latest-earnings'],
      'hash': ['hash'],
      'slots': ['slots'],
      'casino': ['live-casino'],
      'sport': ['sport'],
    };
    
    const allowedSections = tabToSectionMap[tabFromQuery] || [];
    return allowedSections.includes(sectionType);
  };

  // Section header component
  const SectionHeader: React.FC<{
    icon: string;
    title: string;
    alt: string;
    count?: number;
  }> = ({ icon, title, alt, count }) => {
    return (
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-4.5 font-bold flex items-center text-white   gap-2">
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


  // Render home view
  return (
    <div
      className="lg:px-6 px-1 lg:py-6 py-15 pt-4 w-full max-w-[1920px] mx-auto overflow-x-hidden"
      style={{ margin: "auto" }}
    >
      <SuccessForm isOpen={isOpen} />

      {/* Main Banner Section */}
      <div className="lg:mb-16 mb-8 lg:mt-0 mt-[45px]">
        <SwiperSlider
          key={`banner-swiper-${activeGameCategory}`}
          data={bannerCards}
          renderSlide={(card, index) => <RewardCard {...card} />}
          slidesPerView="auto"
          spaceBetween={12}
          slideClassName="!w-[min(486.76px,100%)]"
          showProgressBars={true}
          customPagination={true}
          initialSlide={carouselState.mainBannerCurrentSlide}
          onSlideChange={handleMainBannerSlideChange}
          carouselId="main-banner"
        />
      </div>

      {/* New Launches Section */}
      {shouldShowSection("new-launches") && (
        <div className="lg:mb-16 mb-8">
          <SectionHeader
            icon="/icons/Home.svg"
            title={t("games.new")}
            alt="home"
            count={card1.length}
          />
          <SwiperSlider
            key="new-launches-swiper"
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
              1024: { slidesPerView: 5 },
              1440: { slidesPerView: 7.3 },
            }}
            showProgressBars={true}
            initialSlide={carouselState.newLaunchesCurrentSlide}
            onSlideChange={handleNewLaunchesSlideChange}
            carouselId="new-launches"
          />
        </div>
      )}

      {/* Live Casino Section */}
      {shouldShowSection("live-casino") && (
        <div className="lg:mb-16 mb-8">
          <SectionHeader
            icon="/icons/Casino1.svg"
            title={t("games.live")}
            alt="home"
            count={card2.length}
          />
          <GameGrid
            data={card2}
            renderCard={(card, index) => <CasinoCard key={index} {...card} />}
            initialVisible={18}
            viewAllLink="/casino"
          />
        </div>
      )}

      {/* Hash Section */}
      {shouldShowSection("hash") && (
        <div className="lg:mb-16 mb-8">
          <SectionHeader
            icon="/icons/Hash.svg"
            title={t("games.hashgames")}
            alt="hash"
            count={extendedHashGames.length}
          />
          <GameGrid
            data={extendedHashGames}
            renderCard={(card, index) => <HashCard key={index} {...card} />}
            initialVisible={18}
            viewAllLink="/hash-games"
          />
        </div>
      )}

      {/* Slots Section */}
      {shouldShowSection("slots") && (
        <div className="lg:mb-16 mb-8">
          <SectionHeader
            icon="/icons/Slots.svg"
            title={t("games.slots")}
            alt="slots"
            count={card3.length}
          />
          <GameGrid
            data={card3}
            renderCard={(card, index) => <CasinoCard key={index} {...card} />}
            initialVisible={18}
            viewAllLink="/slots"
          />
        </div>
      )}

      {/* P/F Futures Section */}
      {shouldShowSection("futures") && (
      <div className="lg:mb-16 mb-8">
        <SectionHeader
          icon="/icons/Futures1.svg"
          title="P/F Futures"
          alt="future"
          count={card4.length}
        />
        <SwiperSlider
          key={`futures-swiper-${activeGameCategory}`}
          data={cryptoCards}
          autoplayDelay={1000000}
          renderSlide={(card, index) => <FutureCard {...card} />}
          slidesPerView={5}
          spaceBetween={12}
          breakpoints={{
            320: { slidesPerView: 2.5 },
            375: { slidesPerView: 2.3 },
            425: { slidesPerView: 3.2 },
            768: { slidesPerView: 4.3 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
            1440: { slidesPerView: 5 },
          }}
          initialSlide={carouselState.futuresCurrentSlide}
          onSlideChange={handleFuturesSlideChange}
          carouselId="futures"
        />
      </div>
      )}

      {/* Cryptogra Section */}
      {shouldShowSection("crypto") && (
      <div className="lg:mb-16 mb-8">
        <SectionHeader
          icon="/icons/Cryptogra1.svg"
          title={t("games.crypto")}
          alt="cryptogra"
          count={cryptoCards.length}
        />
        <SwiperSlider
          key={`cryptogra-swiper-${activeGameCategory}`}
          data={card4}
          autoplayDelay={1000000}
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
          initialSlide={carouselState.cryptograCurrentSlide}
          onSlideChange={handleCryptograSlideChange}
          carouselId="cryptogra"
        />
      </div>
      )}

      {/* Sport Section */}
      {shouldShowSection("sport") && (
        <div className="lg:mb-16 mb-8">
          <SectionHeader
            icon="/icons/Sport.svg"
            title={t("games.sports")}
            alt="Sport"
            count={card5.length}
          />
          <GameGrid
            data={card5}
            renderCard={(card, index) => <CasinoCard key={index} {...card} />}
            initialVisible={18}
            viewAllLink="/sports"
          />
        </div>
      )}

      {/* Chess and cards Section */}
      {shouldShowSection("table") && (
      <div className="lg:mb-16 mb-8">
        <SectionHeader
          icon="/icons/tablegame.svg"
          title={t("games.table")}
          alt="tablegame"
          count={card6.length}
        />
        <GameGrid
          data={card6}
          renderCard={(card, index) => <CasinoCard key={index} {...card} />}
          initialVisible={18}
          viewAllLink="/table-games"
        />
      </div>
      )}

      {/* Latest Bets Section */}
      {shouldShowSection("latest-bets") && (
        <LatestBetsTable />
      )}

      {/* Game Manufacturers Section */}
      {shouldShowSection("game-manufacturers") && (
        <GameManufacturersSection />
      )}

      {/* Latest earnings Section */}
      {shouldShowSection("latest-earnings") && (
      <div className="lg:mb-16 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-4.5 font-bold flex items-center text-white ">
            Latest earnings
          </h2>
          <span className="font-bold flex items-center text-[14px] text-[#2283F6]">
            <span>online users 36</span>
          </span>
        </div>
        <SwiperSlider
          data={card7}
          autoplayDelay={1000000}
          renderSlide={(card, index) => <EarningCard {...card} />}
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
          initialSlide={carouselState.latestEarningsCurrentSlide}
          onSlideChange={handleLatestEarningsSlideChange}
          carouselId="latest-earnings"
        />
      </div>
      )}


    </div>
  );
};

export default MainContent;
