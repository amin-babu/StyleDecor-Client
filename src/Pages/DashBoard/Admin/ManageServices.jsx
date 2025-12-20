import { FaEdit, FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Components/Loading";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const ManageServices = () => {

  const axiosSecure = useAxiosSecure();
  const [selectedService, setSelectedService] = useState(null);
  const [page, setPage] = useState(1);
  const limit = 10;

  const { data = {}, isLoading, refetch } = useQuery({
    queryKey: ["manage-services", page],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/services?page=${page}&limit=${limit}`
      );
      return res.data;
    },
    keepPreviousData: true,
  });

  const services = data.services || [];
  const totalPages = Math.ceil((data.total || 0) / limit);


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (selectedService) {
      reset(selectedService);
    } else {
      reset();
    }
  }, [selectedService, reset]);

  // add service
  const onSubmit = async data => {

    // console.log("Service Data:", data);
    const serviceInfo = {
      title: data.title,
      shortDescription: data.shortDescription,
      imageUrl: data.imageUrl,
      price: Number(data.price),
      rating: Number(data.rating),
      duration: data.duration,
      people: data.people,
      isPopular: data.isPopular || false,
      category: data.category
    };

    if (selectedService) {
      const res = await axiosSecure.patch(
        `/services/${selectedService._id}`,
        serviceInfo
      );

      if (res.data.modifiedCount > 0) {
        Swal.fire({
          title: "Service Updated!",
          text: "Decoration service updated successfully.",
          icon: "success",
        });
        refetch();
        reset();
        setSelectedService(null);
        document.getElementById("add-service-modal").checked = false;
      };

    } else {
      const res = await axiosSecure.post('/services', serviceInfo);

      if (res.data.insertedId) {
        Swal.fire({
          title: "Service Added!",
          text: "New decoration service has been added successfully.",
          icon: "success"
        });
        refetch();
        reset();
        setSelectedService(null);
        document.getElementById("add-service-modal").checked = false;
      }
    }

  };

  // delete service
  const handleDeleteService = (id, title) => {
    Swal.fire({
      title: "Delete this service?",
      text: `The service "${title}" will be permanently removed.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete service"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/services/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Service Deleted",
                text: "The decoration service has been successfully deleted.",
                icon: "success"
              });
              refetch();
            }
          })

      }
    });
  };

  const handleServiceEdit = (service) => {
    setSelectedService(service);
  };

  if (isLoading) {
    return <Loading />;
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Manage Services</h1>
        <label onClick={() => {
          setSelectedService(null);
          reset();
        }}
          htmlFor="add-service-modal"
          className="btn btn-primary rounded-full">+ Add Service</label>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow">
        <table className="table">
          <thead className="bg-gray-100">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Duration</th>
              <th>Capacity</th>
              <th>Price (BDT)</th>
              <th>Rating</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {services.map((service, index) => (
              <tr key={service._id} className="hover">
                <td><td>{(page - 1) * limit + index + 1}</td></td>
                <td>
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-14 h-14 rounded-xl object-cover"
                  />
                </td>
                <td className="font-medium">{service.title}</td>
                <td>
                  <span className="badge badge-outline capitalize">
                    {service.category}
                  </span>
                </td>
                <td>{service.duration}</td>
                <td>{service.people}</td>
                <td>৳ {service.price}</td>
                <td>⭐ {service.rating}</td>
                <td>
                  {service.isPopular ? (
                    <span className="badge badge-success">Popular</span>
                  ) : (
                    <span className="badge badge-ghost">Normal</span>
                  )}
                </td>
                <td className="space-x-2">
                  <label
                    onClick={() => handleServiceEdit(service)}
                    htmlFor="add-service-modal"
                    className="btn btn-sm btn-outline btn-info">
                    <FaEdit />
                  </label>
                  <button
                    onClick={() => handleDeleteService(service._id, service.title)}
                    className="btn btn-sm btn-outline btn-error">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <div className="join">
          {[...Array(totalPages).keys()].map(num => (
            <button
              key={num}
              className={`join-item btn ${page === num + 1 ? "btn-active" : ""}`}
              onClick={() => setPage(num + 1)}
            >
              {num + 1}
            </button>
          ))}
        </div>
      </div>


      {/* Add service Modal */}
      <input type="checkbox" id="add-service-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">
            {selectedService ? "Update Service" : "Add New Service"}
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Title */}
            <div>
              <label className="label">Service Title</label>
              <input
                type="text"
                placeholder="Outdoor Garden Wedding"
                className="input input-bordered w-full"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <p className="text-red-500 text-sm">Title is required</p>
              )}
            </div>

            {/* Short Description */}
            <div>
              <label className="label">Short Description (max 10 words)</label>
              <textarea
                placeholder="Short service description"
                className="textarea textarea-bordered w-full"
                {...register("shortDescription", {
                  required: true,
                  validate: (value) => value.split(" ").length <= 10,
                })}
              />
              {errors.shortDescription && (
                <p className="text-red-500 text-sm">
                  Description must be within 10 words
                </p>
              )}
            </div>

            {/* Image URL */}
            <div>
              <label className="label">Image URL</label>
              <input
                type="url"
                placeholder="https://image-url"
                className="input input-bordered w-full"
                {...register("imageUrl", { required: true })}
              />
              {errors.imageUrl && (
                <p className="text-red-500 text-sm">Image URL is required</p>
              )}
            </div>

            {/* Category */}
            <div>
              <label className="label">Category</label>
              <select
                className="select select-bordered w-full"
                {...register("category", { required: true })}
              >
                <option value="">Select category</option>
                <option value="wedding">Wedding</option>
                <option value="home">Home</option>
                <option value="office">Office</option>
                <option value="event">Event</option>
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm">Category is required</p>
              )}
            </div>

            {/* Price */}
            <div>
              <label className="label">Price (BDT)</label>
              <input
                type="number"
                placeholder="20000"
                className="input input-bordered w-full"
                {...register("price", { required: true, valueAsNumber: true })}
              />
              {errors.price && (
                <p className="text-red-500 text-sm">Price is required</p>
              )}
            </div>

            {/* Rating */}
            <div>
              <label className="label">Rating</label>
              <input
                type="number"
                step="0.1"
                placeholder="4.9"
                className="input input-bordered w-full"
                {...register("rating", { required: true })}
              />
              {errors.rating && (
                <p className="text-red-500 text-sm">Rating is required</p>
              )}
            </div>

            {/* Duration */}
            <div>
              <label className="label">Duration</label>
              <input
                type="text"
                placeholder="Full day"
                className="input input-bordered w-full"
                {...register("duration", { required: true })}
              />
              {errors.duration && (
                <p className="text-red-500 text-sm">Duration is required</p>
              )}
            </div>

            {/* People */}
            <div>
              <label className="label">Capacity</label>
              <input
                type="text"
                placeholder="Up to 600 guests"
                className="input input-bordered w-full"
                {...register("people", { required: true })}
              />
              {errors.people && (
                <p className="text-red-500 text-sm">Capacity is required</p>
              )}
            </div>

            {/* Popular */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                {...register("isPopular")}
              />
              <span>Mark as Popular Service</span>
            </div>

            {/* Actions */}
            <div className="modal-action">
              <label
                onClick={() => {
                  reset();
                  setSelectedService(null);
                }}
                htmlFor="add-service-modal" className="btn btn-outline">
                Cancel
              </label>
              <button type="submit" className="btn btn-primary">
                {selectedService ? "Update Service" : "Add Service"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManageServices;