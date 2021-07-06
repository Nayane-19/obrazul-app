import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchList } from '../../store/actions';
import {SearchContainer, SearchContent, FormSearch,InputSearch,FaSearchCustom} from './SearchElements'


    
function Search() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products);
  const [value, setValue] = useState('')

 

   function handleSearch(value) {
    let payload = {   
        products: []   
    }
    const stateOld = state.productsOld
     state?.products?.products?.forEach((item) => {     
      if(item.name.toUpperCase() === value.target.value.toUpperCase()){
        payload.products.push(item);         
      }        
    })
    if(payload?.products?.length > 0 && payload !== undefined) {
      dispatch(searchList(payload))
    }else {
      dispatch(searchList(stateOld))
    }
  
    }

 

    return(
        <SearchContainer>
        <SearchContent>
        <FormSearch>
          <InputSearch
            type='search' 
            value={value} 
            onChange={(e) => setValue(e.target.value)}
            onInput={handleSearch}
            placeholder="Busque por um produto"
          />
          <FaSearchCustom />
        </FormSearch>
        </SearchContent>
        </SearchContainer>
    );
}




export default Search;