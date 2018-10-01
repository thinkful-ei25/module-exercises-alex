'use strict';

const store = (function() {
  
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];

  const hideCheckedItems = false;
  const searchTerm = '';

  const findbyId = function(id) {
    return store.items.find(item => item.id === id);
  };

  const addItem = function(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    } catch(error){
      console.log('Cannot add item: '+ error.message);
    }
  };

  const findAndToggleChecked = function(id) {
    let found = this.findbyId(id);
    found.checked = !found.checked;
  };
  
  
  const findAndUpdateName = function(id, newName){
    try{
      Item.validateName(newName);
      let found = findbyId(id);
      found.name = newName;
    } catch(error){
      console.log('Cannot update name: ' + error.message);
    }
  };

  const findAndDelete = function(id){
    const index = store.items.findIndex(item => item.id === id);
    store.items.splice(index, 1);
  };
  
  return {
    items,
    hideCheckedItems,
    searchTerm,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
  };

}() );