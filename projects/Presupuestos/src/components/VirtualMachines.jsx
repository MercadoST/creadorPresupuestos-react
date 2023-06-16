import deleteIcon from '../resources/bote-de-basura.png'
export function VirtualMachines() {

    return (
        <tbody>
           <tr className="virtual">
            <td className="td1 m-3 text-center">VM 1</td>
            <td><select className="form-select"><option value="Windows 10">Windows 10</option><option value="Ubuntu 20.04">Ubuntu 20.04</option><option value="CentOS 7">CentOS 7</option></select></td>
            <td><select className="form-select"><option value="Libre">Libre</option><option value="Comercial">Comercial</option></select></td>
            <td><select className="form-select"><option value="4">4</option><option value="2">2</option><option value="8">8</option></select></td>
            <td><select className="form-select"><option value="5%">5%</option><option value="10%">10%</option><option value="15%">15%</option><option value="20%">20%</option><option value="25%">25%</option><option value="30%">30%</option><option value="35%">35%</option><option value="40%">40%</option><option value="45%">45%</option><option value="50%">50%</option><option value="55%">55%</option><option value="60%">60%</option><option value="65%">65%</option><option value="70%">70%</option><option value="75%">75%</option><option value="80%">80%</option><option value="85%">85%</option><option value="90%">90%</option><option value="95%">95%</option><option value="100%">100%</option></select></td>
            <td><select className="form-select"><option value="8Gb">8Gb</option><option value="4Gb">4Gb</option><option value="16Gb">16Gb</option></select></td>
            <td><select className="form-select"><option value="5%">5%</option><option value="10%">10%</option><option value="15%">15%</option><option value="20%">20%</option><option value="25%">25%</option><option value="30%">30%</option><option value="35%">35%</option><option value="40%">40%</option><option value="45%">45%</option><option value="50%">50%</option><option value="55%">55%</option><option value="60%">60%</option><option value="65%">65%</option><option value="70%">70%</option><option value="75%">75%</option><option value="80%">80%</option><option value="85%">85%</option><option value="90%">90%</option><option value="95%">95%</option><option value="100%">100%</option></select></td>
            <td><select className="form-select"><option value="500Gb">500Gb</option><option value="250Gb">250Gb</option><option value="1 TB">1 TB</option></select></td>
            <td><select className="form-select"><option value="60%">60%</option><option value="20%">20%</option><option value="75%">75%</option></select></td>
            <td><select className="form-select"><option value="Aplicación de gestion">Aplicación de gestion</option><option value="Servidor web">Servidor web</option><option value="Base de datos">Base de datos</option></select></td>
            <td><select className="form-select"><option value="Semanal">Semanal</option><option value="Diario">Diario</option></select></td>
            <td><select className="form-select"><option value="7">7</option><option value="14">14</option><option value="30">30</option></select></td>
            <td><select className="form-select"><option value="AWS">AWS</option><option value="On-Premises">On-Premises</option></select></td>
            <td><select className="form-select"><option value="500Mb">500Mb</option><option value="100Mb">100Mb</option><option value="200Mb">200Mb</option></select></td>
            <td><select className="form-select"><option value="1000Mb">1000Mb</option><option value="500Mb">500Mb</option><option value="300Mb">300Mb</option></select></td>
            <td className="text-center"><button className="btn btn-outline-danger btn-1"><img style={{ width: '1.4rem', height: '1.4rem' }} src={deleteIcon} alt="deleteIcon" /></button></td>
            </tr>
        </tbody>
        
    )
}