import React, { useMemo } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {attendanceRows, attendanceHeadCells} from 'modules/core/consts/tableHead';
import { HeadCell,  } from 'modules/core/consts/tableHead';
import TableHead from "@mui/material/TableHead";
import DatePickerViews from "modules/hhrr/employee-profile/components/DatePicker";


interface EnhancedTableProps {
    headCells: readonly HeadCell[];
}
  const EnhancedTableHead: React.FC<EnhancedTableProps> = (props) => {
    const {  headCells } = props;

    return (

        <TableHead>
            <TableRow   sx={{height:'56px',bgcolor:"#F7F7F7"}}>
                {headCells.map((headCell) => (
                    <TableCell
                        sx={{fontWeight: 'bold', fontSize: '16px', pl: 2,width: ''}}
                        key={headCell.id}
                        align={headCell.numeric ? 'left' : 'left'}
                        padding={headCell.disablePadding ? 'normal' : 'none'}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

export default function AttendanceTab() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(7);
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - attendanceRows.length) : 0;

    const visibleRows = useMemo(
        () =>
            [...attendanceRows].slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
        [ page, rowsPerPage],
    );
    const getStatusStyles = (status: string) => {
        return {
            bgcolor: status === 'On Time' ? '#ecf9f3' : '#fce4e4',
            color: status === 'Late' ? '#f44336' : '#3FC28A',
            width: 'fit-content',
            py: 0.5,
            px: 2.2,
            borderRadius: 1,
        };
    };

    const getCheckStyles = (time: string, isCheckIn: boolean) => ({
        bgcolor: time === (isCheckIn ? '09:28 AM' : '09:28 PM') ? '#ecf9f3' : '#fce4e4',
        color: time === (isCheckIn ? '09:28 AM' : '09:28 PM') ? '#3FC28A' : '#f44336',
        width: 'fit-content',
        py: 0.5,
        px: 1,
        mx: 1,
        borderRadius: 1,
    });

    return (
        <Box sx={{ bgcolor: 'grey.100', margin: 'auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/*<Box>*/}
                {/*    <DatePickerViews/>*/}
                {/*</Box>*/}
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="medium">
                        <EnhancedTableHead
                            headCells={attendanceHeadCells}
                        />
                        <TableBody>
                            {visibleRows.map((row, index) => {
                                return (
                                    <TableRow
                                        sx={{height:'50px'}}
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row.id}>
                                        <TableCell padding="checkbox" sx={{pl:2}}>{row.date}</TableCell>

                                        <TableCell padding={"none"} sx={{pl:2 ,borderRight:'solid 1px lightgray',borderLeft:'solid 1px lightgray'}}>
                                      <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',width:'fit-content'}}>
                                          <Box sx={getCheckStyles(row.checkIn[0],true)}>{row.checkIn[0]}</Box> -
                                          <Box sx={getCheckStyles(row.checkIn[1],false)}>{row.checkIn[1]}</Box>
                                      </Box>
                                        </TableCell>
                                        <TableCell padding={"none"}  sx={{pl:2}}><Box sx={getStatusStyles(row.status)}>{row.status}</Box></TableCell>
                                        <TableCell padding={"none"} sx={{pl:2}}>{row.Break}</TableCell>
                                        <TableCell padding={"none"} sx={{pl:2}}>{row.hours}</TableCell>
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={attendanceRows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}
