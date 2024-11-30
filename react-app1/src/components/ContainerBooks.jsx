import Container from './Container';
import image1 from '../images/1984.jpeg';
import image2 from '../images/Crime and Punishment.jpeg';
import image3 from '../images/stranger.jpeg';
import image4 from '../images/man and the sea.jpeg';


const bookList = [
    {
      id: 1,
      title: '1984',
      image: image1,
      description: 'A dystopian novel by George Orwell, exploring themes of totalitarianism, surveillance, and mind control in a society under constant scrutiny.',
      characters: 'Winston Smith, Julia, O’Brien, Big Brother, etc.'
    },
    {
      id: 2,
      title: 'Crime and Punishment',
      image: image2,
      description: 'A psychological novel by Fyodor Dostoevsky, focused on the moral dilemmas faced by a young law student who commits a crime and wrestles with guilt and redemption.',
      characters: 'Rodion Raskolnikov, Sonia Marmeladov, Porfiry Petrovich, etc.'
    },
    {
      id: 3,
      title: 'The Stranger',
      image: image3,
      description: 'A philosophical novel by Albert Camus, exploring existential themes of absurdity and alienation through the indifferent protagonist, Meursault.',
      characters: 'Meursault, Marie, Raymond, the Arab, etc.'
    },
    {
      id: 4,
      title: 'The Old Man and the Sea',
      image: image4,
      description: 'A short novel by Ernest Hemingway, depicting the struggle of an aging fisherman, Santiago, who battles a giant marlin, symbolizing human perseverance and struggle.',
      characters: 'Santiago, Manolin, the Marlin, etc.'
    }
];


  const ContainerBooks = () => {

    const click = (title,characters) => {
        alert(`Book title: ${title} \nBook Characters: ${characters}`)
        console.log(`Book title: ${title} \nBook Characters: ${characters}`)
    }
    
    return (
      <div className='structure'>
        {bookList.map((book) => 
          <Container 
            key={book.id}
            title={book.title}
            image={book.image}
            description={book.description}
            characters={book.characters}
            click={() => click(book.title,book.characters)}
            />
        )}
      </div>
    );
  };



export default ContainerBooks
