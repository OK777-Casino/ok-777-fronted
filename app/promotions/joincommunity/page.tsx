"use client";

import BetTemplate from "@/components/BetTemplate";
import BlackButton from "@/components/ui/Button/BlackButton";
import FlatButton from "@/components/ui/Button/FlatButton";
import TabButton from "@/components/ui/Button/TabButton";
import TDButton from "@/components/ui/Button/TDButton";
import TaskCard from "@/components/ui/cards/TaskCard";
import TXCard from "@/components/ui/cards/TXCard";
import { CopyBox } from "@/components/ui/CopyBox";
import AlertSquareIcon from "@/components/ui/icons/alert-square";
import CopyIcon from "@/components/ui/icons/copy";
import CurrencyNotes1Icon from "@/components/ui/icons/currency-notes-1";
import InfoCircleIcon from "@/components/ui/icons/info-circle";
import { useT } from "@/context/I18nProvider";

const JoinCommunityPage = () => {
  const clickSubmit = () => {};
  const t = useT();
  const socials = [
    "Telegram",
    "Facebook",
    "X",
    "Instagram",
    "WhatsApp",
    "Line",
    "Discord",
    "Tiktok",
  ] as const;

  const clickButton = () => {
    return;
  };
  const data = {
    heading: "Join the community now",
    title: {
      line1: "Join the community",
      line2: "Start a mission journey",
    },
    background: "bg-[url('/images/banner/Banner01-1.jpg')]",
    submit: "join the fun!",
    onClick: clickSubmit,
    button: "Recommend Friends",
    onButtonClick: clickButton,
  };

  const tasks = [2500, 3000, 400, 345300, 23400, 5670, 345300, 23400, 5670];
  return (
    <BetTemplate {...data}>
      <div className="p-4 bg-white-4 rounded-[12px] flex flex-col gap-4">
        <div className="text-[18px] font-bold text-white flex justify-center items-center">
          {t("promotions.title1")}
        </div>
        <div className="lg:w-[70%] w-full mx-auto flex justify-center items-center text-[14px] text-casper">
          <p className="font-medium">
            {t("promotions.content1")}
            <span className="text-yellow-orange">
              {t("promotions.content2")}
            </span>
            {t("promotions.content3")}
          </p>
        </div>
        <div className=" rounded-[12px] flex justify-center items-center flex-wrap gap-2 flex justify-center items-center text-[14px] text-casper">
          {socials.map((item) => (
            <div
              key={item}
              className="flex justify-center items-center w-9 h-9 bg-white-4 rounded-[8px] border-t border-white-4"
            >
              <img
                className="h-4 w-4 "
                src={"/icons/social-icon/" + item + ".svg"}
                alt="social"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white-4 rounded-[12px] p-4 flex flex-col gap-4 mt-4 ">
        <div className="font-bold text-[14px] flex justify-center items-center text-white">
          {t("promotions.text1")}
        </div>
        <div className="grid xl:grid-cols-2 lg:grid-cols-1 gap-4">
          <div className="p-8 flex flex-col gap-8 bg-white-4 rounded-[12px]">
            <div>
              <TabButton
                type="one"
                title={t("promotions.text3")}
                className="h-[23px] text-[12px] font-bold text-white"
              />
              <span className="text-[14px] text-casper font-bold pt-4">
                {t("promotions.text2")}
              </span>
            </div>
            <div className="relative flex justify-center items-center">
              <img
                src="/images/Device3.png"
                className="h-[330.49px] mx-auto"
                alt="phone"
              />
              <img
                src="/images/star1.svg"
                alt="star"
                className="absolute right-[15%] top-[30%]"
              />
              <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2">
                <FlatButton
                  onClick={() => {}}
                  className="w-[242px] h-[41px] text-[12px]"
                >
                  {t("promotions.textbutton1")}
                </FlatButton>
                <FlatButton
                  onClick={() => {}}
                  className="w-[242px] h-[41px] text-[12px]"
                >
                  {t("promotions.textbutton2")}
                </FlatButton>
                <FlatButton
                  onClick={() => {}}
                  className="w-[242px] h-[41px] text-[12px] bg-cornflower-blue"
                >
                  {t("promotions.textbutton3")}
                </FlatButton>
                <img
                  src="/icons/cursor.svg"
                  alt="cursor"
                  className="rotate absolute -left-1/4 -bottom-1/3"
                />
              </div>
            </div>
          </div>
          <div className="p-8 flex flex-col gap-4  bg-white-4 rounded-[12px]">
            <div className="flex flex-col gap-4 items-start">
              <TabButton
                type="one"
                title={t("promotions.text4")}
                className="h-[23px] text-[12px] font-bold text-white"
              />
              <span className="text-[14px] text-casper font-bold">
                {t("promotions.text5")}
              </span>
              <span className="text-[14px] text-casper font-bold">
                {t("promotions.text6")}
              </span>
              <span className="text-[14px] text-dodger-blue font-bold">
                {t("promotions.text7")}
              </span>
            </div>
            <div className="relative flex justify-center items-center relative">
              <img
                src="/images/giftbox.png"
                alt="gift"
                className="transform -rotate-[17.81deg] absolute z-[99] top-[10px] left-[-10px]  blur-[2px] h-[98.25px]"
              />
              <img
                src="/images/giftbox.png"
                alt="gift"
                className="h-[250px] relative z-[999]"
              />
              <img
                src="/images/giftbox.png"
                alt="gift"
                className="h-[72.61px] blur-[2px] absolute z-[99] rotate-[12.02deg] bottom-[50px] right-[-10px]"
              />
            </div>
          </div>
        </div>

        <div className="rounded-[12px] p-4 flex flex-col gap-2 bg-white-4 rounded-[12px]">
          <h2 className="text-[18px] text-gallery">{t("promotions.text8")}</h2>
          <div className="text-[14px] font-bold text-white">
            <p>{t("promotions.text9")}</p>
            <p>{t("promotions.text10")}</p>
            <p>{t("promotions.text11")}</p>
          </div>
          <div className="px-4 ">
            <ol className="text-casper text-[14px] list-decimal">
              <li className="pb-4">{t("promotions.text12")}</li>
              <li className="pb-4">{t("promotions.text13")}</li>
              <li className="pb-4">{t("promotions.text14")}</li>
              <li className="pb-4">{t("promotions.text15")}</li>
            </ol>
            <div className="py-16 flex justify-center">
              <BlackButton>
                <CopyIcon className="w-4 g-4" />
              </BlackButton>
            </div>
          </div>
        </div>
      </div>
    </BetTemplate>
  );
};

export default JoinCommunityPage;
