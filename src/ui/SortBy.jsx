/* eslint-disable */
import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParam, setSearchParam] = useSearchParams();
  const sortBy = searchParam.get("sortBy") || "";
  function handleSelectedOption(event) {
    searchParam.set("sortBy", event.target.value);
    setSearchParam(searchParam);
  }

  return (
    <div>
      <Select
        options={options}
        onChange={handleSelectedOption}
        value={sortBy}
        type="white"
      />
    </div>
  );
}

export default SortBy;
