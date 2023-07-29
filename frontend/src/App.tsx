import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "../src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../src/components/ui/card";

import "./App.css";
import Sidebar from "./components/sidebar";
import ChatBox from "./components/chatBox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="flex">
      <Sidebar />
      <ChatBox />
    </div>
      
      
    </>
  );
}

export default App;
