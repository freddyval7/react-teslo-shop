import { Users, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import { AdminTitle } from "@/admin/components/AdminTitle";
import Chart from "@/admin/components/Chart";
import StatCard from "@/admin/components/StatCard";
import { useQuery } from "@tanstack/react-query";
import { getProductsAction } from "@/shop/actions/get-products.action";

export const DashboardPage = () => {
  const { data } = useQuery({
    queryKey: ["productsDashboard"],
    queryFn: () => getProductsAction({ limit: 100 }),
    staleTime: 1000 * 60 * 5,
  });

  const stats = [
    {
      title: "Productos totales",
      value: data?.products.length || 0,
      icon: Users,
      color: "bg-blue-500",
    },
    {
      title: "Ingresos totales",
      value: "$84,230",
      icon: DollarSign,
      color: "bg-green-500",
    },
    {
      title: "Ventas totales",
      value: "1,429",
      icon: ShoppingCart,
      color: "bg-purple-500",
    },
    {
      title: "Balance generado",
      value: "3.24%",
      icon: TrendingUp,
      color: "bg-orange-500",
    },
  ];

  const menProductsCount = data?.products.filter(
    (product) => product.gender === "men",
  ).length;

  const womenProductsCount = data?.products.filter(
    (product) => product.gender === "women",
  ).length;

  const kidProductsCount = data?.products.filter(
    (product) => product.gender === "kid",
  );

  const chartData = [
    { label: "Hombres", value: menProductsCount || 0 },
    { label: "Mujeres", value: womenProductsCount || 0 },
    { label: "Niños", value: kidProductsCount?.length || 0 },
  ];

  // const performanceData = [
  //   { label: "Page Views", value: 24567 },
  //   { label: "Sessions", value: 18234 },
  //   { label: "Users", value: 12847 },
  //   { label: "Bounce Rate", value: 23 },
  // ];

  return (
    <>
      <AdminTitle
        title="Dashboard"
        subTitle="Aquí puedes ver las estadísticas de tu empresa"
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts and Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 space-y-6">
          <Chart title="Productos por género" data={chartData} />
          {/* <Chart title="Performance Metrics" data={performanceData} /> */}
        </div>
      </div>
    </>
  );
};
