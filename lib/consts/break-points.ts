type GameBreakpointsProps = {
  [width: number]: { slidesPerView: number }
}

type GameBreakpointsTwoRows = {
  [width: number]: {
    slidesPerView: number
    grid: {
      rows: 2
      fill: 'row'
    }
  }
}

export const bannerBreakpoints = {
  150: { slidesPerView: 1 },
  320: { slidesPerView: 1 },
  375: { slidesPerView: 1.2 },
  425: { slidesPerView: 1.5 },
  768: { slidesPerView: 2 },
  1024: {
    slidesPerView: 2,
  },
  1440: { slidesPerView: 3 },
}

export const gameManufacturersBreakPoints = {
  150: { slidesPerView: 0.8 },
  230: { slidesPerView: 1 },
  280: { slidesPerView: 1.1 },
  320: { slidesPerView: 1.3 },
  375: { slidesPerView: 1.5 },
  425: { slidesPerView: 2.3 },
  768: { slidesPerView: 3.3 },
  1024: { slidesPerView: 3.3 },
  1440: { slidesPerView: 4.5 },
}

export const ThirdPartyGameCardBreakPoints = {
  150: { slidesPerView: 1.3 },
  230: { slidesPerView: 1.5 },
  280: { slidesPerView: 2.1 },
  320: { slidesPerView: 3.3 },
  375: { slidesPerView: 3.5 },
  425: { slidesPerView: 4.3 },
  768: { slidesPerView: 5.3 },
  1024: { slidesPerView: 6.3 },
  1440: { slidesPerView: 7.3 },
  1640: { slidesPerView: 8.3 },
}

export const HashBreakpoints: GameBreakpointsProps = {
  150: { slidesPerView: 0.7 },
  320: { slidesPerView: 1.1 },
  375: { slidesPerView: 1.2 },
  425: { slidesPerView: 1.5 },
  525: { slidesPerView: 1.8 },
  768: { slidesPerView: 2.3 },
  1024: { slidesPerView: 2.3 },
  1440: { slidesPerView: 3.3 },
  1640: { slidesPerView: 4.3 },
}

export const ThirdPartyGameCardBreakPointsTwoRows: GameBreakpointsTwoRows = {
  150: { slidesPerView: 1.3, grid: { rows: 2, fill: 'row' } },
  230: { slidesPerView: 1.5, grid: { rows: 2, fill: 'row' } },
  280: { slidesPerView: 2.1, grid: { rows: 2, fill: 'row' } },
  320: { slidesPerView: 3.3, grid: { rows: 2, fill: 'row' } },
  375: { slidesPerView: 3.5, grid: { rows: 2, fill: 'row' } },
  425: { slidesPerView: 4.3, grid: { rows: 2, fill: 'row' } },
  768: { slidesPerView: 5.3, grid: { rows: 2, fill: 'row' } },
  1024: { slidesPerView: 6.3, grid: { rows: 2, fill: 'row' } },
  1440: { slidesPerView: 7.3, grid: { rows: 2, fill: 'row' } },
  1640: { slidesPerView: 8.3, grid: { rows: 2, fill: 'row' } },
}

export const FutureBreakpoints: GameBreakpointsProps = {
  150: { slidesPerView: 1.1 },
  230: { slidesPerView: 1.5 },
  280: { slidesPerView: 2.1 },
  320: { slidesPerView: 2.3 },
  375: { slidesPerView: 2.3 },
  425: { slidesPerView: 3.8 },
  768: { slidesPerView: 5.3 },
  1024: { slidesPerView: 6.3 },
  1440: { slidesPerView: 7.3 },
}
