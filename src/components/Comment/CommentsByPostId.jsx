import Link from "next/link";
import { useCommentsByPostsId } from "src/hooks/useFetchArray";

export const CommentsByPostId = (props) => {
  const { data, error, isLoading, isEmpty } = useCommentsByPostsId(props.id);

  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div className="">{error.message}</div>;
  }
  if (isEmpty) {
    return <div>データは空です。</div>;
  }
  return (
    <ol>
      {data.map((comment) => {
        return (
          <li key={comment.id}>
            <Link href={`/comments/${comment.id}`}>
              <a>{comment.name}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};