import React from 'react';
import {SearchContainer, SearchContent, FormSearch,InputSearch,FaSearchCustom} from './SearchElements'


    
function Search({value, onChange}) {
  

  function handleChange(event) {
      onChange(event.target.value)
  }
    return(
        <SearchContainer>
        <SearchContent>
        <FormSearch>
          <InputSearch
            type='search' 
            value={value} 
            onChange={handleChange}
            placeholder="Busque por um produto"
          />
          <FaSearchCustom />
        </FormSearch>
        </SearchContent>
        </SearchContainer>
    );
}




export default Search;