import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './features/aboutme';
import WorkHistory from './features/workhistory';
import './App.css';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="container mx-auto px-4">
        <AboutMe />
        <WorkHistory />
      </main>
      <Footer />
    </div>
  );
}

export default App;
