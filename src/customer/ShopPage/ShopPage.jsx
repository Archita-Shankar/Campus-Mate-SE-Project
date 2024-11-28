import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ShopPage = () => {
  const shopData = [
    { name: 'COS - Sips and Bites', contact: '9898745632' },
    { name: 'COS - Chilli Chatkara', contact: '9876543219' },
    { name: 'COS - The Desert Club', contact: '9898123476' },
    { name: 'COS - Pizza Nation', contact: '9898765431' },
    { name: 'COS - Bombay Munchery', contact: '9887654321' },
    { name: 'COS - Fashion Point', contact: '9898321674' },
    { name: 'G Block - RP Fresh Soda', contact: '9898471623' },
    { name: 'G Block - Patiala Shahi', contact: '9887912345' },
    { name: 'G Block - JP Foods', contact: '9876549823' },
    { name: 'G Block - The Brothers Kitchen', contact: '9887364509' },
    { name: 'H Block - Just Food', contact: '9898123675' },
    { name: 'H Block - Fruit Store', contact: '9876543128' },
    { name: 'H Block - Amritsari Kulcha Zone', contact: '9887923456' },
  ];

  return (
    <div>
      <h2 className="text-3xl font-extrabold text-gray-800 py-5">Shops and Contacts</h2>

      {/* Material-UI Table for displaying shop data */}
      <TableContainer component={Paper} style={{ width: '80%', margin: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Shop Name</strong></TableCell>
              <TableCell><strong>Contact Number</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shopData.map((shop, index) => (
              <TableRow
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'red-800',
                }}
              >
                <TableCell>{shop.name}</TableCell>
                <TableCell>{shop.contact}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ShopPage;
