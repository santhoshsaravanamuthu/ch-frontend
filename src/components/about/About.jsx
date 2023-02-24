
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://media.istockphoto.com/id/1166843563/photo/hand-of-businesswoman-using-laptop-with-icon-social-media-and-social-network-online-marketing.jpg?b=1&s=170667a&w=0&k=20&c=BktIKMjiD4n1itVrL04V8Pei5eNHlwAwyUrJKSy4_wY=);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Content Hub</Typography>
                <Text variant="h5">The first step in building outstanding content experiences is to take stock of everything you have.
                 Store and organize all your marketing and product assets in one place, give your files meaning with metadata and put content in front of your audience. <br />
                 Content hubs have become very popular among brands and for a reason.American Express was among the first brands to launch OPEN Forum to curate expert advice on trends and insights that are relevant to small business owners.<br/>
                 Other examples abound. IBM launched ThinkBusiness. Google runs Think with Google.<br/>
                 The simplicity and the visual appeal of those hubs combined with the wealth of great content contributed to the success of their experiment and encouraged more brands to invest in their own content hub.
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/kunaltyagi9" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/sandy._.exe/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:santhoshs27082002@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;