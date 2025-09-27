'use client'

import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface TDButtonProps {
  className?: string
  type?: 'red' | 'blue'
  children: ReactNode
  onClick?: () => void
}

const TDButton: React.FC<TDButtonProps> = ({
  className,
  type,
  children,
  onClick,
}) => {
  const redStyle = `
    bg-[linear-gradient(1turn,#c4003b_0.8%,#fb1949)]
    shadow-[0_3px_16px_#ff234180,_inset_0_4px_3px_#ffffff4d]
    
    hover:bg-[linear-gradient(3360deg,#db0a49_0.8%,#fb2b57)]
    hover:shadow-[0_3px_20px_#ff234199,_inset_0_4px_4px_#ffffff5e]
    `
  const blueStyle = `
    bg-[linear-gradient(#2C9FFA_0%,#0C60FF_24%)] 
    hover:bg-[linear-gradient(#47AEFF,#1868FF,#47AEFF)]
    `
  const Style = type === 'red' ? redStyle : blueStyle
  const edge = type === 'red' ? 'bg-[#61001d]' : 'bg-[#2283F680]'

  return (
    <>
      <div
        onClick={onClick}
        className={cn(
          `pushable transition-filter duration-250 group relative cursor-pointer border-none bg-transparent p-0 outline-offset-1 focus:outline-none focus-visible:outline`,
          className
        )}
      >
        <span
          className={cn('edge absolute left-0 rounded-xl', edge, className)}
        ></span>
        <span
          className={cn(
            `front inner-shadow-[#FFFFFF21] relative bottom-[3px] flex transform items-center justify-center rounded-xl font-bold text-white transition-transform will-change-transform group-hover:-translate-y-[2px] group-active:-translate-y-[-1px]`,
            className,
            Style
          )}
        >
          {children}
        </span>
      </div>
    </>
  )
}

export default TDButton
