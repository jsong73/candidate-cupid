import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import ProfileCard from "../components/ProfileCard"
import Buttons from '../components/AcceptButton';
import AcceptButton from '../components/AcceptButton';
import RejectButton from '../components/RejectButton';

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
    <div className='card-container'>
      <h1>Candidate Search</h1>
      { results ? (
          <>
          <ProfileCard candidate={results}/>
          <div className='btn-container'>
          <RejectButton />
          <AcceptButton />
          </div>
          </>
      ):(
        <p>No candidates to display</p>
      )}
   </div>
  )

};

export default CandidateSearch;
