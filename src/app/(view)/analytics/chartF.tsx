import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ChartF = () => {
  const locations = [
    { id: 1, name: "New York", value: 3500, growth: "+12%" },
    { id: 2, name: "New York", value: 3000, growth: "+12%" },
    { id: 3, name: "New York", value: 2700, growth: "+12%" },
    { id: 4, name: "New York", value: 100, growth: "+12%" },
  ];

  const maxValue = 3500;

  return (
    <Card className="w-full h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Top Locations</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 justify-center items-center">
        <div className="space-y-6 h-full flex flex-col justify-around">
          {locations.map((location, index) => (
            <div key={location.id} className="flex items-center gap-4">
              <span className="text-lg font-semibold text-muted-foreground w-6">
                {index + 1}
              </span>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{location.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {location.value.toLocaleString()}
                  </span>
                </div>
                <Progress
                  value={(location.value / maxValue) * 100}
                  className="h-3"
                />
              </div>

              <span className="text-sm font-semibold text-green-600 w-12 text-right">
                {location.growth}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ChartF;
