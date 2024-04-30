import styled from '@emotion/styled';

const ConfirmButton = styled.button`
  &:hover {
    border-color: black;
  };
  color: white; 
  cursor: pointer;
  transition: border-color 0.25s;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #646cff;
  display: block;
  position: absolute; 
`;

interface confirmProps {
    publicStatus: boolean,
    setPublicStatus: (publicStatus: boolean) => void,
    showPopup: boolean,
    setShowPopup: (toggleStatus: boolean) => void,
}

export default function ConfirmPublic({ publicStatus, setPublicStatus, showPopup, setShowPopup } : confirmProps) {
    const handleConfirm = () => {
        console.log("prev - isPublic: ", publicStatus);
        setPublicStatus(!publicStatus);
        console.log("after - isPublic: ", publicStatus);
        setShowPopup(!showPopup);
      
    };

    return (
      <div className="container">
        <h1>Wishlist Is Currently {publicStatus ? "Public" : "Private"}! </h1>
        <p>Confirm to change your wishlist to a {publicStatus ? "Private" : "Public"} viewing: </p>
        <ConfirmButton onClick={handleConfirm}>Confirm</ConfirmButton>        
      </div>
    )
  }
  