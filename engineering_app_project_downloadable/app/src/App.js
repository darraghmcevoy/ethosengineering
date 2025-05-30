import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ContentArea from './components/ContentArea';
import './styles/main.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentContent, setCurrentContent] = useState({
    type: 'home',
    path: '/',
    title: 'Engineering Knowledge App for Graduate Engineers'
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNavigation = (contentType, contentPath, contentTitle) => {
    setCurrentContent({
      type: contentType,
      path: contentPath,
      title: contentTitle
    });
    
    // Close sidebar on navigation for mobile view
    if (window.innerWidth < 992) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="app">
      <Header toggleSidebar={toggleSidebar} />
      <div className="main-container">
        <Sidebar isOpen={sidebarOpen} onNavigate={handleNavigation} />
        <ContentArea 
          contentType={currentContent.type} 
          contentPath={currentContent.path}
          contentTitle={currentContent.title}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
