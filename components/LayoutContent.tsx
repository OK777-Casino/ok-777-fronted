'use client'

import React, { useState, useEffect, Suspense } from 'react'
import ResponsiveHeader from '@/components/ResponsiveHeader'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import Bottombar from '@/components/Bottombar'
import AuthModal from '@/components/modals/AuthModal'

import { useOverlay } from '@/context/OverlayProvider'
import NotificationsPanel from '@/components/ui/notification/Panel'
import NotificationsDrawer from '@/components/overlays/NotificationsDrawer'
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'
import PageLoader from '@/components/ui/PageLoader'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { setInitialLoadComplete } from '@/store/slices/loadingSlice'
import { useSidebar } from '@/context/SidebarProvider'

interface LayoutContentProps {
  children: React.ReactNode
}

export default function LayoutContent({ children }: LayoutContentProps) {
  const dispatch = useAppDispatch()
  const { isCollapsed } = useSidebar()
  const { isLoading, isInitialLoad } = useAppSelector(state => state.loading)
  const { isNotificationsOpen, isProfileOpen, closeOverlay } = useOverlay()
  const [isMobileHeader, setIsMobileHeader] = useState(false)
  const pathname = usePathname()

  // Check if we're on alliance pages
  const isAlliancePage = pathname?.startsWith('/alliance')

  // Check if we're on hashgame pages
  const isHashgamePage = pathname?.startsWith('/hashgames')

  // Check if we're on View All pages (where we want to show mobile footer)
  const isViewAllPage = [
    '/slots',
    '/hash-games',
    '/live-casino',
    '/futures',
    '/crypto-games',
    '/sports',
    '/table-games',
    '/promotions',
  ].includes(pathname || '')

  // Check if we should show sidebar (always show on desktop, or on mobile for View All pages)
  const shouldShowSidebar = !isMobileHeader || isViewAllPage

  // Handle initial page load
  useEffect(() => {
    if (isInitialLoad) {
      // First time loading, show loading screen
      const timer = setTimeout(() => {
        dispatch(setInitialLoadComplete())
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [isInitialLoad, dispatch])

  // Virtual keyboard state is now handled in the useVirtualKeyboard hook
  // No need for additional body class management here

  // Only show loading on initial app load
  if (isLoading && isInitialLoad) {
    return <PageLoader message="Loading app..." />
  }

  return (
    <>
      <Suspense
        fallback={
          <div>
            <span>Loading header...</span>
          </div>
        }
      >
        <ResponsiveHeader onHeaderTypeChange={setIsMobileHeader} />
      </Suspense>
      <main
        className={`w-full 
          pt-[56px] z-60 relative transition-all duration-300`}
      >
        <div className="min-h-[calc(100dvh-56px)] w-full max-w-[100vw]">
          {shouldShowSidebar && <Sidebar />}
          <div
            className={`${
              shouldShowSidebar
                ? isCollapsed
                  ? 'lg:ml-[60px]'
                  : 'lg:ml-[15.5rem]'
                : 'w-full'
            } ${
              !isMobileHeader && !isAlliancePage && !isProfileOpen
                ? 'h-[calc(100dvh-56px-59px)]'
                : 'h-[calc(100dvh-56px)]'
            } ${isNotificationsOpen && !isMobileHeader ? 'lg:mr-[26.25rem]' : ''}`}
            style={{
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <div className="mx-auto w-full max-w-screen-2xl">
              {children}
            </div>
            {!isHashgamePage && !isAlliancePage && <Footer />}
          </div>
          {isNotificationsOpen && !isMobileHeader && (
            <div
              className={`fixed right-0 top-[56px] z-[60] hidden h-[calc(100dvh-56px-59px)] w-[420px] flex-shrink-0 border-gray-700 bg-[#0f141c] lg:flex lg:h-[calc(100dvh-56px)]`}
            >
              <NotificationsPanel onClose={closeOverlay} />
            </div>
          )}
        </div>

        {/* Mobile notification overlay - show on mobile devices */}
        {isNotificationsOpen && (
          <div className="lg:hidden">
            <NotificationsDrawer onClose={closeOverlay} />
          </div>
        )}
      </main>
      {(!isMobileHeader && !isAlliancePage && !isProfileOpen) ||
      (isMobileHeader && isViewAllPage) ? (
        <Bottombar />
      ) : null}
      <AuthModal />
    </>
  )
}
