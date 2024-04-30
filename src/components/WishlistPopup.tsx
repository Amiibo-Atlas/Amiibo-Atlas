import styled from '@emotion/styled';
import { FaWindowClose } from "react-icons/fa";
import Share from './WishlistShare';
import ConfirmPublic from './WishlistConfirm';

const PopupWindow = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 99;  
    display: flex;
    justify-content: center;
    align-content: center;
`;

const PopupContent = styled.div`
    position: relative;
    padding: 50px;
    width: 100%;
    max-width: 640px;
    background-color: #FFF;
    border: 10px solid #646cff;
    top: 0;
    bottom: 0;
    z-index: 10;
    margin: auto;
`;

interface popupProps {
    showPopup: boolean,
    setShowPopup: (showPopup:boolean) => void,
    type: string,
    publicStatus: boolean,
    setPublicStatus: (publicStatus: boolean) => void,
}

const CloseButton = styled.button`
  &:hover {
    border-color: black;
  }; 
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  transition: border-color 0.25s;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  color: white;
  background-color: #646cff;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
`;

const Popup = ({ showPopup, setShowPopup, type, publicStatus, setPublicStatus } : popupProps) => {
    
    const togglePopup = () => {
        setShowPopup(!showPopup);
    }
    
    return (showPopup ? ( 
            <PopupWindow>
                <PopupContent>

                    <div className="content">
                        {type === "sharing" && <Share></Share>}
                        {type === "public" && 
                        <ConfirmPublic publicStatus={publicStatus} setPublicStatus={setPublicStatus} 
                        showPopup={showPopup} setShowPopup={togglePopup}></ConfirmPublic>}
                    </div>
                    <CloseButton onClick={togglePopup}> <FaWindowClose/> </CloseButton>
                    </PopupContent>
            </PopupWindow>
        ) : ""
    )
}

export default Popup