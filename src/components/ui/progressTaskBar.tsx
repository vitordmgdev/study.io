import { TodoContext } from "@/pages/todolist"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"

const ProgressTasks = () => {
    const [ tasks, setTasks ] = useContext(TodoContext)

    return(
        <div className="flex gap-3 w-full 
        overflow-visible 
        bg-[var(--gray-2)] 
        p-3 rounded-md border 
        border-[var(--gray-7)]">
            {tasks.map((task, index) => {
                return (
                    <TaskBar 
                    progress={task.progress} 
                    key={index} />
                )
            })}
        </div>
    )
}

const TaskBar = ({progress}:any) => {
    const [ taskBarClassName, setTaskBarClassName ] = useState("")

    useEffect(() => {
        if(progress === "completed"){
            setTaskBarClassName("border-green-500")
        }
        if(progress === "in-progress"){
            setTaskBarClassName("border-yellow-500")
        }
        if(progress === "not-started"){
            setTaskBarClassName("border-red-500")
        }
    },[progress])

    return(
        <Bar className={`basis-1/2 border ${taskBarClassName}`} />
    )
}

const Bar = styled.div`
    height: 8px;
    border-radius: 8px;
    min-width: 8px;
`

export default ProgressTasks;