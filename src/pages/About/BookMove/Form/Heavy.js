import React, { useEffect, useState } from 'react';

import "./Form.scss";
import {
  BookMoveHeader,
  BookMoveTopLine,
  HeavyContainer,
  HeavyForm,
  SecElementAmount,
  SecElementButtonContainer,
  SecElementButtonWrap,
  SecElementDiv,
  SecElementHeader,
  SecElementImg,
  SecElementImgWrap,
  SecElementMinus,
  SecElementPlus,
  SecInputContainer,
  SecRow,
  SecWrapper
} from './FormElements';

import minus from './FormImg/minus.svg';
import plus from './FormImg/plus.svg';






function ItemList({ items, selectedHeavy, updateItemCount, addItem, handleInput, state }) {
  const [quantity, setQuantity] = useState(1);

  const handleButtonClick = (isNegative) => {
    setQuantity((prevQuantity) => (isNegative ? prevQuantity - 1 : prevQuantity + 1));
  };

  const loadInputValues = () => {
    const savedValues = JSON.parse(localStorage.getItem('inputValues')) || {};
    return savedValues;
  };

  const [inputValues, setInputValues] = useState(loadInputValues());

  useEffect(() => {
    // Save input values to local storage whenever they change
    localStorage.setItem('inputValues', JSON.stringify(inputValues));
  }, [inputValues]);

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
              <SecElementAmount>
                <label>
                  <SecInputContainer>
                    <SecElementMinus
                      src={minus}
                      onClick={() => {
                        if (item.count > 0) {
                          updateItemCount(item.id, item.count - 1);
                        }
                      }}
                    />
                    <input
                      type="text"
                      id={`selectedHeavy${item.id}`}
                      value={item.count}
                      name={`selectedHeavy${item.id}`}
                      onChange={(e) => handleInput(e, item.id)}
                      style={{ display: 'none' }}
                      readOnly={true}
                    />
                    {item.count}
                    <SecElementPlus
                      src={plus}
                      onClick={() => {
                        if (item.count < 10) {
                          updateItemCount(item.id, item.count + 1);
                        }
                      }}
                    />
                  </SecInputContainer>
                </label>
              </SecElementAmount>
            </SecElementButtonWrap>
          </SecElementButtonContainer>
        </SecElementDiv>
      ))}
    </>
  );
}


function Heavy({handleInput, state, items, setItems }) {


  const [selectedHeavy, setSelectedHeavy] = useState([]);
  const updateItemCount = (itemId, itemCount) => {
    const updatedItems = items.map(item =>
      item.id === itemId ? { ...item, count: itemCount } : item
    );
    setItems(updatedItems);
  };


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



  return (
    <HeavyContainer>
      <BookMoveHeader>HEAVY DUTY NOTICE:</BookMoveHeader>
      <BookMoveTopLine>Please indicate which of the listed items you need to have moved. These objects typically require special equipment for transportation, so it's important for us to know in advance and prepare our packers accordingly.</BookMoveTopLine>
        <HeavyForm>
          <SecWrapper>
            <SecRow>
              <ItemList setItems={setItems} state={state} items={items} selectedHeavy={selectedHeavy} handleInput={handleInput} updateItemCount={updateItemCount}  addItem={addItem} />
            </SecRow>
          </SecWrapper>
     
        </HeavyForm>
    </HeavyContainer>
  );
}

export default Heavy;
