import React, {useEffect, useState } from 'react';
import {Section} from '../../styles/styles'
import {SearchContent, FormSearch,InputSearch,FaSearchCustom} from './SearchElements'

function Search () {
    const [searchText, setSearchText] = useState('');
    // const [projectsData, setProjectsData] = useState(state);
    // useEffect(() => {
    //   if (searchText === '') return;
    //   setProjectsData(() =>
    //     state.products.products.filter((item) =>
    //       item.name.toLowerCase().match(searchText.toLowerCase())
    //     )
    //   );
    // }, [searchText]);
    const handleChange = (e) => {
      e.preventDefault();
      setSearchText(e.target.value);
      if (!e.target.value.length > 0) {
        // setProjectsData(state.products);
      }
    };
    return(
        <Section>
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
        </Section>
    );
}




export default Search;