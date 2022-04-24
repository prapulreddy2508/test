import * as React from 'react';
import {
    Link, Checkbox, TableBody,
    TableCell, TableRow,
} from '@mui/material';
import { tableBodyData } from '../src/constant';

function TableBodyCell() {
    return (
        <TableBody>

            {
                tableBodyData.map((row) => (
                    <TableRow key={row.duration}>
                        <TableCell padding="checkbox">
                            <Checkbox
                                color="primary"
                                inputProps={{
                                    'aria-labelledby': 'labelId',
                                }}
                            />
                        </TableCell>
                        <TableCell
                            component="th"
                            scope="row"
                            padding="none"
                        >
                            {row.skills}
                        </TableCell>
                        <TableCell >{row.experience}</TableCell>
                        <TableCell >{row.contract}</TableCell>
                        <TableCell >{row.duration}</TableCell>
                        <TableCell >{row.resources}</TableCell>
                        <TableCell ><Link>View Details</Link></TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    )
}

export default TableBodyCell 