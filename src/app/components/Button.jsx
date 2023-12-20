import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

const Button = ({ text }) => {
  return (
    <button className="btn btn-outline">
      <span>{text}</span>
      <FontAwesomeIcon icon={faPlane} className="-rotate-12" />
    </button>
  )
}

export default Button