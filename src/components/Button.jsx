import React from "react"
import { Link } from "react-router-dom"
import Icon from "./Icon"

export default function Button({
    label,
    icon = null,
    action = () => {},
    className = "",
    type = "button",
    disabled = false,
    title = "",
    to = null,
    href = null,
    download = false, 
    isDarkMode 
  }) {
    if (href) {
      return (
        <a
          href={href}
          className={className}
          title={title}
          target="_blank"
          rel="noopener noreferrer"
          download={download ? true : undefined} 
        >
          {icon && <Icon icon={icon} />} 
          {label}
        </a>
      );
    } else if (to) {
      return (
        <Link to={to} className={className} title={title}>
          {icon && <Icon icon={icon} />}
          {label} 
        </Link>
      );
    } else {
      return (
        <button
          type={type}
          className={className}
          onClick={action}
          title={title}
          disabled={disabled}
        >
          {icon && <Icon icon={icon} />} 
          {label === 'dark' ? (isDarkMode ? 'light' : 'dark') : label}
        </button>
      );
    }
  }
  