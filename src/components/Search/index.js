import React, {useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestHTTP } from '../../store/actions';
import CardItem from '../Card/CardItem';
import {SearchContainer, SearchContent, FormSearch,InputSearch,FaSearchCustom} from './SearchElements'

function Search () {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.products);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
      dispatch(requestHTTP());
    }, []);

    const [projectsData, setProjectsData] = useState(`${state.products.products}`);
    
    useEffect(() => {
      if (searchText === '') return;
      setProjectsData(() =>
        state.products.products.filter((item) =>
          item.name.toLowerCase().match(searchText.toLowerCase())
        )
      );
    }, [searchText]);
    const handleChange = (e) => {
      e.preventDefault();
      setSearchText(e.target.value);
      if (!e.target.value.length > 0) {
        setProjectsData(`${state.products.products}`);
      }
    };
    return(
        <SearchContainer>
        <SearchContent>
        <FormSearch>
          <InputSearch
            type="text"
            value={searchText}
            onChange={handleChange}
            placeholder="Busque por um produto"
          />
          <FaSearchCustom />
        </FormSearch>
        </SearchContent>
        {/* <div>
            {state.products.products.map((item) => (
              <CardItem key={item.ean} product={item} />                
            ))}
        </div> */}
        </SearchContainer>
    );
}




export default Search;