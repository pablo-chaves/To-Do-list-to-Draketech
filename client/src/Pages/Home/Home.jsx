import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './Home.module.css';
import TablePage from '../../Components/TablePage/TablePage';
import CreateToDo from '../../Components/CreateToDo/CreateToDo';


export default function Home({ mobile }) {

  return (
    <div className={style.home}>
      <CreateToDo />
      <TablePage />
    </div>
  );
}
