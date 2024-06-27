import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [ results, setResults] = useState<Candidate[]>([])

  
  const searchAllUsers = async () => {
    try{
      const res: Candidate[]= await searchGithub()
      console.log("res:", res)

      setResults(res)

    } catch(error){
      console.log("error getting results")
    }

  }

  useEffect (() => {
    searchAllUsers();
  }, [])

  return <h1>CandidateSearch</h1>;

};

export default CandidateSearch;
