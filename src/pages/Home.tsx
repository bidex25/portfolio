import Hero from '@/components/home/Hero'
import StatsBar from '@/components/home/StatsBar'
import IntroStrip from '@/components/home/IntroStrip'
import FeaturedWork from '@/components/home/FeaturedWork'
import MarketingSection from '@/components/home/MarketingSection'
import WhyMe from '@/components/home/WhyMe'
import Process from '@/components/home/Process'
import Testimonials from '@/components/home/Testimonials'
import CTABanner from '@/components/home/CTABanner'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <IntroStrip />
      <FeaturedWork />
      <MarketingSection />
      <WhyMe />
      <Process />
      <Testimonials />
      <CTABanner />
    </>
  )
}
