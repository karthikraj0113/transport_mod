import React from 'react';
import { Table } from 'antd';
const CustomTable = ({ col,className, data,pagination}) => {
  return <Table scroll={{ x: true }}  className={className} pagination ={pagination} columns={col} dataSource={data} />;
};

export default CustomTable;
