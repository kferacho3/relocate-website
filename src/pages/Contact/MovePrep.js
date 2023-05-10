import "./MovePrep.css";
//import { ReactComponent as WorkIcon } from "./network.svg";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import MovePrepElements, { RoadMapContainer } from "./MovePrepData";

import "react-vertical-timeline-component/style.min.css";

function MovePrep() {
  
  return (
    <RoadMapContainer>
    <div id = {'movePrep'}>
      <h1 className="title">ROAD MAP</h1>
      <VerticalTimeline lineColor = { "#fff" } className="vertical-timeline">
        
        {MovePrepElements.map((element) => {
          //let isWorkIcon = element.icon === "work";
          
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            
            <VerticalTimelineElement
              key={element.key}
              date ={element.date}
              
              dateClassName="date"
             
              //iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              //icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              iconStyle = {element.style}
              
              //icon = {<element.icon />}
            >
              <h2 className="per" style={{color: element.col}} >{element.per}</h2>
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  //className={`button ${
                    //isWorkIcon ? "workButton" : "schoolButton"
                  //}`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
    <hr size= "10"/>
    </RoadMapContainer>
  );
}

export default MovePrep;