import { AiFillStar } from "react-icons/ai";

const TopDecorators = () => {

  const decorators = [
    {
      id: 1,
      name: "Rahim Uddin",
      rating: 5,
      specialties: ["Wedding Stage", "Corporate Events", "Stage Design"],
      experience: 7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s",
    },
    {
      id: 2,
      name: "Sadia Akter",
      rating: 4,
      specialties: ["Birthday Decor", "Floral Design", "Lighting Setup"],
      experience: 5,
      image: "https://plus.unsplash.com/premium_photo-1689551671541-31a345ce6ae0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmVtYWxlJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Kamal Hossain",
      rating: 5,
      specialties: ["Holud Night", "Mehendi Setup", "Cultural Events"],
      experience: 6,
      image: "https://st3.depositphotos.com/5938794/32174/i/450/depositphotos_321744766-stock-photo-bearded-cheerful-young-man-in.jpg",
    },
  ];

  return (
    <div className="pb-20">
      <h2 className="title">Top Decorators</h2>
      <p className="text-center text-[14px] md:text-lg max-w-[85%] md:max-w-auto mx-auto">
        Top-rated professionals who turn your vision into reality.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 mt-4 lg:grid-cols-3">
        {decorators.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            {/* Profile */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
              />
              <div>
                <h3 className="text-xl font-semibold">{item.name}</h3>

                {/* Ratings */}
                <div className="flex items-center gap-1 text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <AiFillStar
                      key={i}
                      className={`${
                        i < item.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Specialties */}
            <div className="mt-4">
              <p className="font-medium text-gray-700">Specialties:</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {item.specialties.map((sp, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                  >
                    {sp}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <p className="mt-4 text-gray-600">
              🎯 Experience:{" "}
              <span className="font-semibold">{item.experience} Years</span>
            </p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDecorators;
