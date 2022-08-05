import React from "react"

// change from small to large screen size

function Container(props) {
  return (
    <div
      className={"container py-md-5 " + (props.wide ? "" : "container--narrow")}
    >
      {props.children}
    </div>
  );
}

export default Container;
