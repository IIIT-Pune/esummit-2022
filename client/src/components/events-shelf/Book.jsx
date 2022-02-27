function Book({ clickHandler, details }) {
  const { name } = details;
  // console.log(name, logolink, d2clink, description,knowmore,details);
  return (
    <img
      onClick={() => {
        clickHandler(details);
      }}
      src={require(`../../images/eventsshelf/${name}.png`)}
      className="events-book"
      alt={`${name}`}
    />
  );
}
export default Book;
