function NewsDetailsPage({ params }) {
  return (
    <>
      <h1> News details page </h1>
      <p> News ID: {params.id} </p>
    </>
  );
}

export default NewsDetailsPage;
