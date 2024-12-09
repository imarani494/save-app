import React, { useState, useEffect } from "react";
import { fetchItems } from "./api/fetchItems";
import ItemList from "./components/ItemList";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import ReCaptcha from "./components/ReCaptcha";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [draggedItem, setDraggedItem] = useState(null);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [draggedOverIndex, setDraggedOverIndex] = useState(null);
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);
  const itemsPerPage = 10;

  useEffect(() => {
    const loadItems = async () => {
      const data = await fetchItems();
      setItems(data);
    };
    loadItems();
  }, []);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  t
  const handleDragStart = (e, item, index) => {
    setDraggedItem(item);
    setDraggedIndex(index);
    e.dataTransfer.setData("text/plain", item.id);
  };

 
  const handleDragOver = (e, index) => {
    e.preventDefault();
    setDraggedOverIndex(index);
  };

 
  const handleDrop = (e, targetItem, targetIndex) => {
    e.preventDefault();
    if (draggedIndex === targetIndex) return;

    const updatedItems = [...items];
    updatedItems.splice(draggedIndex, 1);
    updatedItems.splice(targetIndex, 0, draggedItem);

    setItems(updatedItems);
    setDraggedItem(null);
    setDraggedIndex(null);
    setDraggedOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setDraggedIndex(null);
    setDraggedOverIndex(null);
  };

  return (
    <div className="app">
      <h1 className="app-title" style={{ textAlign: "center" }}>
        Savecom
      </h1>
      {!recaptchaVerified && <ReCaptcha onVerify={setRecaptchaVerified} />}
      {recaptchaVerified && (
        <>
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <ItemList
            items={paginatedItems}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            draggedOverIndex={draggedOverIndex}
            onDragEnd={handleDragEnd}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredItems.length / itemsPerPage)}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default App;
