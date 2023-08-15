import { IBlog } from "types";
import { StyledBlogList } from "./styles";
import { BlogItem } from "components";

interface IProps {
  blogs: IBlog[];
}

export const BlogList = ({ blogs }: IProps) => {
  return (
    <StyledBlogList>
      {blogs.map((blog) => {
        return <BlogItem blog={blog} key={blog.title} />;
      })}
    </StyledBlogList>
  );
};
