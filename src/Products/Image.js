import React from "react";

export default props => {
  return (
    <img src={`https://picsum.photos/id/${props.src}/500`} alt={props.id} />
  );
};
