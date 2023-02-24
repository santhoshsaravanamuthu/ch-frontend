
import { styled, Box, Typography } from '@mui/material';

const Container = styled(Box)`
    border: 1px solid #d3cede;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    background-color:white;
    flex-direction: column;
    height: 300px;
    & > img, & > p {
        
    }
`;

const Image = styled('img')({
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
    height: 150
});

const Text = styled(Typography)`
    color: #878787,
    display:flex;
    align-items: 'center',
    font-size: 12px;
    margin-left:10px;
    
`;

const Heading = styled(Typography)`
    font-size: 18px;
    align-item:'center';
    margin-left:10px;
    font-weight: 600
`;

const Details = styled(Typography)`
    font-size: 14px;
    word-break: break-word;
    margin-left:10px;
    align-items: 'center';
`;

const Post = ({ post }) => {
    const url = post.picture ? post.picture : 'https://picturepark.com/data/Blog/growth-with-automated-data/domenico-loia-hGV2TfOh0ns-unsplash.jpg';
    
    const addEllipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    } 

    return (
        <Container>
                <Image src={url} alt="post" />
                <Text>{post.categories}</Text>
                <Heading>{addEllipsis(post.title, 20)}</Heading>
                <Text>Author: {post.username}</Text>
                <Details>{addEllipsis(post.description, 100)}</Details>
        </Container>
        
            
        
    )
}

export default Post;