import styled from '@emotion/styled';
import { FaCopy } from "react-icons/fa";
import { FacebookShare, TwitterShare, EmailShare, RedditShare } from 'react-share-kit';

const CopyButton = styled.button`
  &:hover {
    border-color: black;
  }; 
  cursor: pointer;
  transition: border-color 0.25s;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;

  color: white;
  background-color: #646cff;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  margin-left: auto;
  margin-right: 35%;
`;

const CopyContent = styled.div`
  height: 50px;
  width: 300px;
  border: 5px solid #646cff;
  border-radius: 8px;
  background-color: #9298ff;
  text-align: left;
  color: white;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-size: 1em;
  font-weight: 500;
  padding: 0.1em 0.1em;
`;

const CopyBox = styled.div`
  display: flex;
  margin: auto;
  padding: 2rem;
`;

const Share = () => {
  const wishlistUrl = window.location.href;
  const text = 'Check out my Amiibo Atlas Wishlist!';
  const title = "User's Amiibo Atlas Wishlist";

  return (
    <div className="sharing-container">
      <h1>Sharing Your Wishlist! </h1>
      <p> Invite others to your list: </p>
      <p>Anyone with this link can view your list!</p>
      <CopyBox>
        <CopyContent>      
        {wishlistUrl}
      </CopyContent>
      <CopyButton onClick={()=> {navigator.clipboard.writeText(wishlistUrl)}}><FaCopy /></CopyButton>
      </CopyBox>
      <div className='sharing-content'>
        <FacebookShare url={wishlistUrl} quote={text} />
        <TwitterShare url={wishlistUrl} title={text} />
        <EmailShare url={wishlistUrl} subject={title} body={text} />
        <RedditShare url={wishlistUrl} title={title} />
      </div>
    </div>
  )
}

export default Share