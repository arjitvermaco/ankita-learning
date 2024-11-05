const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  //just for demo
//   await new Promise((resolve) => setTimeout(resolve, 5000));

  const res = await fetch(url);
  if(!res.ok){
    throw new Error('Failed to fetch drinks');
  }
  const data = await res.json();
  return data;
};

const DrinksPage = async () => {
  const data = await fetchDrinks();
  console.log(data);
  return (
    <>
      <h1>Drinks</h1>
    </>
  );
};

export default DrinksPage;
