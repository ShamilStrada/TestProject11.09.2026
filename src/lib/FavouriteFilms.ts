import { useMemo } from "react";

interface Fetch {
  idFilm?: number; //фильма
  url: string; //адрес для поиска
  method?: 'GET' | 'POST';
  myId?: number;
}
// const Set1: Fetch = {
//   id: 1,
//   url: "",
// };
export async function FavouriteFilm({ url }: Fetch) {
    try {
      const res = await fetch(`https://api.themoviedb.org/3` + url, {
        method: "GET",
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmE5NGFiN2VkMWY0MTYzNWVmYTYwNWY3ZWM3NGEwYSIsIm5iZiI6MTc1Mzg5ODQzOC45MjEsInN1YiI6IjY4OGE1ZGM2ODYyYmNkMmJmYmExYTZhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JkQMetRZX9F4quD8GBqSSWp2VLcNctcAL_VwQ_SUrSk',
        },
      });

      if (!res.ok) {
        const errordata= await res.json().catch(()=>null)
        //"если не получилось распарсить тело ответа как JSON — просто считай, что там null, не крашься"
        console.error(`Ошибка от сервера, ${errordata}`)
        throw new Error(`Ошибка сервера: ${res.status}`);
      }
      const data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      console.error(err instanceof Error ? err.message : 'Неизвестная ошибка');
      return []; //в случае если будет ошибка
    }
  };
