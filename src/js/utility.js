const filterCategory = (cardData, category) => {
    return cardData.filter((data) => data.category === category);
  };
  
  export default filterCategory;