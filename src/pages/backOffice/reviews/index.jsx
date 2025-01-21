import { useEffect, useState } from 'react';
import { MainLayout } from '../../../components/layout/dashoard/MainLayout';
import { DashboardHeader } from '../../../components/common/Dashboard/header';
import { Eye, Trash } from 'lucide-react';
import { getReviews } from '../../../services/reviewService';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviews({ isReported: false });
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <MainLayout>
      <DashboardHeader title="Reviews" subtitle="Manage your reviews" />
      <div className="flex flex-col gap-8 py-6">
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
                  {reviews.map((review) => (
                    <tr key={review.id} className="hover:bg-gray-50 dark:hover:bg-meta-3 transition-all">
                      <td className="border-b border-[#eee] py-5 px-4 xl:pl-6 dark:border-strokedark">
                        <h5 className="font-medium text-black dark:text-white">
                          {review.userId.username}
                        </h5>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">{review.rating}</p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">{review.comment}</p>
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
                            Delete Review
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
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