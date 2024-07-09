import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import ProfileCard from "../components/ProfileCard"
import AcceptButton from '../components/AcceptButton';
import RejectButton from '../components/RejectButton';

const CandidateSearch = () => {
  const [ results, setResults] = useState<Candidate | null>(null);

  
  const searchAllUsers = async () => {
    try{
      const users: Candidate[]= await searchGithub()
      // console.log("users:", users)

      if(users.length > 0 ){
        const randomUser = users[Math.floor(Math.random() * users.length)]
        // console.log("random user selection:", randomUser)

        const userDetail = await searchGithubUser(randomUser.login)
        // console.log("user detail", userDetail)

        setResults(userDetail)
      }
    } catch(error){
      console.log("error getting results", error)
    }
  }

  const searchOneUser = async ( username: string ) => {
    try{
      const res: Candidate= await searchGithubUser(username)
      console.log("res:", res)
    } catch(error) {
      console.log("error getting results", error)
    }
  }

  const saveCandidate =  async () => {
    if(results) {
      const candidates= localStorage.getItem("saved-candidates")

      let savedCandidates = [];

      if(candidates) {
        savedCandidates = JSON.parse(candidates)
      }

      savedCandidates.push(results)

      localStorage.setItem("saved-candidates", JSON.stringify(savedCandidates))

      window.location.reload();

      console.log("candidates in local storage", candidates)
      console.log("saved candidate:", results)

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
          <RejectButton />
          <AcceptButton onClick={saveCandidate} />
          </div>
          </>
      ):(
        <p>No candidates to display</p>
      )}
   </div>
  )

};

export default CandidateSearch;
