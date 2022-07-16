import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';

import { ordersData, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Orders = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Intepretasi Data Maps" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
      </GridComponent>
    </div>
  );
};
export default Orders;
