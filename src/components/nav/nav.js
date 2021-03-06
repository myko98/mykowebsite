import React from 'react'
import './nav.css'
import { FaHome } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'
import { ImBooks } from 'react-icons/im'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageRoundedAdd } from 'react-icons/bi'
import { useState } from 'react'
import {GoTools} from 'react-icons/go'

const Nav = () => {

	const [active, setActive] = useState("#")

	return (
		<nav>
			<a href="#" onClick={() => setActive("#")} className={active == "#" ? "active" : ""}><FaHome /></a>
			<a href="#about" onClick={() => setActive("#about")} className={active === "#about" ? "active" : ""}><AiOutlineUser /></a>
			<a href="#portfolio" onClick={() => setActive("#portfolio")} className={active === "#portfolio" ? "active" : ""}><ImBooks /></a>
			<a href="#experience" onClick={() => setActive("#experience")} className={active === "#experience" ? "active" : ""}><GoTools /></a>
			{/* <a href="#portfolio"></a> */}
			<a href="#contact" onClick={() => setActive("#contact")} className={active === "#contact" ? "active" : ""}><BiMessageRoundedAdd /></a>
		</nav>
	)
}

export default Nav