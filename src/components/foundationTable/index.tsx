import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useStore } from "store";

const FoundationList = () => {
  const { state } = useStore();
// const nonProfitUsersList = state.nonProfitUsers
// const foundationUsersList = state.foundationUsers

  return (
    <div className="flex">
      <TableContainer
        component={Paper}
        sx={{ width: "100%",  height: "100%" }}
      >
        <Table
          sx={{ width: "90%", marginLeft: "20px", marginBottom: "50px" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Type</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {/* {nonProfitUsersList.map((row) => (
              <TableRow
                key={row.email}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.email}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">{row.type}</TableCell>
              </TableRow>
            ))} */}

            {/* {foundationUsersList.map((row) => (
              <TableRow
                key={row.email}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.email}
                </TableCell>
                <TableCell align="right">-</TableCell>
                <TableCell align="right">-</TableCell>
                <TableCell align="right">{row.type}</TableCell>
              </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FoundationList
