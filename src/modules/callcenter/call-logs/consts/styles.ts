import {StyleMap} from "modules/callcenter/call-logs/shared/Logs";

export const styles = {
    language: {
        English: {
            color: "#59A8D4", backgroundColor: "#EBF4FF4D", padding: "4px 8px", borderRadius: "5px",fontWeight:'600'
        },
        Spanish: {
            color: "#DB1F35", backgroundColor: "#FFF0F14D", padding: "4px 8px", borderRadius: "5px",fontWeight:'600'
        },
        Arabic: {
            color: "#00C851", backgroundColor: "#EBF4FF4D", padding: "4px 8px", borderRadius: "5px",fontWeight:'600'
        },
        Russian: {
            color: "#D1992A", backgroundColor: "#FFF9E44D", padding: "4px 8px", borderRadius: "5px",fontWeight:'600'
        },
    } as StyleMap,
    status: {
        Completed: {
            backgroundColor: "#3FC28A1A", color: "#3FC28A", borderRadius: "5px", padding: "0.3rem 0.5rem",
        },
        Missed: {
            backgroundColor: "#F45B691A", color: "#F45B69", borderRadius: "5px", padding: "0.3rem 0.5rem",
        },
        "In Progress": {
            backgroundColor: "#EFBE121A", color: "#EFBE12", borderRadius: "5px", padding: "0.3rem 0.5rem",
        },
    } as StyleMap,
};
