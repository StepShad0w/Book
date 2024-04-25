import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setTitleFilter,
  selectTitleFilter,
  resetFilters,
  setAuthorFilter,
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
  setOnlyFavoriteFilter,
} from "../../redux/slices/sliceFilter";
export default function Filter() {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const onlyFavoite = useSelector(selectOnlyFavoriteFilter)

  const handleTitleChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };
  const handleAuthorChange = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };
  const handleReset = () => {
    dispatch(resetFilters());
  };
  const handleOnlyFavoriteChange=()=> dispatch(setOnlyFavoriteFilter())
  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            value={titleFilter}
            placeholder="filter book by title..."
            onChange={handleTitleChange}
          ></input>
        </div>
        <div className="filter-group">
          <input
            type="text"
            value={authorFilter}
            placeholder="filter book by author..."
            onChange={handleAuthorChange}
          ></input>
        </div>
        <div className="filter-group">
          <label>
            <input type="checkbox" checked={onlyFavoite} onChange={handleOnlyFavoriteChange}></input>
            Only Favorite
          </label>
        </div>
        <button type="button" onClick={handleReset}>
          Reset filter
        </button>
      </div>
    </div>
  );
}
