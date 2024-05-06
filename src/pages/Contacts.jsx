import React from 'react'
import Search from '../components/SearchComponent/Search'
const Contacts = () => {
  return (
    <div className='flex flex-col w-full bg-white mx-4 '>
        <div className='flex justify-between items-center'>
          <h2 className='text-black'>Contacts</h2>
          <Search />
        </div>
        <table className='min-w-full divide-y divide-gray-200 my-2'>
          <thead className='bg-[#F4F4F4]'>
            <tr>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Name</th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Offer type</th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Email</th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Telephone No.</th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-primary-red uppercase tracking-wider'>Delete</th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            <tr className='bg-gray-50'>
              <td className='px-6 py-4 whitespace-nowrap text-black'>
              Joseph
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-black'>
              none
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-black'>
              JosephOffice@mail.com
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-black'>
              0700317093
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-primary-red'>
              Del
              </td>
            </tr>
          </tbody>

        </table>
    </div>
  )
}

export default Contacts