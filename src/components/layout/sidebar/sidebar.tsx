import React, { useEffect, useState } from "react";
import Styled from "./sidebar.styled";
import { IoMdClose } from "react-icons/io";
import { TbCards } from "react-icons/tb";
import { RiHome2Line } from "react-icons/ri";
import { FaRegNoteSticky } from "react-icons/fa6";
import { Card, Flex, Heading, IconButton, Text } from "@radix-ui/themes";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch"
import { FaGear } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { LuTimer } from "react-icons/lu";

import '@radix-ui/themes/styles.css';
import { Link } from "react-router-dom";


interface SidebarProps {
    sidebarState: boolean,
    setSidebarState: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar:React.FC<SidebarProps> = ({ sidebarState , setSidebarState }) => {
    return(
        <Styled 
        sidebarState={sidebarState}>       
            <Flex direction="column" gap="4">
                <Flex
                    justify="between">
                    
                    <IconButton
                    onClick={(e) => setSidebarState(!sidebarState)}
                    variant="ghost">
                        <IoMdClose />
                    </IconButton>
                </Flex>
                <Functions />
            </Flex>
            <Configurations />
        </Styled>
    );
}

const Functions = () => {
    return(
        <Flex direction="column" gap="2">
            <Heading
            size="2"
            weight="regular"
            style={{
                color:"var(--slate-8)",
                userSelect:"none"
            }}>
                Ferramentas de estudo
            </Heading>
            <Flex direction="column" gap="1">
                <Button variant="ghost" 
                className="flex 
                justify-start 
                gap-2 p-[12px] 
                hover:bg-[var(--gray-2)]"
                size="lg">
                    <RiHome2Line size="18" />
                    Home 
                </Button>
                <Link to="/flashcards">
                    <Button variant="ghost" 
                    className="flex 
                    justify-start 
                    gap-2 p-[12px] 
                    hover:bg-[var(--gray-2)]"
                    size="lg">
                        <TbCards size="18" />
                        Flashcards
                    </Button>
                </Link>
                
                <Button variant="ghost" 
                className="flex 
                justify-start 
                gap-2 p-[12px] 
                hover:bg-[var(--gray-2)]"
                size="lg">
                    <FaRegNoteSticky size="16" />
                    Anotações
                </Button>
                <Button variant="ghost" 
                className="flex 
                justify-start 
                gap-2 p-[12px] 
                hover:bg-[var(--gray-2)]"
                size="lg">
                    <LuTimer size="18" />
                    Cronôgrama
                </Button>
            </Flex>
        </Flex>
    )
}

const Configurations = () => {
    return(
        <Card className="rounded-sm flex flex-col gap-3">
            <Flex className="flex w-[100%] justify-between">
                <Button size="icon" variant="ghost">
                    <FaGear />
                </Button>
                <Flex align="center" gap="3">
                    <Text weight="medium">
                        Tema claro
                    </Text>
                    <Switch />
                </Flex>
            </Flex>
            <Button variant="default" size="lg" className="flex gap-2">
                <FaArrowUp size="12" />
                Fazer upgrade
            </Button>
        </Card>
    )
}

export default Sidebar;