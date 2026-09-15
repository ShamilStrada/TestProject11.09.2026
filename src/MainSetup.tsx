// import { useSelector } from 'react-redux';
import { App } from './App';
import { useState } from 'react';
// import { RootState } from './Redux/Store';
// import { CheckMailApp } from './Redux/CheckMailApp';

export default function MainSetup() {
  const [stateFilter, usestateFilter] = useState<boolean>(true); ///обновление фильтров
  const changeFilter = () => usestateFilter(!stateFilter);
  // const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  // return !isLoggedIn ? (
  //   <CheckMailApp></CheckMailApp>
  // ) : stateFilter ? (
  //   <App funfilter={changeFilter}></App>
  // ) : (
  //   <div>
  //     <App funfilter={changeFilter}></App>
  //   </div>
   return stateFilter ? (
    <App funfilter={changeFilter}></App>
  ) : (
    <div>
      <App funfilter={changeFilter}></App>
    </div>
  );
}
