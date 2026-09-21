import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { MyAutocomplete } from './MyAutocomplete';
import { MySlider } from './SliderMy';
import { MyFilter } from './Filter';
import { MyCard } from './Card';
import IconButton from '@mui/material/IconButton';
// import ClearIcon from '@mui/icons-material/Clear';
import { MyPagination } from './MyPagination';
import { InputFilm } from './InputFilm';
import { Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './Redux/Store';
import { logout, loginButton } from './Redux/CheckMailSlice';
import { CheckMailApp } from './Redux/CheckMailApp';
import { CardBox, CheckMailBox, FilterBox } from './styled.tsx/styledBox';
// import { Paper } from '@mui/material';
interface App {
  funfilter: () => void;
}
export function App({ funfilter }: App) {
  const [page, setPage] = useState<number>(1); ///страница
  const [results, setResults] = useState<[]>([]); ///массив с данными
  const [value, setValue] = useState<number[]>([1990, 2026]); ///слайдер
  const [filterAutocomplete, setFilterAutocomplete] = useState<[]>([]); //фильтры жанров
  const [dataSearchFilm, setDataSearchFilm] = useState<[]>([]); //поиск по названию
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const login = useSelector((state: RootState) => state.user.login);
  const dispatch = useDispatch();

  const funSearchFilm = (list: []) => {
    setDataSearchFilm(list);
  };
  const funChangeApp = (list: []) => {
    setFilterAutocomplete(list);
  };
  function handleChange(event: any, value: number[]) {
    ///функция на изменение времени слайдера
    setValue(value);
  }
  function ChangeResults(list: []) {
    ///функция изменения результатов запроса
    setResults(list);
  }
  function handleChangePage(event: any, value: number) {
    ///функц. изменения номера страницы
    setPage(value);
  }
  return (
    <>
      {login && (
        // <Box
        //   sx={{
        //     border: '3px dashed',
        //     display: 'flex',
        //     // justifyContent: 'center',
        //     // alignItems: 'center',
        //     height: '100vh',
        //     width: '100vw',
        //     position:'relative'
        //   }}
        // >// </Box>
        <CheckMailBox elevation={7}>
          <CheckMailApp></CheckMailApp>
        </CheckMailBox>
      )}
      <FilterBox
        elevation={10}
      >
        <Box
          sx={{
            mb: 1,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between', //рассталкивает элементы между собой
          }}
        >
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <Typography
              sx={{
                fontSize: 25,
                fontStyle: 'italic',
              }}
            >
              Фильтры
            </Typography>
            <IconButton onClick={funfilter}>
              <DeleteIcon></DeleteIcon>
            </IconButton>
          </Box>
          {/* <IconButton onClick={()=>(dispatch(logout()))}> */}
          <IconButton
            onClick={() => {
              dispatch(logout());
              dispatch(loginButton());
            }}
          >
            <AccountBoxIcon></AccountBoxIcon>
          </IconButton>
        </Box>
        {isLoggedIn && (
          <>
            <Box
              sx={{
                m: 1,
                display: 'flex',
                gap: 1,
                flexDirection: 'column',
                alignItems: 'center',
                // border: '3px dashed',
                width: '100%',
                justifyContent: 'center',
              }}
            >
              <InputFilm page={page} funChangeFilm={funSearchFilm}></InputFilm>
              <MyFilter state={results} handleState={ChangeResults} page={page}></MyFilter>
            </Box>
            <Typography
              sx={{
                mb: 5,
                fontSize: 16,
              }}
            >
              Год релиза:
            </Typography>
            <MySlider value={value} handleChange={handleChange}></MySlider>
            <FormControl
              fullWidth
              sx={{
                m: 2,
              }}
            ></FormControl>
            <MyAutocomplete state={filterAutocomplete} funChange={funChangeApp}></MyAutocomplete>
            <MyPagination page={page} handleChangePage={handleChangePage}></MyPagination>
          </>
        )}
      </FilterBox>
      <CardBox elevation={10}>
        {isLoggedIn && (
          <MyCard
            searchResults={dataSearchFilm}
            listResults={results}
            value={value}
            filterAutocompleteCard={filterAutocomplete}
          ></MyCard>
        )}
      </CardBox>
    </>
  );
}

///Может можно сделать красивее два в одном
//  else {
//     return (
//       <>
//         <div></div>
//         <FormControl fullWidth sx={{ m: 1 }} />
//         <Box
//           sx={{
//             width: 420,
//             ml: 1,
//             border: "3px dashed",
//             position: "absolute", //позиция
//             top: 0, //перенесли бокс в правый верхний угол
//             left: 0,
//             display: "block", //отображение
//           }}
//         >
//           <Box sx={{ mb: 1, display: "flex", gap: 2 }}>
//             <Typography sx={{ fontSize: 25, fontStyle: "italic" }}>
//               Фильтры
//             </Typography>
//             <IconButton onClick={() => usestateFilter(!stateFilter)}>
//               <ClearIcon></ClearIcon>
//             </IconButton>

//           </Box>
//           <InputFilm page={page} funChangeFilm={funSearchFilm}></InputFilm>
//           <MyFilter
//             state={results}
//             handleState={ChangeResults}
//             page={page}
//           ></MyFilter>
//           <Typography sx={{ mb: 5 }}>Год релиза:</Typography>
//           <MySlider value={value} handleChange={handleChange}></MySlider>
//           <FormControl fullWidth sx={{ m: 1 }}></FormControl>
//           <MyAutocomplete state={filterAutocomplete} funChange={funChangeApp}></MyAutocomplete>
//           <MyPagination
//             page={page}
//             handleChangePage={handleChangePage}
//           ></MyPagination>
//         </Box>
//         <Box
//           sx={{
//             border: "3px dashed",
//             width: 1200,
//             height: 850,
//             position: "absolute", //позиция
//             top: 0, //перенесли бокс в правый верхний угол
//             right: 0,
//             m: 1, //отступы
//             display: "flex", //отображение
//             flexWrap: "wrap", //перенос строки
//             overflow: "auto",
//           }}
//         >
//           <MyCard searchResults={dataSearchFilm}  listResults={results} value={value} filterAutocompleteCard={filterAutocomplete}></MyCard>
//         </Box>
//       </>
//     );
//   }
// }
