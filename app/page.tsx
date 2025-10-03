import ProductCard from "@/components/ProductCard";

const catalog = [
  { id: "plan-basic", name: "Initial Intake & Plan", price: 120, description: "60-min consult + plan", href: "/intake" },
  { id: "followup", name: "Follow-up Session", price: 60, description: "30-min check-in", href: "/login" },
  { id: "meal-plan", name: "Custom 7-Day Meal Plan", price: 45, description: "Personalized meals & macros", href: "/services" },
];

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-3">Services</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {catalog.map(item => <ProductCard key={item.id} item={item} />)}
      </div>
    </div>
  );
}
