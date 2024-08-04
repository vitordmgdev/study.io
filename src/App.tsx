import DynamicRender from "./components/layout/render/render";
import Sidebar from "./components/layout/sidebar/sidebar";
import '@radix-ui/themes/styles.css';
import './App.css';
import './styles/global.css';
import { useEffect, useState } from "react";
import { Theme } from "@radix-ui/themes";

function App() {
  const [ sidebarState, setSidebarState ] = useState<boolean>(true);
  const [ theme, setTheme ] = useState<boolean>(true)

  useEffect(() => {
    console.log(theme)
  },[theme])
  
  return (
    <Theme accentColor="gray" appearance={theme ? "dark" : "light"} grayColor="slate">
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
    </Theme>
  )
}

export default App;
