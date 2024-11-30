import '../App.css'

const Container = ({title,image,description,characters,click}) => {
    return (
      <div className="container">
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <p>{description}</p>
        <button onClick={click}>More About This Book</button>
      </div>
    );
  };
  
  export default Container;
  