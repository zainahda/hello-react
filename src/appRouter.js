import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./components/home/App";
import Contact from "./components/page/Contact";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <main>      
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Kontak</Link>
              </li>
            </ul>
          </nav>
          <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

// class AppRouter extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//       <main>
//         <Routes>
//           <Route path="/" exact element={<App />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>
//       </BrowserRouter>
//     )
//   }
// }

export default AppRouter;
