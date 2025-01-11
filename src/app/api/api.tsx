export const fetchMeals = async () => {
  const response = await fetch("https://677fc83f0476123f76a8134b.mockapi.io/Food"); // MockAPI URL
  const data = await response.json();
  return data; // Returns an array of meals from MockAPI
};
