import React from 'react'
import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import DeleteIcon from 'material-ui-icons/Delete';
import CryptoIcon from '../icons/CryptoIcon';
import moment from 'moment';

export default ({ tx: { coin, symbol, value, createdAt }, onRemove}) =>
<ListItem button>
  <ListItemAvatar>
    <Avatar>
      <CryptoIcon style={{height: "100%"}} className="full-size" icon={symbol} attrs="height='100%'" />
    </Avatar>
  </ListItemAvatar>
  <ListItemText
    primary={symbol + ' ' + value}
    secondary={moment(createdAt * 1000).fromNow()}
  />
  {
    typeof onRemove === 'function' ?
    <ListItemSecondaryAction>
      <IconButton aria-label="Delete" onClick={onRemove}>
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction> :
    <div />
  }
</ListItem>
