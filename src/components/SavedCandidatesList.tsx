const SavedCandidatesList = () => {

const potentialCandidates = JSON.parse(localStorage.getItem("saved-candidates") || "[]");

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

        </tbody>
      </table>
    )
}

export default SavedCandidatesList;