import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../styles/ItemList.css';

const ItemList = ({ items, onDragEnd }) => (
  <DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId="items">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="item-list"
        >
          {items.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
              {(provided) => (
                <div
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                  className="item"
                >
                  <img src={item.image} alt={item.title} className="item-image" />
                  <p className="item-title">{item.title}</p>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
);

export default ItemList;
