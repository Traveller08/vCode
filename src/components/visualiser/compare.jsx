import React from "react";
import Plot from "react-plotly.js";


const config = {
    displayModeBar: false, // this is the line that hides the bar.
    responsive:true,
  };
  const  layout={
    paper_bgcolor : "rgba(0, 0, 0, 0)",
    plot_bgcolor  : "rgba(0, 0, 0, 0)",
    fig_bgcolor   : "rgba(0, 0, 0, 0)",
    title:"Friends ratings",
    titlefont:{
      size:18,
      color:"#ffd586bf",
    },
    xaxis: {
        title:"Users",
        titlefont:{
            size: 16,
            color:"#ffd586bf",
        },
        tickfont: {
        size: 14,
        color:"#587995",
      },
      gridwidth:0,
    },
    yaxis: {
      title: 'Ratings',
      titlefont:{
        size:16,
        color:"#ffd586bf",
      },
      tickfont: {
        size: 14,
        color:"#587995",
      },
      gridwidth:0.4,
    },
    legend: {
      x: 0,
      y: 1.0,
      bgcolor:"#587995",
      bordercolor:"#587995",
    },
    barmode: 'group',
    bargap: 0.15,
    bargroupgap: 0.1,
  }
  const  layout1={
    paper_bgcolor : "rgba(0, 0, 0, 0)",
    plot_bgcolor  : "rgba(0, 0, 0, 0)",
    fig_bgcolor   : "rgba(0, 0, 0, 0)",
    title:"Friends performance",
    titlefont:{
      size:18,
      color:"#ffd586bf",
    },
    xaxis: {
        title:"Contests",
        titlefont:{
            size: 16,
            color:"#ffd586bf",
        },
        tickfont: {
        size: 14,
        color:"#587995",
      },
      showgrid:false,
      showticklabels: false,
    },
    yaxis: {
      title: 'Ratings',
      titlefont: {
        size: 16,
        color:"#ffd586bf",
      },
      tickfont: {
        size: 14,
        color:"#587995",
      },
      showline:false,
    },
    legend: {
      x: 1.0,
      y: 0,
      bgcolor: 'none',
      color:"white",
    },
   
    barmode: 'group',
    bargap: 0.15,
    bargroupgap: 0.1,
    
  }
  const  layout3={
    paper_bgcolor : "rgba(0, 0, 0, 0)",
    plot_bgcolor  : "rgba(0, 0, 0, 0)",
    fig_bgcolor   : "rgba(0, 0, 0, 0)",
    titlefont:{
      size:18,
      color:"#ffd586bf",
    },
    xaxis: {
        title:"Users",
        titlefont:{
            size: 16,
            color:"#ffd586bf",
        },
        tickfont: {
        size: 14,
    color:"#587995",
      },
      gridwidth:0,
    },
    yaxis: {
      title: 'No of attempted problems',
      titlefont: {
        size: 16,
        color:"#ffd586bf",
      },
      tickfont: {
        size: 14,
    color:"#587995",
      },
      gridwidth:0.4,
    },
    legend: {
      x: 0,
      y: 1.0,
      color:"#587995",
      bordercolor: '#ffd586bf'
    },
    // barmode: 'group',
    // bargap: 0.15,
    // bargroupgap: 0.1,
    
  }
  const  layout2={
    paper_bgcolor : "rgba(0, 0, 0, 0)",
    plot_bgcolor  : "rgba(0, 0, 0, 0)",
    fig_bgcolor   : "rgba(0, 0, 0, 0)",
    
    titlefont:{
      size:18,
      color:"#ffd586bf",
    },
    xaxis: {
        title:"Users",
        titlefont:{
            size: 16,
            color:"#ffd586bf",
        },
        tickfont: {
        size: 14,
        color:"#587995",
      },
      gridwidth:0,
    },
    yaxis: {
        title:"No of problems solved today",
      titlefont: {
        size: 16,
        color:"#ffd586bf",
      },
      tickfont: {
        size: 14,
        color:"#587995",
      },
      gridwidth:0.4,
    },
    legend: {
      x: 0,
      y: 1.0,
      bgcolor:"#587995",
      bordercolor:"#587995",
    },
    barmode: 'group',
    bargap: 0.15,
    bargroupgap: 0.1,
    
  }
  const  layout4={
    paper_bgcolor : "rgba(0, 0, 0, 0)",
    plot_bgcolor  : "rgba(0, 0, 0, 0)",
    fig_bgcolor   : "rgba(0, 0, 0, 0)",
    
    titlefont:{
      size:18,
      color:"#ffd586bf",
    },
    xaxis: {
        title:"Users",
        titlefont:{
            size: 16,
            color:"#ffd586bf",
        },
        tickfont: {
        size: 14,
        color:"#587995",
      },
      gridwidth:0,
    },
    yaxis: {
        title:"No of solved problems",
      titlefont: {
        size: 16,
        color:"#ffd586bf",
      },
      tickfont: {
        size: 14,
        color:"#587995",
      },
      gridwidth:0.4,
    },
    legend: {
      x: 0,
      y: 1.0,
      bgcolor:"#587995",
      bordercolor:"#587995",
    },
    barmode: 'group',
    bargap: 0.15,
    bargroupgap: 0.1,
    
  }
  const  layout5={
    paper_bgcolor : "rgba(0, 0, 0, 0)",
    plot_bgcolor  : "rgba(0, 0, 0, 0)",
    fig_bgcolor   : "rgba(0, 0, 0, 0)",
    
    titlefont:{
      size:18,
      color:"#ffd586bf",
    },
    xaxis: {
        title:"Users",
        titlefont:{
            size: 16,
            color:"#ffd586bf",
        },
        tickfont: {
        size: 14,
        color:"#587995",
      },
      gridwidth:0,
    },
    yaxis: {
        title:"No of unsolved problems",
      titlefont: {
        size: 16,
        color:"#ffd586bf",
      },
      tickfont: {
        size: 14,
        color:"#587995",
      },
      gridwidth:0.4,
    },
    legend: {
      x: 0,
      y: 1.0,
      bgcolor:"#587995",
      bordercolor:"#587995",
    },
    barmode: 'group',
    bargap: 0.15,
    bargroupgap: 0.1,
    
  }
const compare = () => {
  return (
    <>
    
    </>
  )
}

export default compare;