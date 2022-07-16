import React from 'react';
import { GridComponent,ColumnsDirective, ColumnDirective} from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Intepretasi Data Tabel" />
      <GridComponent
        dataSource={employeesData}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
      </GridComponent>
      <div style={{marginTop:'30px'}}>
      <h1><strong>Note:</strong></h1>
      <br/>
      <h2>PKPST = Persentase Kontribusi Provinsi Setiap Tahun<br/> <br/>
          PPIKUP = Persentase Proporsi IKU Provinsi<br/> <br/>
          PPIKLHP = Persentase Proporsi IKLH Provinsi<br/> <br/>
          PPIKAP = Persentase Proporsi IKA Provinsi<br/> <br/>
          PPIKTLP = Persentase Proporsi IKTL Provinsi </h2>
      </div>
    </div>


  );
};
export default Employees;
