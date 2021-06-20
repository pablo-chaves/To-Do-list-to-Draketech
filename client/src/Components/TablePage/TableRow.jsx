import React from 'react';
import { NavLink } from 'react-router-dom';
import ButtonOptions from '../ButtonOptions/ButtonOptions';
import style from './TablePage.module.css';

export default function TableRow({ id, deleteAction, task, status }) {

  return (
    <tr>
      <td>
        { task }
      </td>
      <td>
        { status }
      </td>
      <td>
        <ButtonOptions
          deleteAction={deleteAction}
          id={id}
        />
      </td>
    </tr>
  );
}
