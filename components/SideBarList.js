import React from 'react';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People'
import ListAltIcon from '@mui/icons-material/ListAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { useRouter } from 'next/router';

const color = { color: 'rgba(255, 255, 255, 0.87)' }
const ListItemCustom = styled(ListItemText)({
    '& .MuiTypography-root': { color: color.color }
})

function SideBarList(props) {

    const router = useRouter();

    const { label, icon, path } = props

    return (
        <List>
            <ListItem onClick={() => router.push(path)} style={{ cursor: 'pointer' }}>
                <ListItemIcon >
                    {icon === 'InboxIcon' && <InboxIcon sx={color} />}
                    {icon === 'PeopleIcon' && <PeopleIcon sx={color} />}
                    {icon === 'AnalyticsIcon' && <AnalyticsIcon sx={color} />}
                    {icon === 'ListAltIcon' && <ListAltIcon sx={color} />}
                    {icon === 'SettingsIcon' && <SettingsIcon sx={color} />}
                    {icon === 'HelpIcon' && <HelpIcon sx={color} />}
                    {icon === 'LogoutIcon' && <LogoutIcon sx={color} />}
                </ListItemIcon>
                <ListItemCustom primary={label} />
            </ListItem>
        </List >
    )
}

export default SideBarList
