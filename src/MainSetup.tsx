import { App } from './App';
import { useState } from 'react';

export default function MainSetup() {
  const [stateFilter, usestateFilter] = useState<boolean>(true); ///обновление фильтров
  const changeFilter = () => usestateFilter(!stateFilter);
  const newstate = []
  return stateFilter ? (
    <div>
      <App funfilter={changeFilter}></App>
    </div>
  ) : (
    <App funfilter={changeFilter}></App>
  );
}
