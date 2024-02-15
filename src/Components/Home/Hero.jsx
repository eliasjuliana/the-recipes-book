import {heroImg} from '../../assets/index'

const Hero = (props) => {
  const handleScroll = () =>{

    const {recipesRef} = props
    recipesRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
        `url(${heroImg})`,
      }}

    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">The Recipes Book</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button onClick={handleScroll} className="btn btn-error text-white">Browse recipes</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
