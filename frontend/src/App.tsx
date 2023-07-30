import "./App.css";
import Sidebar from "./components/sidebar";
import ChatBox from "./components/chatBox";
import Landing from "./pages/landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <div className="flex w-full">
                  <Sidebar />
                  <ChatBox />
                </div>
              }
            />
            <Route path="/landing" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
