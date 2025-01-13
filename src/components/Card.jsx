
export function Card({
  titolo = "",
  contenuto = "",
  categoria = "",
  immagine = "",
  callbackCestina,
  arrayTags = [],
}) {

  let arraySpanTags =[];
  // Devo fare un map di questo array tags craendo un array di span
  if (arrayTags) {
	arraySpanTags = arrayTags.map((currTag, currIndex) => (
		<span key={currIndex}>{currTag}</span>
	  ));
	}
  }
  return (
    <div>
      <h2>{titolo}</h2>
      <img src={immagine} alt="" />
      <p>{contenuto}</p>
      <h4>{categoria}</h4>
      <div>
        {arraySpanTags && arraySpanTags.map((tag) => <span>{tag}</span>)}
     
      </div>
      <div>
	  	<button onClick={callbackCestina}>Cestina</button>
      </div>
    </div>
  );
