import "./MovePrep.css";
//import { ReactComponent as WorkIcon } from "./network.svg";
import { TruckFast } from '@styled-icons/fa-solid/TruckFast';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from 'styled-components';
//import ContactHero from "../Connect/ContactHero";
import roadMap from "../ContactImg/RelocateRoadmap.svg";
import { movePrepHero, prepInfo, prepInfo2, roadTips, roadTips2 } from "../Data";
import MovePrepElements, { RoadMapContainer } from "./MovePrepData";
import MovePrepHero from "./MovePrepHero";
import MovePrepInfo from "./MovePrepInfo";
import MovePrepTips from "./MovePrepTips";

const Truck = styled(TruckFast)`

`
const PrepImgWrap = styled.div`
  position: absolute;
    width: 225px;
    height: 125px;
    margin-top: -25px;
    transform: ${({trans}) => (trans ? 'translateX(-15%)' : 'translateX(100%)')};
    @media screen and (max-width: 768px) {
      zoom: 1.1;
      transform: ${({trans}) => (trans ? 'translate(-10%, 50%)' : 'translate(95%, 50%)')};
   
    }
`;
const RoadMapHeader= styled.h2`
  
  transform: ${({text}) => (text ? 'translateX(10%)' : 'translateX(-80%)')};
  @media screen and (max-width: 768px) {
       
      transform: ${({text}) => (text ? 'translate(25%, 25%)' : 'translate(-75%, 25%)')};
    
     }
    


`;
const RoadMapSubtitle = styled.p`
  
  transform: ${({text}) => (text ? 'translateX(10%)' : 'translateX(-80%)')};
  @media screen and (max-width: 768px) {
       
       
      transform: ${({text}) => (text ? 'translate(20%, 25%)' : 'translate(-75%, 25%)')};
     
      }

`;

const RoadMapImg = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    

`;

const RoadMapImgWrap = styled.div`
   width: 1095px;
   height: 745px;
   margin-left: 50%;
   transform: translateX(-50%);
   @media screen and (max-width: 1000px) {
       
       zoom: 0.85;
 
     }
    @media screen and (max-width: 768px) {
       
      zoom: 0.7;

    }
    @media screen and (max-width: 600px) {
       
       zoom: 0.4;
 
     }
     @media screen and (max-width: 450px) {
       
       zoom: 0.3;
 
     }
`;

const PrepImg = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    

`;

function MovePrep({trans}) {
  
  return (
    <>
    <MovePrepHero {...movePrepHero}/>
    <MovePrepTips {...roadTips}/>
    <MovePrepInfo {...prepInfo}/>
    <MovePrepInfo {...prepInfo2}/>
    <MovePrepTips {...roadTips2}/>
    <RoadMapContainer>
    <div id = {'movePrep'}>
    <RoadMapImgWrap>
              <RoadMapImg src={roadMap}/>
            </RoadMapImgWrap>
      <VerticalTimeline lineColor = { "linear-gradient(180deg, #00FF01 0%, #1F5210 100%)" } className="vertical-timeline" >
        
        {MovePrepElements.map((element) => {
          //let isWorkIcon = element.icon === "work";
          
      

          return (
            
            <VerticalTimelineElement
              key={element.key}
              contentStyle={{ width: '525px', background: 'linear-gradient(180deg, #00FF01 0%, #1F5210 100%)', color: '#fff' }}
             
              dateClassName="date"
             
              iconStyle = {element.style}
              //icon = {element.icon}
              
              icon = {<Truck />}
            >
            <PrepImgWrap trans={element.trans}>
              <PrepImg src={element.img}/>
            </PrepImgWrap>
              <RoadMapHeader text={element.text} className="per" style={{color: element.col}} >{element.Header}</RoadMapHeader>
             
              
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <RoadMapSubtitle text={element.text} id="description">{element.description}</RoadMapSubtitle>
       
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
    <hr size= "10"/>
    </RoadMapContainer>
    </>
  );
}

export default MovePrep;