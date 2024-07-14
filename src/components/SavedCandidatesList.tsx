import React from "react";
import Candidate from "../interfaces/Candidate.interface"
import RejectButton from "./RejectButton";
import { useCandidateContext } from "../context/CandidateContext" 

const SavedCandidatesList: React.FC = () => {
const {candidates} = useCandidateContext();
console.log("candidates from context", candidates)

    return (
      <div className="table-container">
        <table className='table'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
        {candidates.map((candidate) => (
          <tr className="column-container"key={candidate.id}>
            <td className="column"> 
              <img src={candidate.avatar_url} alt="avatar" width="90px" className="saved-avatar"/>
            </td>

            <td className="saved-name"> 
              {candidate.name} 
              <i>
              ({candidate.login})
              </i>
            </td>
            <td className="truncate"> {candidate.location} </td>
            <td className="truncate"> {candidate.email} </td>
            <td className="truncate"> {candidate.company} </td>
            <td className="truncate"> {candidate.bio} </td>
            <td> <RejectButton id={candidate.id}/> </td>

          </tr>
          ))}
        </tbody>
      </table>
      </div>
    )
}

export default SavedCandidatesList;