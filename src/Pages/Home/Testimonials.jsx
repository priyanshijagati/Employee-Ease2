import PropTypes from 'prop-types';

const TestimonialCard = ({ testimonial }) => {
  const { name, profile, position, company, message } = testimonial;

  return (
    <div className='testimonial-card-container bg-[#38C6D1] text-center p-4 rounded-2xl m-2'>
      <div className="items-center flex justify-center">
        <img className="w-48 h-48 object-cover mask mask-circle" src={profile} alt={name} />
      </div>
      <h2 className='mt-4 text-2xl font-bold'>{name}</h2>
      <p className='my-1 text-lg font-semibold'>{position}</p>
      <p className='my-1 text-lg font-bold'>{company}</p>
      <p className='my-1 mt-4 text-base font-medium'>{message}</p>
    </div>
  );
};

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
};

const Testimonials = () => {
    const staticTestimonials = [
                {
                    _id: "1",
                    name: "John Doe",
                    profile: "https://www.milkround.com/advice/wp-content/uploads/how-to-take-a-good-linkedin-photo-1024x576.jpg",
                    position: "Software Engineer",
                    company: "ABC Inc.",
                    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
                {
                    _id: "2",
                    name: "Jane Smith",
                    profile: "https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg?auto=avif,webp&format=jpg&width=944",
                    position: "Product Manager",
                    company: "XYZ Corp.",
                    message: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    _id: "3",
                    name: "Alice Johnson",
                    profile: "https://d2az3zd39o5d63.cloudfront.net/linkedin-profile-picture-squinch.jpg",
                    position: "Data Analyst",
                    company: "123 Industries",
                    message: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
                }
            ];
        
            return (
                <div>
                    <h2 className="text-5xl text-center font-bold my-16">Testimonials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3 items-center">
                        {staticTestimonials.map(testimonial => (
                            <TestimonialCard
                                key={testimonial._id}
                                testimonial={testimonial}
                            />
                        ))}
                    </div>
                </div>
            );
};

export default Testimonials;