import { Grid, Input } from '@mui/material'
import Image from 'next/image'
import NavLink from './NavLink'
import Logo from '../../../public/assets/logo.png'
const Navbar = ({ search }) => {
    return (
        <Grid component='nav' justifyItems='center'>
            <Grid item width={100}>
                <NavLink to='/'>
                    <Image src={Logo} alt='Brud Logo' />
                </NavLink>
            </Grid>
            {search && (
                <Grid item>
                    <Input variant='rounded' placeholder='search items' />
                </Grid>
            )}
            <Grid item>
                <NavLink to='/login'>Login</NavLink>
            </Grid>
        </Grid>
    )
}

export default Navbar
