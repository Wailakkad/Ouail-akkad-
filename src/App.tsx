import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import ContentSection from './components/ContentSection'
import ProjectsCarousel from './components/ProjectsCarousel'
import VideoSection from './components/VideoSection'
import Footer from './components/Footer'
import ProjectsPage from './pages/ProjectsPage'
import ScrollToTop from './components/ScrollToTop'

function HomePage() {
  return (
    <>
      <Hero />
      <ContentSection />
      <ProjectsCarousel />
      <VideoSection />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
