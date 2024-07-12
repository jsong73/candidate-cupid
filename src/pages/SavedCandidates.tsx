import SavedCandidatesList from "../components/SavedCandidatesList"
import { CandidateProvider } from "../context/CandidateContext"

const SavedCandidates = () => {
  return (
      <CandidateProvider>
        <h1>Potential Candidates</h1>
          <SavedCandidatesList />
      </CandidateProvider>
  );
};

export default SavedCandidates;
