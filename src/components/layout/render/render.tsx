import { Heading } from "@radix-ui/themes";
import Header from "../header/header";
import Styled from "./render.styled"
import { Outlet } from 'react-router-dom';

interface DynamicRenderProps {
    sidebarState: boolean,
    setSidebarState: React.Dispatch<React.SetStateAction<boolean>>
}

const DynamicRender:React.FC<DynamicRenderProps> = ({ 
    sidebarState, 
    setSidebarState 
}) => {
    return(
        <Styled>
            <Header sidebarState={sidebarState} setSidebarState={setSidebarState}/>
            <Outlet />
        </Styled> 
    )
}

export default DynamicRender;