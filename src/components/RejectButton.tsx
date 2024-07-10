import React from "react";


const RejectButton: React.FC = (props) => {
console.log("props", props)



    return(
        <div>
        <button className="reject-btn" onClick={handleReject}> 
            <div className="symbol"> - </div>
        </button>
    
        </div>
    )
    }
    
    export default RejectButton;
    