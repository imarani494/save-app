import React from 'react';

const ItemList = ({ items, onDragStart, onDragOver, onDrop, draggedOverIndex, onDragEnd }) => (
  <div className="item-list">
    {items.map((item, index) => (
      <div
        key={item.id}
        draggable
        onDragStart={(e) => onDragStart(e, item, index)}
        onDragOver={(e) => onDragOver(e, index)}
        onDrop={(e) => onDrop(e, item, index)}
        onDrag={(e) => e.preventDefault()} 
        className={`item ${draggedOverIndex === index ? 'dragged-over' : ''}`}
      >
        <img src={item.image} alt={item.title} className="item-image" />
        <p className="item-title">{item.title}</p>
      </div>
    ))}
  </div>
);

export default ItemList;
