const StarterPage = () => {
  return (
    <main className=" max-w-sm mx-auto mt-10  space-y-4">
      <p>You can use tailwind CSS and daisyUI.</p>

      <p>Example</p>

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StarterPage;
