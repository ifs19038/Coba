import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';

import { beritaData, beritaGrid } from '../data/dummy';
import { Header } from '../components';

const Scheduler = () => {

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Berita" />
      <GridComponent
        dataSource={beritaData}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {beritaGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
      </GridComponent>
    </div>
  );
};

export default Scheduler;
