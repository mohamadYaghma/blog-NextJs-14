import Fallback from "@/ui/Fallback";
import CardWraper from "./posts/_/components/CardWraper";
import { Suspense } from "react";
import LatestPost from "./posts/_/components/LatestPost";

export default async function profile() {
  return (
    <div>
      <h1 className="text-xl mb-8 text-secondary-700">داشبورد</h1>
      <Suspense fallback={<Fallback />}>
        <CardWraper />
      </Suspense>

      <h2 className="text-xl mb-8 text-secondary-600">اخرین پست ها</h2>
      <Suspense fallback={<Fallback />}>
        <LatestPost />
      </Suspense>
    </div>
  );
}
