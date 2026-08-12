import { useState } from 'react'
import './App.css'
import Filter from './components/Filter'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Videos from './components/Videos'

function App() {

  const [collapse, setCollapse] = useState(false);
  return (
    <div className="app">
      <Navbar setCollapse={setCollapse}/>

      <div className="main-sidebar-wrapper">
        <Sidebar collapse={collapse} />

        <main className="main-content">
          <Filter />

          <Videos />

          {/* Add enough content to test scrolling */}
          <div style={{ height: '2000px' }}>
            
          </div>
        </main>
      </div>
    </div>
  )
}

export default App