import React, { useState, useEffect, createContext, useContext, ReactNode }  from "react";
import Candidate from "../interfaces/Candidate.interface"

interface CandidateContextType {
    candidates: Candidate[];
    setCandidates: React.Dispatch<React.SetStateAction<Candidate[]>>;
}


const CandidateContext = createContext<CandidateContextType>({
    candidates: [],
    setCandidates: () => {}
})

export const useCandidateContext =() => useContext(CandidateContext)

interface CandidateProviderProps {
    children: ReactNode;
}

export const CandidateProvider: React.FC<CandidateProviderProps> = ({ children }) => {

    const [candidates, setCandidates] = useState<Candidate[]>([])
 
    useEffect(() => {
        const savedCandidates = JSON.parse(localStorage.getItem("saved-candidates")  || "[]")
        setCandidates(savedCandidates)
    },[])

    return( 
        <CandidateContext.Provider value={{candidates, setCandidates}}>
            {children}
        </CandidateContext.Provider>
    )
}

 