import React from 'react';

const Tool = (props) => {
  let icon = null;

  if (props.type === 'PENCIL') {
    icon = <i className="fas fa-pencil-alt" />
  }

  if (props.type === 'FILL') {
    icon = <i className="fab fa-bitbucket" />
  }

  return (
    <div
      onClick={() => props.onToolClick(props.type)}
      style={{
        border: props.activeTool === props.type ? '1px solid black' : 'none', 
      }}
    >
      {icon}
      {props.type}
    </div>
  )
};

export default Tool;