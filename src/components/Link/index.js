import { useHistory } from "react-router";

export function Link({ path, children }) {
  const history = useHistory();

  return <button onClick={() => history.push(path)}>{children}</button>
}