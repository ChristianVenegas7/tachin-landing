import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import HowItWorksSection from './components/HowItWorksSection'
import DashboardSection from './components/DashboardSection'
import BenefitsSection from './components/BenefitsSection'
import PricingSection from './components/PricingSection'
import CTASection from './components/CTASection'

function App() {
  return (
    <main className="bg-black">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <DashboardSection />
      <BenefitsSection />
      <PricingSection />
      <CTASection />
    </main>
  )
}

export default App
