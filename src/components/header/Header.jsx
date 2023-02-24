
import { AppBar, Toolbar, styled} from '@mui/material'; 
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: right;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`

const Header = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Component>
                <Container>
                    <Link to='/'>HOME</Link>
                    <Link to='/about'>ABOUT</Link>
                    <Link to='/contact'>CONTACT</Link>
                    <Link to='/account'>LOGOUT</Link>
                </Container>
            </Component>
        </ThemeProvider>
    )
}

export default Header;