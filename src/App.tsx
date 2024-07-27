import DynamicRender from "./components/layout/render/render";
import Sidebar from "./components/layout/sidebar/sidebar";
import '@radix-ui/themes/styles.css';
import './App.css';
import './styles/global.css';
import { useState } from "react";

function App() {
  const [ sidebarState, setSidebarState ] = useState<boolean>(true);

  return (
    <div className="App">
      <Sidebar 
        sidebarState={sidebarState} 
        setSidebarState={setSidebarState} 
      />
      <DynamicRender 
        sidebarState={sidebarState} 
        setSidebarState={setSidebarState} 
      />
    </div>
  )
}

export default App;
