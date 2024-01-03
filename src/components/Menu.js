import React, { useEffect, useMemo, useState } from "react";
import data from '../data.json'
import Item from './Item'
import gif from "./gif-1.gif"
import gify from "./gif-3.gif"
import ab from "./gif-4.gif"
import "./All.css"
const Menu = (props) => {
  //making use state for whole data, giving empty
  const [navList, setnavList] = useState([]);
  //Making use state for selected category in data, putting empty
  const [selectedCategory, setSelectedCategory] = useState();
  //Making use state for search bar putting empty 
  const [searchTerm, setSearchTerm] = useState('');

  //The purpose of this useEffect is to set the initial value of the navList state to the value of data when the component is mounted. If data is dynamic or fetched from an external source, this ensures that the navList state is initialized with the correct data when the component is first rendered.
  useEffect(() => {
    setnavList(data);
  }, []);
  
  //writing get filtered list 
  function getFilteredList() {
    // assigning filteredby category variable as , ex- if(selectedcategory='Breakfast')? o/p- selected category brkfast else whole list will display
    let filteredListByCategory = selectedCategory
      ? navList.filter((a) => a.type === selectedCategory)
      : navList;
    //searchTerm is state, if search term is ex-'RAMEN' then, it makes name to lowercase 'ramen' and checks it includes in data
    if (searchTerm) {
      filteredListByCategory = filteredListByCategory.filter(
        (item) => item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredListByCategory;
  }
  // The useMemo hook ensures that wholw is not recomputed unnecessarily during renders when there are no changes in the dependencies.
  var filteredList = useMemo(getFilteredList, [selectedCategory, searchTerm, navList]);

 //change function ensures to change values when an event is triggered
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value); //sets the value of selected category everytime we click on one category 
  }
  function handleSearchChange(event) {
    setSearchTerm(event.target.value); // sets the value of searchbar and updates it
  }


  return (
    <div>
      <nav className="container" id="navbar">
        <img src={gif} alt="my-gif" style={{
          width: "130px", height: "114px",
          position: "relative",
          bottom: "38px",
          left: "99px"
        }} />
        <h3>Food Panda</h3>
        <img src={gify} alt="my-gif" style={{
          width: "234px", height: "120px",
          position: "relative",
          bottom: "-37px",
          left: "349px"
        }} />
        <img src={ab} alt="my-gif" style={{
          width: "334px", height: "120px",
          position: "relative",
          top: "40px",
          left: "771px"
        }} />
      </nav>
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

        <div>
          <input
            type="text"
            id="search"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div id="con" className="container">
        {filteredList.map((item) => (
          <div style={{ margin: "11px 14px" }}>
            <Item {...item} name={item.name} text={item.text} price={item.price} image={item.image} />
          </div>
        ))}
      </div>

    </div>
  )
}

export default Menu
