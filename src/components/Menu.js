import React, { useEffect, useMemo, useState } from "react";
import data from '../data.json'
import Item from './Item'
import "./All.css"
const Menu = (props) => {
  const [navList, setnavList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
    useEffect(() => {
      setnavList(data);
      console.log(data)
    }, []);
    function getFilteredList() {
      if (!selectedCategory) {
        return navList;
      }
      return navList.filter((a) => a.type === selectedCategory);
    }
    var filteredList = useMemo(getFilteredList, [selectedCategory, navList]);
    function handleCategoryChange(event) {
      setSelectedCategory(event.target.value);
    }
    
  return (
    <div>
       
        <div className="button-group">
         <button
          id="b" className={selectedCategory === '' ? 'active' : ''}
          onClick={() => handleCategoryChange({ target: { value: '' } })}
        >
          All
        </button>
        <button
          id="b" className={selectedCategory === 'Breakfast' ? 'active' : ''}
          onClick={() => handleCategoryChange({ target: { value: 'Breakfast' } })}
        >
          Breakfast
        </button>
        <button
          id="b" className={selectedCategory === 'Lunch' ? 'active' : ''}
          onClick={() => handleCategoryChange({ target: { value: 'Lunch' } })}
        >
          Lunch
        </button>
        <button
          id="b" className={selectedCategory === 'Dinner' ? 'active' : ''}
          onClick={() => handleCategoryChange({ target: { value: 'Dinner' } })}
        >
          Dinner
        </button>
      </div>
        <div id="con" className="container">
            {filteredList.map((item)=>(
              <div style={{ margin: "11px 14px"}}>
                <Item {...item} name={item.name} text={item.text} price={item.price} image={item.image} />
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Menu
