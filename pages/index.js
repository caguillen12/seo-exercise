import Header from "../components/Header"
import Footer from "../components/Footer"
import Masthead from "../components/Masthead"
import Testimonial from "../components/Testimonial"
import FeaturesSection from "../components/FeaturesSections"
import SectionFold1 from "../components/SectionFold1"
import CTAFold from "../components/CTAFold"
import SectionFold2 from "../components/SectionFold2"

export default function Home() {
  return (
    <div>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content />
    <meta name="author" content />
    <title>WC Frotend Optimization Practice</title>
    <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,600;1,600&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,500;0,600;0,700;1,300;1,500;1,600;1,700&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,400;1,400&display=swap" rel="stylesheet" />
    <link href="css/styles.css" rel="stylesheet" />
  
    <Header/>
    <Masthead/>
    <Testimonial/>
    <FeaturesSection/>
    <SectionFold1/>
    <CTAFold/>
    <SectionFold2/>
     <Footer/>
  </div>
  
  )
}
