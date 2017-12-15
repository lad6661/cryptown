import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import HomeIcon from 'material-ui-icons/Home';
import DraftsIcon from 'material-ui-icons/Drafts';
import AddIcon from 'material-ui-icons/Add';
import GQLIcon from 'material-ui-icons/NetworkCheck';
import HelpIcon from 'material-ui-icons/Help';
import { Link, withRouter } from 'react-router-dom';

const RegLink = props => <Link {...props} style={{textDecoration: 'none'}} />
const RegItem = ({ children, onClick }) =>
  <ListItem button onClick={onClick}>
    { children }
  </ListItem>

export const MainListItems = withRouter((props) =>
<List className={props.className || ""}>
  <RegItem onClick={() => props.history.push(process.env.PUBLIC_URL + '/')}>
    <ListItemIcon>
      <HomeIcon />
    </ListItemIcon>
    <ListItemText primary="Home" />
  </RegItem>
  <RegItem onClick={() => props.history.push(process.env.PUBLIC_URL + '/tx')}>
    <ListItemIcon>
      <DraftsIcon />
    </ListItemIcon>
    <ListItemText primary="Trades" />
  </RegItem>
  <RegItem onClick={() => props.history.push(process.env.PUBLIC_URL + '/add')}>
    <ListItemIcon>
      <AddIcon />
    </ListItemIcon>
    <ListItemText primary="Add" />
  </RegItem>
</List>)

export const OtherListItems = withRouter((props) =>
<List className={props.className || ""}>
  <RegItem onClick={() => props.history.push(process.env.PUBLIC_URL + '/about')}>
    <ListItemIcon>
      <HelpIcon />
    </ListItemIcon>
    <ListItemText primary="About" />
  </RegItem>
  <RegItem onClick={() => props.history.push(process.env.PUBLIC_URL + '/gql')}>
    <ListItemIcon>
      <GQLIcon />
    </ListItemIcon>
    <ListItemText primary="GraphQL" />
  </RegItem>
</List>)