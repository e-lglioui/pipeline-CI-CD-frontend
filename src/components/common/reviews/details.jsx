import { Button } from "@/components/ui/button";
import { AlertCircle, User, Star, MessageSquare, Calendar, MapPin } from "lucide-react";

const ReviewDetailsModal = ({ isOpen, onClose, review }) => {
  if (!isOpen || !review) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="bg-white dark:bg-slate-900 w-full max-w-sm rounded-xl shadow-xl p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
            <AlertCircle className="h-6 w-6 text-blue-600 dark:text-blue-500" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-1">Review Details</h2>
          </div>
        </div>

        <div className="text-gray-600 text-sm leading-6 dark:text-gray-300 mb-6">
          <div className="flex items-center mb-2">
            <User className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
            <p><strong>Reviewer:</strong> {review.userId.username}</p>
          </div>
          <div className="flex items-center mb-2">
            <MapPin className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
            <p><strong>Pharmacy:</strong> {review?.pharmacyId.name}</p>
          </div>
          <div className="flex items-center mb-2">
            <Star className="h-5 w-5 text-yellow-500 dark:text-yellow-400 mr-2" />
            <p><strong>Rating:</strong> {review.rating}</p>
          </div>
          <div className="flex items-center mb-2">
            <MessageSquare className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
            <p><strong>Comment:</strong> {review.comment}</p>
          </div>
          <div className="flex items-center mb-2">
            <Calendar className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
            <p><strong>Created At:</strong> {new Date(review.createdAt).toLocaleString()}</p>
          </div>
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
            <p><strong>Updated At:</strong> {new Date(review.updatedAt).toLocaleString()}</p>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetailsModal;