import styled from '@emotion/styled';
import { Box, Paper } from '@mui/material';
export const CardBox = styled(Paper)(({ theme }) => ({
  // border: '3px dashed',
  // borderRadius:"5",
  width: '70vw',
  height: '100vh',
  position: 'fixed', //позиция
  top: 0, //перенесли бокс в правый верхний угол
  right: 0,
  margin: 8, //отступы
  padding: 8,
  display: 'flex', //отображение
  flexWrap: 'wrap', //перенос строки
  overflow: 'auto',
}));
export const FilterBox = styled(Paper)(({ theme }) => ({
  width: '20dvw',
  height: '99dvh',
  margin: 8,
  padding: 8,
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
