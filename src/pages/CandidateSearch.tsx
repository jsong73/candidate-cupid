import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import ProfileCard from "../components/ProfileCard"

const CandidateSearch = () => {
  const [ results, setResults] = useState<Candidate | null>(null);

  
  const searchAllUsers = async () => {
    try{
      const users: Candidate[]= await searchGithub()
      console.log("users:", users)

      if(users.length > 0 ){
        const randomUser = users[Math.floor(Math.random() * users.length)]
        console.log("random user selection:", randomUser)

        const userDetail = await searchGithubUser(randomUser.login)
        console.log("user detail", userDetail)

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

  useEffect (() => {
    searchAllUsers();

  }, [])

  return (
    <>
      <h1>CandidateSearch</h1>
      { results ? (
    
          <ProfileCard candidate={results}/>
     
      ):(
        <p>No candidates to display</p>
      )}
   </>
  )

};

export default CandidateSearch;
