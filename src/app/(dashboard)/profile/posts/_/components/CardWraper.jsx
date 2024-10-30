import { fetchCardData } from "@/services/dashbordData";
import Cards from "app/(dashboard)/profile/_/components/Cards";

export default async function CardWraper() {
  const { numberOfComments, numberOfPosts, numberOfUsers } =
    await fetchCardData();

  return (
    <div className="grid gap-6 md:grid-cols-3 mb-8">
      <Cards title="کاربران" value={numberOfUsers} type="users" />
      <Cards title="نظرات" value={numberOfComments} type="comments" />
      <Cards title="پست ها" value={numberOfPosts} type="posts" />
    </div>
  );
}
