import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from '../src/theme';

function SearchField(props) {
    return (
        <Search sx={{ display: 'flex', alignItems: 'center', }}>
            <SearchIconWrapper>
                <SearchIcon style={{ color: 'rgba(14, 54, 156, 1)' }} />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
    )
}

export default SearchField