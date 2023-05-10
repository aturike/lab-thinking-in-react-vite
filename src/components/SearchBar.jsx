function SearchBar({ inputSearch, setinputSearch }) {
  const handleChange = (event) => {
    switch (event.target.type) {
      case "text":
        setinputSearch({
          ...inputSearch,
          [event.target.name]: event.target.value,
        });
        break;

      case "checkbox":
        setinputSearch({
          ...inputSearch,
          [event.target.name]: event.target.checked,
        });

        break;
      default:
        setinputSearch({ ...inputSearch });
    }
  };

  return (
    <div>
      <label>
        Search{" "}
        <input
          type="text"
          name="search"
          value={inputSearch.search}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          name="isInStock"
          type="checkbox"
          checked={inputSearch.isInStock}
          onChange={handleChange}
        />{" "}
        Only show products in stock
      </label>
    </div>
  );
}

export default SearchBar;
