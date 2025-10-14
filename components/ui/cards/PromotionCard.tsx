import ArrowUpRightStrokeIcon from '../icons/arrow-up-right-stroke'
import TabButton from '../Button/TabButton'
import { useT } from '@/context/I18nProvider'
import RewardCard, { RewardCardProps } from '@/components/ui/cards/RewardCard'
import Link from 'next/link'

export default function CasinoPromotionCard(CardProps: RewardCardProps) {
  const t = useT()

  return (
    <div className="">
      <RewardCard {...CardProps} />
      {/* Bottom Content Section */}
      <div className="rounded-b-xl bg-mirage p-4">
        <div className="space-y-2">
          {/* Top Row - Date and Casino Badge */}
          <div className="flex items-center justify-between">
            <span className="font-montserrat text-[0.875rem] font-normal text-casper">
              Finishes on July 23, 2025
            </span>

            {/* Casino Badge */}
            <TabButton
              type="one"
              title="Casino"
              className="h-[1.25rem] w-[3.6875rem] text-[0.75rem]"
            />
          </div>

          {/* Title Row */}
          <div className="flex items-center justify-between">
            <h3 className="flex-1 font-montserrat text-[1rem] font-bold text-white">
              Celebrating 13 Years of Endorphins
            </h3>
          </div>
        </div>

        {/* Read More Link */}
        <div className="mt-3 text-right">
          <Link
            href={'/promotions/' + CardProps.link}
            className="hover:text-dodger-blue/80 group inline-flex items-center gap-2 font-montserrat text-[0.875rem] font-bold text-dodger-blue transition-colors"
          >
            {t('promotions.readmore')}
            <ArrowUpRightStrokeIcon className="h-6 w-6 text-casper transition-colors group-hover:text-white" />
          </Link>
        </div>
      </div>
    </div>
  )
}
