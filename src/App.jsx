 import { createContext, useState } from 'react';



  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar'; 


   import Footer from './components/Footer';

 import Home from './pages/Home';


import FriendDetails from './pages/FriendDetails';




import Timeline from './pages/Timeline';




  import Stats from './pages/Stats';







    export const TimelineContext = createContext();








function App() {
  const [timeline, setTimeline] = useState([]);





  const addInteraction = (entry) => {
    setTimeline([entry, ...timeline]);
  };






  return (
    <TimelineContext.Provider value={{ timeline, addInteraction }}>

      <Router>
        <div className="min-h-screen flex flex-col">

          <Navbar />
          <main className="flex-grow">

            <Routes>
              <Route path="/" element={<Home />} />

                <Route path="/friend/:id" element={<FriendDetails />} />

              <Route path="/timeline" element={<Timeline />} />

              <Route path="/stats" element={<Stats />} />

               <Route path="*" element={<div className="text-center py-20 text-3xl">404 - Page Not Found</div>} />
           
            </Routes>

          </main>






          <Footer />

          <Toaster position="top-right" />

        </div>


      </Router>

    </TimelineContext.Provider>
  );
}








export default App;