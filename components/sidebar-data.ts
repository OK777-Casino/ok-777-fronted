// Service modal handler will be passed as a prop

// Sidebar data structure for dynamic rendering
export interface SidebarItem {
  id: string
  icon: string
  label: string
  href?: string
  badge?: {
    text: string
    color: string
  }
  activeColor?: string
  hasHover?: boolean
  onClick?: () => void
  isActive?: boolean
  isCollapsedOnly?: boolean
  hideOnMobile?: boolean
}

export interface SidebarSection {
  id: string
  title?: string
  items: SidebarItem[]
  showDivider?: boolean
  className?: string
  hideOnMobile?: boolean
}

export interface TopButton {
  icon: string
  label: string
  active: boolean
  onClick?: () => void
}

export interface PaymentMethod {
  icon: string
  alt: string
}

export interface AppDownload {
  icon: string
  alt: string
  platform: string
}

// Top section buttons (Casino/Sport)
export const topButtons: TopButton[] = [
  {
    icon: 'https://ok777.b-cdn.net/icons/spade.svg',
    label: 'Casino',
    active: true,
    onClick() {
      console.log('Casino Games')
    },
  },
  {
    icon: 'https://ok777.b-cdn.net/icons/football.svg',
    label: 'Sport',
    active: false,
    onClick() {
      console.log('Football Games')
    },
  },
]

// Navigation items
export const navigationItems: SidebarItem[] = [
  {
    id: 'search',
    icon: 'https://ok777.b-cdn.net/icons/search.svg',
    label: 'Search',
    onClick() {},
  },
  {
    id: 'favorites',
    icon: 'https://ok777.b-cdn.net/icons/heart.svg',
    label: 'Favorites',
    href: '/favorites',
  },
  {
    id: 'recent',
    icon: 'https://ok777.b-cdn.net/icons/history.svg',
    label: 'Recent',
    href: '/recent',
  },
]

// Game categories
export const gameCategories: SidebarItem[] = [
  {
    id: 'hash-games',
    icon: 'https://ok777.b-cdn.net/icons/bitcoin.svg',
    label: 'Hash Games',
    href: '/?tab=hash',
    hasHover: true,
  },
  {
    id: 'slots',
    icon: 'https://ok777.b-cdn.net/icons/dice.svg',
    label: 'Slots',
    href: '/?tab=slots',
  },
  {
    id: 'live-casino',
    icon: 'https://ok777.b-cdn.net/icons/casino.svg',
    label: 'Live Casino',
    href: '/?tab=casino',
  },
  {
    id: 'futures',
    icon: 'https://ok777.b-cdn.net/icons/Futures.svg',
    label: 'Futures',
    href: '/?tab=futures',
  },
  {
    id: 'crypto-games',
    icon: 'https://ok777.b-cdn.net/icons/Cryptogra.svg',
    label: 'Crypto Games',
    href: '/?tab=crypto',
  },
  {
    id: 'sport',
    icon: 'https://ok777.b-cdn.net/icons/football.svg',
    label: 'Sport',
    href: '/?tab=sport',
  },
  {
    id: 'table-games',
    icon: 'https://ok777.b-cdn.net/icons/tablegame.svg',
    label: 'Table Games',
    href: '/?tab=table',
  },
]

// Membership and information items
export const membershipItems: SidebarItem[] = [
  {
    id: 'alliance-plan',
    icon: 'https://ok777.b-cdn.net/icons/thumbsup.svg',
    label: 'Alliance Plan',
    href: '/alliance',
  },
  {
    id: 'vip-club',
    icon: 'https://ok777.b-cdn.net/icons/king1.svg',
    label: 'VIP Club',
    href: '/vip-club',
    badge: {
      text: 'VIP',
      color: 'text-yellow-400',
    },
  },
  {
    id: 'game-providers',
    href: '/game-provider',
    icon: 'https://ok777.b-cdn.net/icons/game.svg',
    label: 'Game Providers',
  },
  {
    id: 'promotions',
    icon: 'https://ok777.b-cdn.net/icons/gift.svg',
    label: 'Promotions',
    href: '/promotions',
  },
  {
    id: 'help-center',
    icon: 'https://ok777.b-cdn.net/icons/info-circle.svg',
    label: 'Help center',
    href: '/help-center',
  },
]

// Tutorial items
export const tutorialItems: SidebarItem[] = [
  {
    id: 'beginner-tutorial',
    icon: 'https://ok777.b-cdn.net/icons/tutorial.svg',
    label: "Beginner's Tutorial",
    href: '/beginner-tutorial',
  },
]

// Service items - onClick will be set dynamically
export const serviceItems: SidebarItem[] = [
  {
    id: 'online-service',
    icon: 'https://ok777.b-cdn.net/icons/headset.svg',
    label: 'Online service',
  },
]

// Collapsed-only items (shown only when sidebar is collapsed)
export const collapsedOnlyItems: SidebarItem[] = [
  {
    id: 'download',
    icon: 'https://ok777.b-cdn.net/icons/archive-arrow-down.svg',
    label: 'Download',
    href: '/install-app',
    isCollapsedOnly: true,
  },
  {
    id: 'wallet',
    icon: 'https://ok777.b-cdn.net/icons/wallet.svg',
    label: 'Wallet',
    href: '/wallet',
    isCollapsedOnly: true,
  },
]

// Payment methods
export const paymentMethods: PaymentMethod[] = [
  {
    icon: 'https://ok777.b-cdn.net/icons/gpay.svg',
    alt: 'Google Pay',
  },
  {
    icon: 'https://ok777.b-cdn.net/icons/apay.svg',
    alt: 'Apple Pay',
  },
  {
    icon: 'https://ok777.b-cdn.net/icons/pay.svg',
    alt: 'PayPal',
  },
  {
    icon: 'https://ok777.b-cdn.net/icons/visa.svg',
    alt: 'Visa',
  },
]

// App download options
export const appDownloads: AppDownload[] = [
  {
    icon: 'https://ok777.b-cdn.net/icons/apple.svg',
    alt: 'Apple',
    platform: 'iOS',
  },
  {
    icon: 'https://ok777.b-cdn.net/icons/windows.svg',
    alt: 'Windows',
    platform: 'Windows',
  },
  {
    icon: 'https://ok777.b-cdn.net/icons/android.svg',
    alt: 'Android',
    platform: 'Android',
  },
]

// Language data
export const languageData = {
  cn: { name: '中文', flag: 'https://ok777.b-cdn.net/icons/flag-icon/cn.svg' },
  en: { name: 'English', flag: 'https://ok777.b-cdn.net/icons/flag-icon/uk.svg' },
  de: { name: 'Deutsch', flag: 'https://ok777.b-cdn.net/icons/flag-icon/de.svg' },
  pl: { name: 'Polish', flag: 'https://ok777.b-cdn.net/icons/flag-icon/pl.svg' },
  pt: { name: 'Português', flag: 'https://ok777.b-cdn.net/icons/flag-icon/pt.svg' },
  ua: { name: 'Ukraine', flag: 'https://ok777.b-cdn.net/icons/flag-icon/ua.svg' },
  es: { name: 'Español', flag: 'https://ok777.b-cdn.net/icons/flag-icon/es.svg' },
  'pt-br': { name: 'Português (BR)', flag: 'https://ok777.b-cdn.net/icons/flag-icon/br.svg' },
  fr: { name: 'Français', flag: 'https://ok777.b-cdn.net/icons/flag-icon/fr.svg' },
}

// Complete sidebar sections structure
export const sidebarSections: SidebarSection[] = [
  {
    id: 'navigation',
    items: navigationItems,
    showDivider: true,
    className: 'space-y-1 py-[16px]',
  },
  {
    id: 'game-categories',
    items: gameCategories,
    showDivider: true,
    className: 'py-[16px] space-y-1 flex-1',
    hideOnMobile: true,
  },
  {
    id: 'membership',
    items: membershipItems,
    showDivider: true,
    className: 'py-[16px]',
  },
  {
    id: 'tutorials',
    items: tutorialItems,
    showDivider: true,
    className: 'py-[16px]',
  },
  {
    id: 'services',
    items: serviceItems,
    showDivider: true,
    className: 'py-[16px]',
  },
  {
    id: 'collapsed-only',
    items: collapsedOnlyItems,
    showDivider: false,
    className: 'py-[16px]',
  },
]
