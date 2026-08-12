import './App.css'
import Filter from './components/Filter'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Videos from './components/Videos'

function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="main-sidebar-wrapper">
        <Sidebar />

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