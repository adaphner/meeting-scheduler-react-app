import { Route, Routes } from 'react-router-dom';
import Todo from './components/Todo.js';
import AllMeetupsPage from './pages/AllMeetups.js';
import NewMeetupPage from './pages/NewMeetups.js';
import FavoritesPage from './pages/Favorites.js';
import MainNavigation from './components/layout/MainNavigation'
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';
import Portfolio from './pages/Portfolio';


function App() {
  return (
    <>
      <div>
        <MainNavigation />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />}>
          <Route path="todos" element={<Todo />} />
          <Route path="all-meetups" element={<AllMeetupsPage />} />
          <Route path="new-meetups" element={<NewMeetupPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
        </Route>
        <Route path="*" element={
          <main style={{ padding: "1rem" }}>
            <p>This page does not exist.</p>
          </main>} />
      </Routes>
    </>
  );
}

export default App;
