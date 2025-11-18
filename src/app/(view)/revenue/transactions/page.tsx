import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Sect from "./sect";
import {
  Status,
  StatusIndicator,
  StatusLabel,
} from "@/components/kibo-ui/status";

export default function Page() {
  return (
    <main className="min-h-screen w-full flex flex-col gap-6 px-0 md:px-6 lg:px-0 overflow-x-hidden">
      <Sect />
      {/* Main Grid */}
      <div className=" w-full">
        <Table>
          <TableHeader className="bg-secondary!">
            <TableRow>
              <TableHead>Transaction ID</TableHead>
              <TableHead>User Name</TableHead>
              <TableHead>Product/Plan</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Payment Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Failure Reason</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>TXN-00124</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>Premium Plus</TableCell>
              <TableCell>$4.99</TableCell>
              <TableCell>
                <Status status="online">
                  <StatusIndicator />
                  <StatusLabel>Success</StatusLabel>
                </Status>
              </TableCell>
              <TableCell>Nov 12, 2025</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
