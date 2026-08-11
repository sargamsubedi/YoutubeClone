import './App.css'
import Filter from './components/Filter'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="main-sidebar-wrapper">
        <Sidebar />

        <main className="main-content">
          <Filter />
          <h1>This is for imitating main content</h1>

          {/* Add enough content to test scrolling */}
          <div style={{ height: '2000px' }}>
            Main content
          </div>
        </main>
      </div>
    </div>
  )
}

export default App