function Filter({products, sorts, sorting}) {
  return (
          <div>
            <div className="category-right-header">
              <p>Showing 1– 4 of {products.length} results</p>
              <select value={sorts} onChange={sorting}>
                <option value="all">Default sorting</option>
                <option value="low">Sort by price: low to hight</option>
                <option value="high">Sort by price: hight to low</option>
              </select>
            </div>
          </div>
  );
}

export default Filter;
