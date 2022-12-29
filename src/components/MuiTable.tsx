import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TABLE_DATA.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>

              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;

const TABLE_DATA = [
  {
    id: 1,
    first_name: "Cole",
    last_name: "Baybutt",
    email: "cbaybutt0@economist.com",
    gender: "Male",
    ip_address: "174.28.107.61",
  },
  {
    id: 2,
    first_name: "Mendel",
    last_name: "Ramsay",
    email: "mramsay1@miibeian.gov.cn",
    gender: "Agender",
    ip_address: "91.17.255.23",
  },
  {
    id: 3,
    first_name: "Aleksandr",
    last_name: "Scarsbrook",
    email: "ascarsbrook2@amazon.com",
    gender: "Genderqueer",
    ip_address: "185.137.83.189",
  },
  {
    id: 4,
    first_name: "Morlee",
    last_name: "Hovel",
    email: "mhovel3@flickr.com",
    gender: "Male",
    ip_address: "43.155.27.98",
  },
  {
    id: 5,
    first_name: "Shandra",
    last_name: "Chisman",
    email: "schisman4@163.com",
    gender: "Female",
    ip_address: "156.127.132.118",
  },
  {
    id: 6,
    first_name: "Nicolis",
    last_name: "Tremoille",
    email: "ntremoille5@adobe.com",
    gender: "Male",
    ip_address: "106.132.230.254",
  },
  {
    id: 7,
    first_name: "Sterling",
    last_name: "Markham",
    email: "smarkham6@geocities.com",
    gender: "Male",
    ip_address: "206.102.2.237",
  },
  {
    id: 8,
    first_name: "Jane",
    last_name: "Tumilty",
    email: "jtumilty7@chronoengine.com",
    gender: "Female",
    ip_address: "149.161.89.203",
  },
  {
    id: 9,
    first_name: "Yelena",
    last_name: "Olivello",
    email: "yolivello8@canalblog.com",
    gender: "Female",
    ip_address: "137.2.248.29",
  },
  {
    id: 10,
    first_name: "Rich",
    last_name: "Whitta",
    email: "rwhitta9@google.com.hk",
    gender: "Male",
    ip_address: "33.221.119.20",
  },
];
