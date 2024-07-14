import React from "react";
import { useCandidateContext } from "../context/CandidateContext";

interface RejectButtonProps{
    id: number | null;
    isSearchPage: boolean;
    handleNext: () => void

}

const RejectButton: React.FC<RejectButtonProps> = ({id, isSearchPage, handleNext}) => {
console.log("candidate id" , id)
console.log("is search page?", isSearchPage)

const { candidates, setCandidates } = useCandidateContext();

const handleReject = (id: number | null) => {
    if(isSearchPage){
        handleNext()
    } else{
    const updatedCandidates = candidates.filter((candidate) => candidate.id !== id);
    setCandidates(updatedCandidates);
    localStorage.setItem("saved-candidates", JSON.stringify(updatedCandidates));
    }
};

    return(
        <div>
        <button className="reject-btn" onClick={() => handleReject(id)}> 
            <div className="symbol"> - </div>
        </button>
    
        </div>
    )
    }
    
    export default RejectButton;
    