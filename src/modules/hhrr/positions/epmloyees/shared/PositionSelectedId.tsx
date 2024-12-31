'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Position = {
    id: string;
    name: string;
};

type PositionContextType = {
    positionId: string | null;
    setPositionId: (id: string | null) => void;
    positionData: Position | null; // Update this to store the position data properly
    setPositionData: (data: Position | null) => void; // Function to set positionData
};

const PositionContext = createContext<PositionContextType | undefined>(undefined);

export const PositionContextProvider = ({ children }: { children: ReactNode }) => {
    const [positionId, setPositionId] = useState<string | null>(null);
    const [positionData, setPositionData] = useState<Position | null>(null);

    return (
        <PositionContext.Provider value={{ positionId, setPositionId, positionData, setPositionData }}>
            {children}
        </PositionContext.Provider>
    );
};

export const usePositionContext = () => {
    const context = useContext(PositionContext);
    if (!context) {
        throw new Error('usePositionContext must be used within a PositionContextProvider');
    }
    return context;
};
