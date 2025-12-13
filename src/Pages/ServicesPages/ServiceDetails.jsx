import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ServiceDetails = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [openModal, setOpenModal] = useState(false);

  const [service, setService] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

  useEffect(() => {
    axiosSecure.get(`/services/${id}`)
      .then(res => {
        setService(res.data);
      })
      .catch(err => console.error(err));
  }, [axiosSecure, id]);

  const handleBookNow = () => {
    if (!user) {
      navigate("/login", { state: location.pathname })
    } else {
      setOpenModal(true);
    }
  };

  const handleBookingSubmit = data => {

    const bookingData = {
      userName: user.displayName,
      userEmail: user.email,
      serviceName: service.title,
      bookingDate: data.bookingDate,
      location: data.location,
      status: "pending",
      paid: false,
    };

    console.log("Booking Data:", bookingData);

    axiosSecure.post("/bookings", bookingData)
      .then((res) => {
        console.log(res.data);
        reset();
        toast.success("Booking successful");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Booking failed");
      });

    setOpenModal(false);
  };

  return (
    <div className="bg-base-200">
      <div className="max-w-6xl mx-auto px-4 pt-30 pb-10">
        <div className="grid md:grid-cols-2 gap-8">
          <img
            src={service.imageUrl}
            alt={service.title}
            className="rounded-xl shadow-lg w-full"
          />

          <div>
            {service.isPopular && (
              <span className="badge badge-warning mb-2">Popular</span>
            )}

            <h1 className="text-3xl font-bold mb-2">{service.title}</h1>
            <p className="text-gray-600 mb-4">{service.shortDescription}</p>

            <div className="space-y-2">
              <p>⭐ Rating: {service.rating}</p>
              <p>⏱ Duration: {service.duration}</p>
              <p>👥 Capacity: {service.people}</p>
              <p className="text-xl font-semibold">
                💰 Price: ৳{service.price}
              </p>
            </div>

            <button
              onClick={handleBookNow}
              className="btn btn-primary mt-6"
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Booking Modal */}
        {openModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl w-full max-w-md">
              <h3 className="text-xl font-bold mb-4">Book This Service</h3>

              <form onSubmit={handleSubmit(handleBookingSubmit)} className="space-y-3">
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  readOnly
                  className="input input-bordered w-full"
                />

                <input
                  type="email"
                  defaultValue={user?.email}
                  readOnly
                  className="input input-bordered w-full"
                />

                <input
                  type="date"
                  {...register("bookingDate")}
                  required
                  className="input input-bordered w-full"
                />

                <input
                  type="text"
                  {...register("location")}
                  placeholder="Event Location"
                  required
                  className="input input-bordered w-full"
                />

                <button className="btn btn-primary w-full">
                  Confirm Booking
                </button>
              </form>

              <button
                onClick={() => setOpenModal(false)}
                className="btn btn-ghost w-full mt-2"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
