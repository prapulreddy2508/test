import * as React from 'react';
import {
    Checkbox, Typography,
    TableCell,
    TableHead, TableRow,
    TableSortLabel
} from '@mui/material';
import { tableHeadData } from '../src/constant';

function TableHeaderCell() {
    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>

                {
                    tableHeadData.map((headCell) => (
                        <TableCell
                            key={headCell.id}
                            // align={headCell.numeric ? 'right' : 'left'}
                            padding={headCell.disablePadding ? 'none' : 'normal'}
                        >
                            <TableSortLabel>
                                <Typography variant='subtitle1'>{headCell.label} </Typography>
                            </TableSortLabel>
                        </TableCell>
                    ))
                }

            </TableRow>
        </TableHead>
    )
}

export default TableHeaderCell