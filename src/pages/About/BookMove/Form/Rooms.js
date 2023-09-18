import React, { useState } from 'react';

import "./Form.scss";
import {
  BookMoveHeader,
  BookMoveTopLine,
  RoomsContainer,
  RoomsForm,
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

import minus from '../FormImg/minus.svg';
import plus from '../FormImg/plus.svg';


function ItemList({ rooms, selectedRooms, updateItemCount, addItem, handleInput, state }) {
 

  return (
    <>
      {rooms.map(item => (
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
                      id={`selectedRooms${item.id}`}
                      value={item.count}
                      name={`selectedRooms${item.id}`}
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


function Rooms({rooms, setRooms, handleInput, state  }) {


  const [selectedRooms, setSelectedRooms] = useState([]);
  const updateItemCount = (itemId, itemCount) => {
    const updatedItems = rooms.map(item =>
      item.id === itemId ? { ...item, count: itemCount } : item
    );
    setRooms(updatedItems);
  };

  const addItem = (itemId, itemLabel, itemCount) => {
    const itemIndex = selectedRooms.findIndex((item) => item.id === itemId);
  
    // Create a new item with the updated count
    const newItem = { id: itemId, label: itemLabel, count: itemCount };
  
    setSelectedRooms((prevSelectedRooms) => {
      // If the count is 0, remove the item from selectedRooms
      if (itemCount === 0) {
        return prevSelectedRooms.filter((item) => item.id !== itemId);
      } else {
        // If the count is not 0, update the item count or add the item to selectedRooms
        if (itemIndex >= 0) {
          // Update the count for an existing item
          return prevSelectedRooms.map((item) =>
            item.id === itemId ? newItem : item
          );
        } else {
          // Add the new item to selectedRooms
          return [...prevSelectedRooms, newItem];
        }
      }
    });
  

  };
  
  

  


  return (
    <RoomsContainer>
      <BookMoveHeader>Could you please specify the exact rooms that you require us to relocate?</BookMoveHeader>
      <BookMoveTopLine>To ensure that we allocate the most suitable workforce for the job, it would be beneficial if you could provide us with a comprehensive inventory.</BookMoveTopLine>
        <RoomsForm>
          <SecWrapper>
            <SecRow>
              <ItemList setRooms={setRooms} state={state} rooms={rooms} selectedHeavy={selectedRooms} handleInput={handleInput} updateItemCount={updateItemCount}  addItem={addItem} />
            </SecRow>
          </SecWrapper>
        </RoomsForm>
    </RoomsContainer>
  );
}

export default Rooms;
