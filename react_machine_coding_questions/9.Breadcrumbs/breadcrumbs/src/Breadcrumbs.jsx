import { Link, useLocation } from "react-router";

const Breadcrumbs = () => {
  const location = useLocation().pathname.split("/");

  return (
    <div>
      <Link to="/">Home</Link>
      {location.filter((path) => path).map((path, index) => {
        return (
          <span key={index}>
            {index !== location.length - 2 ? (
              <Link to={`/${path}`}>{` /${path}`}</Link>
            ) : (
              <span>{` /${path}`}</span>
              )}
            </span>
          );
        })}
    </div>
  );
};

export default Breadcrumbs;