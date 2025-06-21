import React from 'react'
import {assets} from '../assets/assets.js'
import {Link, useNavigate} from 'react-router-dom'
import {AppContext} from '../context/AppContext'


export default function Navbar()
{	
	const {user,setShowLogin,logout, credit}=React.useContext(AppContext)
	const navigate=useNavigate()

	return (
		<div className='flex items-center justify-between' >
			<Link to='/'>
			<div className='flex flex-row w-28 sm:w-32 lg:w-40'>
				<img src={assets.PromptArt_logo} alt="" />
			</div>
			</Link>

			{/*<div className='flex items-center gap-2 sm:gap-5'>
				<a href='https://merchant.razorpay.com/policy/QgoNdqOm2fuFll/terms' className='cursor-pointer'>
					Terms & Conditions
				</a>
				<a href='https://merchant.razorpay.com/policy/QgoNdqOm2fuFll/shipping' className='cursor-pointer'>
					Shipping & Delivery
				</a>
				<a href='https://merchant.razorpay.com/policy/QgoNdqOm2fuFll/refund' className='cursor-pointer'>
					Cancellation & Refund
				</a>
				<a href='https://merchant.razorpay.com/policy/QgoNdqOm2fuFll/privacy' className='cursor-pointer'>
					Privacy
				</a>
				<a href='https://merchant.razorpay.com/policy/QgoNdqOm2fuFll/contact_us' className='cursor-pointer'>
					Contact Us
				</a>
			</div>*/}
			<div>
				{user ?
					<div className='flex items-center gap-2 sm:gap-3'>
						{/*<a href='https://merchant.razorpay.com/policy/QgoNdqOm2fuFll/terms' className='cursor-pointer text-gray-600 max-sm:hidden pl-4'>
							Terms
						</a>
						<a href='https://merchant.razorpay.com/policy/QgoNdqOm2fuFll/shipping' className='cursor-pointer text-gray-600 max-sm:hidden pl-4'>
							Shipping
						</a>
						<a href='https://merchant.razorpay.com/policy/QgoNdqOm2fuFll/refund' className='cursor-pointer text-gray-600 max-sm:hidden pl-4'>
							Refund
						</a>
						<a href='https://merchant.razorpay.com/policy/QgoNdqOm2fuFll/privacy' className='cursor-pointer text-gray-600 max-sm:hidden pl-4'>
							Privacy
						</a>
						<a href='https://merchant.razorpay.com/policy/QgoNdqOm2fuFll/contact_us' className='cursor-pointer text-gray-600 max-sm:hidden pl-4'>
							Contact Us
						</a>*/}
						<button onClick={()=>navigate('/buy')} className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
							<img className='w-5' src={assets.credit_star} alt="" />
							<p className='text-xs sm:text-sm font-medium text-gray-600'>
								Credits left : {credit}
							</p>
						</button>
						<p className='text-gray-600 max-sm:hidden pl-4'>
							Hi, {user.name}
						</p>
						<div className='relative group'>
							<img src={assets.profile_icon} className='w-10 drop-shadow' alt="" />
							<div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
								<ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
									<li onClick={logout} className='py-1 px-2 cursor-pointer pr-10'>
										Logout
									</li>
								</ul>
							</div>
						</div>
					</div>
				:
					<div className='flex items-center gap-2 sm:gap-5'>
						{/*<a href='https://merchant.razorpay.com/policy/QgoNdqOm2fuFll/terms' className='cursor-pointer'>
							Terms & Conditions
						</a>
						<a href='https://merchant.razorpay.com/policy/QgoNdqOm2fuFll/shipping' className='cursor-pointer'>
							Shipping & Delivery
						</a>
						<a href='https://merchant.razorpay.com/policy/QgoNdqOm2fuFll/refund' className='cursor-pointer'>
							Cancellation & Refund
						</a>
						<a href='https://merchant.razorpay.com/policy/QgoNdqOm2fuFll/privacy' className='cursor-pointer'>
							Privacy
						</a>
						<a href='https://merchant.razorpay.com/policy/QgoNdqOm2fuFll/contact_us' className='cursor-pointer'>
							Contact Us
						</a>*/}
						<p onClick={()=>navigate('/buy')} className='cursor-pointer'>
							Pricing
						</p>
						<button onClick={()=>setShowLogin(true)} className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full'>
							Login
						</button>
					</div>
				}
			</div>
		</div>
		)
}