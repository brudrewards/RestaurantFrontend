import Navbar from '../../components/navbar/Navbar'

const Header = ({ search, ...props }) => {
    return (
        <header>
            <Navbar search={search} />
        </header>
    )
}

export default Header
