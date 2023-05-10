
import styled from 'styled-components';




let peopleIconStyles = { background: "#E6E6FA" };
let rewardIconStyles = { background: "#DDA0DD" };
let socialIconStyles = {background: "#EE82EE"};
let plaqueIconStyles = {background: "#BA55D3"};
let networkIconStyles = { background: "#f9c84f" };
let artIconStyles = {background: "#FFD700"};
let goldIconStyles = {background: "#FFDF00"};

  export const RoadMapContainer = styled.div`
    
    overflow-x: hidden;
    margin-top: 75px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.486316) 0%, rgba(11, 37, 11, 0.4) 35.94%, rgba(23, 66, 23, 0.4) 52.6%, rgba(14, 80, 14, 0.5) 72.4%, rgba(8, 100, 9, 0.2) 100%);
  

    @media screen and (max-width: 480px) {
        overflow-x: hidden;
    }
`;

let timelineElements = [
    {
      id: 1,
      per: "20%",
      Header: "12 Weeks Before Your Move:",
      TopLine: "Preparation is key to a stress-free move",
      description:"Preparing for a move can be daunting, but breaking it down into manageable tasks over the 30 days leading up to your move can help reduce stress. Start by creating a moving folder where you can keep all your important documents, receipts, and notes. Label your boxes with their contents and where they should go in your new home. Notify your landlord or property manager of your move and any special requirements you may have. This is also a great time to declutter and donate items you no longer need. Don't forget to measure your furniture to ensure it fits in your new space",
      //buttonText: "",
      style: peopleIconStyles,
      date: "20%",
      icon: '',
      col: "#E6E6FA"
    },
    {
      id: 2,
      per: "40%",
      Header: "8 Weeks Before Your Move:",
      TopLine: "With only two weeks left, it's important to tie up any loose ends to ensure a smooth move",
      description: "As your move date approaches, there are some important tasks you'll need to complete to ensure a smooth transition. Notify your utility companies of your move and schedule service installations at your new home. Make sure to change your address with the post office and any relevant institutions, such as banks, credit cards, and subscriptions. Take care of minor repairs around your current home and ensure your new home is move-in ready",
      //buttonText: "",
      style: rewardIconStyles,
      date: "40%",
      icon: '',
      col: "#DDA0DD"
    },
    {
      id: 3,
      per: "20%",
      Header: "30 Days Before Your Move:",
      TopLine: "Preparation is key to a stress-free move",
      description:"Preparing for a move can be daunting, but breaking it down into manageable tasks over the 30 days leading up to your move can help reduce stress. Start by creating a moving folder where you can keep all your important documents, receipts, and notes. Label your boxes with their contents and where they should go in your new home. Notify your landlord or property manager of your move and any special requirements you may have. This is also a great time to declutter and donate items you no longer need. Don't forget to measure your furniture to ensure it fits in your new space",
      //buttonText: "",
      style: peopleIconStyles,
      date: "20%",
      icon: '',
      col: "#E6E6FA"
    },
    {
      id: 4,
      per: "40%",
      Header: "Two Weeks Before Your Move:",
      TopLine: "With only two weeks left, it's important to tie up any loose ends to ensure a smooth move",
      description: "As your move date approaches, there are some important tasks you'll need to complete to ensure a smooth transition. Notify your utility companies of your move and schedule service installations at your new home. Make sure to change your address with the post office and any relevant institutions, such as banks, credit cards, and subscriptions. Take care of minor repairs around your current home and ensure your new home is move-in ready",
      //buttonText: "",
      style: rewardIconStyles,
      date: "40%",
      icon: '',
      col: "#DDA0DD"
    },
    {
      id: 5,
      per: "60%",
      Header: "One Week Before Your Move:",
      TopLine: "With only one week left, it's time to make the final preparations for your move",
      description:"With just one week left before your move, it's time to finalize your preparations. Confirm your insurance coverage and inform your employer of your new address. Cancel local memberships, such as gym or club memberships, and confirm trash and recycling services with your new municipality. Organize your digital files and back them up to ensure nothing is lost in the move. Plan activities for your kids to keep them occupied during the move. Pack up your pantry and kitchen, deep clean your home, and share your move with friends and family",
      //buttonText: "",
      style: socialIconStyles,
      date: "60%",
      icon: '',
      col: "#EE82EE"
    },
    {
      id: 6,
      per: "80%",
      Header: "One Day Before Your Move:",
      TopLine: "With just one day left before your move, it's time to tie up any last-minute loose ends to ensure a smooth transition",
      description:"The day before your move is all about the final preparations. Check the weather forecast to ensure your move won't be affected. Keep your essentials, such as your wallet, phone, and keys, close by and pack a separate bag with items you'll need immediately after the move, such as toiletries and a change of clothes. Clean out your refrigerator and freezer and empty all appliances of hazardous chemicals. This is also a good time to confirm the arrival time of your movers and exchange contact information",
      style: plaqueIconStyles,
      date: "80%",
      icon: '',
      col: "#BA55D3"
    },
    {
      id: 7,
      per: "100%",
      Header: "Day of Your Move:",
      TopLine: "The final verdict. Its moving time!",
      description: "Today is the big day! Be sure to supervise the moving team and keep a close eye on your inventory to ensure nothing is damaged or lost in transit. Protect your home by laying down blankets to protect your floors and carpets. Keep your pets and kids safe by designating a safe space for them away from the moving chaos. Finally, make sure to say goodbye to your old home and leave it in the best condition possible for the new occupants",
      style: networkIconStyles,
      date: "100%",
      icon: '',
      col: "#f9c84f"
    },
    {
      id: 8,
      per: "110%",
      Header: "After Your Move:",
      TopLine: "Congratulations on successfully completing your move!",
      description:"Congratulations on your successful move! Now it's time to unpack, clean your new home, and settle into your new community. Arrange for trash pickup and recycle any boxes you don't plan to keep for future moves. Register to vote and update your driver's license and car registration. Finally, take the time to explore your new neighborhood and meet your new neighbors. Hosting a housewarming party is a great way to do this and celebrate your new home",
      style: artIconStyles,
      date: "110%",
      icon: '',
      col: "#FFD700"
    }
    
  ];
  

  export default timelineElements;