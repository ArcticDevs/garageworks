import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../context'
import Link from 'next/link'
import Modal from './Modal'

const Navbar = () => {
	const { state, changeFunc } = useContext(Context);
	console.log(state.modal)


	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-light">
				<div className="container-fluid">
					<Link href="/" passHref>
						<a>
							Navbar
						</a>
					</Link>
					<button className='btn' onClick={changeFunc.modalToggle}>
						Login
					</button>
				</div>
			</nav>
			<Modal show={state.modal} onClose={() => changeFunc.modalShow(false)} />
		</div>
	)
}

export default Navbar