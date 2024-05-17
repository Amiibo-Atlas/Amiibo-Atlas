/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const ModalDisplay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const InfoModal = styled.div`
    background: white;
    padding: 20px;
    border-radius: 5px;
    width: 300px;
    text-align: center;
    z-index: 1010;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ButtonModal = styled.button`
    padding: 10px 20px;
    border-radius: 15px;
    margin: 10px;
    border: none;
    cursor: pointer;
`;

export default function DetermineModal({
    message: msg,
    onConfirm: clickConfirm,
    onCancel: clickCancel,
}) {
    return (
        <ModalDisplay onClick={clickCancel}>
            <InfoModal onClick={(e) => e.stopPropagation()}>
                <p>{msg}</p>
                <ButtonModal
                    onClick={clickConfirm}
                    style={{ backgroundColor: '#dc2727', color: 'white' }}
                >
                    Ok
                </ButtonModal>
                <ButtonModal onClick={clickCancel}>Cancel</ButtonModal>
            </InfoModal>
        </ModalDisplay>
    );
}
