export const sideNavBarList = [
    { label: 'Dashboard', icon: 'InboxIcon', path: '/dashboard' },
    { label: 'Resources', icon: 'PeopleIcon', path: '/resources' },
    { label: 'Reports', icon: 'AnalyticsIcon', path: '/reports' },
    { label: 'Billings & Invoice', icon: 'ListAltIcon', path: '/billings' },
    { label: 'Settings', icon: 'SettingsIcon', path: '/settings' },
    { label: 'Help', icon: 'HelpIcon', path: '/help' },
    { label: 'Logout', icon: 'LogoutIcon', path: '/login' }
];


function createData(skills, experience, contract, duration, resources, view) {
    console.log(skills)
    return {
        skills,
        experience,
        contract,
        duration,
        resources,
        view
    };
};


export const tableBodyData = [
    createData('React.js, .Net, Angular', 305, 3.7, 67, 4.3,),
    createData('React.js, .Net, Angular', 452, 25.0, 51, 4.9),
    createData('React.js, .Net, Angular', 262, 16.0, 24, 6.0),
    createData('React.js, .Net, Angular', 159, 6.0, 25, 4.0),
    createData('React.js, .Net, Angular', 356, 16.0, 49, 3.9),
    createData('React.js, .Net, Angular', 408, 3.2, 87, 6.5),
    createData('React.js, .Net, Angular', 237, 9.0, 37, 4.3),
    createData('React.js, .Net, Angular', 375, 0.0, 94, 0.0),
];


export const tableHeadData = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Skills',
    },
    {
        id: 'calories',
        numeric: true,
        disablePadding: false,
        label: 'Experience ',
    },
    {
        id: 'fat',
        numeric: true,
        disablePadding: false,
        label: 'Type of Contract',
    },
    {
        id: 'carbs',
        numeric: true,
        disablePadding: false,
        label: 'Duration',
    },
    {
        id: 'protein',
        numeric: true,
        disablePadding: false,
        label: 'No of Resources ',
    },
    {
        id: 'View details',
        numeric: true,
        disablePadding: false,
        label: 'View details',
    },
];

export const tableToolBarDropdownLabels = ['skill', 'type', 'experience'];

export const skillsList = {
    technologies: ['HTML', 'CSS', 'AJAX', 'XML'],
    tools: ['SVN', 'GIT', 'Vs Code', 'eJira']
}

export const listing = [
    {
        technologies: ['HTML', 'CSS', 'AJAX', 'XML']
    }, {
        tools: ['SVN', 'GIT', 'Vs Code', 'eJira']
    }
]