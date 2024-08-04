import { Flex, Heading, IconButton, Text } from "@radix-ui/themes";
import Styled from "./header.styled";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { FaBars } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";
import { Link } from "react-router-dom";


interface HeaderProps {
    sidebarState: boolean,
    setSidebarState: React.Dispatch<React.SetStateAction<boolean>>
}

const Header:React.FC<HeaderProps> = ({
    sidebarState, 
    setSidebarState 
}) => {

    const name = "vitor s d"
    return(
        <Styled sidebarState={sidebarState}>
            <Flex align="center" gap="4">
                <Heading size="6" weight="bold" className="font-inter">
                    <Link to="/">
                        study.io
                    </Link>
                </Heading>
                <SidebarToggleIcon sidebarState={sidebarState} setSidebarState={setSidebarState}/>
            </Flex>
            <Flex align="center" gap="4">
                <Text size="2" weight="medium">
                    {name.toUpperCase()}
                </Text>
                <Button className="gap-2" variant="ghost">
                    Premium
                    <LuCrown />
                </Button>
            </Flex>
        </Styled>
    )
}

const SidebarToggleIcon = ({
    sidebarState, 
    setSidebarState
}:HeaderProps) => {
    if(!sidebarState){
        return(    
            <IconButton
            onClick={(e) => setSidebarState(!sidebarState)}
            variant="ghost">
                <FaBars size="14" />
            </IconButton>
        )
    }
}

export default Header;

