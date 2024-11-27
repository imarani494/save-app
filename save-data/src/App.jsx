import { useEffect, useState } from 'react';
import { fetchItems } from './api/fetchItems';
import ItemList from './components/ItemList';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const itemsPerPage = 10;

  useEffect(() => {
    fetchItems().then(setItems);
  }, []);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedItems = Array.from(filteredItems);
    const [movedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, movedItem);

    const updatedItems = items.map((item) =>
      reorderedItems.find((reorderedItem) => reorderedItem.id === item.id) || item
    );

    setItems(updatedItems);
  };

  return (
    <div className="app">
      <h1 style={{ textAlign: 'center', color: 'white' }}>Savecom.com</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ItemList items={paginatedItems} onDragEnd={handleDragEnd} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredItems.length / itemsPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default App;
