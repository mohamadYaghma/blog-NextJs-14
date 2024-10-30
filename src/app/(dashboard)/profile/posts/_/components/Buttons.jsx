"use client";
import ButtonIcon from "@/ui/ButtonIcon";
import {
  BuildingLibraryIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export function DeletePost({ id }) {
  return (
    <ButtonIcon variant="outline" onClick={() => console.log(id)}>
      <TrashIcon />
    </ButtonIcon>
  );
}

export function UpdatePost({ id }) {
  return (
    <Link href={`/profile/posts/${id}/edit`}>
      <ButtonIcon variant="outline">
        <PencilIcon />
      </ButtonIcon>
    </Link>
  );
}

export function CreatePost({ id }) {
  return (
    <Link
      href={`/profile/posts/create`}
      className="flex justify-self-end gap-x-4 py-3 px-4 items-center rounded-lg bg-primary-900 text-sm font-medium transition-colors hover:bg-primary-700"
    >
      <span className="hidden md:block"> ایجاد پست جدید</span>{" "}
      <PlusIcon className="w-5" />
    </Link>
  );
}
