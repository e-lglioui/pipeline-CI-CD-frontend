import { MainLayout } from '../../../components/layout/dashoard/MainLayout';
import { DashboardHeader } from '../../../components/common/Dashboard/header';
import { Check, Eye, Trash } from 'lucide-react';

const Reviews = () => {
  return (
    <MainLayout>
      <DashboardHeader title="Reviews" subtitle="Manage your reviews" />
      <div className="flex flex-col gap-8 py-6">
        {/* Search Section */}
        <div className="bg-white rounded-md shadow-md p-6 dark:bg-boxdark">
          <form className="flex w-full max-w-md">
            <input
              type="text"
              placeholder="Search for reviews"
              className="w-full py-3 px-4 border border-stroke rounded-md rounded-r-none border-r-0 overflow-hidden text-black outline-none transition-all focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
            <button className="bg-zinc-900 bg-primary py-3 px-6 text-white font-medium transition-all hover:bg-opacity-90 rounded-r-md">
              Search
            </button>
          </form>
        </div>

        {/* Reviews Table */}
        <div className="bg-white rounded-md shadow-md dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6 dark:border-strokedark">
            <h3 className="font-semibold text-lg text-black dark:text-white">
              Reviews List
            </h3>
          </div>
          <div className="p-6">
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left dark:bg-meta-4">
                    <th className="py-4 px-4 font-medium text-black dark:text-white xl:pl-6">
                      Reviewer
                    </th>
                    <th className="py-4 px-4 font-medium text-black dark:text-white">
                      Rating
                    </th>
                    <th className="py-4 px-4 font-medium text-black dark:text-white">
                      Comment
                    </th>
                    <th className="py-4 px-4 font-medium text-black dark:text-white text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50 dark:hover:bg-meta-3 transition-all">
                    <td className="border-b border-[#eee] py-5 px-4 xl:pl-6 dark:border-strokedark">
                      <h5 className="font-medium text-black dark:text-white">
                        John Doe
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">5</p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">Great product!</p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark text-right">
                      <div className="flex justify-end items-center gap-2">
                        <button
                          title="See Details"
                          className="flex items-center bg-blue-500 text-white py-2 px-3 rounded-md hover:bg-blue-600 transition-all"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          See Details
                        </button>
                        <button
                          title="Reject"
                          className="flex items-center bg-red-500 text-white py-2 px-3 rounded-md hover:bg-red-600 transition-all"
                        >
                          <Trash className="w-4 h-4 mr-1" />
                          Delete comment
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Add more rows here */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Reviews;