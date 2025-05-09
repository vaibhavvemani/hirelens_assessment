import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Award, CheckCircle, Flame, Medal } from "lucide-react";

import ReactCalendarHeatmap from "./Performance/ReactCalendarHeatmap";
import { PerformanceChart } from "./Performance/PerformaceChart";
import LatestScores from "./Performance/LatestScores";

const Performance = () => {
  const stats = [
    {
      title: "Current CGPA",
      value: 9.22,
      caption: "+0.2 from last month",
      icon: Award,
    },
    {
      title: "Completion Rate",
      value: "92%",
      caption: "assessments submitted on time",
      icon: CheckCircle,
    },
    { title: "Study Streak", value: 14, caption: "keep it up", icon: Flame },
    {
      title: "Assessments Taken",
      value: 40,
      caption: "10 taken this month",
      icon: Medal,
    },
  ];

  const testContributionValues = [
    { date: "2025-01-05", count: 12 },
    { date: "2025-01-06", count: 8 },
    { date: "2025-01-09", count: 4 },
    { date: "2025-01-14", count: 2 },
  ];

  return (
    <div className="flex flex-col mt-3 w-full">
      <h1 className="text-xl font-bold">Performance analytics</h1>
      <p className="text-sm font-semibold text-muted-foreground">
        Track your academic progress and achievements
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-5">
        {stats.map((stat) => (
          <Card className="p-5" key={stat.title}>
            <div className="flex flex-col gap-3">
              <div className="flex">
                <CardTitle>{stat.title}</CardTitle>
                <stat.icon
                  className="ml-auto text-muted-foreground"
                  size={15}
                />
              </div>
              <div className="flex flex-col">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.caption}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 mt-4">
        <div className="flex flex-col gap-4">
          <Card className="overflow-hidden pr-4">
            <div className="flex flex-col">
              <CardHeader>
                <CardTitle>Assessment Graph</CardTitle>
                <CardDescription>
                  Number of assessments taken in the last 6 months
                </CardDescription>
              </CardHeader>
              <CardContent className="overflow-x-auto hide-scroller">
                <div className="min-w-max mt-2">
                  <ReactCalendarHeatmap
                    startDate={new Date("2025-01-05")}
                    endDate={new Date("2025-6-31")}
                    values={testContributionValues}
                  />
                </div>
              </CardContent>
            </div>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Latest test scores</CardTitle>
              <CardContent className="px-0">
                <LatestScores />
              </CardContent>
            </CardHeader>
          </Card>
        </div>

        <Card className="justify-around">
          <div className="flex flex-col">
            <CardHeader>
              <CardTitle>Performance analysis</CardTitle>
              <CardDescription>
                Average scores over the last 6 months
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
              <PerformanceChart />
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Performance;
