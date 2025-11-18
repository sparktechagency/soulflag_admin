import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Sect() {
  return (
    <div className="w-full grid lg:grid-cols-4 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Total Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-3xl">$2,847</h2>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Successful Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-3xl">12,847</h2>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Failed Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-3xl">12,847</h2>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Refund Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-3xl">47</h2>
        </CardContent>
      </Card>
    </div>
  );
}
