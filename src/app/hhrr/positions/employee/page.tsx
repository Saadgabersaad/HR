'use client'
import PositionView from "modules/hhrr/positions/epmloyees/layout/PositionView";
import {useEmployeesPosition} from "modules/hhrr/positions/epmloyees/hooks/use-employeesPosition";


export default function Employees() {
    // const { data,isLoading } = useEmployeesPosition();

    return (
        <>
         <PositionView />
        </>
    )
}
