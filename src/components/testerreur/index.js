import React from 'react';
import { useNavigate } from 'react-router-dom';

function SomeComponent() {
    const navigate = useNavigate();

    const goToInvalidRoute = () => {
        navigate('/someInvalidRoute');
    }

    return (
        <div>
            <button onClick={goToInvalidRoute}>
                Go to Invalid Route
            </button>
        </div>
    );
}

export default SomeComponent;