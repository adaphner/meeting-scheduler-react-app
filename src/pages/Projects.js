import { Link, Outlet } from 'react-router-dom';

function Projects() {
    return (
        <div className='projects-nav-container'>
            <nav className='projects-nav'>
                <Link to='todos'>Todo</Link>
                <Link to='all-meetups'>All Meetups</Link>
                <Link to='new-meetups'>Add New Meetup</Link>
                <Link to='favorites'>My Favorites</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Projects