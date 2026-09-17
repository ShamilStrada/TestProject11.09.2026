import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState, useEffect } from 'react';
import { FavouriteFilm } from './lib/FavouriteFilms';
import { AddDeleteFavouriteFilm } from './lib/PostFilm';
interface PropsMyFavourite {
  id: number;
}
export function MyFavouriteIcon({ id }: PropsMyFavourite) {
  const [flag, setFlag] = useState<boolean>(false);
  const [list, setList] = useState<[]>([]);
  return flag||list.some(a=>a.id)? (
    <IconButton>
      <FavoriteIcon
        onClick={() => {
          AddDeleteFavouriteFilm({
            url: `/account/${22187086}/favorite`,
            idFilm: id,
            AddOrDelete: false,
            method: 'POST',
          });

          setTimeout(
            () =>
              FavouriteFilm({ url: `/account/${22187086}/favorite/movies`, method: 'GET' }).then(
                (films: any) => setList(films)
              ),
            8000
          );

          setFlag(false);
          setTimeout(() => console.log(list), 8000);
        }}
        sx={{ color: 'red' }}
      ></FavoriteIcon>
    </IconButton>
  ) : (
    <IconButton>
      <FavoriteIcon
        onClick={() => {
          AddDeleteFavouriteFilm({
            url: `/account/${22187086}/favorite`,
            idFilm: id,
            AddOrDelete: true,
            method: 'POST',
          });
          setTimeout(
            () =>
              FavouriteFilm({ url: `/account/${22187086}/favorite/movies`, method: 'GET' }).then(
                (films: any) => setList(films)
              ),
            5000
          );

          setFlag(true);
          setTimeout(() => console.log(list), 5000);
        }}
      ></FavoriteIcon>
    </IconButton>
  );
}
