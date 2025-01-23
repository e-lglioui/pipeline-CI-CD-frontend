import { useEffect, useState } from 'react';
import { MainLayout } from '../../../components/layout/dashoard/MainLayout';
import { DashboardHeader } from '../../../components/common/Dashboard/header';
import { Eye, Trash } from 'lucide-react';
import { getReviews, deleteReview } from '../../../services/reviewService';
import DeleteModal from '../../../components/common/reviews/delete';
import ReviewDetailsModal from '../../../components/common/reviews/details';
import { toast } from 'sonner';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedReviewId, setSelectedReviewId] = useState(null);
  const [selectedReview, setSelectedReview] = useState(null);

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

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteReview(selectedReviewId);
      setReviews(reviews.filter(review => review._id !== selectedReviewId));
      setDeleteModalOpen(false);
      toast.success('Review deleted successfully');
    } catch (error) {
      console.error('Error deleting review:', error);
      toast.error('Failed to delete review');
    } finally {
      setIsDeleting(false);
    }
  };

  const handleViewDetails = (review) => {
    setSelectedReview(review);
    setDetailsModalOpen(true);
  };

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
                    <tr key={review._id} className="hover:bg-gray-50 dark:hover:bg-meta-3 transition-all">
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
                            onClick={() => handleViewDetails(review)}
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            See Details
                          </button>
                          <button
                            title="Reject"
                            className="flex items-center bg-red-500 text-white py-2 px-3 rounded-md hover:bg-red-600 transition-all"
                            onClick={() => {
                              setSelectedReviewId(review._id);
                              setDeleteModalOpen(true);
                            }}
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

        {/* Review delete Modal */}
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onConfirm={handleDelete}
          isDeleting={isDeleting}
        />

        {/* Review details Modal */}
        <ReviewDetailsModal
          isOpen={isDetailsModalOpen}
          onClose={() => setDetailsModalOpen(false)}
          review={selectedReview}
        />
      </div>
    </MainLayout>
  );
};

export default Reviews;