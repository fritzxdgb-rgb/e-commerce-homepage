import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import CollectionGrid from './components/CollectionGrid'
import ProductSection from './components/ProductSection'
import DealOfTheWeek from './components/DealOfTheWeek'
import BlogPreview from './components/BlogPreview'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <div className="homepage-wrapper">
      <Navbar />
      <main>
        <HeroBanner />
        <CollectionGrid />
        <ProductSection />
        <DealOfTheWeek />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  )
}
