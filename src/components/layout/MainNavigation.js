import { Link } from 'react-router-dom';

function MainNavigation() {
    return (
        <>
            <header>
                <nav className='navigation'>
                    <div className='logo'>Logo</div>
                    <Link to='/'>Home</Link>
                    <Link to='/portfolio'>Portfolio</Link>
                    <Link to='/projects'>Projects</Link>
                </nav>
            </header>
        </>
    );
}

export default MainNavigation;