import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import ProfileCard from "../components/ProfileCard"
import AcceptButton from '../components/AcceptButton';
import RejectButton from '../components/RejectButton';
import { useCandidateContext } from "../context/CandidateContext"

const CandidateSearch = () => {
  const [ results, setResults] = useState<Candidate | null>(null);
  const [currentIndex, setCurrentIndex]= useState<number>(0);
  const isSearchPage:boolean = true;

  const { candidates, setCandidates } = useCandidateContext();

  
  const searchAllUsers = async () => {
    try{
      const users: Candidate[]= await searchGithub()
      // console.log("users:", users)

      if(users.length > 0 ){
        const randomUser = users[Math.floor(Math.random() * users.length)]
        // console.log("random user selection:", randomUser)
        
        if(randomUser.login){
        const userDetail = await searchGithubUser(randomUser.login)
        // console.log("user detail", userDetail)

        setResults(userDetail)
        // console.log("results", results)
      }
    } 
    } catch(error){
      console.log("error getting results", error)
    }
  }

  const saveCandidate =  async () => {
    if (results) {
      const potentialCandidates = [...candidates, results];
      setCandidates(potentialCandidates)
      localStorage.setItem("saved-candidates", JSON.stringify(potentialCandidates));
    
      // console.log("saved candidate:", potentialCandidates)
      handleNext();
    }
  }

  const handleNext = async () => {
    if(results) {
      const users: Candidate[] = await searchGithub()   
      const nextUserIndex = (currentIndex + 1) % users.length;
      // console.log("next user:", nextUserIndex)
      const nextUserDetail = await searchGithubUser(users[nextUserIndex].login);
      // console.log("next user detail:", nextUserDetail)
      setResults(nextUserDetail);
      setCurrentIndex(nextUserIndex);
    }
  }


  useEffect (() => {
    searchAllUsers();
  }, [])

  return (
    <div className='card-container'>
      <h1>Candidate Search</h1>
      { results ? (
          <>
          <ProfileCard candidate={results}/>
          <div className='btn-container'>
          <RejectButton id={results.id} isSearchPage={isSearchPage} handleNext={handleNext}/>
          <AcceptButton onClick={saveCandidate}/>
          </div>
          </>
      ):(
        <p>No candidates to display</p>
      )}
   </div>
  )

};

export default CandidateSearch;
