import Header from "../components/Header"
import Footer from "../components/Footer"
import Masthead from "../components/Masthead"
import Testimonial from "../components/Testimonial"
import FeaturesSection from "../components/FeaturesSections"
import SectionFold1 from "../components/SectionFold1"
import CTAFold from "../components/CTAFold"
import SectionFold2 from "../components/SectionFold2"
import PageLayout from "../components/PageLayout"

// export const config={unstable_runtimeJS:false}

export default function Home() {
  return (
    <PageLayout>
    <Header/>
    <Masthead/>
    <Testimonial/>
    <FeaturesSection/>
    <SectionFold1/>
    <CTAFold/>
    <SectionFold2/>
    <Footer/>
    </PageLayout>
  )
}
