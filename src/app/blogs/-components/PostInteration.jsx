"use client"
import { bookmarkPostApi, likePostApi } from "@/services/PostServices";
import ButtonIcon from "@/ui/ButtonIcon";
import toPersianDigit from "@/utils/numberFormatter";
import { BookmarkIcon, ChatBubbleOvalLeftEllipsisIcon, ChatBubbleOvalLeftIcon, HeartIcon } from "@heroicons/react/24/outline";
import {HeartIcon as SolidHeartIcon , BookmarkIcon as SolidBookmarkIcon} from "@heroicons/react/24/solid"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function PostInteration({post}) {
    const router = useRouter();

    // Like
    const likeHnadler = async (postId) => {
        const {message} = await likePostApi(postId);
        router.refresh();
        try {
            toast.success(message);
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }
    // bookmark
    const bookmarkHandler = async (postId) => {
        const {message} = await bookmarkPostApi(postId);
        router.refresh();
        try {
            toast.success(message);
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    return (
        <div className="flex items-center gap-x-4">
            <ButtonIcon variant="secondary">
                <ChatBubbleOvalLeftEllipsisIcon />
                <span>{toPersianDigit(post.commentsCount)}</span>
            </ButtonIcon>
            <ButtonIcon variant="red" onClick={()=>likeHnadler(post._id)}>
                {post.isLiked ? <SolidHeartIcon /> : <HeartIcon />}
            </ButtonIcon>
            <ButtonIcon variant="primary" onClick={()=>bookmarkHandler(post._id)}>
                { post.isBookmarked ? <SolidBookmarkIcon />  :  <BookmarkIcon />}
            </ButtonIcon>
        </div>
    )
}
