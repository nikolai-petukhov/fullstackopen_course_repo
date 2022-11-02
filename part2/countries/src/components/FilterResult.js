import Country from "./Country";
import FilterResultItem from "./FilterResultItem";

const FilterResult = ({ countries }) => {

  if (countries.length > 10) {
    return <div>To many matches, specify another filter</div>;
  } else if (countries.length > 2 && countries.length < 10) {
    return (
      <div>
        {
          countries.map(
            (country, index) => <FilterResultItem key={index} country={country} />
          )
        }
      </div>
    );
  } else if (countries.length === 1) {
    return <Country country={countries[0]} />;
  }

};

export default FilterResult;
