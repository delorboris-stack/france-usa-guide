import { useState } from 'react'
import Quiz from './components/Quiz'
import Navigation from './components/Navigation'
import CostComparison from './components/CostComparison'
import Insider from './components/Insider'
import TipsSection from './components/TipsSection'

export type Section = 'quiz' | 'housing' | 'education' | 'salary' | 'health' | 'transport' | 'internet' | 'food' | 'tips'

export default function App() {
  const [currentSection, setCurrentSection] = useState<Section>('quiz')
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleQuizComplete = () => {
    setQuizCompleted(true)
    setCurrentSection('housing')
  }

  const sections: Section[] = ['housing', 'education', 'salary', 'health', 'transport', 'internet', 'food', 'tips']

  return (
    <div className="min-h-screen bg-neutral-950">
      {!quizCompleted ? (
        <Quiz onComplete={handleQuizComplete} />
      ) : (
        <>
          <Navigation 
            currentSection={currentSection} 
            onNavigate={setCurrentSection}
            sections={sections}
          />
          <main className="p-4 md:p-6 max-w-6xl mx-auto">
            {currentSection === 'housing' && <CostComparison section="housing" />}
            {currentSection === 'education' && <CostComparison section="education" />}
            {currentSection === 'salary' && <CostComparison section="salary" />}
            {currentSection === 'health' && <CostComparison section="health" />}
            {currentSection === 'transport' && <CostComparison section="transport" />}
            {currentSection === 'internet' && <CostComparison section="internet" />}
            {currentSection === 'food' && <CostComparison section="food" />}
            {currentSection === 'tips' && <TipsSection />}
            {currentSection !== 'tips' && <Insider section={currentSection} />}
          </main>
        </>
      )}
    </div>
  )
}