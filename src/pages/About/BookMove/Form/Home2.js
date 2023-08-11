import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Label = styled.label`
  margin-top: 10px;
`;

const Input = styled.input`
  margin-top: 5px;
`;

const Select = styled.select`
  margin-top: 5px;
`;

const Option = styled.option``;

const ColumnContainer = styled.div`
  display: flex;
`;

const Column = styled.div`
  flex: 1;
  margin-right: 10px;
`;

const PropertyForm = () => {
  const [propertyType, setPropertyType] = useState('');
  
  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  return (
    <Container>
      <Label>Address:</Label>
      <Input type="text" />
      
      <ColumnContainer>
        <Column>
          <Label>Property Type:</Label>
          <Select value={propertyType} onChange={handlePropertyTypeChange}>
            <Option value="">Select Property Type</Option>
            <Option value="apartment">Apartment</Option>
            <Option value="condo">Condominium</Option>
            <Option value="home">Standard Home</Option>
            <Option value="townhouse">Townhouse</Option>
            <Option value="storage">Storage Unit</Option>
            <Option value="pod">Pod Container</Option>
            <Option value="other">Other</Option>
          </Select>
        </Column>

        {/* Additional inputs based on property type */}
        {propertyType === 'apartment' || propertyType === 'condo' ? (
          <Column>
            {/* Include inputs for Apartment/Condo */}
          </Column>
        ) : null}
        {propertyType === 'home' ? (
          <Column>
            {/* Include inputs for Home */}
          </Column>
        ) : null}
        {propertyType === 'townhouse' ? (
          <Column>
            {/* Include inputs for Townhouse */}
          </Column>
        ) : null}
        {propertyType === 'storage' ? (
          <Column>
            {/* Include inputs for Storage Unit */}
          </Column>
        ) : null}
        {propertyType === 'pod' ? (
          <Column>
            {/* Include inputs for Pod Container */}
          </Column>
        ) : null}
      </ColumnContainer>
    </Container>
  );
};

export default PropertyForm;
