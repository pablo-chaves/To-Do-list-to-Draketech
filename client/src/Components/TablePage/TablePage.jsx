import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableRows from './TableRow';
import style from './TablePage.module.css';

function TablePage() {

  const { session, todos } = useSelector((store) => store);

  return (
    <div className={style.ctn}>
      <div><h3 className={style.title}>To Do List</h3></div>
      <table className={style.ctnList}>
        <thead>
          <tr>
            <th>To Do</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todos?.map((e) => {

            return(

            <TableRows
              deleteAction={() => {}}
              id={e.id}
              status={e.status}
              task={e.title}
            />

          )})}
          {todos.length < 1 &&
            <tr><td>you don't have any task</td></tr>
          }
        </tbody>
      </table>
    </div>
  );
}

export default React.memo(TablePage);
