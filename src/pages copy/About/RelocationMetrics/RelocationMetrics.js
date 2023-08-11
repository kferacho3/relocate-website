
import React, { useState } from 'react';
//import Footer from '../components/Footer1/Footer';
import Navbar2 from '../../../components/Navbar/NavbarApplyForm';
import Sidebar from '../../../components/Sidebar/Sidebar';
import { facts, facts2, metricsHero, stat1, stat2, stat3, stat4, stat5 } from './Data';
import MetricsData from './RelocationMetricsData';
import MetricsFacts from './RelocationMetricsFacts';
import RelocationMetricsHero from './RelocationMetricsHero';
import MetricsInfo from './RelocationMetricsInfo';
//import { motion } from 'framer-motion';

//import { animationTwo } from '../components/animations/animations';

const RelocationMetrics = () => {
  const [isOpen, setIsOpen] = useState(false)
 
  const toggle = () => {
      setIsOpen(!isOpen)
  }
  
  return (
    <>
        <>
          <>
     
        
          
         <Sidebar/>
         <Navbar2 toggle={toggle}/>
         <RelocationMetricsHero {...metricsHero} />
         <MetricsInfo {...stat1}/>
         <MetricsInfo {...stat2}/>

         <MetricsFacts {...facts}/>
         <MetricsInfo {...stat3}/>
         <MetricsInfo {...stat4}/>
         <MetricsInfo {...stat5}/>

         <MetricsFacts {...facts2}/>
         <MetricsData />
        
         
         
          
         </>
        </>
      
    </>
  );
}

export default RelocationMetrics;