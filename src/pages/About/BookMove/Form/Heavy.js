import React, { useState } from 'react';

import "./Form.scss";
import {
  HeavyButtonWrap,
  HeavyContainer,
  HeavyForm,
  HeavyFormContainer,
  HeavyHeader,
  HeavyLeftButton,
  HeavyRightButton,
  HeavyTopLine,
  SecElementAmount,
  SecElementBtnWrap,
  SecElementButtonContainer,
  SecElementButtonWrap,
  SecElementDiv,
  SecElementHeader,
  SecElementImg,
  SecElementImgWrap,
  SecElementMinus,
  SecElementPlus,
  SecRow,
  SecWrapper
} from './FormElements';

import h1 from './FormImg/formHeavy1.svg';
import h2 from './FormImg/formHeavy2.svg';
import h3 from './FormImg/formHeavy3.svg';
import h4 from './FormImg/formHeavy4.svg';
import h5 from './FormImg/formHeavy5.svg';

import h10 from './FormImg/formHeavy10.svg';
import h6 from './FormImg/formHeavy6.svg';
import h7 from './FormImg/formHeavy7.svg';
import h8 from './FormImg/formHeavy8.svg';
import h9 from './FormImg/formHeavy9.svg';

import h11 from './FormImg/formHeavy11.svg';
import h12 from './FormImg/formHeavy12.svg';
import h13 from './FormImg/formHeavy13.svg';
import h14 from './FormImg/formHeavy14.svg';
import h15 from './FormImg/formHeavy15.svg';

import minus from './FormImg/minus.svg';
import plus from './FormImg/plus.svg';

function ItemList({ items, selectedHeavy, addItem }) {
  return (
    <>
      {items.map(item => (
        <SecElementDiv key={item.id}>
          <SecElementImgWrap>
            <SecElementImg src={item.src} />
          </SecElementImgWrap>
          <SecElementButtonContainer>
            <SecElementHeader>{item.name}</SecElementHeader>
            <SecElementButtonWrap>
              <SecElementBtnWrap src={minus} onClick={() => {
                if (item.count !== 0) {
                  addItem(item.id, item.label, item.count - 1);
                }
              }}>
                <SecElementMinus src={minus} />
              </SecElementBtnWrap>
              <SecElementAmount>{item.count}</SecElementAmount>
              <SecElementBtnWrap onClick={() => addItem(item.id, item.label, item.count + 1)}>
                <SecElementPlus src={plus} />
              </SecElementBtnWrap>
            </SecElementButtonWrap>
          </SecElementButtonContainer>
        </SecElementDiv>
      ))}
    </>
  );
}

function Heavy({ nextStep, prevStep }) {
  const [items, setItems] = useState([
    { id: 1, count: 0, name: "Piano", src: h1 },
    { id: 2, count: 0, name: "Safe", src: h2 },
    { id: 3, count: 0, name: "Oven / Stove", src: h3 },
    { id: 4, count: 0, name: "Refrigerator", src: h4 },
    { id: 5, count: 0, name: "Large Freezer", src: h5 },
    { id: 6, count: 0, name: "Aquarium / Terrarium", src: h6 },
    { id: 7, count: 0, name: "Dishwasher", src: h7 },
    { id: 8, count: 0, name: "Fine Art / Sculptures", src: h8 },
    { id: 9, count: 0, name: "Washer / Dryer", src: h9 },
    { id: 10, count: 0, name: "Antique / Fragile Furniture", src: h10 },
    { id: 11, count: 0, name: "Grandfather Clock", src: h11 },
    { id: 12, count: 0, name: "Pool Table", src: h12 },
    { id: 13, count: 0, name: "Large Armoire", src: h13 },
    { id: 14, count: 0, name: "Riding Lawn Mower", src: h14 },
    { id: 15, count: 0, name: "Exercise Equipment", src: h15 },
  ]);

  const [selectedHeavy, setSelectedHeavy] = useState([]);

  const addItem = (itemId, itemLabel, itemCount) => {
    const itemIndex = selectedHeavy.findIndex(item => item.id === itemId);
    if (itemCount === 0) {
      // If the count is 0, remove the item from the selectedHeavy
      if (itemIndex >= 0) {
        setSelectedHeavy(selectedHeavy.filter(item => item.id !== itemId));
      }
    } else {
      // If the count is not 0, update the item count or add the item to the selectedHeavy
      const newItem = { id: itemId, label: itemLabel, count: itemCount };
      if (itemIndex >= 0) {
        setSelectedHeavy(
          selectedHeavy.map(item => (item.id === itemId ? newItem : item))
        );
      } else {
        setSelectedHeavy([...selectedHeavy, newItem]);
      }
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Here you can do something with the selectedHeavy, like submitting them to a server
    console.log(selectedHeavy);
  };

  const handleNext = () => {
    nextStep();
  };

  const handlePrevious = () => {
    prevStep();
  };

  return (
    <HeavyContainer>
      <HeavyHeader>HEAVY DUTY NOTICE:</HeavyHeader>
      <HeavyTopLine>Please indicate which of the listed items you need to have moved. These objects typically require special equipment for transportation, so it's important for us to know in advance and prepare our packers accordingly.</HeavyTopLine>
      <HeavyFormContainer>
        <HeavyForm>
          <SecWrapper>
            <SecRow>
              <ItemList items={items} selectedHeavy={selectedHeavy} addItem={addItem} />
            </SecRow>
          </SecWrapper>
          <HeavyButtonWrap>
            <HeavyLeftButton onClick={handlePrevious}>BACK</HeavyLeftButton>
            <HeavyRightButton onClick={handleNext}>NEXT</HeavyRightButton>
          </HeavyButtonWrap>
        </HeavyForm>
      </HeavyFormContainer>
    </HeavyContainer>
  );
}

export default Heavy;
