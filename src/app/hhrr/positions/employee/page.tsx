'use client'
import React from "react";
import PositionView from "modules/hhrr/positions/epmloyees/layout/PositionView";


export default function Employees(positionId: string) {
    return (
        <>

         <PositionView positionId={positionId} />

</>
    )
}
