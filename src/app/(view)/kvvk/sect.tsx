import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Sect() {
  return (
    <div className="w-full grid lg:grid-cols-4 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Total Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-3xl">12,847</h2>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Pending Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <h2>247</h2>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Completed Requestes</CardTitle>
        </CardHeader>
        <CardContent>
          <h2>890</h2>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Rejected Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <h2>$12,847</h2>
        </CardContent>
      </Card>
    </div>
  );
}
