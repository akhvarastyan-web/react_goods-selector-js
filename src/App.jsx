import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setGoods] = useState('Jam');

  return (
    <main className="section container">
      {!selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setGoods('')}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(x => (
            <tr
              key={x}
              data-cy="Good"
              className={selectedGood === x ? 'has-background-success-light'
                : ''}
            >
              <td>
                <button
                  data-cy={selectedGood === x ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={selectedGood === x ? 'button is-info' : 'button'}
                  onClick={() => {
                    setGoods(selectedGood === x ? '' : x);
                  }}
                >
                  {selectedGood === x ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {x}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
