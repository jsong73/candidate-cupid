// import { useState } from "react";

interface ButtonProps {
    onClick: () => void;
}

const AcceptButton: React.FC<ButtonProps> = ({ onClick }) => {

return(
    <div>
       <button className="accept-btn" onClick={onClick}> 
            <div className="symbol"> + </div>
        </button>

    </div>
)
}

export default AcceptButton;
