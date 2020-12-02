import React from 'react';

const IconProgress = (props) => {
    
  const progress = props.value;

  const progressContainerStyle = {
    height: 10,
    width: `100%`,
    backgroundColor: '#e0e0de',
    borderRadius: 0,
    margin: 7,
    marginLeft: 0,
    marginRight: 0,
    position: 'relative'
  }

  const markerList = {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
  }                  

  const marker = {
    position: 'absolute',
    top: 0,
    width: 10,
    height: '100%',
    backgroundColor: 'white',
    marginLeft: '33%',
    zIndex: 1,
  }

  const marker2 = {
    position: 'relative',
    top: 0,
    width: 10,
    height: '100%',
    backgroundColor: 'white',
    marginLeft: '66%',
    zIndex: 1,
  }

  const progressFillerStyle = {
    verticalAlign: top,
    height: 0,
    width: 10,
    marginLeft: `${progress}%`,
    padding: 0,
    marginTop: 0,
    zIndex: 3,
    position: 'absolute'
  }
  
  const icon = {
    fontSize: 25,
    top: 0,
    marginTop: -12,
    zIndex: 2,
    borderRadius: 0,
  }

  return (
    <div style={progressContainerStyle}>
      <ul style={markerList}>
          <li style={marker}></li>
          <li style={marker2}></li>
        </ul>
        <div style={progressFillerStyle}>
        <p style={icon}>&#x25BC;</p>
      </div>
    </div>
  )
} 

export default IconProgress;