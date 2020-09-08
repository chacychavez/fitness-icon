import styled from 'styled-components/macro';

export const MapContainer = styled.div`
  width: ${(props) => `${props.width}px`};
  font-family: 'Exo';
  font-style: normal;
  background: #fff;
  position: absolute;
  border: 1px solid #dde1e1;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
`;

export const SearchContainer = styled.div`
  position: relative;

  .pac-target-input {
    height: 32px !important;
  }
`;

export const AddressButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;

export const Address = styled.span`
  font-weight: 500;
  font-size: 14px;
`;

export const Buttons = styled.div`
  display: flex;

  font-weight: 600;
  font-size: 14px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 108px;
    height: 36px;
    border-radius: 20px;
    color: #fff;
    margin: 0 10px;
    cursor: pointer;
  }
`;

export const ConfirmButton = styled.a`
  background: #000000;
`;
export const CancelButton = styled.a`
  background: #fd5b00;
`;
