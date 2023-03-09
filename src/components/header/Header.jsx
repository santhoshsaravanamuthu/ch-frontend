
import { AppBar, Toolbar, styled} from '@mui/material'; 
import { Link } from 'react-router-dom';

const Component = styled(AppBar)`
    background: #0d263b;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: #FFFFFF;
        text-decoration: none;
    }
`

const Header = () => {
    return (
        <Component>
            <Container>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link to='/account'>LOGOUT</Link>
            </Container>
        </Component>
    )
}

export default Header;