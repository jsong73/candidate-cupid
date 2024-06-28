import Candidate from "../interfaces/Candidate.interface"

type CandidateProps = {
    candidate: Candidate
}

const ProfileCard = ({candidate}: CandidateProps) =>{
console.log("candidate:", candidate) 

const hasValue = (label: string, value: string | null ) => {
    return  value ? <p>{label} : {value}</p> : null;
}

return (
<div className="profile-card">
    <img className="profile-img" src={candidate.avatar_url} alt="avatar" />
    <h2>{candidate.login}</h2>
    {hasValue("Location:", candidate.location)}
    {hasValue("Email:", candidate.email)}
    {hasValue("Company:", candidate.company)}
    {hasValue("Bio:", candidate.bio)}
</div>
)
}
export default ProfileCard;
