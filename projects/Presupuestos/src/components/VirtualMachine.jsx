import { Productos } from './Productos'
import deleteIcon from '../resources/bote-de-basura.png'

export function VirtualMachine() {
    const categorias = Array.from({ length: 14 }, (_, i) => i + 1);
  
    return (
      <tbody>
        <tr>
          <th className="m-3 text-center">VM 1</th>
          {categorias.map((categoria) => (
            <Productos key={categoria} idCategoria={categoria} />
          ))}
          <td className="text-center">
            <button className="btn btn-outline-danger btn-1">
              <img style={{ width: '1.4rem', height: '1.4rem' }} src={deleteIcon} alt="deleteIcon" />
            </button>
          </td>
        </tr>
      </tbody>
    );
  }