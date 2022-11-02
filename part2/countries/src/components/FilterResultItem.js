import { useState } from 'react';
import Country from './Country';

const FilterResultItem = ({ country }) => {
    const [showCountry, setShowCountry] = useState(false);

    const showButtonHandler = () => {
        setShowCountry(!showCountry);
    };

    return (
        <div>
            {country.name.common}{' '}
            <button onClick={showButtonHandler}>{!showCountry ? 'show' : 'hide'}</button>
            {showCountry ? <Country country={country} /> : null}
        </div>
    );
};

export default FilterResultItem;