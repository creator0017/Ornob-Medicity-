import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { LangProvider } from './LangContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import BookAppointmentModal from './components/BookAppointmentModal';
import Home from './pages/Home';
import Placeholder from './pages/Placeholder';
import Doctors from './pages/Doctors';
import DoctorDetail from './pages/DoctorDetail';
import Departments from './pages/Departments';
import DepartmentDetail from './pages/DepartmentDetail';
import Facilities from './pages/Facilities';
import AyushmanScheme from './pages/AyushmanScheme';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  return (
    <LangProvider>
      <Router>
        <ScrollToTop />
        <div className="pt-20 sm:pt-24 min-h-screen bg-surface text-on-surface flex flex-col justify-between overflow-x-hidden">
          <Navbar onBookAppointment={() => setAppointmentOpen(true)} />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home onBookAppointment={() => setAppointmentOpen(true)} />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/departments/:slug" element={<DepartmentDetail />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/doctors/:slug" element={<DoctorDetail />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/ayushman-scheme" element={<AyushmanScheme />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Placeholder titleKey="privacy" />} />
              <Route path="/terms" element={<Placeholder titleKey="terms" />} />
              <Route path="/patient-rights" element={<Placeholder titleKey="patient" />} />
            </Routes>
          </main>

          <Footer />
          <FloatingButtons />
          <BookAppointmentModal open={appointmentOpen} onClose={() => setAppointmentOpen(false)} />
        </div>
      </Router>
    </LangProvider>
  );
}
