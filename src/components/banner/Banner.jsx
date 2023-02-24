
import { styled, Box, Typography } from '@mui/material';
import {TypeAnimation} from 'react-type-animation'

const Image = styled(Box)`
    width: 100%;
    background: url(https://globacap.com/wp-content/uploads/2023/01/liquidity.png) center/65% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;



const Banner = () => {
    
    return (
        <Image>
            <Heading>CONTENT HUB</Heading>
            <TypeAnimation 
            sequence={[
                'Blogging is a convesation, not a code',
                1000,
                'Transforming thoughts into words',
                1000,
                'Blogging is a way of creating content',
                1000,
            ]}
            speed={35}
            wapper='span'
            repeat={Infinity}
            style={{fontSize:'1.5em',color:'white'}} />
        </Image>
    )
}

export default Banner;