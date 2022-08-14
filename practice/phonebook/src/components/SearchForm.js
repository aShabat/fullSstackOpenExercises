const SearchForm = ({ searchString, handleSearchChange }) => (
  <form>
    <div>filter shown with <input value={searchString} onChange={handleSearchChange}/></div>
  </form>
)

export default SearchForm