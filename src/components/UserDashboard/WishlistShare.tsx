import styled from '@emotion/styled';
import { FaCopy } from "react-icons/fa";
import { FacebookShare, TwitterShare, EmailShare, RedditShare } from 'react-share-kit';
import { FiShare } from 'react-icons/fi';

const CopyButton = styled.button`
  cursor: pointer;
  border-radius: 0px 8px 8px 0px;
  border: 1px solid transparent;
  padding: 15px;
  color: white;
  background-color: #f80001;
  margin-left: 10px;
`;

const CopyContent = styled.div`
  height: 50px;
  width: 300px;
  border: 1px solid black;
  border-radius: 8px 0px 0px 8px;
  background-color: white;
  text-align: left;
  color: black;
  font-size: 1em;
  padding-left: 10px;
  padding-right: 5px;
  display: grid;
  align-items: center;
`;

const CopyText = styled.div`
  overflow-x: scroll;
  // hide scrollbar 
  scrollbar-width: none;
`;

const CopyBox = styled.div`
  display: flex;
  margin: auto;
  padding: 2rem;
`;

const ShareIcon = styled(FiShare)`
  font-size: 5rem;
  padding: 25px;
`;

const Container = styled.div`
  text-align: center;
`;

const WishlistShare = ({ shareId }) => {
  const wishlistUrl = window.location.origin + '/wishlist' + '/' + shareId;
  const text = 'Check out my Amiibo Atlas Wishlist!';
  const title = "User's Amiibo Atlas Wishlist";

  return (
    <Container>
    <ShareIcon></ShareIcon>
    <p>Share your current wishlist with your friends and family! </p>
    <CopyBox>
      <CopyContent> 
        <CopyText>
          {wishlistUrl}
        </CopyText>     
      
    </CopyContent>
    <CopyButton onClick={()=> {navigator.clipboard.writeText(wishlistUrl)}}><FaCopy /></CopyButton>
    </CopyBox>
    <div className='sharing-content'>
      <FacebookShare url={wishlistUrl} quote={text} round={true} />
      <TwitterShare url={wishlistUrl} title={text} round={true} />
      <EmailShare url={wishlistUrl} subject={title} body={text} round={true} />
      <RedditShare url={wishlistUrl} title={title} round={true} />
    </div>
  </Container>
  )
}

export default WishlistShare;
