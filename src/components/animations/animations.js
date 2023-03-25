export const animationOne = {
  in: {
    opacity: 1,
    x: -200,
    y: 0
  },
  
  out: {
    opacity: 0,
    x: 300,
    y: '-50vh'
  },

  end: {
    x: 0,
    y: 0,
    opacity: 1
  }
  };

  export const RightToLeft = {
    offscreen: {
      opacity: 1,
      zoom:1,
      x: 0
    },
    onscreen: {
      opacity: 0,
      zoom: 0.3,
      x: 300,
      transition: {
        type: "spring",
       
        duration: 0.8
      }
    }
  };

  export const LeftToRight = {
    offscreen: {
      opacity: 1,
      zoom:1,
      x: 0
    },
    onscreen: {
      opacity: 0,
      zoom: 0.3,
      x: -300,
      transition: {
        type: "spring",
      
        duration: 0.8
      }
    }
  };

  export const BottomToTop = {
    offscreen: {
      opacity: 1,
      zoom:1,
      y: 0,
      x:0
    },
    onscreen: {
      opacity: 0,
      zoom: 0.3,
      y: 300,
      transition: {
        type: "spring",
        
        duration: 0.8
      }
    }
  };

  export const PopIn = {
    offscreen: {
      opacity: 1,
      zoom:1,
      y: 0,
      x:0
    },
    onscreen: {
      opacity: 0,
      zoom: 0.3,

      transition: {
        type: "spring",
       
        duration: 0.8
      }
    }
  };

  export const sqv = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 }
  };



  export const BirdEgg = {
  offscreen:{x: 100, y:-300, zoom: 0.3, opacity:0},
  
    onscreen:{
      zoom: 1,
    x:0,
    y:0,
    opacity:1,
    rotate:[-60,30,0],
    transition: {type:"spring",
    bounce:0.5,
    duration:1.5}
  }
  
};

export const mouse = {
  offscreen:{y: 300},
    onscreen:{
      zoom: 1,
    y:0,
    opacity:1,
    rotate:[0,30,0],
    transition: {type:"spring",
    bounce:0.5,
    duration:1}
  }
  
};

  export const animationTwo = {
    in: {
      opacity: 1,
      y: 200,
      scale: 1
    },
    out: {
      opacity: 0,
      y: '-100vh',
      scale: 0.3
    },
    end: {
      y: 0,
      opacity: 1
    }
  };
  
  