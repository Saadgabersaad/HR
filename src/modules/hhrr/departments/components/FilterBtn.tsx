import React, { useState, useRef } from 'react';
import {
    Button,
    ButtonGroup,
    ClickAwayListener,
    Grow,
    Paper,
    Popper,
    MenuItem,
    MenuList,
    Box,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FilterListIcon from '@mui/icons-material/FilterList';

export default function FilterBtn() {
    const optionGroups = [
        {
            title: 'Position Options',
            options: [
                { label: 'Admin', backgroundColor: '#F7F7F7', color: '' },
                { label: 'Manager', backgroundColor: '#F7F7F7', color: '#589E67' },
                { label: 'HR', backgroundColor: '#F7F7F7', color: '#4976F4' },
                { label: 'User', backgroundColor: '#F7F7F7', color: '#B1AB1D' },
            ],
        },
        {
            title: 'Department Options',
            options: [
                { label: 'Depart-1', backgroundColor: '#F7F7F7', color: '#589E67' },
                { label: 'Depart-3', backgroundColor: '#F7F7F7', color: '#B1AB1D' },
                { label: 'Depart-2', backgroundColor: '#F7F7F7', color: '#954BAF' },
            ],
        },
        {
            title: 'Status Options',
            options: [
                { label: 'Active', backgroundColor: '#F7F7F7', color: '#589E67' },
                { label: 'Inactive', backgroundColor: '#F7F7F7', color: '#B1AB1D' },
            ],
        },
    ];

    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => setOpen((prev) => !prev);
    const handleClose = (event: Event) => {
        if (anchorRef.current?.contains(event.target as HTMLElement)) return;
        setOpen(false);
    };

    return (
        <>
            <ButtonGroup
                ref={anchorRef}
                sx={{
                    color: '#424242',
                    bgcolor: 'white',
                }}
            >
                <Button
                    sx={{
                        border: "1px solid lightGray",
                        borderRadius: '5',
                        color: '#424242',
                        width: "220px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        py: 0,
                    }}
                    onClick={handleToggle}
                >
                    <FilterListIcon />
                    <span>Filter Options</span>
                    <ArrowDropDownIcon />
                </Button>
            </ButtonGroup>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                sx={{ zIndex: 1 }}
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    sx={{
                                        padding: '8px',
                                        borderRadius: '5px',
                                    }}
                                    autoFocusItem
                                >
                                    <Box
                                        sx={{
                                            display: 'grid',
                                            gridTemplateColumns: '1fr 1fr 1fr',
                                            gap: 2,
                                        }}
                                    >
                                        {optionGroups.map((group) => (
                                            <Box key={group.title}>
                                                <strong style={{ marginBottom: '8px', display: 'block' }}>
                                                    {group.title}
                                                </strong>
                                                {group.options.map((option) => (
                                                    <MenuItem
                                                        key={option.label}
                                                        sx={{
                                                            borderRadius: '5px',
                                                            my: '5px',
                                                            backgroundColor: option.backgroundColor,
                                                            color: option.color,
                                                        }}
                                                    >
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </Box>
                                        ))}
                                    </Box>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    );
}
