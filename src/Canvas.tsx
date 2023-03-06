import React from "react";

function Canvas(props: any) {
  const { count } = props;
  const length = count * 20 + 1000;
  return (
    <div className="expensive-view">
      <h4>DIV count:{length}</h4>
      {Array.from(Array(length).keys()).map((v) => {
        const style = {
          backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
            16
          )}`,
          display: "inline-block",
          width: "10px",
          height: "10px",
        };
        return <div className="box" key={v} style={style}></div>;
      })}
    </div>
  );
}

export default React.memo(Canvas);
