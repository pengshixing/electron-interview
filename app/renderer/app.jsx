import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>可视化简历平台</div>
              <div>这是 Electron + React </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(`
  
  
  root
  
  
  
  `);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
