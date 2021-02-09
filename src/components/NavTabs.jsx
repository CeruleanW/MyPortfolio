import { Tab, Tabs } from '@material-ui/core/';
import { Link } from "react-router-dom";

//TODO
// - add icons

export default function NavTabs(props) {
    const allTabs = props.routes; //["/", "/projects", "/aboutme", "/contact"];
    
    function handleChange(e) { }
    const a11yProps = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <Tabs value={props.value} onChange={handleChange} centered aria-label="navigation tabs">
            <Tab label="Home" value={allTabs[0]} component={Link} to={allTabs[0]} {...a11yProps(0)} />
            <Tab label="Projects" value={allTabs[1]} component={Link} to={allTabs[1]} {...a11yProps(1)} />
            <Tab label="About me" value={allTabs[2]} component={Link} to={allTabs[2]} {...a11yProps(2)} />
            <Tab label="Contact" value={allTabs[3]} component={Link} to={allTabs[3]} {...a11yProps(3)} />
        </Tabs>
    );
}