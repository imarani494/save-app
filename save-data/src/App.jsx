import { useEffect, useState } from 'react';
import { fetchItems } from './api/fetchItems';
import ItemList from './components/ItemList';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import ReCaptcha from './components/ReCaptcha';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
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

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const updatedItems = [...paginatedItems];
    const [movedItem] = updatedItems.splice(result.source.index, 1);
    updatedItems.splice(result.destination.index, 0, movedItem);

    
    const newItems = [...items];
    newItems.splice(
      (currentPage - 1) * itemsPerPage,
      itemsPerPage,
      ...updatedItems
    );
    setItems(newItems);
  };

  return (
    <div className="app">
      <h1 className="app-title" style={{textAlign:'center'}}>Savecom</h1>
      {!recaptchaVerified && <ReCaptcha onVerify={setRecaptchaVerified} />}
      {recaptchaVerified && (
        <>
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <ItemList items={paginatedItems} onDragEnd={handleDragEnd} />
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
