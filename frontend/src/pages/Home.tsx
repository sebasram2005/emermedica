import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import ProblemSolution from '@/components/ProblemSolution'
import HowItWorks from '@/components/HowItWorks'
import Benefits from '@/components/Benefits'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import Coverage from '@/components/Coverage'
import Guarantees from '@/components/Guarantees'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import StickyCTA from '@/components/StickyCTA'
import SEOHead from '@/components/SEOHead'

export default function Home() {
  return (
    <>
      <SEOHead />
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSolution />
        <HowItWorks />
        <Benefits />
        <Pricing />
        <Testimonials />
        <Coverage />
        <Guarantees />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppWidget />
      <StickyCTA />
    </>
  )
}
