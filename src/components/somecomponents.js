import React from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorPage from '../src/pages/errorpage';
import './pages/errorpage/errorpage.scss';
function SomeComponent() {
    const navigate = useNavigate();

    const goToErrorPage = () => {
        navigate('/errorpage');
    }

    return (
        <div>
            <button onClick Link to={<ErrorPage /> }>
                Go to Invalid Route
            </button>
        </div>
    );
}

export default SomeComponent;