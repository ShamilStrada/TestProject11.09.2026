import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState, useEffect, useRef } from 'react';
import { FavouriteFilm } from './lib/FavouriteFilms';
import { AddDeleteFavouriteFilm } from './lib/PostFilm';

interface PropsMyFavourite {
  id: number;
}
export function MyFavouriteIcon({ id }: PropsMyFavourite) {
  const listRef = useRef<any>([])
  const [flag, setFlag] = useState<boolean>(false);
  const [list, setList] = useState<any[]>([]);
  // let newFlag = false;
  useEffect(() => {
    FavouriteFilm({ url: `/account/${22187086}/favorite/movies`, method: 'GET' }).then((films: any) => {
      setList(films);
      console.log(films);
      listRef.current=films
      // newFlag=films.some((a):any=>a.id===id),
      // console.log(newFlag)
      // console.log(list);
    });
  }, [flag]);
  return (
    <IconButton>
      <FavoriteIcon
        onClick={() => {
          setFlag(!flag);
          setTimeout(
            () =>
              AddDeleteFavouriteFilm({
                url: `/account/${22187086}/favorite`,
                idFilm: id,
                AddOrDelete: flag ? false : true,
                method: 'POST',
              }),
            1000
          );
        setTimeout(()=>console.log(listRef),5000)}}
        sx={{ color: flag ? 'red' : 'none' }}
      ></FavoriteIcon>
    </IconButton>
  );
}
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
// );
