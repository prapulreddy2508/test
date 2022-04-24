import * as React from 'react';
import {
    FormControl, InputLabel,
    Select, MenuItem,
    Button,
    Toolbar, Box
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from '../src/theme';
import { tableToolBarDropdownLabels } from '../src/constant';
import FilterSkills from './FilterSkills';
import SearchField from './SearchField';


function TableToolbar() {

    const [skills, setSkill] = React.useState('');


    return (
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

            <>
                {/* <Search sx={{ display: 'flex', alignItems: 'center', }}>
                    <SearchIconWrapper>
                        <SearchIcon style={{ color: 'rgba(14, 54, 156, 1)' }} />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search> */}

                <SearchField />

                {
                    tableToolBarDropdownLabels.map((label) => (
                        <React.Fragment key={label}>
                            <Box sx={{ minWidth: '120px' }} >
                                <FormControl fullWidth size='small'>
                                    <InputLabel>{label}</InputLabel>
                                    <Select
                                        // value={skills}
                                        label={label}
                                    // onChange={(e) => setSkill(e.target.value)}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </React.Fragment>
                    ))
                }

            </>

            {/* filtering form goes here */}

            <FilterSkills />

            {/* filtering form goes here */}
            <Button variant='contained'>Apply</Button>
        </Toolbar >
    )
}

export default TableToolbar