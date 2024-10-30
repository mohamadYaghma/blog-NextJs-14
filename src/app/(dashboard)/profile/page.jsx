import { fetchCardData } from "@/services/dashbordData";
import Cards from "./_/components/Cards";

export default async function profile() {
  const {numberOfComments , numberOfPosts , numberOfUsers} = await fetchCardData();
  return (
  <div>
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Cards title="کاربران" value={numberOfUsers} type="users" />
        <Cards title="نظرات" value={numberOfComments} type="comments" />
        <Cards title="پست ها" value={numberOfPosts} type="posts" />
      </div>
  </div>
  );
}
