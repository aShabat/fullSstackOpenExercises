const SearchForm = ({ searchString, handleSearchChange }) => (
  <form>
    find countries <input value={searchString} onChange={handleSearchChange} />
  </form>
)

export default SearchForm