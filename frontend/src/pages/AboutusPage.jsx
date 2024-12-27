import AboutImg from "../assets/images/Aboutus.jpg";

function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-start">
      {/* Text Section */}
      <div className="w-2/3 pr-8">
        <h1 className="text-5xl font-bold mb-6 text-blue-900 text-center">About Us</h1>
        <p className="text-lg leading-relaxed mb-4 text-justify">
          Welcome to WatchVault, your ultimate destination for timeless elegance
          and modern sophistication. As an online watch store, we take pride in
          offering two distinct categories of exquisite timepieces – Men's
          Watches and Women's Watches – each crafted to complement your unique
          style and personality.
        </p>
        <p className="text-lg leading-relaxed mb-4 text-justify">
          Explore our curated collection to discover the perfect watch that
          resonates with your individuality. While browsing is open to all,
          becoming a part of our community unlocks the complete experience.
          Register with us to create your account, and gain access to seamless
          shopping, exclusive offers, and the ability to place orders for your
          favorite watches. Already a member? Simply log in and elevate your
          style with ease.
        </p>
        <p className="text-lg leading-relaxed text-justify">
          At WatchVault, we're not just about selling watches – we're about
          helping you make a statement.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-1/3 flex flex-col justify-center h-full mt-16">
        <img
          src={AboutImg}
          alt="About Us"
          className="rounded-lg shadow-lg max-w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default AboutUsPage;
