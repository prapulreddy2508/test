import * as React from 'react';
import {
    Paper, Typography,
    Table, TableContainer, Box
} from '@mui/material';
import TableHeaderCell from './TableHeaderCell';
import TableBodyCell from './TableBodyCell';
import TableToolbar from './TableToolbar';

function TableCustom() {


    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', p: 3 }}>

                <Typography variant="h5" >Global list on requriments</Typography>

                {/* table toolbar */}

                <TableToolbar />

                {/* table toolbar */}


                <TableContainer sx={{ height: 300 }}>
                    <Table>

                        {/* table header component */}

                        <TableHeaderCell />

                        {/* table header component */}


                        {/* table body component */}

                        <TableBodyCell />

                        {/* table body component */}

                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}


export default TableCustom