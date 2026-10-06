import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState, useEffect, useRef } from 'react';
import { FavouriteFilm } from './lib/FavouriteFilms';
import { AddDeleteFavouriteFilm } from './lib/PostFilm';
import { useImmer } from 'use-immer';
interface PropsMyFavourite {
  id: number;
}
async function likeFilm(massiveLike: [], id: number, flag: boolean, likeSuccess: boolean) {
  // const [favourites,setFavourites] =useImmer([])
  const liked = massiveLike.some((a: any) => a.id === id);
  let color = '';
  let oldcolor = '';
  liked ? (color = 'none') : (color = 'red');
  !liked ? (oldcolor = 'none') : (oldcolor = 'red');
  // const prev = massiveLike
  // setFavourites(draft=>{
  //   liked? })
  // setFavourites(liked)
  // try {
  const newprev = await likeSuccess;
  if (!newprev) {
    //ответ от сервера
    alert('Не удалось добавить');
    return oldcolor;
    // setFavourites(prev)
    // throw new Error(`Не вышло, ${newprev.message}`);
  }
  return color;
  // } catch {
  //   alert('Не получилось');
  // }
}

type Color = 'red' | 'none';

export function MyFavouriteIcon({ id }: PropsMyFavourite) {
  const listRef = useRef<any>([]);
  const flagRef = useRef<boolean>(false);
  const [flag, setFlag] = useState<boolean>(false);
  const flagLike = useRef<boolean>(false);
  // const [list, setList] = useState<any[]>([]);
  const [color, setColor] = useState<Color>('none');

  async function handleClik() {
    const nextLiked = !flagLike.current;
    setColor(nextLiked ? 'red' : 'none');
    flagLike.current = nextLiked;
    await AddDeleteFavouriteFilm({
      url: `/account/${22187086}/favorite`,
      idFilm: id,
      AddOrDelete: flagLike.current ? false : true,
      method: 'POST',
    }).then((data: any) => {
      console.log(data.success);
      flagRef.current = data.success;
    });
    FavouriteFilm({ url: `/account/${22187086}/favorite/movies`, method: 'GET' });
    if (!flagRef.current) {
      setColor(nextLiked ? 'none' : 'red');
      flagLike.current = !nextLiked;
    }
  }

  useEffect(() => {
    setTimeout(() => {
      FavouriteFilm({ url: `/account/${22187086}/favorite/movies`, method: 'GET' }).then((films: any) => {
        // setList(films.results);
        // console.log(films.results);
        // setColor((listRef.current.some((a: any) => a.id === id)) ? 'red' : 'none');
        listRef.current = films.results;
        flagLike.current = listRef.current.some((a: any) => a.id === id);

        flagLike.current ? setColor('red') : setColor('none');
        console.log(color);
        console.log(listRef.current.some((a: any) => a.id === id));
      });
    }, 10);
  }, []);
  return (
    <IconButton>
      <FavoriteIcon
        onClick={() => {
          console.log(flagRef.current);
          setFlag(!flag);
          handleClik();
          // setFlagLike(true);
          // AddDeleteFavouriteFilm({
          //   url: `/account/${22187086}/favorite`,
          //   idFilm: id,
          //   AddOrDelete: listRef.current.some((a: any) => a.id === id) ? false : true,
          //   method: 'POST',
          // }).then((data: any) => {
          //   console.log(data.success);
          //   flagRef.current = data;
          // });
        }}
        sx={{ color: color }}
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
