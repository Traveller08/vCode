import React from 'react'
import './aboutEntry.css'
import {FaLinkedin} from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai";
import {CgMail} from "react-icons/cg";

function entry(props)
{
    return (
        <div className='term'>
            <dt>
                <span className='emoji'> {props.img} </span>
                <span> {props.name} </span>
            </dt>
            <dd> {props.role} </dd>
            <div className='link-container'>
                <a className='links' href='https://www.linkedin.com/in/aditya-gupta-83426b237/'><FaLinkedin /></a>
                <a className='links' href='https://github.com/adityastro'><AiFillGithub /></a>
                <a className='links' href='lit2020055@iiitl.ac.in'><CgMail /></a>
            </div>
        </div>
    );
}

export default entry;