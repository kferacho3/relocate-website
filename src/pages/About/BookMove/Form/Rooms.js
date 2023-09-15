import React, { useState } from 'react';

import "./Form.scss";
import {
  BookMoveHeader,
  BookMoveTopLine,
  RoomsContainer,
  RoomsForm,
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

import i1 from './FormImg/formRooms1.svg';
import i2 from './FormImg/formRooms2.svg';
import i3 from './FormImg/formRooms3.svg';
import i4 from './FormImg/formRooms4.svg';
import i5 from './FormImg/formRooms5.svg';

import i10 from './FormImg/formRooms10.svg';
import i6 from './FormImg/formRooms6.svg';
import i7 from './FormImg/formRooms7.svg';
import i8 from './FormImg/formRooms8.svg';
import i9 from './FormImg/formRooms9.svg';

import i11 from './FormImg/formRooms11.svg';
import i12 from './FormImg/formRooms12.svg';
import i13 from './FormImg/formRooms13.svg';
import i14 from './FormImg/formRooms14.svg';
import i15 from './FormImg/formRooms15.svg';

import minus from './FormImg/minus.svg';
import plus from './FormImg/plus.svg';

function ItemList({ rooms, selectedRooms, addItem }) {
  return (
    <>
      {rooms.map(item => (
        <SecElementDiv key={item.id}>
          <SecElementImgWrap>
            <SecElementImg src={item.src} />
          </SecElementImgWrap>
          <SecElementButtonContainer>
          <label>
              <input
                type="checkbox"
                checked={item.count > 0}
                value = {item.name + " " + item.count}
                onChange={() =>
                  item.count > 0
                    ? addItem(item.id, item.label, 0)
                    : addItem(item.id, item.label, 1)
                }
              />
              {item.name} ({item.id + item.count})
            </label>
            <SecElementHeader>{item.name}</SecElementHeader>
            <SecElementButtonWrap>
              <SecElementBtnWrap
                src={minus}
                onClick={() => {
                  if (item.count !== 0) {
                    addItem(item.id, item.label, item.count - 1);
                  }
                }}
              >
                <SecElementMinus src={minus} />
              </SecElementBtnWrap>
              <SecElementAmount>
                {selectedRooms.find(selectedItem => selectedItem.id === item.id)?.count || 0}
              </SecElementAmount>
              <SecElementBtnWrap
                onClick={() => addItem(item.id, item.label, item.count + 1)}
              >
                <SecElementPlus src={plus} />
              </SecElementBtnWrap>
            </SecElementButtonWrap>
          </SecElementButtonContainer>
        </SecElementDiv>
      ))}
    </>
  );
}

function Rooms() {
  const [rooms, setRooms] = useState([
    { id: 1, count: 0, name: "Master Bedroom", src: i1 },
    { id: 2, count: 0, name: "Standard Bedroom", src: i2 },
    { id: 3, count: 0, name: "Living Room / Den", src: i3 },
    { id: 4, count: 0, name: "Playroom", src: i4 },
    { id: 5, count: 0, name: "Craft Room", src: i5 },
    { id: 6, count: 0, name: "Kids / Nursery Room", src: i6 },
    { id: 7, count: 0, name: "Attic", src: i7 },
    { id: 8, count: 0, name: "Storage / Closet", src: i8 },
    { id: 9, count: 0, name: "Dining Room", src: i9 },
    { id: 10, count: 0, name: "Kitchen", src: i10 },
    { id: 11, count: 0, name: "Garage", src: i11 },
    { id: 12, count: 0, name: "Patio / Deck", src: i12 },
    { id: 13, count: 0, name: "Exercise Room", src: i13 },
    { id: 14, count: 0, name: "Laundry Room", src: i14 },
    { id: 15, count: 0, name: "Office Space", src: i15 },
  ]);

  const [selectedRooms, setSelectedRooms] = useState([]);

  const addItem = (itemId, itemLabel, itemCount) => {
    const itemIndex = selectedRooms.findIndex(item => item.id === itemId);
    if (itemCount === 0) {
      // If the count is 0, remove the item from the selectedRooms
      if (itemIndex >= 0) {
        setSelectedRooms(selectedRooms.filter(item => item.id !== itemId));
      }
    } else {
      // If the count is not 0, update the item count or add the item to the selectedRooms
      const newItem = { id: itemId, label: itemLabel, count: itemCount };
      if (itemIndex >= 0) {
        setSelectedRooms(
          selectedRooms.map(item => (item.id === itemId ? newItem : item))
        );
      } else {
        setSelectedRooms([...selectedRooms, newItem]);
      }
    }
  };



  return (
    <RoomsContainer>
      <BookMoveHeader>Could you please specify the exact rooms that you require us to relocate?</BookMoveHeader>
      <BookMoveTopLine>To ensure that we allocate the most suitable workforce for the job, it would be beneficial if you could provide us with a comprehensive inventory.</BookMoveTopLine>
        <RoomsForm>
          <SecWrapper>
            <SecRow>
              <ItemList rooms={rooms} selectedRooms={selectedRooms} addItem={addItem} />
            </SecRow>
          </SecWrapper>
        </RoomsForm>
    </RoomsContainer>
  );
}

export default Rooms;
