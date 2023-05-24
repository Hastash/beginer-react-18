import { Outlet } from 'react-router-dom';
import logo from '../logo.svg';
import Nav from "./Nav";
const Layout = () => {
    return(
        <>
        <header className="App-header">
            <Nav />
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          {/* 2️⃣ Render the app routes via the Layout Outlet */}
          <Outlet />
          <hr />
        </main>
        <footer>©️ me 2023</footer>
      </>
    );
}
export default Layout;