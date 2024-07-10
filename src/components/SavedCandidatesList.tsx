import React from "react";
import Candidate from "../interfaces/Candidate.interface"

const SavedCandidatesList: React.FC = () => {

const potentialCandidates:Candidate[] = JSON.parse(localStorage.getItem("saved-candidates") || "[]");

console.log("potential candidates", potentialCandidates)


    return (
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
        {potentialCandidates.map((candidate) => (
          <tr key={candidate.id}>
            <td className="column"> 
              <img src={candidate.avatar_url} alt="avatar" width="50px" className="saved-avatar"/>
            </td>

          </tr>
          ))}
        </tbody>
      </table>
    )
}

export default SavedCandidatesList;