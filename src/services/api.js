export async function getAllCharacters() {
  let allCharacters = [];
  let currentPage = 1;
  let totalPages = 1;
  let totalItems = 0;

  try {
    while (currentPage <= totalPages) {
      const response = await fetch(
        `https://dragonball-api.com/api/characters?page=${currentPage}`
      );
      if (!response.ok) throw new Error("Error al obtener datos");

      const data = await response.json();
      if (currentPage === 1) {
        totalItems = data.meta.totalItems;
        totalPages = data.meta.totalPages;
      }

      allCharacters.push(...data.items);
      currentPage++;
    }

    return { characters: allCharacters, total: totalItems };
  } catch (error) {
    console.error("Error:", error);
    return { characters: [], total: 0 };
  }
}

export async function getCharacterById(id) {
  const res = await fetch(`https://dragonball-api.com/api/characters/${id}`);
  const data = await res.json();
  return data;
}

export async function getCharactersByGender(gender) {
  const { characters } = await getAllCharacters();

  const filtered = characters.filter(
    (personaje) =>
      personaje.gender &&
      personaje.gender.toLowerCase() === gender.toLowerCase()
  );

  return filtered;
}
