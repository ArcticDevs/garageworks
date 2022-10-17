import React, { useState } from 'react'
import Link from 'next/link'
import Modal from './Modal'

const Navbar = () => {

	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<nav className="navbar navbar-expand-lg bg-light">
				<div className="container-fluid">
					<Link href="/" passHref>
						<a>
							Navbar
						</a>
					</Link>
					<button className='btn' onClick={() => setShowModal(true)}>
						Login
					</button>
				</div>
			</nav>
			<Modal show={showModal} onClose={() => setShowModal(false)} />
		</>
	)
}

export default Navbar