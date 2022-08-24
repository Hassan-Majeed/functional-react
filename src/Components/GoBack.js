import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
const GoBack = () => {
  const navigate = useNavigate();

  return (
    <>
      <FaArrowLeft className="back" onClick={() => navigate(-1)} />
    </>
  );
}

export default GoBack;