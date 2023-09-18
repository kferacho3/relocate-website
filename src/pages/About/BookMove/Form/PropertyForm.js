import React from 'react';
import styled from 'styled-components';

import { MdOutlineOtherHouses } from 'react-icons/md';
import h2 from '../../../../logos/homeFormLogos2.svg';
import h3 from '../../../../logos/homeFormLogos3.svg';
import h4 from '../../../../logos/homeFormLogos4.svg';
import h5 from '../../../../logos/homeFormLogos5.svg';
import h6 from '../../../../logos/homeFormLogos6.svg';
import { HomeImg } from './FormElements';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 500px;
`;

const Label = styled.label`
  margin-top: 20px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 20px;
  color: #fff;
`;

const AddressInput = styled.input`
  margin-top: 15px;
  width: 500px;
  height: 30px;
`;

const Input = styled.input`
  width: 40px;
  height: 40px;
`;

const Select = styled.select`
  background: #2a2f3b;
  width: 150px;
  color: #fff;
  border: 2px #2a2f3b solid;
  border-radius: 0.5em;
  //padding: 1em;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 20px;

`;

const Option = styled.option`

`;

const StyledSelect = styled.div`
  display:inline-block;

  cursor:pointer;
  font-size:1.1em;
  margin-bottom:1.5em;
  padding:.25em 0;
  position:relative;
  width:15em;
`;

const ColumnContainer = styled.div`

  width: 500px;
  flex-direction: column;
  //display: flex;
  flex: 10;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-top: 20px;
  justify-content: center;
  color: #fff;
  padding: 40px;
  backdrop-filter: blur(10px);
  margin-left: 50%;
  transform: translateX(-50%);
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const Column = styled.div`
  flex: 1;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
`;
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the form horizontally */
`;
const Menu = styled.menu`
  list-style: none;
  padding: 0.2em 0.5em;
  background: #323741;
  border: 1px #363a43 solid;
  box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.2);
  border-radius: 0.5em;
  color: #9fa5b5;
  position: absolute;
  top: 3em;
  left: 50%;
`
const PropertyForm = ({ addLocation,  locationList,
  setLocationList,
  selectedSquareFootage,
  selectedDistance,
  unitNumber,
  isElevatorReserved,
  floorLevel,
  podUnits,  
  setPropertyType,
   setSelectedSquareFootage,
  setSelectedDistance,
  setUnitNumber,
  setIsElevatorReserved,
  setFloorLevel,
  setPodUnits,
  propertyType, }) => {
  //const [propertyType, setPropertyType] = useState('');


  const handlePropertyTypeChange = (event) => {
    const newValue = event.target.value;
   setPropertyType(newValue);
    setSelectedSquareFootage('');
    setSelectedDistance('');
  };

  const handleSquareFootageChange = (event) => {
    const newValue = event.target.value;
    setSelectedSquareFootage(newValue);
  };

  const handleDistanceChange = (event) => {
    const newValue = event.target.value;
    setSelectedDistance(newValue);
  };

  

  return (
    <FormWrapper>
  <Container>
    <Label>Address:</Label>
    <AddressInput type="text" />

    <ColumnContainer>
      <Label>Property Type:</Label>
      <Select
      id={propertyType}
        placeholder={propertyType}
        value={propertyType}
        onChange={handlePropertyTypeChange}
      >





        <Option  value="">Select Property Type</Option>
        <Option value="apartment">Apartment</Option>
        <Option value="condo">
          <HomeImg src={h2} />
          Condominium
        </Option>
        <Option value="home">
          <HomeImg src={h3} />
          Standard Home
        </Option>
        <Option value="townhouse">
          <HomeImg src={h4} />
          Townhouse
        </Option>
        <Option value="storage">
          <HomeImg src={h5} />
          Storage Unit
        </Option>
        <Option value="pod">
          <HomeImg src={h6} />
          Pod Container
        </Option>
        <Option value="other">
          <MdOutlineOtherHouses />
          Other
        </Option>
      </Select>

      {propertyType === 'apartment' || propertyType === 'condo' ? (
        <>
          <Label>Unit:</Label>
          <Input type="number"
          value={unitNumber}
           />
          <Label>Square Footage:</Label>
          <Select
            value={selectedSquareFootage}
            onChange={handleSquareFootageChange}
          >
            <Option value="">Select Square Footage</Option>
            <Option value="1-1000">1-1000</Option>
            <Option value="1001-2000">1001-2000</Option>
            <Option value="2001-3500">2001-3,500</Option>
            <Option value="3501+">3,501+</Option>
          </Select>
          <Label>Is elevator Reserved?</Label>
          <Select value={isElevatorReserved}>
            <Option value="yes">Yes</Option>
            <Option value="no">No</Option>
          </Select>
          <Label>Floor Level:</Label>
          <Input value ={floorLevel} type="number" />
          <Label>Distance to truck:</Label>
          <Select
            value={selectedDistance}
            onChange={handleDistanceChange}
          >
            <Option value="<50">Less than 50 yards</Option>
            <Option value=">50">Greater than 50 yards</Option>
          </Select>
        </>
      ) : null}
      {propertyType === 'home' ? (
        <>
          <Label>Square Footage:</Label>
          <Select
            value={selectedSquareFootage}
            onChange={handleSquareFootageChange}
          >
            <Option value="">Select Square Footage</Option>
            <Option value="1-1000">1-1000</Option>
            <Option value="1001-2000">1001-2000</Option>
            <Option value="2001-3500">2001-3,500</Option>
            <Option value="3501+">3,501+</Option>
          </Select>
          <Label>Floor Level:</Label>
          <Input value ={floorLevel} type="number" />
          <Label>Distance to truck:</Label>
          <Select
            value={selectedDistance}
            onChange={handleDistanceChange}
          >
            <Option value="<50">Less than 50 yards</Option>
            <Option value=">50">Greater than 50 yards</Option>
          </Select>
        </>
      ) : null}
      {propertyType === 'townhouse' ? (
        <>
          <Label>Unit:</Label>
          <Input value ={floorLevel} type="number" />
          <Label>Square Footage:</Label>
          <Select
            value={selectedSquareFootage}
            onChange={handleSquareFootageChange}
          >
            <Option value="">Select Square Footage</Option>
            <Option value="1-1000">1-1000</Option>
            <Option value="1001-2000">1001-2000</Option>
            <Option value="2001-3500">2001-3,500</Option>
            <Option value="3501+">3,501+</Option>
          </Select>
          <Label>Floor Level:</Label>
          <Input value ={floorLevel} type="number" />
          <Label>Distance to truck:</Label>
          <Select
            value={selectedDistance}
            onChange={handleDistanceChange}
          >
            <Option value="<50">Less than 50 yards</Option>
            <Option value=">50">Greater than 50 yards</Option>
          </Select>
        </>
      ) : null}


      {propertyType === 'storage' ? (
        <>
          <Label>Square Footage:</Label>
          <Select
            value={selectedSquareFootage}
            onChange={handleSquareFootageChange}
          >
            <Option value="">Select Square Footage</Option>
            <Option value="1-1000">1-1000</Option>
            <Option value="1001-2000">1001-2000</Option>
            <Option value="2001-3500">2001-3,500</Option>
            <Option value="3501+">3,501+</Option>
          </Select>
          <Label>Is elevator Reserved?</Label>
          <Select value={isElevatorReserved}>
            <Option value="yes">Yes</Option>
            <Option value="no">No</Option>
          </Select>
          <Label>Floor Level:</Label>
          <Input value ={floorLevel} type="number" />
          <Label>Distance to truck:</Label>
          <Select
            value={selectedDistance}
            onChange={handleDistanceChange}
          >
            <Option value="<50">Less than 50 yards</Option>
            <Option value=">50">Greater than 50 yards</Option>
          </Select>
        </>
      ) : null}

      {propertyType === 'pod' ? (
        <>
          <Label>Pod Unit(s):</Label>
          <Input value ={podUnits} type="number" />
          <Label>Square Footage:</Label>
          <Select
            value={selectedSquareFootage}
            onChange={handleSquareFootageChange}
          >
            <Option value="">Select Square Footage</Option>
            <Option value="1-1000">1-1000</Option>
            <Option value="1001-2000">1001-2000</Option>
            <Option value="2001-3500">2001-3,500</Option>
            <Option value="3501+">3,501+</Option>
          </Select>
          <Label>Floor Level:</Label>
          <Input value ={floorLevel} type="number" />
          <Label>Distance to truck:</Label>
          <Select
            value={selectedDistance}
            onChange={handleDistanceChange}
          >
            <Option value="<50">Less than 50 yards</Option>
            <Option value=">50">Greater than 50 yards</Option>
          </Select>
        </>
      ) : null}
    </ColumnContainer>
  </Container>
</FormWrapper>
  );
};

export default PropertyForm;
