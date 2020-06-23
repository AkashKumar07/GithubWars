import React from 'react'

const Suggestions = (props) => {
  console.log(props.results);
  const options = props.results.map(r => (
    <li onClick={() => (props.click(r.login))} key={r.id}>
      @{r.login}
    </li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions;