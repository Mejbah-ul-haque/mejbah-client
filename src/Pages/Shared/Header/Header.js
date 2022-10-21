import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	
	const menuItems = (
		<>
			<li className="hover:text-primary">
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/">Equipments</Link>
			</li>
			<li>
				<Link to="/">Reviews</Link>
			</li>
			<li>
				<Link to="/">Blog</Link>
			</li>
			<li>
				<Link to="">Portfolio</Link>
			</li>
			
				 <li><Link to="dashboard">Dashboard</Link></li>
				
		</>
	)
	return (
		<div className="text-slate-400 uppercase">
			<div className="navbar">
				<div className="navbar-start">
					<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<img src="https://i.ibb.co/6ZB0x44/mejbah-icon.png" />
							{/* <img src="https://i.ibb.co/cNckY8Q/profile-removebg-preview.png" /> */}
						</div>
					</label>
					<a className="btn btn-ghost normal-case text-xl uppercase text-bold">MEJBAH</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal p-0">
						{menuItems}
					</ul>
				</div>
				<div className="navbar-end">
        <div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost pl-96">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							
							{menuItems}
							<li>
								<a>Item 3</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
