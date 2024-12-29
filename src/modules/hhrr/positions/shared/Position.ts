export interface CreatePosition {
    position: string
    departmentId: string
}

export interface AssignPositionToEmployee {
    employeeId: string
    positionId: string
}

export interface AssignPosition {
    positionName: string
    description: string
    departmentId: string
}