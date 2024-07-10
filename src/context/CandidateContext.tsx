import React, { useState, useEffect, createContext, useContext }  from "react";
import Candidate from "../interfaces/Candidate.interface"

interface CandidateContextType {
    candidates: Candidate[];
    handleReject: (id:number) => void;
}


const CandidateContext = createContext<CandidateContextType>({
    candidates: [],
    handleReject: (id:number) => {}
})

export const useCandidateContext =() => useContext(CandidateContext)

export const CandidateContextProvider: React.FC = ({ children }) => {

    const [candidates, setCandidates] = useState<Candidate[]>([])
 
    useEffect(() => {
        const savedCandidates = JSON.parse(localStorage.getItem("saved-candidates")  || "[]")
        setCandidates(savedCandidates)
    },[])

    const handleReject = (id:number) => {
        const updatedCandidates = candidates.filter((candidate) => candidate.id !== id)
        console.log("updated candidates", updatedCandidates)
        setCandidates(updatedCandidates)

        localStorage.setItem("saved-candidates", JSON.stringify(updatedCandidates))

    }

    return(
        <CandidateContext.Provider value={{candidates, handleReject}}>
            {children}
        </CandidateContext.Provider>
    )
}

