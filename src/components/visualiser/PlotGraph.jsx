import React from 'react';
import Plot from 'react-plotly.js'; 

const PlotGraph = (props) => {
  return (
   <>   
     <Plot 
     
     data ={[
        {
      
                  x: props.f_arr,
                  y: props.s_arr,
                  name:props.name,
                  marker:{
                      color:props.color,
                      line:{
                          width:0,
                          color:"#587995",
                      },
                  },
                  type: props.type
        }
          
        
    ]}
     
     />
   </>
  )
}

export default PlotGraph    