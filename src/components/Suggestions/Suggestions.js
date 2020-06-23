import React from 'react';
import * as classes from './Suggestions.module.css';

const Suggestions = (props) => {
  const options = props.results.map(r => (
    <li className={classes.item} onClick={() => (props.click(r.login))} key={r.id}>
      @{r.login}
    </li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions;