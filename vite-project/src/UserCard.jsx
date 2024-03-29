
import { Button } from "antd";
import { useState } from "react";

function UserCard(props) {

    const [counter, setCounter] = useState(0) 

  const handleClick = () => {
    setCounter(counter + 1)
  };

  return (
    <div className="user-card">
      <img src="https://picsum.photos/200" alt="" />
      <h3>{props.name}</h3>
      <Button className="mt-2 mx-1 bg-slate-300">Ver mas</Button>
      <Button onClick={handleClick} className="mt-2 mx-1">
        Like 
        <span>{counter}</span>
      </Button>
    </div>
  );
}

export default UserCard;

