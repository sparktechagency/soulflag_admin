import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Sect() {
  return (
    <div className="w-full grid lg:grid-cols-2 gap-6">
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
          <CardTitle>Sent Data</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-3xl">2,847</h2>
        </CardContent>
      </Card>
    </div>
  );
}
