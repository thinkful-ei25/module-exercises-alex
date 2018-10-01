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
    let found = findbyId(id);
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
    const index = findbyId(item => item.id === id);
    store.items.splice(index, 1);
  };

  const toggleCheckedFilter = function(){
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setSearchTerm = function(search) {
    this.searchTerm = search;
  };

  
  return {
    items,
    hideCheckedItems,
    searchTerm,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,

  };

}() );