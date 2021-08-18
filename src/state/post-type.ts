interface TypedPost {
  id: number;
  title: string;
  body: string;
  comments:
    | {
        postId: number;
        id: number;
        body: string;
      }[];
}

export default TypedPost;
