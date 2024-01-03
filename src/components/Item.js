import { React, useState } from 'react'
import "./All.css"
import "./Item.css"

const Item = (props) => {
    let { name, price, text, image,type} = props;
    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(count => count + 1);
    };
      //decrease counter
    const decrease = () => {
      setCounter(count => count - 1);
    };
    
    return (
        
        < div id="div-1" className='item'>
           
                <img src={image}
                    style={{ width: "116px", height: "166px",borderRadius: "29px",
                            marginTop: "1px"}} 
                    alt="" />
          
            <div className="item-details">
                <div id="name" className="card-title">{name}</div>
                <div id="text" className="card-text">{text}</div>
                    <div className="btns" style={{display: "flex",
                                                 flexDirection: "column",
                                                 justifyContent: "center",
                                                 alignItems: "flex-end",
                                                 margin: "7px"}}>
                        <div style={{marginTop: "1px"}}>
                            <button type="button"  className="btn-primary-1" onClick={increase} >Add +</button>
                            <button type="button" disabled={counter<1} className="btn-primary-2" onClick={decrease} >Remove -</button>
                        </div>

                    <button type="button" className="btn-primary">Rs. {price}</button>
                    <span className="counter__output">Total Cost: {counter*price}</span>
                    </div>
            </div>   
            <div>
      {/* <span className="item-label">Category:</span>
      {type} */}
    </div>    
        </div>
        

    )
}

export default Item
