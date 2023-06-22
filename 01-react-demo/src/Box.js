export default function Box(props) {

    // note: props are read-only
    const color = props.bgcolor ?? "white";
    // let number;
    // if (parseInt(props.number)) {
    //     number = props.number
    // } else {
    //     number = 0;
    // }

    return <>
      <div style={{
        "border":"1px solid black",
        "width":"100px",
        "height":"100px",
        "backgroundColor": color,
        "color":"black"
      }}>

        {props.number ?? 0}

      </div>
    </>
}