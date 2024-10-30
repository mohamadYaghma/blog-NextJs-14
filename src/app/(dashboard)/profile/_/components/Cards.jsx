import { ChatBubbleOvalLeftIcon, UserGroupIcon , DocumentIcon } from "@heroicons/react/24/solid";


const iconMap = {
    comment : ChatBubbleOvalLeftIcon,
    users : UserGroupIcon,
    post : DocumentIcon,
}
export default function Cards({ title, value, type }) {
  const Icon = iconMap[type];
  return (
    <div className="rounded-xl bg-secondary-50 p-2 shadow-sm">
      <div className="flex p-4 text-secondary-600">
        {Icon ? <Icon className="h-5 w-5" /> : null}
        <h3 className="mr-2 test-sm font-medium">{title}</h3>
      </div>
      <p
        className={`truncate rounded-xl bg-secondary-0 px-4 py-8 text-center text-2xl text-secondary-500`}
      >
        {value}
      </p>
    </div>
  );
}
