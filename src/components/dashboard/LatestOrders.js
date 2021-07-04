import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const orders = [
  {
    id: uuid(),
    ref: 'Hello World',
    amount: 30.5,
    customer: {
      name: '氣球兩袋'
    },
    createdAt: 1555016400000,
    status: '社長審核',
    price: 2000
  },
  {
    id: uuid(),
    ref: 'Hello World',
    amount: 25.1,
    customer: {
      name: '彩色印刷紙三張'
    },
    createdAt: 1555016400000,
    status: '財務長審核',
    price: 20
  },
  {
    id: uuid(),
    ref: 'Hello Dog',
    amount: 10.99,
    customer: {
      name: '社遊其他開銷'
    },
    createdAt: 1554930000000,
    status: '社長審核',
    price: 5
  },
  {
    id: uuid(),
    ref: 'Hello Dog',
    amount: 96.43,
    customer: {
      name: '瑞美在地教案'
    },
    createdAt: 1554757200000,
    status: '結案',
    price: 200
  },
];

const LatestOrders = (props) => (
  <Card {...props}>
    <CardHeader title="報帳" />
    <Divider />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                申請者
              </TableCell>
              <TableCell>
                物品
              </TableCell>
              <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    價錢
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>
                進度
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                hover
                key={order.id}
              >
                <TableCell>
                  {order.ref}
                </TableCell>
                <TableCell>
                  {order.customer.name}
                </TableCell>
                <TableCell>
                  {order.price}
                </TableCell>
                <TableCell>
                  <Chip
                    color="primary"
                    label={order.status}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);

export default LatestOrders;
