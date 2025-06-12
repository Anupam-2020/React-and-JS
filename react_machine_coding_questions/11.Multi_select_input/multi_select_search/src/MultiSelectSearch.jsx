import React from "react";

const data = [
  "Java",
  "Javascript",
  "Python",
  "C++",
  "C#",
  "Ruby",
  "PHP",
  "Swift",
  "Go",
  "Kotlin",
  "Rust",
  "TypeScript",
  "Scala",
  "Perl",
  "Dart",
  "Lua",
  "Haskell",
  "Elixir",
  "Clojure",
  "Objective-C",
  "Visual Basic",
  "Assembly",
  "MATLAB",
  "R",
  "SQL",
  "HTML",
  "CSS"
];

const MultiSelectSearch = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [suggestions, setSuggestions] = React.useState([]);

  const removeItem = (data) => {
    let updatedSelectedItems = selectedItems.filter((item) => (
        data !== item
    ))
    setSelectedItems(updatedSelectedItems);
  };

  const inputHandler = (e) => {
    let inputData = e.target.value;
    setInputValue(inputData);
    let matchingValues = data.filter((item) => {
        return !selectedItems.includes(item) && item.toLowerCase().includes(inputData) && inputData !== "";
    })
    setSuggestions(matchingValues);
  };

  const selectHandler = (item) => {
    let selectedValues = [...selectedItems, item];
    setSelectedItems(selectedValues);
    setInputValue("");
    setSuggestions([]);
  };

  return (
    <div className="multi-select-search">
      <div className="search-input">
        {selectedItems &&
          selectedItems.map((item, index) => (
            <span key={index}>
              {item}
              <button onClick={() => removeItem(item)}>&times;</button>
            </span>
          ))}
        <input
          type="text"
          value={inputValue}
          onChange={inputHandler}
          placeholder="Search here..."
          onKeyDown={(e) => {
            if(e.key === 'Backspace' && inputValue === "" && selectedItems.length > 0) {
              removeItem(selectedItems[selectedItems.length - 1]);
            }
          }}
        />
      </div>
      <ul className="suggestion_wrapper">
        {suggestions &&
          suggestions.map((item, index) => (
            <li onClick={() => selectHandler(item)} className="suggestion" key={index}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MultiSelectSearch;