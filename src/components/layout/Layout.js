import { BrowserRouter, Routes, Route } from "react-router-dom";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainNavigation />}>
            <main className={classes.main}>{props.children}</main>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Layout;
