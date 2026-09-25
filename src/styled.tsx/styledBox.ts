import { styled } from '@mui/material/styles';
import { Box, Paper } from '@mui/material';
import { theme } from './theme';
export const CardBox = styled(Paper)(({ theme }) => ({
  // border: '3px dashed',
  // borderRadius:"5",
  width: '70vw',
  height: '100vh',
  position: 'fixed', //позиция
  top: 0, //перенесли бокс в правый верхний угол
  right: 0,
  margin: theme.spacing(2), //отступы
  padding: theme.spacing(2),
  display: 'flex', //отображение
  flexWrap: 'wrap', //перенос строки
  overflow: 'auto',
}));
export const EveryCardBox = styled(Paper)(({ theme }) => ({
  width: '100%',
  height: '35%',
  margin: theme.spacing(1),
  display: 'flex',
  flexDirection: 'row',
  '&:hover': {
    transition: `transform 0.2s, box-shadow 0.2s`,
    transform: 'scale(1.01)',
    boxShadow: 5,
  //  cursor: 'pointer'
  // backdropFilter: 'blur(10px)'
  },
}));
export const FilterBox = styled(Paper)(({ theme }) => ({
  width: '20dvw',
  height: '95dvh',
  margin: theme.spacing(2),
  padding: theme.spacing(1),
  // border: '3px dashed',
  position: 'absolute', //позиция
  top: 0, //перенесли бокс в правый верхний угол
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start', //отображение
}));
export const CheckMailBox = styled(Paper)(({ theme }) => ({
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  // transform:CSSTranslate(x:50%,y:-50%,z:0),
  zIndex: 1,
  border: '3px ',
  width: '20dvw',
  height: '20vh',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}));
