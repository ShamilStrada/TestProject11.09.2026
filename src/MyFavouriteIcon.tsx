import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState, useEffect, useRef } from 'react';
import { FavouriteFilm } from './lib/FavouriteFilms';
import { AddDeleteFavouriteFilm } from './lib/PostFilm';
interface PropsMyFavourite {
  id: number;
}
// function likeFilm(massiveLike: [], id: number, flag: boolean, likeSuccess: boolean, flagClick: boolean) {
//   if (!flag) {
//     return massiveLike.some((a: any) => a.id === id) ? 'red' : 'none';
//   } else {
//     if (!(massiveLike.some((a: any) => a.id === id))) {
//     if (flagClick && !likeSuccess) {
//       return 'red';
//     } else if (likeSuccess) {
//       return 'red';
//     } else if (!likeSuccess) {
//       alert('Не добавлено');
//       return 'none';
//     }
//   } else {
//     if (flagClick && !likeSuccess) {
//       return 'none';
//     } else if (likeSuccess) {
//       return 'none';
//     } else if (!likeSuccess) {
//       alert('Не добавлено');
//       return 'red';
//   }
//   }
// }}
async function likeFilm (){
  
}
export function MyFavouriteIcon({ id }: PropsMyFavourite) {
  const listRef = useRef<any>([]);
  const flagRef = useRef<boolean>(false);
  const [flag, setFlag] = useState<boolean>(false);
  const [flagLike, setFlagLike] = useState<boolean>(false);
  const [list, setList] = useState<any[]>([]);
  useEffect(() => {
    setTimeout(() => {
      FavouriteFilm({ url: `/account/${22187086}/favorite/movies`, method: 'GET' }).then((films: any) => {
        setList(films.results);
        console.log(films.results);
        listRef.current = films.results;
        console.log(listRef.current.some((a: any) => a.id === id));
      });
    }, 2000);
  }, [flag]);
  return (
    <IconButton>
      <FavoriteIcon
        onClick={() => {
          console.log(flagRef.current);
          setFlag(!flag);
          setFlagLike(true);
          AddDeleteFavouriteFilm({
            url: `/account/${22187086}/favorite`,
            idFilm: id,
            AddOrDelete: listRef.current.some((a: any) => a.id === id) ? false : true,
            method: 'POST',
          }).then((data: any) => {
            console.log(data.success);
            flagRef.current = data.success;
          });
        }}
        sx={{ color: (listRef.current.some((a: any) => a.id === id))? 'red' : 'none' }}
      ></FavoriteIcon>
    </IconButton>
  );
}

//listRef.current.some((a: any) => a.id === id)
//    &&(listRef.current.some((a: any) => a.id === id))
// return flag? (
//   <IconButton>
//     <FavoriteIcon
//       onClick={() => {
//         AddDeleteFavouriteFilm({
//           url: `/account/${22187086}/favorite`,
//           idFilm: id,
//           AddOrDelete: false,
//           method: 'POST',
//         });

//         setTimeout(
//           () =>
//             FavouriteFilm({ url: `/account/${22187086}/favorite/movies`, method: 'GET' }).then(
//               (films: any) => setList(films)
//             ),
//           5000
//         );

//         setFlag(false);
//         setTimeout(() => console.log(list), 8000);
//       }}
//       sx={{ color: 'red' }}
//     ></FavoriteIcon>
//   </IconButton>
// ) : (
//   <IconButton>
//     <FavoriteIcon
//       onClick={() => {
//         AddDeleteFavouriteFilm({
//           url: `/account/${22187086}/favorite`,
//           idFilm: id,
//           AddOrDelete: true,
//           method: 'POST',
//         });
//         setTimeout(
//           () =>
//             FavouriteFilm({ url: `/account/${22187086}/favorite/movies`, method: 'GET' }).then(
//               (films: any) => setList(films)
//             ),
//           5000
//         );

//         setFlag(true);
//         setTimeout(() => console.log(list), 5000);
//       }}
//     ></FavoriteIcon>
//   </IconButton>
// )
