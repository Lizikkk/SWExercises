import React from 'react';

const ListItems = ({ id, name, complete, remove, isCompleted, restore }) => {
  return (
    <div className="container">   
      <div className="column">
        <div className="list-task">
          <p>Task{id}: {name}</p>
          {!isCompleted && <button className='completeBtn' onClick={() => complete(id)}>Complete</button>}
          {isCompleted && <button className='returnBtn' onClick={() => restore(id)}>Return</button>}
          <button className='removeBtn' onClick={() => remove(id)}>Remove</button>
        </div>
      </div>

    </div>
  );
};

export default ListItems;
