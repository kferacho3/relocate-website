import React, { useState } from 'react';

import {
  ItemsButtonWrap,
  ItemsContainer, ItemsForm,
  ItemsFormContainer,
  ItemsHeader,
  ItemsLeftButton, ItemsRightButton, ItemsTopLine,

  SecBackground,
  SecElementAmount,
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
//import emailjs from 'emailjs-com';
import "./Form.scss";
import i1 from './FormImg/formItems1.svg';
import i2 from './FormImg/formItems2.svg';
import i3 from './FormImg/formItems3.svg';
import i4 from './FormImg/formItems4.svg';
import i5 from './FormImg/formItems5.svg';

import i10 from './FormImg/formItems10.svg';
import i6 from './FormImg/formItems6.svg';
import i7 from './FormImg/formItems7.svg';
import i8 from './FormImg/formItems8.svg';
import i9 from './FormImg/formItems9.svg';

import i11 from './FormImg/formItems11.svg';
import i12 from './FormImg/formItems12.svg';
import i13 from './FormImg/formItems13.svg';
import i14 from './FormImg/formItems14.svg';
import i15 from './FormImg/formItems15.svg';

import minus from './FormImg/minus.svg';
import plus from './FormImg/plus.svg';
function ItemList({ items, addItem }) {
  return (
    <>
      {items.map(item => (
        <SecElementDiv>
        <SecElementImgWrap>
          <SecElementImg src={item.src}/>
        </SecElementImgWrap>
        <SecElementButtonContainer key={item.id}>
          <SecElementHeader>{item.name}</SecElementHeader>
         <SecElementButtonWrap>
          <SecElementPlus src={plus} onClick={() => addItem(item.id, item.label, item.count + 1)}/>
          <SecElementMinus src={minus} onClick={() => addItem(item.id, item.label, item.count - 1)}/>
          <SecElementAmount>{item.count}</SecElementAmount>
          </SecElementButtonWrap>
        </SecElementButtonContainer>
        </SecElementDiv>
      ))}
    </>
  );
}

function Items({isOpen, toggle}) {
  const [items, setItems] = useState([
    { id: 1, count: 0, name: "Living Room / Den", src: i1 },
    { id: 2, count: 0, name: "Master Bedroom", src: i2 },
    { id: 3, count: 0, name: "Standard Bedroom", src: i3 },
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
  const [selectedItems, setSelectedItems] = useState([]);

  function addItem(itemId, itemLabel, itemCount) {
    const itemIndex = selectedItems.findIndex(item => item.id === itemId);
    if (itemCount === 0) {
      // If the count is 0, remove the item from the selected items
      if (itemIndex >= 0) {
        setSelectedItems(selectedItems.filter(item => item.id !== itemId));
      }
    } else {
      // If the count is not 0, update the item count or add the item to the selected items
      const newItem = { id: itemId, label: itemLabel, count: itemCount };
      if (itemIndex >= 0) {
        setSelectedItems(
          selectedItems.map(item => (item.id === itemId ? newItem : item))
        );
      } else {
        setSelectedItems([...selectedItems, newItem]);
      }
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Here you can do something with the selectedItems, like submitting them to a server
    console.log(selectedItems);
  }

  return (
<>

<ItemsContainer>
  <ItemsHeader>Could you please specify the exact rooms that you require us to relocate?</ItemsHeader>
  <ItemsTopLine>To ensure that we allocate the most suitable workforce for the job, it would be beneficial if you could provide us with a comprehensive inventory.</ItemsTopLine>
  <ItemsFormContainer>

      <ItemsForm>
        <SecBackground>
          <SecWrapper>
              <SecRow>
              
              <ItemList items={items} addItem={addItem} />
          <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
          </form>

              </SecRow>
          </SecWrapper>
        </SecBackground>


   
      <ItemsButtonWrap>
        <ItemsLeftButton>BACK</ItemsLeftButton>
        <ItemsRightButton>NEXT</ItemsRightButton>
      </ItemsButtonWrap>
      </ItemsForm>
    </ItemsFormContainer>
  </ItemsContainer>
</>
  );
}
export default Items;