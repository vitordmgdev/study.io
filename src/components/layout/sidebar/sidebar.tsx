import React, { useEffect, useState } from "react";
import Styled from "./sidebar.styled";
import { Flex, IconButton } from "@radix-ui/themes";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { LuListTodo, LuAlarmClock } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { TbCards } from "react-icons/tb";
import { FaRegNoteSticky } from "react-icons/fa6";
import '@radix-ui/themes/styles.css';
import Todo from "./todolist";

const Sidebar:React.FC<SidebarProps> = ({ sidebarState , setSidebarState }) => {
    const location = useLocation();

    return(
        <Styled sidebarState={sidebarState}>       
            <Flex direction="column" gap="4" justify="between">
                <Flex justify="start" gap="4">
                    <IconButton
                    className="translate-x-[6px]
                    rounded-sm" 
                    onClick={(e) => 
                    setSidebarState(!sidebarState)}
                    variant="ghost">
                        <IoMdClose />
                    </IconButton>
                </Flex>
                <NavButtons />
                {/* Sistema de pastas e arquivos */}
                {location.pathname === "/todo" && <Todo />}
            </Flex>
        </Styled>
    );
}

const NavButtons = () => {
    const sidebarNavItems = [
        {
            path: "/flashcards",
            buttonText: "Flashcards",
            icon: <TbCards size="18" />
        },
        {
            path: "/note",
            buttonText: "Note",
            icon: <FaRegNoteSticky size="16"/>
        },
        {
            path: "/todo",
            buttonText: "To-do",
            icon: <LuListTodo size="18" />
        },
        {
            path: "/clock",
            buttonText: "Clock",
            icon: <LuAlarmClock size="18" />
        }
    ]

    return(
        <Flex direction="column" gap="2">
            <Flex direction="column" gap="1">
                {
                    sidebarNavItems.map((element, index) => {
                        return(
                        <NavButton 
                        key={index}
                        path={element.path} 
                        buttonText={element.buttonText} 
                        icon={element.icon}/> )
                    })
                }
            </Flex>
        </Flex>
    )
}

const NavButton = ({path, buttonText, icon}:SidebarButtonProps) => {
    return(
        <Link to={path}>
            <Button 
            variant="ghost"
            className="flex justify-start gap-2 p-[12px] hover:bg-[var(--gray-2)] w-[100%]"
            size="lg">
                {icon}{buttonText}
            </Button>
        </Link>
    )
}



interface SidebarProps {
    sidebarState: boolean,
    setSidebarState: React.Dispatch<React.SetStateAction<boolean>>,
}

interface SidebarButtonProps{
    path: string,
    buttonText: string,
    icon: any
}

export default Sidebar;