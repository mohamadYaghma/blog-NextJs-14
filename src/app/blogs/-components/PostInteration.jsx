import ButtonIcon from "@/ui/ButtonIcon";
import toPersianDigit from "@/utils/numberFormatter";
import { BookmarkIcon, ChatBubbleOvalLeftEllipsisIcon, ChatBubbleOvalLeftIcon, HeartIcon } from "@heroicons/react/24/outline";

export default function PostInteration({post}) {
    return (
        <div className="flex items-center gap-x-4">
            <ButtonIcon variant="secondary">
                <ChatBubbleOvalLeftEllipsisIcon />
                <span>{toPersianDigit(post.commentsCount)}</span>
            </ButtonIcon>
            <ButtonIcon variant="red">
                <HeartIcon />
            </ButtonIcon>
            <ButtonIcon variant="primary">
                <BookmarkIcon />
            </ButtonIcon>
        </div>
    )
}
